
import SimpleTable from "ToDoList/SimpleTable";
import { Row } from "reactstrap";
import BigChart from "../Graphs/BigChart";
import BarChart from "Graphs/BarChart";
import LineChart from "Graphs/LineChart";
import PieChart from "Graphs/PieChart";
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
  studentsData,
} from "variables/ENTCData.js";

function ENTC(props) {
  return (
    <>
      <div className="content">
        <Row>
          <BigChart title={"Project Design"} data={chartExample1} />
        </Row>
        <Row>
          <BarChart data={chartExample3} />
          <LineChart data={chartExample2} />
          <PieChart data={chartExample4} />
        </Row>
        <Row>
          <SimpleTable data={studentsData} />
        </Row>
      </div>
    </>
  );
}

export default ENTC;
