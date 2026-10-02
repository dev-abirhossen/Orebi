import React from "react";
import DashboardSidebar from "./DashboardSidebar";
import { Outlet } from "react-router-dom";
import Container from "../common/Container";
import BreadCrumb from "../common/BreadCrumb";

const DashboardLayout = () => {
  return (
    <section>
      <Container>
        <div>
          <BreadCrumb label={"My Account"} rootPage={"Home"}/>
        </div>
        <div className="flex gap-10">
          <DashboardSidebar />
          <Outlet />
        </div>
      </Container>
    </section>
  );
};

export default DashboardLayout;
