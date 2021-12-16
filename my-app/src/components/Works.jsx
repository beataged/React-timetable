import React, { useState, useEffect, useMemo } from "react";
import AddWork from "./AddWork";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Filter from "./Filter";
import WorksTable from "./WorksTable";
import * as services from "../services/WorkServices";
import Work from "./Work";

export const WorkContext = React.createContext({
  workId: "",
  setWorkId: () => {},
});
function Works(props) {
  const [workId, setWorkId] = useState("");
  const [addWork, setAddWork] = useState(false);
  const [works, setWorks] = useState([]);
  const [filteredWorks, setFilteredWorks] = useState([]);
  const [timesList, setTimesList] = useState([]);
  const value = useMemo(
    () => ({
      workId,
      setWorkId,
    }),
    [workId]
  );

  const addWorkHandler = () => {
    setAddWork(true);
  };

  const closeFormHandler = () => {
    setAddWork(false);
    props.status(true);
  };

  const handleAddWork = (date) => {
    services.addWork(date);
    setWorks([...works, date]);
    closeFormHandler(true);
  };

  const handleFilter = (search) => {
    console.log(search);
  };
  console.log(works);

  const filteredItemsHandler = (criteria) => {
    const filteredItems = works.filter((item) => {
      return Object.keys(criteria).every((filter) => {
        return criteria[filter] === item[filter];
      });
    });
    setFilteredWorks(filteredItems);
  };

  useEffect(() => {
    services.getAllWorks((works) => setWorks(works));
  }, []);

  console.log(workId)
  return (
    <>
      {addWork ? <AddWork setWorks={handleAddWork} /> : false}
      <Card>
        <Card.Header>
          <h3>Darbu sarasas:</h3>
        </Card.Header>

        {addWork ? (
          <Button className="btn btn-danger" onClick={closeFormHandler}>
            Atsaukti
          </Button>
        ) : (
          <Button className="btn btn-primary" onClick={addWorkHandler}>
            Prideti
          </Button>
        )}

        <Card.Header>
          <Filter setFilter={handleFilter} />
        </Card.Header>

        <Card.Body>
          <WorkContext.Provider value={value}>
            <WorksTable data={works}></WorksTable>
          </WorkContext.Provider>
        </Card.Body>
      </Card>
    </>
  );
}

export default Works;
