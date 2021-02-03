import React from 'react'
import { InputGroup, FormControl, Button, Card } from 'react-bootstrap';
import {
  Link
} from "react-router-dom";

function Home() {
  return (
    <div className="todo-container">
      <Link to="/about">Go to About</Link>
      <div>
        {/* Form */}
        <InputGroup className="mb-3">
          <FormControl
            placeholder="e.g Wash Dishes"
            aria-label="e.g Wash Dishes"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">Add</Button>
          </InputGroup.Append>
        </InputGroup>
      </div>


      <div>
        {/* Data */}
        <Card>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Button style={{ marginRight: 10}}>Edit</Button>
            <Button>Delete</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}


export default Home;