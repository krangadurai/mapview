import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { googleLogout } from '@react-oauth/google';
import { setLogout } from "../../app/reducer";

const Logout = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const logout = () => {
    googleLogout(); // Perform necessary Google logout actions
    dispatch(setLogout()); // Dispatch the logout action

    history.push('/Login'); // Redirect to "/Login" route
  };

  return (
  <button onClick={logout} className="dropdown-item" to="/Dashboard">
                    <i className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i>{" "}
                    <span className="align-middle" data-key="t-logout">
                      Logout
                    </span>
    </button>);
};

export default Logout;
