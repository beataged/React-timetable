import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FloatingLabel } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Companies from "./Companies";
import Services from "./Services";
import * as services from "../services/WorkServices"

function AddWork(props) {
  const[items, setItems] = useState({
    date:"",
    company:"",
    service:"",
    description:"",
    startTime:"",
    endTime:"",
  })

useEffect(()=>{
  props.update && services.showById(item=>setItems(item), props.update)
})

  const handleChange = (e) =>{
    setItems({
      ...items,
      [e.target.name]:e.target.value,
    })
    //console.log(e.target.value)
  }

  const handleSubmit= e =>{
    e.preventDefault();
    props.setWorks(items);
  }
  return (
    <>
      <Card>
        <Card.Header>Pridekite darba</Card.Header>
        <Card.Body>
          <Form  onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label className="md-3">Pasirinkite data:</Form.Label>
              <Form.Control type="date" name="date" onChange={handleChange} value={items.date}></Form.Control>
            </Form.Group>

            <FloatingLabel controlId="floatingSelect" label="Pasirinkite imone">
              <Form.Select aria-label="Floating label select example" name="company" onChange={handleChange} value={items.company}>
           <Companies></Companies>
              </Form.Select>
            </FloatingLabel>

            <FloatingLabel controlId="floatingSelect" label="Pasirinkite suteikta paslauga">
              <Form.Select aria-label="Floating label select example" name="service" onChange={handleChange} value={items.service}>
                <Services></Services>
              </Form.Select>
            </FloatingLabel>

            <Form.Group>
              <Form.Control type="text-area" placeholder="Atlikto darbo aprasymas"  name="description" onChange={handleChange} value={items.description}></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label className="md-3" >Nuo</Form.Label>
              <Form.Control type="time" name="startTime" onChange={handleChange} value={items.startTime}></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label className="md-3" >Iki</Form.Label>
              <Form.Control type="time" name="endTime" onChange={handleChange} value={items.endTime}></Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit">
              Saugoti
            </Button>

            

          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
export default AddWork;
