import React, { CSSProperties } from "react";
import { PageSidebar } from "../page-sidebar";
import styled from "styled-components";

interface IPageTemplateProps {
  children?: React.ReactElement | React.ReactElement[];
  contentAreaStyle?: CSSProperties;
}

export const PageTemplate: React.FC<IPageTemplateProps> = ({
  children,
  contentAreaStyle,
}) => {
  return (
    <PageContainer>
      <PageSidebar />
      <PageContentArea style={contentAreaStyle}>{children}</PageContentArea>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-shrink: 1;
`;

const PageContentArea = styled.div`
  height: 100%;
  width: 100%;
  flex-shrink: 1;
  overflow-y: auto;
`;
