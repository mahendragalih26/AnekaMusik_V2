import React, { useState } from "react";
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  Modal,
  Form
} from "react-bootstrap";

import { Link } from "react-router-dom";

const Category = props => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <Container className="justify-content-md-center">
      <Row>
        <Button
          variant="warning"
          className="mb-3"
          style={{
            marginLeft: "15px",
            width: "99px",
            backgroundColor: "rgb(241, 121, 19)",
            color: "white"
          }}
          onClick={() => setLgShow(true)}
        >
          Add
        </Button>
      </Row>
      <Row>
        {props.category.length > 0 ? (
          props.category.map(category => (
            <Col
              md="3"
              style={{ width: "320px", height: "297px" }}
              key={category.id_category}
            >
              <Link
                to={`/${category.name}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Card
                  style={{
                    borderRadius: "15px",
                    backgroundColor: "#F5D372"
                  }}
                >
                  <Card.Body>
                    <Card.Title style={{ position: "absolute", top: "50%" }}>
                      {category.name}
                    </Card.Title>

                    <Card.Img variant="top" src={category.image_src} />
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </Row>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Add Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Product Name
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" />
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
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Price
              </Form.Label>
              <Col sm="6">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Price
              </Form.Label>
              <Col sm="8">
                <Form.Control as="textarea" rows="5" />
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
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Category;
