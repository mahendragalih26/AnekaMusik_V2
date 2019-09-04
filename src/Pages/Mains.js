import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import Card from "../components/CardBot";

import { connect } from "react-redux";

import {
  getMains,
  getProduct,
  getProductMax,
  getBranch,
  getCategory
} from "../Publics/Action";

class Mains extends Component {
  state = {
    dataStore: [],
    dataProduct: [],
    dataProdMax: [],
    dataBranch: [],
    dataCategory: [],
    search: ""
  };

  componentDidMount = async () => {
    await this.props.dispatch(getMains());
    await this.props.dispatch(getProduct());
    await this.props.dispatch(getProductMax());
    await this.props.dispatch(getCategory());
    await this.props.dispatch(getBranch());
    this.setState({
      dataStore: this.props.data.Mains.mainList,
      dataProduct: this.props.data.Products.productList,
      dataProdMax: this.props.data.Products.prodmaxList,
      dataCategory: this.props.data.Categorys.categoryList,
      dataBranch: this.props.data.Branches.branchList
    });
  };

  render() {
    const { dataStore } = this.state;
    const { dataProduct } = this.state;
    const { dataProdMax } = this.state;
    const { dataBranch } = this.state;
    const { dataCategory } = this.state;
    // const filtered = this.state.dataStore.filter(data => data.id === 2);
    // const dataStore = filtered[0];
    console.log("data API = ", this.props.data);
    // console.log("data search = ", this.state.search);
    return (
      <div>
        <SearchBar />
        <Card
          dataMain={dataStore}
          dataProduct={dataProduct}
          dataProdMax={dataProdMax}
          dataBranch={dataBranch}
          dataCategory={dataCategory}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state
  };
};

export default connect(mapStateToProps)(Mains);
