import { accountActionTypes } from "./types";
import axios from "axios";

export const signInAction = ({ email, password }: any, history: any) => async (dispatch: any) => {
      try {
        const res = await axios.post(`${URL}/signin`, { email, password });
        dispatch({ type: accountActionTypes.AUTHENTICATED });
        localStorage.setItem('user', res.data.token);
        history.push('/#dashboard');
      } catch(error) {
        dispatch({
          type: accountActionTypes.AUTHENTICATION_ERROR,
          payload: 'Invalid email or password'
        });
      }
};
