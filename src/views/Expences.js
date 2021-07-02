import React from "react";
import SimpleTable from "ToDoList/SimpleTable";
import { Row } from "reactstrap";

// core components

import BigChart from "../Graphs/BigChart";
import BarChart from "Graphs/BarChart";
import LineChart from "Graphs/LineChart";
import PieChart from "Graphs/PieChart";
import ToDoList from "ToDoList/ToDoList";
const Expences = () => {
  return (
    <div className="content">
      <Row>
        <BigChart />
      </Row>
      <Row>
        <BarChart />
        <LineChart />
        <PieChart />
      </Row>
      <Row>
        <ToDoList />
        <SimpleTable />
      </Row>
    </div>
  );
};

export default Expences;
