const initialAccountState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export default function accountReducer(state = initialAccountState, action) {
  switch (action?.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state?.loan > 0) return { ...state };
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return { ...state };
  }
}

export const deposit = (amount) => {
  return async function (dispatch, getState) {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const date = await res.json();
    console.log("date--99:", date);
    setTimeout(() => {
      dispatch({
        type: "account/deposit",
        payload: date?.id,
      });
    }, 2000);
  };
};
export const withdraw = (amount) => {
  return {
    type: "account/withdraw",
    payload: amount,
  };
};
export const requestLoan = (amount, purpose) => {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
};
export const payLoan = () => {
  return {
    type: "account/payLoan",
  };
};
