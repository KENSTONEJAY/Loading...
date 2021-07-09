import {LOGIN_REQUEST, SUCCESS, FAILURE,LOGOUT_REQUEST} from "./authTypes";
import API from "../utils/API";
export const authenticateUser =(username,password)=>{
    return dispatch =>{
        dispatch(loginRequest());
        API.login({
            username: username,
            password: password
        })
            .then((response)=>{
                console.log("in success",response.data);
                localStorage.setItem("username", response.data.user);
               dispatch(success({ username: response.data.user, isLoggedIn: true }));
            })
            .catch(err => {console.log(err);
                dispatch(failure())
            }
            );
    }
}
export const logoutUser = () => {
    return (dispatch) => {
      dispatch({
        type: LOGOUT_REQUEST,
      });
      localStorage.removeItem("username");
      dispatch(success(false));
    };
  };
const loginRequest =() =>{
    return {
        type: LOGIN_REQUEST
    };
};
const success =(isLoggedIn) =>{
    return {
        type: SUCCESS,
        payload: isLoggedIn
    };
};
const failure =() =>{
    return {
        type: FAILURE
    };
};