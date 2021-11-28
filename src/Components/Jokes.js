import React from "react";
import styled from "styled-components";
import PreviousJokes from "./PreviousJokes";
import Spinner from "./Spinner";

const JokeItem = styled.div`
  padding: 36px;
`;

const Header = styled.div`
  padding: 8px;
  font-weight: bold;
`;

const Jokes = ({ recievedJoke, jokesList, isLoading }) => {
  return (
    <>
      {isLoading ? <Spinner /> : <JokeItem>{recievedJoke}</JokeItem>}
      <Header>Previous dad jokes:</Header>
      {jokesList && jokesList.length !== 0 ? (
        jokesList.map((item) => <PreviousJokes item={item} />)
      ) : (
        <>
          <div>Nothing yet, ask me to give it to you.</div>
        </>
      )}
    </>
  );
};

export default Jokes;
