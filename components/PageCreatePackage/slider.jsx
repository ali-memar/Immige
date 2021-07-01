import Slider from "react-slick";

const SliderCategory = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };
  return (
    <div id="wrapper-slider-category" className="mw-1080">
      <Slider {...settings}>
        <div>
          <div className="wrapper-img-slide">
            <img
              src="https://immige.s3.eu-west-2.amazonaws.com/app/images/Underwater.jpg"
              alt="slide"
            />
            <span>ASTRO & NIGHT</span>
          </div>
        </div>
        <div>
          <div className="wrapper-img-slide">
            <img
              src="https://immige.s3.eu-west-2.amazonaws.com/app/images/Underwater.jpg"
              alt="slide"
            />
            <span>ASTRO & NIGHT</span>
          </div>
        </div>
        <div>
          <div className="wrapper-img-slide">
            <img
              src="https://immige.s3.eu-west-2.amazonaws.com/app/images/Underwater.jpg"
              alt="slide"
            />
            <span>ASTRO & NIGHT</span>
          </div>
        </div>
        <div>
          <div className="wrapper-img-slide">
            <img
              src="https://immige.s3.eu-west-2.amazonaws.com/app/images/Underwater.jpg"
              alt="slide"
            />
            <span>ASTRO & NIGHT</span>
          </div>
        </div>
        <div>
          <div className="wrapper-img-slide">
            <img
              src="https://immige.s3.eu-west-2.amazonaws.com/app/images/Underwater.jpg"
              alt="slide"
            />
            <span>ASTRO & NIGHT</span>
          </div>
        </div>
        <div>
          <div className="wrapper-img-slide">
            <img
              src="https://immige.s3.eu-west-2.amazonaws.com/app/images/Underwater.jpg"
              alt="slide"
            />
            <span>ASTRO & NIGHT</span>
          </div>
        </div>
        <div>
          <div className="wrapper-img-slide">
            <img
              src="https://immige.s3.eu-west-2.amazonaws.com/app/images/Underwater.jpg"
              alt="slide"
            />
            <span>ASTRO & NIGHT</span>
          </div>
        </div>
        <div>
          <div className="wrapper-img-slide">
            <img
              src="https://immige.s3.eu-west-2.amazonaws.com/app/images/Underwater.jpg"
              alt="slide"
            />
            <span>ASTRO & NIGHT</span>
          </div>
        </div>
      </Slider>
    </div>
  );
};
export default SliderCategory;
