import { CSSProperties, useMemo } from "react";
import { gcd } from "./utils";
import styled from "styled-components";

interface PartialProps {
  partial: number;
}

const COLORS = [
  "#ef4444",
  "#f59e0b",
  "#65a30d",
  "#06b6d4",
  "#6366f1",
  "#d946ef",
  "#881337",
];

export default function PartialsLine({ partial }: PartialProps) {
  const partials = useMemo(() => findPartials(partial), [partial]);

  return (
    <Wrapper>
      <Label>{partial}</Label>
      {partials.map((n, idx) => (
        <Partial
          key={idx}
          style={
            {
              "--left-percentage": `${(100 * n) / partial}%`,
              backgroundColor: COLORS[(partial - 2) % COLORS.length]
            } as CSSProperties
          }
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  text-align: left;
  height: 50px;
`;

const Label = styled.p`
  position: absolute;
  font-size: 1.44rem;
  font-weight: 700;
  top: 0;
  bottom: 0;
  height: min-content;
  margin-top: auto;
  margin-bottom: auto;
`;

const Partial = styled.div`
  height: 100%;
  width: 50px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 2rem;
  font-weight: 700;
  position: absolute;
  left: var(--left-percentage);
  transform: translateX(-50%);
`;

function findPartials(partial: number): number[] {
  const partials = [];
  let candidate = 1;
  while (candidate < partial) {
    if (gcd(candidate, partial) === 1) partials.push(candidate);
    candidate++;
  }
  return partials;
}
