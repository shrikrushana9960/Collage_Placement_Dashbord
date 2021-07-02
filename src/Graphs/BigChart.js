import React from 'react'
import { Line} from "react-chartjs-2";
import classNames from "classnames";
// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";


import { isTemplateLiteralTypeNode } from 'typescript';

const BigChart = ({data,title}) => {
  const  chartExample1=data;
     const [bigChartData, setbigChartData] = React.useState("data1");
     const setBgChartData = (name) => {
       setbigChartData(name);
     };
    return (
      <Col xs="12">
        <Card className="card-chart">
          <CardHeader>
            <Row>
              <Col className="text-left" sm="6">
                <h5 className="card-category">Events</h5>
                <CardTitle tag="h2">{title}</CardTitle>
              </Col>
              <Col sm="6">
                <ButtonGroup
                  className="btn-group-toggle float-right"
                  data-toggle="buttons"
                >
                  <Button
                    tag="label"
                    className={classNames("btn-simple", {
                      active: bigChartData === "data1",
                    })}
                    color="info"
                    id="0"
                    size="sm"
                    onClick={() => setBgChartData("data1")}
                  >
                    <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                      First Year
                    </span>
                    <span className="d-block d-sm-none">
                      <i className="tim-icons icon-single-02" />
                    </span>
                  </Button>
                  <Button
                    color="info"
                    id="1"
                    size="sm"
                    tag="label"
                    className={classNames("btn-simple", {
                      active: bigChartData === "data2",
                    })}
                    onClick={() => setBgChartData("data2")}
                  >
                    <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                      {isTemplateLiteralTypeNode}
                      Secoand Year
                    </span>
                    <span className="d-block d-sm-none">
                      <i className="tim-icons icon-gift-2" />
                    </span>
                  </Button>
                  <Button
                    color="info"
                    id="2"
                    size="sm"
                    tag="label"
                    className={classNames("btn-simple", {
                      active: bigChartData === "data3",
                    })}
                    onClick={() => setBgChartData("data3")}
                  >
                    <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                      {isTemplateLiteralTypeNode}
                      Third Year
                    </span>
                    <span className="d-block d-sm-none">
                      <i className="tim-icons icon-gift-2" />
                    </span>
                  </Button>
                  <Button
                    color="info"
                    id="2"
                    size="sm"
                    tag="label"
                    className={classNames("btn-simple", {
                      active: bigChartData === "data4",
                    })}
                    onClick={() => setBgChartData("data4")}
                  >
                    <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                      {isTemplateLiteralTypeNode}
                     Last Year
                    </span>
                    <span className="d-block d-sm-none">
                      <i className="tim-icons icon-gift-2" />
                    </span>
                  </Button>
                </ButtonGroup>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <div className="chart-area">
              <Line
                data={chartExample1[bigChartData]}
                options={chartExample1.options}
              />
            </div>
          </CardBody>
        </Card>
      </Col>
    );
}

export default BigChart
