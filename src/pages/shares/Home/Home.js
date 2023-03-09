
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './Home.css'
import MainSlider from '../MainSlider/MainSlider';


const Home = () => {


    const rooms = useLoaderData()

    return (
        <div>
            <MainSlider></MainSlider>




            <Container>

                <Row xs={2} md={3} lg={4} className="g-4">
                    {Array.from(rooms).map((room, idx) => (
                        <Col key={idx}>
                            <Card>
                                <Card.Img variant="top" src={room.image} />
                                <Card.Body>
                                    <Card.Title className='text-start'>{room.name}</Card.Title>
                                    <Card.Text className='text-start'>
                                        <p>{room.price} per/ <small>Night</small></p>
                                    </Card.Text>
                                    <Card.Footer className='cursor' onClick={() => { console.log('ok') }}>
                                        <small className=""> Book Now</small>
                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>


            </Container>



        </div>
    );
};

export default Home;