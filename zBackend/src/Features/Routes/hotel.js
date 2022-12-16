const express = require('express');
const Hotel = require('../Models/Hotel.js');

const app = express.Router();
app.use(express.json());


app.get('/', async (req, res) => {
    let { page = 1, limit = 10, priceSort, name, stars, starsMin,
        starsMax,rating, ratingMin, ratingMax,maxP, minP,
        city, q, crTime, mTime } = req.query;

    if(!q){
        q='';
    }else{
        q=q.toLowerCase();
    }
    if(!city){
        city='';
    }else{
        city=city.toLowerCase();
    }
    

    try{
        let data = await Hotel.find({"contactInfo.city":{$regex:city},name:{$regex:q}});

        //Filtering

        // stars
        if(starsMin){            
            data=data.filter((i)=>i.starRating>=+starsMin)
        }
        if(starsMax){            
            data=data.filter((i)=>i.starRating<=+starsMax)
        }

        // stars
        if(starsMin){            
            data=data.filter((i)=>i.rating>=+ratingMin)
        }
        if(starsMax){            
            data=data.filter((i)=>i.rating<=+ratingMax)
        }

        // price
        if(minP){            
            data=data.filter((i)=>i.minPrice>=+minP)
        }
        if(maxP){            
            data=data.filter((i)=>i.maxPrice<=+maxP)
        }

        //Sorting
        // created
        if(crTime){
            if(crTime==='asc'){
                data.sort((a, b)=>a.modifiedAt.getTime().getTime()-b.modifiedAt.getTime())
            }else if(crTime==='desc'){
                data.sort((a, b)=>b.modifiedAt.getTime()-a.modifiedAt.getTime())
            }
        }
        // modified
        if(mTime){
            if(mTime==='asc'){
                data.sort((a, b)=>a.modifiedAt.getTime().getTime()-b.modifiedAt.getTime())
            }else if(mTime==='desc'){
                data.sort((a, b)=>b.modifiedAt.getTime()-a.modifiedAt.getTime())
            }
        }
        // name
        if(name){
            if(name==='asc'){
                data.sort((a,b)=>{
                    if(a.name>b.name){
                        return -1
                    }
                    if(a.name<b.name){
                        return 1
                    }
                    return 0
                })
            }else if(name==='desc'){
                data.sort((a,b)=>{
                    if(a.name>b.name){
                        return 1
                    }
                    if(a.name<b.name){

                        return -1
                    }
                    return 0
                })
            }
        }
        
        // stars
        if(stars){
            if(stars==='asc'){
                data.sort((a, b)=>a.starRating-b.starRating)
            }else if(stars==='desc'){
                data.sort((a, b)=>b.starRating-a.starRating)
            }
        }

        // rating
        if(rating){
            if(rating==='asc'){
                data.sort((a, b)=>a.rating-b.rating)
            }else if(rating==='desc'){
                data.sort((a, b)=>b.rating-a.rating)
            }
        }

        // priceSort
        if(priceSort){
            if(priceSort==='asc'){
                data.sort((a, b)=>a.minPrice-b.minPrice)
            }else if(priceSort==='desc'){
                data.sort((a, b)=>b.maxPrice-a.maxPrice)
            }
        }

        // limit & page
        data=data.filter((i, e)=>{
            if(e>=(page-1)*limit && e<page*limit){
                return true
            }else{
                return false
            }
        })
        res.send(data);
    }catch(err){
        res.send({error:true, message:err.message})
    }
})

app.get('/getByCiy/:city', async (req, res) => {
    const city = req.params.city
    const { page = 1, limit = 10, sort } = req.query;

    console.log(city)
    try {
        if (sort) {
            let k;
            if (sort === 'asc') {
                k = 1
            } else if (sort === 'dsc') {
                k = -1
            }
            const data = await Hotel.find({ "contactInfo.city": city }).limit(limit).sort({ name: k }).skip((page - 1) * limit);
            return res.send(data)
        } else {
            const data = await Hotel.find().limit(limit).skip((page - 1) * limit);
            return res.send(data)
        }
    } catch (err) {
        res.send({ error: true, message: err.message })
    }
})
app.get('/count', async(req, res)=>{
    try{
        const count = await Hotel.find().count();
        res.send({count});
    }catch(err){
        res.send({error:true, message:err.message})
    }
})

app.get('/:id', async (req, res) => {
    const id = req.params.id

    try {

        const data = await Hotel.findById(id)
        return res.send(data)

    } catch (err) {
        res.send({ error: true, message: err.message })
    }
})

app.get('/price/:value', async (req, res) => {
    const value = req.params.value
    const value2= 500;
    // console.log('value:', value)

    try {rooms[0].price
        if (value) {
        
            const data = await Hotel.find({$and:[{rooms:{$gt:value}},{rooms:{$lt:value2}}]});
            return res.send(data)
        } else {
            const data = await Hotel.find().limit(limit).skip((page - 1) * limit);
            return res.send(data)
        }
    } catch (err) {
        res.send({ error: true, message: err.message })
    }
})

app.post('/', async (req, res) => {
    try {
        const { name, starRating, description, contactInfo, images, rooms, rating } = req.body;
        const reviews = [{
            rating: 4,
            comment: "Good"
        }];
        let count = 0;
        let prices=[], realPrices=[], minPrice=Infinity,maxPrice=0,discounts=[],minDiscount=100,maxDiscount=0 ;

        rooms.forEach((i) => {
            count += i.count;
            i.discount=(i.price-i.realPrice)/i.price*100;
            prices.push(i.price);
            realPrices.push(i.realPrice);
            discounts.push(i.discount);

            if(i.price<minPrice){
                minPrice=i.price;
            }
            if(i.price>maxPrice){
                maxPrice=i.price;
            }
            if(i.discount<minDiscount){
                minDiscount=i.discount;
            }
            if(i.discount>maxDiscount){
                maxDiscount=i.discount;
            }
        })

        let createdAt=new Date();
        let modifiedAt=new Date();


        const newHotel = await Hotel.create({
            name,
            starRating,
            description,
            contactInfo,
            images,
            rooms,
            rating,
            prices,
            discounts,
            realPrices,
            minDiscount,
            maxDiscount,
            minPrice,
            maxPrice,
            createdAt,
            modifiedAt,
            reviews,
            booked: 0,
            count
        })



        if (newHotel) {
            return res.send({ error: false, message: "New Hotel Registered successfully." })
        } else {
            return res.send({ error: true, message: "something went wrong!" })
        }
    } catch (err) {
        return res.send({ error: true, message: err.message })
    }
})
module.exports = app;