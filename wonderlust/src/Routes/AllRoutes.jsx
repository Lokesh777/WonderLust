
import { Route, Routes } from "react-router-dom";
import LandingPage from "../Component/landingPage/LandingPage";
import Register from "../Component/register/Register";
import HotelsListPage from "../Component/searchPage/HotelsListPage";
import Support from "../Component/support/support";
import Trip from "../Component/TripPage/Trip";
import {Admin} from "../Component/Admin/Admin";
import HotelDetails from "../Component/searchPage/HotelDetails/HotelDetails";


 const Allroutes=()=>{

    return (
        <div>
           <Routes>
                <Route path="/"  element={<LandingPage /> } />
                <Route path="/hotels" element={<HotelsListPage />} />
                <Route path="/hotel/:id" element={<HotelDetails />} />
                <Route path="trip" element={<Trip /> } />
                <Route path="support" element={<Support /> } />
                <Route path="login" element={<Register /> } />                
                <Route path="admin/*" element={<Admin /> } />                
           </Routes>
        
        </div>
    )
}
export default Allroutes;