import React from 'react'

// reactstrap components
import {
  
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  
  Table,
  Col,

} from "reactstrap";

// core components



const SimpleTable = ({data}) => {
  const studentsData =data;
    return (
      <Col lg="6" md="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h4">Placed Students</CardTitle>
          </CardHeader>
          <CardBody>
            <Table className="tablesorter" responsive>
              <thead className="text-primary">
                <tr>
                  <th>Name</th>
                  <th>Year</th>
                  <th>Company</th>
                  <th className="text-center">Salary ($)</th>
                </tr>
              </thead>
              <tbody>
                {studentsData.data.map((item)=>(<tr>
                  <td>{item.name}</td>
                  <td>{item.year}</td>
                  <td>{item.company}</td>
                  <td className="text-center">{item.sal}</td>
                </tr>))
                }
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    );
}

export default SimpleTable
