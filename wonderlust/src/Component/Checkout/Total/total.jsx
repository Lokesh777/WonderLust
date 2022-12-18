import style from '../Checkout.module.css';

const Total = () => {

    // const myFunction = (event) =>{
        // event.preventDefault();
       
        // var discount=form.discount.value
   
        // discount=discount/100;
   
        // var random=discount*price1;   
    // }

    return <div style={{textAlign:"left",padding:"1rem"}}>
         
         <h3 className={style.calculationLK} style={{color:"#7d2ae8",fontWeight:"bolder"}} >Order Summary</h3>
                  
                  <p className={style.calculationLK}  >Total Price :<span  id="price">$</span></p>
                  <p className={style.calculationLK} 
                //   className={style.disc}
                  >Discount Value: <span id="disoffer">$</span></p>
                 
                  {/* <!-- form  for discount selection here --> */}
               
                  <form onClick={()=>{}}  >
                       <input type={"text"}
                        style={{border: "1px solid #7d2ae8",
                        borderRadius: ".2rem",marginRight:".5rem",
                        padding:"1rem",
                        height:"2rem"}}
                        className="discount" placeholder="Discount..." 
                         />
                       <input 
                       style={{backgroundColor:"#7d2ae8",color:"white",borderRadius: ".2rem",marginLeft:".5rem",width:"5rem",height:"2rem"}}
                       type="submit"/>
                  </form>

                  <h4 className={style.calculationLK} >Amount to be Paid: <span  id="finalamt">$</span></h4>
                
                 <button className={style.ProceedBtn}>Proceed to Pay</button>
       
    </div>
}
export default Total;
