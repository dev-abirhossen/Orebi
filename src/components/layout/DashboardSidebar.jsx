import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { sidebarData } from "../../dummyData/sidebarData";
import Container from "../common/Container";

const DashboardSidebar = () => {
  const location = useLocation().pathname;
  return (
    <>
      <section>
        <Container>
          <ul className="w-58.5 flex flex-col gap-5 mb-35">
            {sidebarData.map((item, index) => (
              <li
                className="h-12.75 border-b border-b-gray4 last:border-b-0"
                key={index}
              >
                <NavLink
                  className={` text-base font-DMSans font-normal text-gray3 ${location === item.url ? "text-red-500" : "text-gray3"}`}
                  to={item.url}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="h-12.75 border-b border-b-gray4 last:border-b-0">
              <button className="text-base font-DMSans font-normal text-gray3 cursor-pointer">Logout</button>
            </li>
          </ul>
        </Container>
      </section>
    </>
  );
};

export default DashboardSidebar;
