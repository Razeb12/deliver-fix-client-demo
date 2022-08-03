import { SIGNIN, SIGNUP } from "../types";

const AuthReducer = (prevState, { type, payload }) => {
  switch (type) {
    case SIGNUP:
      return {
        ...prevState,
        response: payload,
      };
    case SIGNIN:
      return {
        ...prevState,
        userToken: payload,
      };
    default:
      return prevState;
  }
};

export default AuthReducer;
