import React from "react";

import pending from "../../assests/images/pendingIcon.svg";
import next from "../../assests/images/next.svg";
import pendingIcon from "../../assests/images/pending.svg";
import inprogressIcon from "../../assests/images/inprogressIcon.svg";
import unverifyIcon from "../../assests/images/unverifyIcon.svg";
import activeIcon from "../../assests/images/activeIcon.svg";
import blockIcon from "../../assests/images/blockIcon.svg";
import inactiveIcon from "../../assests/images/inactiveIcon.svg";
import verifyuserIcon from "../../assests/images/verifyuserIcon.svg";
import forward from "../../assests/images/forward.svg";
import { Paper } from "@material-ui/core";
import Typography from "@mui/material/Typography";
const { Link } = require("react-router-dom");
import heading from "../../assests/images/heading.svg";
import { useHistory } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

import DonutChart from "react-donut-chart";

import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

export default function Dashbord() {

  
  const [pend, setPending] = useState();
  const [verify, setVerify] = useState();
  const [inprogress, setInprogress] = useState();
  const [doc, setDoc] = useState();
  const [unverify, setUnverify] = useState();
  const [blocked, setBlocked] = useState();
  const [active, setActive] = useState();
  const [inactive, setInactive] = useState();
  let history = useHistory();
  // these are states for natural
  const [npend, setNPending] = useState();
  const [nverify, setNVerify] = useState();
  const [ninprogress, setNInprogress] = useState();
  const [ndoc, setNDoc] = useState();
  const [nunverify, setNUnverify] = useState();
  const [nblocked, setNBlocked] = useState();
  const [nactive, setNActive] = useState();
  const [ninactive, setNInactive] = useState();

  const callToDbHandler = async (payload) => {
  
  };
  const goodResponseHandler = (response) => {
    console.log("in response handler function");
    // destructor
    // values incorrect
    console.log({ response });
  
    setPending(response.legalStatistic.totalPending);
    setVerify(response.legalStatistic.totalVerified);
    setInprogress(response.legalStatistic.totalInProgress);
    setDoc(response.legalStatistic.totalDocumentVerification);
    setUnverify(response.legalStatistic.totalUnVerified);
    setBlocked(response.legalStatistic.totalBlocked);
    setActive(response.legalStatistic.totalActive);
    setInactive(response.legalStatistic.totalUnActive);
    // these below statistics are of Natural person
    setNPending(response.naturalStatistic.totalPending);
    setNVerify(response.naturalStatistic.totalVerified);
    setNInprogress(response.naturalStatistic.totalInProgress);
    setNDoc(response.naturalStatistic.totalDocumentVerification);
    setNUnverify(response.naturalStatistic.totalUnVerified);
    setNBlocked(response.naturalStatistic.totalBlocked);
    setNActive(response.naturalStatistic.totalActive);
    setNInactive(response.naturalStatistic.totalUnActive);

    console.log(
      "i have set the value of user which is " +
        response.legalStatic.totalPending
    );
    console.log("value received by the user is " + user);
  };


  useEffect(() => {
    // LoadData();
  }, []);

  const reactDonutChartBackgroundColor = [
    "#00E396",
    "#FEB019",
    "#FF4560",
    "#775DD0"
  ];
  const reactDonutChartInnerRadius = 0.5;
  const reactDonutChartSelectedOffset = 0.04;
  const reactDonutChartHandleClick = (item, toggled) => {
    if (toggled) {
      console.log(item);
    }
  };
  let reactDonutChartStrokeColor = "#FFFFFF";
  const reactDonutChartOnMouseEnter = (item) => {
    let color = reactDonutChartdata.find((q) => q.label === item.label).color;
    reactDonutChartStrokeColor = color;
  };
  return (
    <Typography>
      <div className="dashboard-position">
        <h1 className="admin-head">
          <span className="board-main-pos">
            <img src={heading} className="dashboard-logo" />
          <span  className="dashboard-head-main"> Dashboard</span>  
          </span>
        </h1>

        <Paper id="reg-paper-dashboard">
          {/*  */}
          <Row
            style={{
              display: "flex",
              paddingLeft: "47px",
              paddingTop: "23px",
            }}
          >
            <Col lg="6" md="10" sm="6" style={{ paddingLeft: "20px" }}>
              <Card className="card-stats-main-t">
                <CardBody> 
                  <Row>
                    <Link  className="set-pending">
                      <Col md="8" xs="12">
                        <span style={{ display: "flex" }}>
                          <div className="small-icon-pos">
                            <img src={verifyuserIcon} className="small-icon" />
                          </div>
                          <span className="dashboard-img-pos">
                            {/* <img src={pendingIcon} className="small-icon"/> */}
                          </span>
                        </span>
                        <div className="admin-verify-heading">
                            Balance
                          <br />
                        
                        </div>
                        <span className="verify-status">
                          $25
                          <span > {verify}</span>
                          <span className="arrow-img-pos">
                            <div >
                            
                              <img src={forward} className="arrow-verify-img" />
                            </div>
                          </span>
                        </span>
                      </Col>
                    </Link>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            <Col lg="3" md="6" sm="6" style={{ paddingLeft: "20px" }}>
              {/* <StatCard cardId={sub-card-2} heading={"Activrr"}/> */}
              <Card className="sec-card">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-touch-id text-warning" />
                        {/* <img src={cardlogo} height="80px"/>   */}
                      </div>
                    </Col>

                    <Link  className="set-pending">
                    <Col md="8" xs="12">
                      <span style={{ display: "flex" }}>
                        <div className="small-icon-pos">
                          <img src={pendingIcon} className="small-icon" />
                        </div>
                        <span className="dashboard-img-pos">
                          {/* <img src={pendingIcon} className="small-icon"/> */}
                          <img src={pending} className="pending" />
                        </span>
                      </span>
                      <span className="dashboard-heading">
                       Customers
                        <br />
                    
                       {/* <span className="sub-dahboard-head">2000</span>  */}
                      </span>
                      <span className="stats-main">
                      <div className="amount-pos"> 2000</div> 
                        {pend}
                        <span className="arrow-img-pos">
                          <div 
                          >
                            <img src={next} className="arrow-test-img" />
                          </div>
                        </span>
                      </span>
                    </Col>
                </Link>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            <Col lg="3" md="6" sm="6" style={{ paddingLeft: "20px" }}>
              <Card className="sec-card-progress">
                <CardBody>
                  <Row>
                
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-touch-id text-warning" />
                        {/* <img src={cardlogo} height="80px"/>   */}
                      </div>
                    </Col>
                    <Link  className="set-pending">
                    <Col md="8" xs="12"  >
                      <span className="dashboard-head-pos">
                        <div className="small-icon-pos">
                          <img src={inprogressIcon} className="small-icon" />
                        </div>
                        <span className="dashboard-img-pos">
                          {/* <img src={pendingIcon} className="small-icon"/> */}
                          {/* <img src={pending} className="pending" /> */}
                        </span>
                      </span>
                      <span className="dashboard-heading">
                       Orders 
                        <br />
                        <span className="sub-dahboard-head"></span>
                      </span>
                      <span className="stats-main">
                      <div className="amount-pos"> 1000</div> 
                        {inprogress}
                        <span className="arrow-img-pos">
                          <div >
                            <img src={next} className="arrow-test-img" />
                          </div>
                        </span>
                      </span>
                    </Col>
                    </Link>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            <Col lg="3" md="6" sm="6" style={{ paddingLeft: "20px" }}>
              <Card className="sec-card-verify">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-touch-id text-warning" />
                        {/* <img src={cardlogo} height="80px"/>   */}
                      </div>
                    </Col>
                    <Link  style={{ textDecoration: "none" }}>
                      <Col md="8" xs="12">
                        <span className="dashboard-head-pos">
                          <div className="small-icon-pos">
                            <img src={pendingIcon} className="small-icon" />
                          </div>
                          <span className="dashboard-img-pos">
                            {/* <img src={pendingIcon} className="small-icon"/> */}
                            {/* <img src={pending} className="pending" /> */}
                          </span>
                        </span>
                        <span className="dashboard-heading">
                           Earnings
                          <br />
                          <span className="sub-dahboard-head"></span>
                        </span>
                        <span className="stats-main">
                        <div className="amount-pos"> $30,000</div> 
                          {doc}
                          <span className="arrow-img-pos">
                            <div >
                              <img src={next} className="arrow-test-img" />
                            </div>
                          </span>
                        </span>
                      </Col>
                    </Link>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          {/* second row starts from here  */}

          <Row
            style={{
              display: "flex",
              paddingLeft: "47px",
              paddingTop: "54px",
            }}
          >
            <Col lg="6" md="10" sm="6" style={{ paddingLeft: "20px" }}>
              <Card className="donut-card">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <h2 className="stats">Statistics</h2>
                      <DonutChart
        width={300}
        height={200}
        onMouseEnter={(item) => reactDonutChartOnMouseEnter(item)}
        strokeColor={reactDonutChartStrokeColor}
        data={[
                          {
                            label: "Balance",
                            value: 10000,
                          },
                          {
                            label: "customers",
                            value: 2000,
                            // isEmpty: true,
                          },
                          {
                            label: "orders",
                            value: 1000,
                          },
                          {
                            label: "Earnings",
                            value: 30000,
                          },
                          {
                            label: "Complaints",
                            value: 20,
                          },
                          {
                            label: "In stock",
                            value: 500,
                          },
                          {
                            label: "Returned orders",
                            value: 20,
                          },
                        ]}

        colors={reactDonutChartBackgroundColor}
        innerRadius={reactDonutChartInnerRadius}
        selectedOffset={reactDonutChartSelectedOffset}
        onClick={(item, toggled) => reactDonutChartHandleClick(item, toggled)}
      />
                    
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Link  className="set-pending">
            <Col lg="6" md="10" sm="6" style={{ paddingLeft: "20px" }}>
              <Card className="sub-card-1">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-touch-id text-warning" />
                        {/* <img src={cardlogo} height="80px"/>   */}
                      </div>
                    </Col>
                    <Col md="8" xs="12">
                      <span className="dashboard-head-pos">
                        <div className="small-icon-pos">
                          <img src={unverifyIcon} className="small-icon" />
                        </div>
                        <span className="dashboard-img-pos">
                          {/* <img src={pendingIcon} className="small-icon"/> */}
                          {/* <img src={pending} className="pending" /> */}
                        </span>
                      </span>
                      <span className="dashboard-heading">
                          Complaints
                        <br />
                        <span className="sub-dahboard-head"></span>
                      </span>
                      <span className="stats-main">
                      <div className="amount-pos"> 20</div> 
                        {unverify}
                        <span className="arrow-img-pos-subcard">
                         
                          <div >
                            <img src={next} className="arrow-test-subcard" />
                          </div>
                        </span>
                      </span>
                    </Col>
                  </Row>
                </CardBody>
              </Card>

              <div className="sub-card-pos">
                <br/>
                <Card className="sub-card-2">
                  <CardBody>
                    <Row>
                      <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-touch-id text-warning" />
                          {/* <img src={cardlogo} height="80px"/>   */}
                        </div>
                      </Col>
                      <Col md="8" xs="12">
                        <span className="dashboard-head-pos">
                          <div className="small-icon-pos">
                            <img src={activeIcon} className="small-icon" />
                          </div>
                        </span>
                        <span className="dashboard-heading">
                           Returned orders
                          <br />
                          <span className="sub-dahboard-head"></span>
                        </span>
                        <span className="stats-main">
                        <div className="amount-pos"> 20</div> 
                          {active}
                          <span className="arrow-img-pos-subcard">
                            <div >
                              <img src={next} className="arrow-test-subcard" />
                            </div>
                          </span>
                        </span>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </div>
            </Col>
            </Link>
            <Link className="set-pending">
            <Col lg="6" md="10" sm="6" style={{ paddingLeft: "20px" }}>
              <Card className="sub-card-3">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-touch-id text-warning" />
                        {/* <img src={cardlogo} height="80px"/>   */}
                      </div>
                    </Col>
                    <Col md="8" xs="12">
                      <span className="dashboard-head-pos">
                        <div className="small-icon-pos">
                          <img src={blockIcon} className="small-icon" />
                        </div>
                        <span className="dashboard-img-pos">
                          {/* <img src={pendingIcon} className="small-icon"/> */}
                          {/* <img src={pending} className="pending" /> */}
                        </span>
                      </span>
                      <span className="dashboard-heading">
                         In  Stock
                        <br />
                        <span className="sub-dahboard-head"> </span>
                      </span>
                      <span className="stats-main">
                        {blocked}
                        <div className="amount-pos"> 500</div> 
                        <span className="arrow-img-pos-subcard">
                          <div >
                            <img src={next} className="arrow-test-subcard" />
                          </div>
                        </span>
                      </span>
                    </Col>
                  </Row>
                </CardBody>
              </Card>

              <div className="sub-card-pos">
                <br/>
                <Card className="sub-card-4">
                  <CardBody>
                    <Row>
                      <Col md="8" xs="12">
                        <span className="dashboard-head-pos">
                          <div className="small-icon-pos">
                            <img src={inactiveIcon} className="small-icon" />
                          </div>
                          <span className="dashboard-img-pos">
                            {/* <img src={pendingIcon} className="small-icon"/> */}
                            {/* <img src={pending} className="pending" /> */}
                          </span>
                        </span>
                        <span className="dashboard-heading">
                          Out of 
                          <br />
                          <span className="sub-dahboard-head"> &nbsp; &nbsp;  &nbsp;    Stock</span>
                        </span>
                        <span className="stats-main">
                          {inactive}
                          <div className="amount-pos"> 700</div> 
                          <span className="arrow-img-pos-subcard">
                            <div >
                              <img src={next} className="arrow-test-subcard" />
                            </div>
                          </span>
                        </span>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </div>
            </Col>
            </Link>
          </Row>
        </Paper>

        <br />

      </div>
    </Typography>
  );
}
