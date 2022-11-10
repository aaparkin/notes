import React from "react";
import { Button, Typography } from "@mui/material";
import { PageTemplate } from "../../components/common/page-template";
import styled from "styled-components";

export const NotesPage = () => {
  return (
    <PageTemplate>
      <Header>
        <span><Typography >Заметки</Typography></span>
        <Button variant="outlined">Добавить</Button>
      </Header>
      <NotesPageContainer>
        <NotesGrid>
          {[
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          ].map((note) => (
            <Note key={note} />
          ))}
        </NotesGrid>
      </NotesPageContainer>
    </PageTemplate>
  );
};

const NotesPageContainer = styled.div`
  padding: 84px 16px 16px 16px;
`;
const Header = styled.div`
  background-color: #fff;
  padding: 16px 16px;
  border-bottom: 1px solid #ccc;
  width: 81%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NotesGrid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  gap: 2px;
  grid-template-columns: 1fr 1fr 1fr;
`;
const Note = styled.div`
  width: 100%;
  height: 200px;
  background-color: red;
`;
