import { Route, Routes } from "react-router-dom";
import HotelsListPage from "../Component/searchPage/HotelsListPage";

 const Allroutes=()=>{

    return (
        <div>
           <Routes>
                <Route path=""  ></Route>
                <Route path="/hotels" element={<HotelsListPage></HotelsListPage>} />
           </Routes>
        
        </div>
    )
}
export default Allroutes;