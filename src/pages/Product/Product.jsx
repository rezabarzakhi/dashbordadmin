import React from "react";
import Chart from "../../components/Chart/Chart";
import { Link } from "react-router-dom";
import { productData } from "../../datas";
import "./Product.css";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddBTN">Create</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopLeft">
          <Chart title="Sale in month" data={productData} dataKey="sale" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src="\images\dell.jpg" alt="Dell LapTop" className="productInfoImg" />
            <span className="productName">Dell laptop</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <div className="productInfoKey">ID:</div>
              <div className="productInfoValue">132</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">NAme:</div>
              <div className="productInfoValue">Dell laptop</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Sale:</div>
              <div className="productInfoValue">$90000</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Active :</div>
              <div className="productInfoValue">Yes</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">In Stock:</div>
              <div className="productInfoValue">No</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
