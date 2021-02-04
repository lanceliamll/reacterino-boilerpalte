import React, { useState, useEffect } from 'react'
import { InputGroup, FormControl, Button, Card } from 'react-bootstrap';
import {
  Link
} from "react-router-dom";
import { firestore } from "../../mutations";


function Home(props) {

  // Todo State
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [fetching, setFetching] = useState(false);

  const createTodo = () => {
    firestore.collection('todos').add({ title: 'first todo', isFinished: false })
      .then(doc => {
        console.error('document reference ID', doc.id)
      })
      .catch(error => {
        console.error(error.message)
      })
  }

  useEffect(() => {
    // Setup Realtime Listener
    if(!todos.length && !fetching) {
      firestore.collection('todos')
      .onSnapshot(snapshot => {
        // console.error("Hello", snapshot.docChanges());
        snapshot.docChanges()
          .forEach(change => {
            if (change.type === "added") {
              // Add to state
              // const data = {
              //   id: change.doc.id,
              //   ...change.doc.data()
              // };

              // console.log("ADDED?", data);
              // setTodos([...todos, data]);

              console.log("State", todos);
            }

            if (change.type === "removed") {
              // Remove on state
            }
          })
      })
    }
  }, []);

  console.error(props)
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
            {/* <Button onClick={this.createTodo} variant="outline-secondary">Add</Button> */}
          </InputGroup.Append>
        </InputGroup>
      </div>


      <div>
        {/* Data */}
        {todos && todos.length > 0 ? todos.map(todo => (
          <Card>
            <Card.Body>
              <Card.Title>{todo.title}</Card.Title>
              <Button style={{ marginRight: 10 }}>Edit</Button>
              <Button>Delete</Button>
            </Card.Body>
          </Card>
        )) : <h1>No Todos</h1>}
      </div>
    </div>
  )
}


export default Home;