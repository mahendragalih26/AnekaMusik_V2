import React, { Component } from "react";

import {
  Row,
  FormControl,
  Button,
  Container,
  Col,
  InputGroup
} from "react-bootstrap";

class SearchBar extends Component {
  state = { search: "" };
  render() {
    console.log("mamank search : ", this.state.search);
    return (
      <div>
        <InputGroup className="mt-3 mb-3">
          <Container
            className="justify-content-md-center "
            style={{ maxWidth: "95%" }}
          >
            <Row>
              <Col sm={11}>
                <div style={{ position: "relative" }}>
                  <div>
                    <FormControl
                      style={{
                        borderRadius: "14px",
                        paddingLeft: "70px",
                        boxShadow: "1px 3px 5px rgba(0, 0, 0, 0.2)",
                        height: "calc(2.5em + 0.75rem + 2px)"
                      }}
                      placeholder="Search "
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                      onChange={e => this.setState({ search: e.target.value })}
                    />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      paddingLeft: "20px",
                      color: "rgba(0, 0, 0, 0.2)"
                    }}
                  >
                    {/* <FontAwesomeIcon icon={faSearch} /> */}
                    <img
                      alt=""
                      src="/search.png"
                      // width="140px"
                      // height="50px"
                      className="d-inline-block align-top"
                    />
                  </div>
                </div>
              </Col>
              <Col sm={1}>
                <InputGroup.Append
                  style={{ marginLeft: "-24px" }}
                  className="float-right"
                >
                  <Button
                    variant="outline-light"
                    style={{
                      boxShadow: "1px 3px 4px 2px rgba(0, 0, 0, 0.2)",
                      color: "#949494"
                    }}
                    className="ml-2"
                  >
                    {/* <FontAwesomeIcon icon={faCog} /> */}
                    <img
                      alt=""
                      src="./options.png"
                      // width="140px"
                      // height="50px"
                      className="d-inline-block align-top"
                    />
                  </Button>
                </InputGroup.Append>
              </Col>
            </Row>
          </Container>
        </InputGroup>
      </div>
    );
  }
}

export default SearchBar;
