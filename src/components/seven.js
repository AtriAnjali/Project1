import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";


function Seven() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    centerMode: true,
    centerpadding: "30px",
    slidesToShow: 2,
    slidesToScroll: 1,
    slidesPerRow: 1,
    speed: 1000,
    arrows: true,
    prevArrow: <KeyboardArrowLeftIcon />,
    nextArrow: <KeyboardArrowRightIcon />,}

  

  return (
    <div>
      

      <Slider {...settings}>
        <div>
          <figure>
            <img className="imgi_size" src="../images/reece.png" alt="reece" />
          </figure>
        </div>
        <div>
          <figure>
            <img
              className="img_size"
              src="../images/gilbert.jpeg"
              alt="gilbert"
            />
          </figure>
        </div>
        <div>
          <figure>
            <img
              className="imig_size"
              src="../images/roberto.jpeg"
              alt="roberto"
            />
          </figure>
        </div>

        <div>
          <figure>
            <img className="img_size" src="../images/robinson.jpeg" />
          </figure>
        </div>

        <div>
          <figure>
            <img className="img_size" src="../images/harris.jpeg" />
          </figure>
        </div>

        <div>
          <figure>
            {" "}
            <img className="img_size" src="../images/glen.jpeg" />
          </figure>
        </div>

        <div>
          <figure>
            {" "}
            <img className="img_size" src="../images/josua.jpeg" />
          </figure>
        </div>
      </Slider>
    </div>
  );
}

export default Seven;
