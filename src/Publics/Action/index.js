import Axios from "axios";
// import { resolve } from "path";

// Mains
export const getMains = () => {
  return {
    type: "GET_MAINS", //nama
    payload: Axios.get(`http://localhost:8080/main`)
  };
};

export const getMainDetail = id => {
  return {
    type: "GET_MAIN_DETAIL",
    payload: Axios.get(`http://localhost:8080/main?field=id&search=${id}`)
  };
};

export const addMain = data => {
  return {
    type: "ADD_MAIN",
    payload: Axios.post(`http://localhost:8080/main`, data)
  };
};

export const editMain = (data, id) => {
  return {
    type: "EDIT_MAIN",
    payload: Axios.patch(`http://localhost:8080/main/${id}`)
  };
};

export const deleteMain = id => {
  return {
    type: "DELETE_MAIN",
    payload: Axios.delete(`http://localhost:8080/main/${id}`)
  };
};

// Categorys
export const getCategory = () => {
  return {
    type: "GET_CATEGORYS",
    payload: Axios.get(`http://localhost:8080/category`)
  };
};

// Products
export const getProduct = () => {
  return {
    type: "GET_PRODUCTS",
    payload: Axios.get(`http://localhost:8080/product`)
  };
};

export const getProductMax = () => {
  return {
    type: "GET_PRODMAX",
    payload: Axios.get(`http://localhost:8080/product/max`)
  };
};

export const addProduct = data => {
  return {
    type: "ADD_MAIN",
    payload: Axios.post(`http://localhost:8080/product`, data)
  };
};

// Branches
export const getBranch = () => {
  return {
    type: "GET_BRANCHES",
    payload: Axios.get(`http://localhost:8080/branch`)
  };
};
