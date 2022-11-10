import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import styled from "styled-components";
import { Typography } from "@mui/material";

interface IPageSidebarProps {
  children?: React.ReactElement;
}

type MenuLink = {
  path: string;
  name: string;
};

const menuLinks: MenuLink[] = [
  {
    name: "Войти",
    path: "/sign",
  },
  {
    name: "Главная",
    path: "/",
  },
];

export const PageSidebar: React.FC<IPageSidebarProps> = (props) => {
  return (
    <PageSidebarContainer>
      <ul className="page-sidebar__menu">
        {menuLinks.map((menuLink) => (
          <li className="page-sidebar__menu-item">
            <Link to={menuLink.path}><Typography>{menuLink.name}</Typography></Link>
          </li>
        ))}
      </ul>
    </PageSidebarContainer>
  );
};

const PageSidebarContainer = styled.div`
  background-color: #ebebeb;
  width: 20%;
  height: 100%;
  overflow-y: auto;
`;
