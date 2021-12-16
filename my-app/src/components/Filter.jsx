import { useState } from 'react';
import {Form, Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import Companies from './Companies';
import Services from './Services';

function Filter(props){

    const[filter, setFilter] = useState({

    })

    const handleFilter = (e) => {

        setFilter({
            ...filter,
            [e.target.name]:e.target.value
        })
    }

    const submitFilter = (e) =>{
        e.preventDefault();
        props.setFilter(filter)
    }



    return(
        <>
        <Card>
            <Card.Body>
                <Form className="d-flex">
                    <Form.Group className="m-2 w-25">
                        <Form.Select name="service"  onChange={handleFilter}>
                            <option selected disabled>Pasirinkite</option>
                            <Services>

                            </Services>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="m-2 w-25">
                        <Form.Select name="company"  onChange={handleFilter}>
                        <option selected disabled>Pasirinkite</option>

                           <Companies>

                           </Companies>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="m-2">
                        <Button variant="primary" type="submit" onClick={submitFilter}>
                            Taikyti filtra
                        </Button>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
        </>
    )
}
export default Filter;