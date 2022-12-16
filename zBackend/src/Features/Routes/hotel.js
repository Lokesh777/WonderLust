const express = require('express');
const Hotel = require('../Models/Hotel.js');

const app = express.Router();
app.use(express.json());

app.get('/', async (req, res) => {
    const { page = 1, limit = 10, sort } = req.query;

    try {
        if (sort) {
            let k;
            if (sort === 'asc') {
                k = 1
            } else if (sort === 'dsc') {
                k = -1
            }
            const data = await Hotel.find().limit(limit).sort({ name: k }).skip((page - 1) * limit);
            // console.log('data:', data)

            return res.send(data)
        } else {
            const data = await Hotel.find().limit(limit).skip((page - 1) * limit);
            // console.log('data:', data)
            return res.send(data)
        }
    } catch (err) {
        res.send({ error: true, message: err.message })
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
        const { name, starRating, description, contactInfo, images, rooms } = req.body;
        const reviews = [{
            rating: 4,
            comment: "Good"
        }];
        let count = 0;

        rooms.forEach((i) => {
            count += i.count;
        })

        const newHotel = await Hotel.create({
            name,
            starRating,
            description,
            contactInfo,
            images,
            rooms,
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


