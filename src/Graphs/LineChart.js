import React from "react";
import { Line, Bar } from "react-chartjs-2";
import classNames from "classnames";
// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Col,
 
} from "reactstrap";

// core components

const LineChart = ({data}) => {
  const  chartExample2=data;
  return (
    <Col lg="4">
      <Card className="card-chart">
        <CardHeader>
          <h5 className="card-category">Placed Students Every Year</h5>
          <CardTitle tag="h3">
            <i className="tim-icons icon-tie-bow text-info" /> Recuriment
          </CardTitle>
        </CardHeader>
        <CardBody>
          <div className="chart-area">
            <Line data={chartExample2.data} options={chartExample2.options} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LineChart;
