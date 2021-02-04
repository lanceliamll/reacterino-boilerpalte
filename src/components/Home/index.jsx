import React, { useState } from 'react'
import { InputGroup, FormControl, Button, Card } from 'react-bootstrap';
import {
  Link
} from "react-router-dom";
import { firestore } from "../../mutations";


function Home() {

  const [todo, setTodo] = useState("");


  const createTodo = () => {
    firestore.collection('todos').add({ title: 'first todo', isFinished: false })
      .then(doc => {
        console.error('document reference ID', doc.id)
      })
      .catch(error => {
        console.error(error.message)
      })
  }

  console.error(firebase)
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
            <Button onClick={createTodo} variant="outline-secondary">Add</Button>
          </InputGroup.Append>
        </InputGroup>
      </div>


      <div>
        {/* Data */}
        <Card>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Button style={{ marginRight: 10 }}>Edit</Button>
            <Button>Delete</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}


export default Home;