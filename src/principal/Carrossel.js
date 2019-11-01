import React from 'react';
import {Carousel} from 'react-bootstrap';

function Carrosel() {
    return (
        <div style={{border: '1px solid #ddd'}}>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='img/violao2.jpeg'
                        alt="First slide"
                        width="500"
                        height="300"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='img/violao2_2.jpeg'
                        alt="Third slide"
                        width="500"
                        height="300"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Carrosel;
