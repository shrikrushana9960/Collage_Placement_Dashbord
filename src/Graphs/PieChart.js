import React from 'react'

import { Pie } from "react-chartjs-2";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Col,
} from "reactstrap";

// core components


const PieChart = ({data}) => {
  const chartExample4=data;
    return (
      <Col lg="4">
        <Card className="card-chart">
          <CardHeader>
            <h5 className="card-category">Degree Last Year Passing</h5>
            <CardTitle tag="h3">
              <i className="tim-icons icon-trophy text-success" /> 2021
            </CardTitle>
          </CardHeader>
          <CardBody>
            <div className="chart-area">
              <Pie data={chartExample4.data} options={chartExample4.options} />
            </div>
          </CardBody>
        </Card>
      </Col>
    );
}

export default PieChart
