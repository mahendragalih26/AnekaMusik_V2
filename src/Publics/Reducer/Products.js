const initialState = {
  productsList: [],
  prodmaxList: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "GET_PRODUCTS_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_PRODUCTS_FULFILLED":
      console.log(action.payload.data.values);
      return {
        // ...state,
        isLoading: false,
        isFulfilled: true,
        productsList: action.payload.data.values
      };
    case "GET_PRODMAX_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "GET_PRODMAX_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_PRODMAX_FULFILLED":
      console.log(action.payload.data.values);
      return {
        // ...state,
        isLoading: false,
        isFulfilled: true,
        prodmaxList: action.payload.data.values
      };
    default:
      return state;
  }
};

export default products;
