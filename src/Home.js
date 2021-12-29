import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="banner"
        className="home__image"
      />
      <div className="home__row">
        <Product
          id={12312}
          title="Wage Universal Wired Gaming Headset - Black/Blue (WMANY-N116)"
          price={29.0}
          rating={3}
          image="https://m.media-amazon.com/images/I/71rm6rY2VAL._AC_UY218_.jpg"
        />
        <Product
          id={12312}
          title="OFM Racing Style Bonded Leather Gaming Chair, in Green"
          price={119.0}
          rating={3}
          image="https://m.media-amazon.com/images/I/71Q0sPYZxOL._AC_UL320_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={12312}
          title="NECA - Coraline - Prop Replica 10' Coraline Doll"
          price={65.95}
          rating={5}
          image="https://m.media-amazon.com/images/I/716snjnssIL._AC_UL320_.jpg"
        />
        <Product
          id={12312}
          title="LEGO Marvel The Eternals in Arishem’s Shadow 76155 Building Kit"
          price={59.9}
          rating={5}
          image="https://m.media-amazon.com/images/I/81OvopB4evL._AC_UL320_.jpg"
        />
        <Product
          id={12312}
          title="Barbie Wonder Woman Paradise Island Giftset"
          price={75.0}
          rating={4}
          image="https://m.media-amazon.com/images/I/91+LFyGosYL._AC_UL320_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={12312}
          title="SAMSUNG 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz, 1000R Curved, QLED, NVIDIA G-SYNC & FreeSync | LC49G95TSSNXZA Model"
          price={1764.04}
          rating={5}
          image="https://m.media-amazon.com/images/I/61SQz8S+fEL._AC_SL1000_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
