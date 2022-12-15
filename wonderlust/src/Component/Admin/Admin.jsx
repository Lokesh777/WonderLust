import { Route, Routes } from "react-router-dom"
import { AdminNav } from "./AdminNav/adminNav"
import { Bookings } from "./AdminRoutes/Bookings/Bookings"
import { Flights } from "./AdminRoutes/Flights/Flights"
import { Hotels } from "./AdminRoutes/Hotels/Hotels"
import { Users } from "./AdminRoutes/Users/Users"
import { Dashboard } from "./AdminRoutes/Dashboard/Dashboard"
import { HotelReg } from "./AdminRoutes/Hotels/HotelReg/HotelReg"
import { FlightReg } from "./AdminRoutes/Flights/FlightReg/FlightReg"

export const Admin = () => {
    return <div>
        <AdminNav/>
        <Routes>
            <Route path="/" element={<Dashboard/>}></Route>
            <Route path="admin/flights" element={<Flights/>}></Route>
            <Route path="admin/hotels" element={<Hotels/>}></Route>
            <Route path="admin/users" element={<Users/>}></Route>
            <Route path="admin/bookings" element={<Bookings/>}></Route>
            <Route path="admin/flightsReg" element={<FlightReg/>}></Route>
            <Route path="admin/hotelsReg" element={<HotelReg />}></Route>
        </Routes>
    </div>
}

