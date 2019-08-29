import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

class Home extends Component {
  // state = {  }
  render() {
    return (
      <React.Fragment>
        <Navbar style={{ backgroundColor: "#F5D372" }} variant="dark">
          <img
            alt=""
            src="/icon1.png"
            // width="140px"
            // height="50px"
            className="d-inline-block align-top"
          />
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {/* Signed in as: <a href="#login">Mark Otto</a> */}
              <a
                href="#login"
                style={{ textDecoration: "none", color: "black" }}
              >
                Login
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Home;
