import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Customer from "../../models/Customer";
import Swal from "sweetalert2";

function HeaderUser(props) {
  const navigate = useNavigate();

  const handleLogout = () => {
    Customer.logout()
      .then((response) => {
        Customer.deleteCookie("customer");
        Swal.fire({
          icon: "success",
          title: "Đăng xuất thành công",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          navigate("/");
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Đăng xuất thất bại",
        });
      });
  };
  let customer = Customer.getCookie("customer");
  customer = customer ? JSON.parse(customer) : "";

  if (customer) {
    return (
      <div className="col-lg-4 col-6 text-right">
        <h5 style={{ color: "green" }} className="m-0">
          <strong>
            <em>Welcome, {customer.name}</em>
          </strong>
        </h5>
        <button onClick={handleLogout} type="button" className="btn btn-danger">
          Log Out
        </button>
      </div>
    );
  }
  return (
    <div className="col-lg-4 col-6 text-right">
      <Link to="/login" type="button" className="btn btn-primary">
        Log In
      </Link>
      <h5 style={{ color: "green" }} className="m-0">
        <strong>
          <em>{customer.name}</em>
        </strong>
      </h5>
    </div>
  );
}

export default HeaderUser;