import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CSS/HomeBanner.css";
// import Url from "../../ApiServices/BackendUrl";
import Cooking from "../../Images/Cooking.jpg";
import Finance from "../../Images/Finance.jpg";
import Management from "../../Images/Management.jpg";
import Photography from "../../Images/Photography.jpg";
import Schooling from "../../Images/Schooling.jpg";
import stitching from "../../Images/stitching.jpg";
import Technical from "../../Images/Technical.jpg";
import all from "../../Images/all.jpg";

class HomepageBanner extends Component {
  render() {
    let text = null;
    let Banner = null;
    console.log(this.props.img);

    if (this.props.img === "all") {
      text = (
        <p className="Banner-text my-4">
          Best place to <br />
          learn new things
        </p>
      );
      Banner = (
        <div className="BannerSection">
          <img className="BannerImage fit" src={all} alt="banner1" />
        </div>
      );
    } else if (this.props.img === "Cooking") {
      text = <p className="Banner-text ">{this.props.img}</p>;
      Banner = (
        <div className="BannerSection">
          <img className="BannerImage" src={Cooking} />
        </div>
      );
    } else if (this.props.img === "Management") {
      text = <p className="Banner-text my-5">{this.props.img}</p>;
      Banner = (
        <div className="BannerSection">
          <img className="BannerImage" src={Management} />
        </div>
      );
    } else if (this.props.img === "Finance") {
      text = <p className="Banner-text my-5">{this.props.img}</p>;
      Banner = (
        <div className="BannerSection">
          <img className="BannerImage" src={Finance} />
        </div>
      );
    } else if (this.props.img === "Photography") {
      text = <p className="Banner-text my-5">{this.props.img}</p>;
      Banner = (
        <div className="BannerSection">
          <img className="BannerImage" src={Photography} />
        </div>
      );
    } else if (this.props.img === "Technical") {
      text = <p className="Banner-text my-5">{this.props.img}</p>;
      Banner = (
        <div className="BannerSection">
          <img className="BannerImage" src={Technical} />
        </div>
      );
    } else if (this.props.img === "Schooling") {
      text = <p className="Banner-text my-5">{this.props.img}</p>;
      Banner = (
        <div className="BannerSection">
          <img className="BannerImage" src={Schooling} />
        </div>
      );
    } else if (this.props.img === "Stitching") {
      text = <p className="Banner-text my-5">{this.props.img}</p>;
      Banner = (
        <div className="BannerSection">
          <img className="BannerImage" src={stitching} />
        </div>
      );
    }

    if (this.props.img === null) {
      text = (
        <div className="Teacher-banner">
          <p className="Teacher-text">
            Share Your Knowlegde
            <br />
            with the whole World!
          </p>

          <Link to="teacher">
            {" "}
            <button className="createCourse">Create New Course</button>
          </Link>
        </div>
      );
    }

    return (
      <>
        {Banner}
        {text}
      </>
    );
  }
}

export default HomepageBanner;
