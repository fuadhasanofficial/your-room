import React from 'react';
import { Card } from 'react-bootstrap';
import './Room.css'

const Room = ({ room }) => {
    return (

        <Card className='m-2'>
            <Card.Img variant="top" src={room.image} />
            <Card.Body>
                <Card.Title>{room.name}</Card.Title>
                <Card.Text className='text-start'>
                    <h3>Night: {room.price}</h3>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>

    );
};

export default Room;