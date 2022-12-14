import React, { useState } from "react";

const Ads = () => {

    let [flag, setFlag] = useState(true)
    // setInterval(() => {
    //     setFlag(!flag)
    // }, 5000);

    
    return (
        <div style={{ margin: "1.5vh 0vh 30vh" }}>
           {flag? <img
                src="https://tpc.googlesyndication.com/simgad/18356432804528933170"
                alt="ads"
            />:<img
                src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/107/posts/26488/final_image/41-space-scrolling-background850-2.jpg"
                alt="ads"
            />}
        </div>
    );
};

export default Ads;
