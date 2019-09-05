import React, { Component } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  Form,
  Button
} from "react-bootstrap";
// import { Link } from "react-router-dom";

import { connect } from "react-redux";
import {
  getMainDetail,
  getCategory,
  getProduct,
  deleteMain
} from "../Publics/Action";
import ModalEdit from "../components/modalEdit";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_detail: this.props.match.params.id,
      openModalEdit: false,
      dataStore: [],
      dataCategory: [],
      dataProduct: []
    };
  }

  componentDidMount = async () => {
    await this.props.dispatch(getMainDetail(this.state.id_detail));
    await this.props.dispatch(getCategory());
    await this.props.dispatch(getProduct());
    this.setState({
      dataStore: this.props.data.Mains.mainList[0]
    });
  };

  openModalEdit(open) {
    this.setState({ openModalEdit: open });
  }

  DeleteMain = async () => {
    await this.props.dispatch(deleteMain(this.state.id_detail));
    // this.setState({
    //   openModalDelete: false,
    //   showSuccessModal: true
    // });
    setTimeout(() => {
      this.props.history.push(`/${this.state.dataStore.category}`);
    }, 3000);
  };

  render() {
    const { dataStore } = this.state;
    console.log("data API = ", dataStore);
    return (
      <React.Fragment>
        <Container key={dataStore.id} className="mt-4">
          <Row>
            <Col xs={6} md={4}>
              <Card>
                <Card.Img variant="top" src={`/assets/${dataStore.img}.png`} />
              </Card>
            </Col>
            <Col xs={6} md={8}>
              <Navbar>
                <Navbar.Brand href="#home">{dataStore.name}</Navbar.Brand>
                <Nav className="mr-auto"></Nav>
                <Form inline>
                  <div>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="mr-sm-2"
                      data-toggle="modal"
                      data-target="#exampleModal"
                      onClick={() => this.openModalEdit(this.state.id_detail)}
                    >
                      Edit Data
                    </Button>
                  </div>
                  <div>
                    <a
                      href="/violin"
                      onClick={() => this.DeleteMain(this.state.id_detail)}
                    >
                      <Button variant="danger" size="sm" className="mr-sm-2">
                        Delete
                      </Button>
                    </a>
                  </div>
                </Form>
              </Navbar>
              <p>{dataStore.description}</p>
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
                      value={dataStore.branch}
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
                      value={dataStore.qty}
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
                      value={dataStore.price}
                      readOnly
                    />
                  </Col>
                </Form.Group>
              </Form>
            </Col>
            <Col xs={6} md={1}></Col>
          </Row>
        </Container>
        <ModalEdit
          id_main={dataStore.id_detail}
          data={dataStore}
          open={this.state.openModalEdit}
          history={this.props.history}
          hide={() => this.setState({ openModalEdit: false })}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state
  };
};

export default connect(mapStateToProps)(Detail);
