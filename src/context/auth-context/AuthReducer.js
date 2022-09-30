import { SIGNIN, SIGNUP, FORGOT_PASSWORD, RESET_PASSWORD } from "../types";

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
    case FORGOT_PASSWORD:
      return {
        ...prevState,
        message: payload,
      };
    case RESET_PASSWORD:
      return {
        ...prevState,
        userToken: payload,
      };
    default:
      return prevState;
  }
};

export default AuthReducer;
