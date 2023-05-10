import "./App.css";
import styled from "styled-components";
import PartialsLine from "./PartialsLine";
import { useState } from "react";

function App() {
  const [numberOfPartials, setNumberOfPartials] = useState(4);
  const partials = Array.from({ length: numberOfPartials }).map(
    // We start from the second partial. The first partial is simply the open string.
    (_, idx) => idx + 2
  );

  return (
    <Wrapper>
      <TextWrapper>
        <Heading>String Partials</Heading>
        <p>Number of partials:</p>
        <Row>
          <button
            onClick={() =>
              setNumberOfPartials(Math.max(numberOfPartials - 1, 1))
            }
          >
            -
          </button>
          {numberOfPartials}
          <button onClick={() => setNumberOfPartials(numberOfPartials + 1)}>
            +
          </button>
        </Row>
      </TextWrapper>
      <String />
      {partials.map((partial) => (
        <PartialsLine partial={partial} key={partial} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TextWrapper = styled.div``;

const Row = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: max-content;
  font-size: 1.2rem;
`;

const Heading = styled.h1`
  font-size: 2rem;
  text-align: center;
`;

const String = styled.div`
  height: 4px;
  background-color: black;
  position: relative;
  margin-bottom: 8px;

  &::before,
  &::after {
    content: "";
    height: 32px;
    width: 4px;
    position: absolute;
    top: 2px;
    transform: translateY(-50%);
    background-color: black;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;

export default App;
