import Work from "./Work";
import { Table } from "react-bootstrap";

function WorksTable(props){

    const deleteItemHandler = (id) => {
        console.log("lifted:", id )
    }

    return(
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Data</th>
            <th>Klientas</th>
            <th>Suteikta paslauga</th>
            <th>Aprasymas</th>
            <th>Trukme</th>
            <th>Keisti</th>
            <th>Salinti</th>

          </tr>
        </thead>
        <tbody>
        { (props.data.length)? 
        (props.data.map((work) => (
            <Work key={work.i} date={work.date} company={work.company} service={work.service} startTime={work.startTime} endTime={work.endTime} id={work.id} delete = {deleteItemHandler}/>
          )))
          :null
        //   (works.map((work) => (
        //     <Work key={work.i} date={work.date} company={work.company} service={work.service} startTime={work.startTime} endTime={work.endTime} />
        //   )))
        }
          </tbody>
      </Table>
    )
}
export default WorksTable;