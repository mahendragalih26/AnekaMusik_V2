import React, { Component } from "react";
import { Button, Row, Col, Modal, Form } from "react-bootstrap";
import { addMain } from "../Publics/Action";

class modalEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        id_product: "",
        id_branch: "",
        qty: "",
        price: "",
        img: "/sub/violin4"
      },
      resModal: false,
      dataDet: this.props.data
    };
  }

  handleChange = async e => {
    let newFormData = { ...this.state.formData };
    const target = e.target;
    const name = target.name;
    const value = target.value;
    newFormData[name] = value;
    await this.setState({
      formData: newFormData
    });
    console.log(this.state.formData);
  };

  handleSubmit = async e => {
    e.preventDefault();
    await this.props.dispatch(addMain(this.state.formData));
    // this.props.hide();
    // this.resModalShow(true);
    // setTimeout(() => {
    //   this.resModalShow(false);
    // }, 3000);
  };

  render() {
    console.log("anjay", this.props.data);
    return (
      <Modal
        size="lg"
        show={this.props.open}
        onHide={this.props.hide}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Form onSubmit={this.handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Edit Data
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input type="hidden" name="id" value={this.props.data.id}></input>
            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Product Name
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  name="product"
                  type="text"
                  onChange={this.handleChange}
                  value={this.props.data.name}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Category
              </Form.Label>
              <Col sm="4">
                <Form.Control
                  as="select"
                  name="category"
                  onChange={this.handleChange}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Form.Control>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Branch
              </Form.Label>
              <Col sm="4">
                <Form.Control
                  as="select"
                  name="branch"
                  onChange={this.handleChange}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
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
                  name="qty"
                  onChange={this.handleChange}
                  value={this.props.data.qty}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Price
              </Form.Label>
              <Col sm="6">
                <Form.Control
                  type="text"
                  name="price"
                  onChange={this.handleChange}
                  value={this.props.data.price}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                description
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  as="textarea"
                  rows="5"
                  name="description"
                  onChange={this.handleChange}
                  value={this.props.data.description}
                />
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer style={{ borderTop: "none" }}>
            <Button
              variant="warning"
              style={{
                width: "99px",
                backgroundColor: "rgb(241, 121, 19)",
                color: "white"
              }}
              type="submit"
            >
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}

export default modalEdit;
