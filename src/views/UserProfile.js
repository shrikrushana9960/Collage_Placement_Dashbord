
import React from "react";
import NotificationAlert from "react-notification-alert";

// reactstrap components
import {
  Alert,
  UncontrolledAlert,
  CardTitle,
  
 
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

function UserProfile() {
  const notificationAlertRef = React.useRef(null);
   const notify = (place) => {
     var color = Math.floor(Math.random() * 5 + 1);
     var type;
     switch (color) {
       case 1:
         type = "primary";
         break;
       case 2:
         type = "success";
         break;
       case 3:
         type = "danger";
         break;
       case 4:
         type = "warning";
         break;
       case 5:
         type = "info";
         break;
       default:
         break;
     }
     var options = {};
     options = {
       place: place,
       message: (
         <div>
           <div>
             Thank You <b>For giving valueable response</b> We will surly look on it.
           </div>
         </div>
       ),
       type: type,
       icon: "tim-icons icon-bell-55",
       autoDismiss: 7,
     };
     notificationAlertRef.current.notificationAlert(options);
   };
  return (
    <>
      <div className="react-notification-alert-container">
        <NotificationAlert ref={notificationAlertRef} />
      </div>
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">Write the Review</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>COLLAGE (disabled)</label>
                        <Input
                          defaultValue="ALARD COLLAGE OF ENGINEERING"
                          disabled
                          placeholder="Company"
                          type="text"
                        />
                      </FormGroup>
                    </Col>

                    <Col className="pl-md-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Input placeholder="abc@email.com" type="email" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>First Name</label>
                        <Input placeholder="Company" type="text" />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <label>Last Name</label>
                        <Input placeholder="Last Name" type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Address</label>
                        <Input placeholder="Home Address" type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label>City</label>
                        <Input
                          defaultValue="Pune"
                          placeholder="City"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="4">
                      <FormGroup>
                        <label>Country</label>
                        <Input
                          defaultValue="INDIA"
                          placeholder="Country"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="4"></Col>
                  </Row>
                  <Row>
                    <Col md="8">
                      <FormGroup>
                        <label>Your Review</label>
                        <Input
                          cols="80"
                          placeholder="Here can be your Review"
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button
                  onClick={() => notify("tl")}
                  className="btn-fill"
                  color="primary"
                  type="submit"
                >
                  SEND
                </Button>
              </CardFooter>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <CardBody>
                <CardText />
                <div className="author">
                  <div className="block block-one" />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar"
                      src="https://www.icafev.com/images/Dr.%20Yadav%20Sq.jpg"
                    />
                    <h5 className="title">Dr. LR Yadav</h5>
                  </a>
                  <p className="description">Founder</p>
                </div>
                <div className="card-description">
                  This year ALARD GROUP OF INSTITUTE was established and founded
                  by Dr. LR Yadav, Chairman of the ALARD Charitable Trust. His
                  vision and mission were clear as he wanted to fabricate the
                  institute with Trust, Transparency & Teamwork.
                </div>
              </CardBody>
              <CardFooter>
                <div className="button-container">
                  <Button className="btn-icon btn-round" color="facebook">
                    <i className="fab fa-facebook" />
                  </Button>
                  <Button className="btn-icon btn-round" color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button className="btn-icon btn-round" color="google">
                    <i className="fab fa-google-plus" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default UserProfile;
