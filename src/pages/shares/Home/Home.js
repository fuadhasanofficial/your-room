import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import MainSlider from '../MainSlider/MainSlider';


const Home = () => {


    const rooms = useLoaderData()
    console.log(rooms)
    return (
        <div>
            <MainSlider></MainSlider>

            <div className='mt-5'>
                <Container>
                    <Row>
                        <Col col={4}>
                            First
                        </Col>
                        <Col col={4}>
                            2
                        </Col>
                        <Col col={4}>
                            3
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Home;