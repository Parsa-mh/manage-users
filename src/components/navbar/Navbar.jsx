import React from "react";
import Search from "./search";
import colors from "../../helpers/theme";
import { FaAddressCard } from "react-icons/fa";
const Nav = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-sm w-100 shadow-lg mb-2">
      <div className="d-flex flex-row justify-content-around w-100 align-items-center container">
        <Search />
        <div className="logo-mtn d-flex flex-row align-items-center navbar-brand flex-grow-1" dir="rtl">
          <FaAddressCard className="ms-2" style={{ color: colors.Purple, fontSize: 25 }} />
          <h2>وب اپلیکیشن مدیریت{" "}<span style={{ color: colors.Purple }}>مخاطبین</span></h2>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
