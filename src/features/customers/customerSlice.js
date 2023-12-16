const initialCustomerState = {
  fullName: "",
  nId: "",
  createdAt: "",
};

export default function customerReducer(state = initialCustomerState, action) {
  switch (action?.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload?.fullName,
        nId: action.payload?.nId,
        createdAt: action.payload?.createdAt,
      };
    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload?.updatedName,
      };

    default:
      return { ...state };
  }
}

export const createCustomer = (name, nid) => {
  return {
    type: "customer/createCustomer",
    payload: { fullName: name, nId: nid, createdAt: new Date().toISOString() },
  };
};
export const updateName = (name) => {
  return {
    type: "customer/updateName",
    payload: { updatedName: name },
  };
};
