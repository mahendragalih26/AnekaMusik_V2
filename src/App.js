import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  Row,
  FormControl,
  Button,
  Container,
  Col,
  InputGroup
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faSearch } from "@fortawesome/fontawesome-free-solid";
// import { Provider } from "react-redux";

import "./App.css";
import Home from "./components/Home";
import Menu from "./Menu";
import Categorys from "./Categorys";
import Detail from "./Detail";

import SubCategory from "./Data/category";
import Products from "./Data/product";

import { Navbar } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: Products,
      category: SubCategory,
      search: ""
    };
  }

  replaceItem(index) {
    this.setState({
      search: index
    });
  }

  render() {
    console.log(this.state.product);
    console.log(this.state.search);
    const filtered = this.state.product.filter(p =>
      p.name.toLowerCase().includes(this.state.search.toLowerCase())
    );
    return (
      <Router>
        <Home />
        <div>
          <InputGroup className="mt-3 mb-3">
            <Container className="justify-content-md-center ">
              <Row>
                <Col sm={11}>
                  <div style={{ position: "relative" }}>
                    <div>
                      <FormControl
                        style={{
                          borderRadius: "14px",
                          paddingLeft: "40px",
                          boxShadow: "1px 3px 5px rgba(0, 0, 0, 0.2)"
                        }}
                        placeholder="Search "
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                        onChange={e =>
                          this.setState({ search: e.target.value })
                        }
                      />
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        bottom: "6px",
                        paddingLeft: "14px",
                        color: "rgba(0, 0, 0, 0.2)"
                      }}
                    >
                      <FontAwesomeIcon icon={faSearch} />
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
                      <FontAwesomeIcon icon={faCog} />
                    </Button>
                  </InputGroup.Append>
                </Col>
              </Row>
            </Container>
          </InputGroup>
        </div>
        <Route
          path={"/violin"}
          component={() => <Menu products={this.state.product || filtered} />}
        />
        <Route path={"/detail/:id"} component={Detail} />
        <Route
          path={"/"}
          exact
          component={() => <Categorys category={this.state.category} />}
        />

        <div className="m-3"></div>
        <Navbar
          className="justify-content-end"
          position="bottom"
          style={{ backgroundColor: "#F5D372" }}
          variant="dark"
        >
          <span>&copy; 2019 PT Aneka Musik</span>
        </Navbar>
      </Router>
    );
  }
}

export default App;
