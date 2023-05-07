import React, { useState } from 'react'
import {Navbar,Container,Nav,Card,Button} from 'react-bootstrap'
import { PhonesData } from './Product.data';
function Product(){
const [data,setData]=useState(PhonesData)

    return(
        <div>
            <Container>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <h1 className='bg-success text-light '>SmartPhone List</h1>
                {data.map((item)=>(
                    <div>
                <Card className='d-flex shadow p-3 mb-5 bg-white rounded' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require(`./Assets/${item.image}.jpg`)}/>
                    <Card.Body>
                        <Card.Title>{item.model}</Card.Title>
                        <Card.Text>
                          {item.desc}
                        </Card.Text>
                        <Card.Text>
                          <h3>price: {item.price}</h3>
                        </Card.Text>
                        <div>
                            <p>qty:</p>
                        <Button className='me-1'>-</Button>
                        <Button className='me-1'>+</Button>
                        </div>
                        <Button className='mt-2' variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
                </div>
                ))}
            </Container>
        </div>
    )
}

export default Product;