import React from 'react'
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {

  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Col,
 
} from "reactstrap";

// core components

const BarChart = ({data}) => {
  const chartExample3=data;
    return (
      <Col lg="4">
        <Card className="card-chart">
          <CardHeader>
            <h5 className="card-category">Recent placements</h5>
            <CardTitle tag="h3">
              <i className="tim-icons icon-money-coins text-primary" /> Placed Students
            </CardTitle>
          </CardHeader>
          <CardBody>
            <div className="chart-area">
              <Bar data={chartExample3.data} options={chartExample3.options} />
            </div>
          </CardBody>
        </Card>
      </Col>
    );
}

export default BarChart
