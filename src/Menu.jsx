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

  console.log(props.products);
  return (
    <>
      <div></div>
      <Container className="justify-content-md-center">
        <Row>
          <Col>
            <Button
              variant="warning"
              style={{
                width: "99px",
                backgroundColor: "rgb(241, 121, 19)",
                color: "white"
              }}
              onClick={() => setLgShow(true)}
              // onClick={() => this.replaceModalItem(index)}
            >
              Add
            </Button>
          </Col>
        </Row>
        <Row>
          {props.products.length > 0 ? (
            props.products.map(product => (
              <Col md="3" className="mb-3 mt-3" key={product.id}>
                <Link
                  to={`/detail/${product.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Card
                    style={{
                      borderRadius: "30px",
                      backgroundColor: "#F5D372",
                      height: "297px"
                    }}
                  >
                    <Card.Body>
                      <Card.Img
                        variant="top"
                        src={product.image_src}
                        width="200px"
                        height="150px"
                      />
                    </Card.Body>
                    <Card.Body>
                      <Card.Title align="center ">{product.name}</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))
          ) : (
            <tr>
              <td colSpan={3}>Data Tidak ditemukan</td>
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
            <Modal.Title id="example-modal-sizes-title-lg">
              Add Data
            </Modal.Title>
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
    </>
  );
};

export default Category;
