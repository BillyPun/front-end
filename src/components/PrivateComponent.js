import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateComponent=()=>{
    const auth = localStorage.getItem('staffs');
    return auth?<Outlet />:<Navigate to="/staffsignup" />
}

export default PrivateComponent