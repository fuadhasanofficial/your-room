import React from 'react';
import './MainSlider.css'
import { Carousel } from 'react-bootstrap';
import Slider1 from '../../../assest/slider/slider-1.jpg'
import Slider2 from '../../../assest/slider/slider-2.jpg'
import Slider3 from '../../../assest/slider/slider-3.jpg'

const MainSlider = () => {
    return (
        <div>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-image"
                        src={Slider1}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-image"
                        src={Slider2}
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-image slider-image"
                        src={Slider3}
                        alt="Third slide"
                    />


                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default MainSlider;