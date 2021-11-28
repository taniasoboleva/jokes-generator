import React, { useContext, useEffect, useState } from "react";
import * as axios from "axios";
import styled from "styled-components";
import Jokes from "./Jokes";
import { GlobalContext } from "../context/GlobalState.js";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 50%;
`;

const Header = styled.div`
  font-size: 38px;
  padding-bottom: 24px;
  @media (max-width: 800px) {
    max-width: 300px;
    font-size: 24px;
  }
`;

const GiveMeButton = styled.button`
  border: 1px solid black;
  border-radius: 20px;
  background: transparent;
  padding: 12px;
  font-size: 20px;
  cursor: pointer;
  @media (max-width: 800px) {
    padding: 6px;
    font-size: 12px;
  }

  &:hover {
    border-color: lightpink;
    background: lightpink;
    color: black;
    transition: 0.5s;
  }
`;

const Body = () => {
  const { jokesList } = useContext(GlobalContext);
  const url = "https://icanhazdadjoke.com/";
  const [recievedJoke, setRecievedJoke] = useState(null);
  const [recievedObject, setRecievedObject] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getJoke = () => {
    setIsLoading(true);
    axios
      .get(url, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        setRecievedJoke(response.data.joke);
        setIsLoading(false);
        setRecievedObject(response.data);
      });
  };

  useEffect(() => {
    if (recievedObject) {
      jokesList.push(recievedObject);
    }
    if (jokesList.length > 5) {
      jokesList.shift();
    }
  }, [recievedObject]);

  return (
    <ContentWrapper>
      <Header>Want to hear a dad joke?</Header>
      <GiveMeButton alt="button" onClick={getJoke}>
        Give it to me!
      </GiveMeButton>
      <Jokes
        recievedJoke={recievedJoke}
        jokesList={jokesList}
        isLoading={isLoading}
      />
    </ContentWrapper>
  );
};

export default Body;
