
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const GET_FRIENDS = "GET_FRIENDS"
export const LOADING = "LOADING"
export const ERROR = "ERROR"



export const getFriendList = () => {
    return (dispatch) => {
      dispatch({type: LOADING})
      axiosWithAuth().get('http://localhost:5000/api/friends')
        .then( response => {
          dispatch({type: GET_FRIENDS, friends: response.data})
        })
        .catch( err => {
          dispatch({type: ERROR, errorMessage: "Are you sure you have friends?"})
        })
    }
  }