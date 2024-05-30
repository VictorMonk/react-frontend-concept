import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "./bird-image.jpg";

const HomeSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,

    };

    return (
        <div>
          <Slider {...settings}>
            <div className="flex justify-center">
                <div style={{ minHeight: "50vh", overflowX: "hidden"}}
                className="flex flex-row gap-x-2.5 justify-center align-center">
                    <div style={{ width: "50%"}}
                    className="block">
                        <h2>Sample Slide 1</h2>
                        <p>Sample Slide Text</p>
                    </div>
                    <div style={{ width: "50%"}}>
                        <p>Sample Slide B</p>
                        <img src={logo} />
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div style={{ minHeight: "50vh", overflowX: "hidden"}}
                className="flex flex-row gap-x-2.5 justify-center">
                    <div style={{ width: "50%"}}
                    className="">
                        <h2>Sample Slide 2</h2>
                    </div>
                    <div>
                        <p>Sample Slide B</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div style={{ minHeight: "50vh", overflowX: "hidden"}}
                className="flex flex-row gap-x-2.5 justify-center">
                    <div style={{ width: "50%"}}
                    className="">
                        <h2>Sample Slide 3</h2>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
          </Slider>
        </div>
    )
}

export default HomeSlider