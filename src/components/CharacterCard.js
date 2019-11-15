import React from "react";
import styled from 'styled-components';

const DarkDiv = styled.div`
  background: green;
  color: #fff;
  text-align: center;
  border: 2px solid #222;
  margin: 16px 0;
`;

export default function CharacterCard({data}) {
  return (
    <DarkDiv>
      <h1>{data.name}</h1>
      <p>Species: {data.species}</p>
      <p>Gender: {data.gender}</p>
      <p>Status: {data.status}</p>
    </DarkDiv>
  );
}
