import React from "react";
import BG3 from "../imgs/bg3.jpg";
import S1 from "../imgs/s1.jpg";
import S2 from "../imgs/s2.jpg";
import S3 from "../imgs/s3.jpg";
import "../css/shop.css";
import { Helmet } from "react-helmet";

function Shop() {
  return (
    <>
      <Helmet>
        <title>Shop - Bedjet</title>
      </Helmet>
      <div className="shop-container">
        <h2>Never feel too hot, too cold, or too sweaty in bed</h2>
        <p style={{ textAlign: "center" }}>
          Sleep better, be a BedJetter. Consumers choose BedJet more than any
          other similar product. Try it 100% risk-free and rest easy.
        </p>
        <div className="shop-container-flex">
          <img src={BG3} alt="" />
          <ul>
            <li>
              <b>96%</b> of BedJet owners sleep better
            </li>
            <li>
              <b>93%</b> function better the next day
            </li>
            <li>
              <b>92%</b> of couples sleep better with their partner
            </li>
            <li>
              <b>98%</b> of those suffering from night sweats or hot flashes
              report significant relief
            </li>
          </ul>
        </div>
      </div>
      <div className="products">
        <div className="products-cards">
          <img src={S1} alt="" />
          <p>
            <b>BedJet 3 Climate Comfort Sleep System</b>
          </p>
          <p>For solo sleepers or couples who like the same temperature</p>
          <p>
            For couples who want only half the bed cooled and warmed, use with
            optional Dual Zone Cloud Sheet
          </p>
          <h4>$499 CAD</h4>
          <button className="shop-btn">Shop Now</button>
        </div>
        <div className="products-cards">
          <img src={S2} alt="" />
          <p>
            <b>BedJet 3 Dual Zone Climate Comfort Sleep System for Couples</b>
          </p>
          <p>
            For couples who like different sleep temperatures and want
            independent control over each half of the bed
          </p>
          <p>Includes Dual Zone Cloud Sheet</p>
          <h4>$1,139 CAD</h4>
          <button className="shop-btn">Shop Now</button>
        </div>
        <div className="products-cards">
          <img src={S3} alt="" />
          <p>
            <b>Cloud Sheet Accessory, 100% Pure and Soft Cotton</b>
          </p>
          <p>
            Dramatically improves BedJet performance with interior airflow
            chambers
          </p>
          <p>Luxuriously soft cotton that's durable and washable</p>
          <h4>$119 CAD</h4>
          <button className="shop-btn">Shop Now</button>
        </div>
      </div>
      <div className="product-info">
        <div>
          <h4>Understanding Bed Sizes:</h4>
          <p>
            When it comes to selecting the perfect mattress, understanding bed
            sizes is crucial. From twin to king, each size offers different
            dimensions to suit your needs and space requirements.
          </p>
        </div>
        <div>
          <h4>Choosing the Right Mattress Store:</h4>
          <p>
            Finding the ideal store for your mattress purchase is essential for
            a satisfying shopping experience. Look for a reputable retailer that
            offers a wide range of options and excellent customer service.
          </p>
        </div>
        <div>
          <h4>Benefits of Mattress Temperature Control:</h4>
          <p>
            Mattress temperature control technology ensures that you sleep
            comfortably throughout the night. By regulating the temperature of
            your bed, you can enjoy restful sleep without feeling too hot or too
            cold.
          </p>
        </div>
        <div>
          <h4>Enhance Comfort with a Cooling Mattress Cover:</h4>
          <p>
            A cooling mattress cover is a game-changer for those who struggle
            with overheating during sleep. This innovative accessory helps
            maintain a cool sleeping surface, promoting better sleep quality and
            comfort.
          </p>
        </div>
      </div>
    </>
  );
}

export default Shop;
