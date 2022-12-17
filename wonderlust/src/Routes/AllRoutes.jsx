
import { Route, Routes } from "react-router-dom";
import LandingPage from "../Component/landingPage/LandingPage";
import HotelsListPage from "../Component/searchPage/HotelsListPage";
import Support from "../Component/support/support";
import Trip from "../Component/TripPage/Trip";
import {Admin} from "../Component/Admin/Admin";
import Signup from "../Component/register/Signup/Signup";
import Login from '../Component/register/Login/Login'
import CheckoutPage from "../Component/Checkout/Checkout";
import HotelDetails from "../Component/searchPage/HotelDetails/HotelDetails";



 const Allroutes=()=>{

    return (
        <div>
           <Routes>
                <Route path="/"  element={<LandingPage /> } />
                <Route path="/hotels" element={<HotelsListPage />} />
                <Route path="trip" element={<Trip /> } />
                <Route path="support" element={<Support /> } />
                <Route path="checkout" element={<CheckoutPage /> } />
                <Route path="signup" element={<Signup/>}></Route>    
                <Route path="login" element={<Login/>}></Route>          
                <Route path="admin/*" element={<Admin /> } />   
                <Route path="/hotel/:id" element={<HotelDetails />} />
         
           </Routes>
        
        </div>
    )
}
export default Allroutes;