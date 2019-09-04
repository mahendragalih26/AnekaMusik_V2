import React, { Component } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  Form,
  Button,
  Modal
} from "react-bootstrap";

import Products from "./Data/product";

import { Link } from "react-router-dom";

class Detail extends Component {
  constructor(props) {
    super(props);
    // this.routeChange = this.routeChange.bind(this);
    this.state = {
      id: this.props.match.params.id,
      product: Products,
      setShow: false,
      name: "",
      qty: "",
      price: "",
      description: ""
    };
  }

  // routeChange() {
  //   let path = `/`;
  //   this.props.history.push(path);
  // }

  nameHandler(e) {
    this.setState({ name: e.target.value });
  }

  qtyHandler(e) {
    this.setState({ qty: e.target.value });
  }

  priceHandler(e) {
    this.setState({ price: e.target.value });
  }

  descriptionHandler(e) {
    this.setState({ description: e.target.value });
  }

  replaceModalItem(index) {
    this.setState({
      requiredItem: index
    });
  }

  deleteItem(index) {
    let tempProduct = this.state.product;
    let findindex = tempProduct.findIndex(temp => {
      return temp.id === index;
    });
    let deleted = tempProduct.splice(findindex, 1);
    console.log("index ke", findindex);

    this.setState({ product: deleted });
    console.log("state ", this.state.product);
  }

  render() {
    const { product } = this.state;
    const filtered = product.filter(data => data.id === this.state.id);
    console.log(product);
    console.log(filtered);
    const data = filtered[0];

    return (
      <React.Fragment>
        <Container key={data.id}>
          <Row>
            <Col xs={6} md={4}>
              <Card>
                <Card.Img variant="top" src={data.image_src} />
              </Card>
            </Col>
            <Col xs={6} md={8}>
              <Navbar>
                <Navbar.Brand href="#home">{data.name}</Navbar.Brand>
                <Nav className="mr-auto"></Nav>
                <Form inline>
                  <div>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="mr-sm-2"
                      data-toggle="modal"
                      data-target="#exampleModal"
                      onClick={() => this.setState({ setShow: true })}
                    >
                      Edit Data
                    </Button>
                  </div>
                  <div>
                    <Link
                      to="/violin"
                      // onClick={this.routeChange(this.state.id)}
                      onClick={() => this.deleteItem(this.state.id)}
                    >
                      <Button variant="danger" size="sm" className="mr-sm-2">
                        Delete
                      </Button>
                    </Link>
                  </div>
                </Form>
              </Navbar>
              <p>{data.description}</p>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={6} md={4}></Col>
            <Col xs={6} md={8}>
              <Form>
                <Form.Group as={Row}>
                  <Form.Label column sm="2">
                    Available In
                  </Form.Label>
                  <Col sm="7">
                    <Form.Control
                      width="20px"
                      type="text"
                      style={{ borderRadius: "14px" }}
                      value={data.branch}
                      readOnly
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm="2">
                    Quantitiy
                  </Form.Label>
                  <Col sm="7">
                    <Form.Control
                      width="20px"
                      type="text"
                      style={{ borderRadius: "14px" }}
                      value={data.qty}
                      readOnly
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm="2">
                    Price
                  </Form.Label>
                  <Col sm="7">
                    <Form.Control
                      width="20px"
                      type="text"
                      style={{ borderRadius: "14px" }}
                      value={data.price}
                      readOnly
                    />
                  </Col>
                </Form.Group>
              </Form>
            </Col>
            <Col xs={6} md={1}></Col>
          </Row>
        </Container>
        <Modal
          show={this.state.setShow}
          onHide={() => this.setState({ setShow: false })}
          size="lg"
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Edit Data
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Product Name
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    placeholder={data.name}
                    onChange={e => this.nameHandler(e)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Category
                </Form.Label>
                <Col sm="4">
                  <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Branch
                </Form.Label>
                <Col sm="4">
                  <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Qty
                </Form.Label>
                <Col sm="6">
                  <Form.Control
                    type="text"
                    value={data.qty}
                    onChange={e => this.qtyHandler(e)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Price
                </Form.Label>
                <Col sm="6">
                  <Form.Control type="text" value={data.price} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Description
                </Form.Label>
                <Col sm="8">
                  <Form.Control as="textarea" rows="5" value={data.price} />
                </Col>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="warning"
              style={{
                width: "99px",
                backgroundColor: "rgb(241, 121, 19)",
                color: "white"
              }}
            >
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Detail;
