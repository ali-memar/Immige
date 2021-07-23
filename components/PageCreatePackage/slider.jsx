import Slider from "react-slick";
const SliderCategory = (props) => {
  const addCategory = (title, index) => {
    props.setCategory(title);
    props.setActiveSlide(index);
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };

  const slides = [
    {
      srcImg:
        "https://immige.s3.eu-west-2.amazonaws.com/app/images/Underwater.jpg",
      title: "ASTRO & NIGHT",
    },
    {
      srcImg:
        "https://immige.s3.eu-west-2.amazonaws.com/app/images/Underwater.jpg",
      title: "EVENT",
    },
    {
      srcImg:
        "https://immige.s3.eu-west-2.amazonaws.com/app/images/Underwater.jpg",
      title: "PRODUCT",
    },
    {
      srcImg:
        "https://immige.s3.eu-west-2.amazonaws.com/app/images/Underwater.jpg",
      title: "WEDDING",
    },
    {
      srcImg:
        "https://immige.s3.eu-west-2.amazonaws.com/app/images/Underwater.jpg",
      title: "HEADSHOTS",
    },
    {
      srcImg:
        "https://immige.s3.eu-west-2.amazonaws.com/app/images/Underwater.jpg",
      title: "SOCIAL MEDIA",
    },
    {
      srcImg:
        "https://immige.s3.eu-west-2.amazonaws.com/app/images/Underwater.jpg",
      title: "ART",
    },
    {
      srcImg:
        "https://immige.s3.eu-west-2.amazonaws.com/app/images/Underwater.jpg",
      title: "BABY",
    },
  ];

  return (
    <>
      <div id="wrapper-slider-category" className="mw-1080">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div onClick={() => addCategory(slide.title, index)} key={index}>
              <div
                className={
                  props.activeSlide != index && props.activeSlide != -1
                    ? "active-category wrapper-img-slide"
                    : "wrapper-img-slide"
                }
              >
                <img src={slide.srcImg} alt="slide" />
                <span>{slide.title}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <style jsx>{`
        .active-category {
          opacity: 0.3 !important;
        }
      `}</style>
    </>
  );
};
export default SliderCategory;
