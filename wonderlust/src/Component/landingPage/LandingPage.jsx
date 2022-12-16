import React, { useEffect } from "react";
import styles from "./Home.module.css";
import ScrollableTabsButtonForce from './Slider'

function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.forms}>
        <div style={{ marginRight: "10px" }}>
          <div className={styles.formsContainer}>
            <ScrollableTabsButtonForce />
          </div>
        </div>
      </div>

      <div className={styles.flex}>
      <div><img  alt="image" src="https://user-images.githubusercontent.com/107500115/208183848-98568732-680d-47e0-aa34-d981fab7a121.png" /></div>
      <div><img  alt="image" src="https://user-images.githubusercontent.com/107500115/208183889-cec794d9-71d1-4d41-9503-e3296d67754e.png" /></div>
      <div><img alt="image" src="https://user-images.githubusercontent.com/107500115/208183969-dde18812-f0a1-4377-8146-bb036cdfadd0.png" /></div>
      </div>
      <div className={styles.info1}>
        <div className={styles.info1InnerDiv}>
          <div style={{ width: "50%" }}>
            <h3 className={styles.info1Heading}>All-inclusive resorts </h3>
            <p className={styles.info1Para}>
              Think of nothing beyond having a great time with your family
            </p>
            <button className={styles.info1Btn}>View deals</button>
          </div>
        </div>
        <div className={styles.info1InnerDiv1}>
          <div style={{ width: "50%" }}>
            <h3 className={styles.info1Heading}>Last minute getaways</h3>
            <p className={styles.info1Para}>
              Celebrate the moment with an unexpected getaway
            </p>
            <button className={styles.info1Btn}>View deals</button>
          </div>
        </div>
      </div>
      <div className={styles.info3}>
        <div>
          <h2 className={styles.info3Heading}>
            Seize deals on exactly the trip you need
          </h2>
        </div>
        <div>
          <div container style={{ width: "100%" }} className={styles.info3Grid}>
            <div item xs={12} sm={3}>
              <div className={styles.info3BgImg1}>
                <h3>Fabulous family getaways</h3>
              </div>
            </div>
            <div item xs={12} sm={3}>
              <div className={styles.info3BgImg2}>
                <h3>Sunny beach vacations</h3>
              </div>
            </div>
            <div item xs={12} sm={3}>
              <div className={styles.info3BgImg3}>
                <h3>Last Minute getaways</h3>
              </div>
            </div>
            <div item xs={12} sm={3}>
              <div className={styles.info3BgImg4}>
                <h3>Carefree all-inclusive resorts</h3>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className={styles.info3Heading}>Featured offers</h2>
        </div>
        <div className={styles.infoFeaturedImg}>
          <div className={styles.infoFeaturedOfferDetails}>
            <h3>Family vacation deals</h3>
            <p>Traveling now or planning a trip for later? Let us help.</p>
          </div>
        </div>
        <div>
          <h2 className={styles.info3Heading}>
            What’s stopping you from Seizing Your Someday? Travelocity is here
            to help.
          </h2>
        </div>
        <div className={styles.infoVideo}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ItS8X0SjT4s"
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>
        <div style={{marginTop:'40px', cursor:"pointer"}}>
        <img alt="image" src="https://user-images.githubusercontent.com/107500115/208185422-2fde849e-16f5-443a-8142-ec6859dc55ab.png" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage