import React from "react";

export default function CharacterCard({data}) {
  return (
    <div>
      <h1>{data.name}</h1>
      <p>Species: {data.species}</p>
      <p>Gender: {data.gender}</p>
      <p>Status: {data.status}</p>
    </div>
  );
}
