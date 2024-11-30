"use client";

import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import useRandomInterval from "../hooks/useRandomInterval";

const random = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min;

const range = (start: number, end?: number, step = 1): number[] => {
  const output: number[] = [];
  if (end === undefined) {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

interface Sparkle {
  id: string;
  createdAt: number;
  color: string;
  size: number;
  style: React.CSSProperties;
}

interface SparklesProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: string;
  children: React.ReactNode;
}

const DEFAULT_COLOR = "#FF4800";

const generateSparkle = (color: string): Sparkle => ({
  id: String(random(10000, 99999)),
  createdAt: Date.now(),
  color,
  size: random(10, 30),
  style: {
    top: `${random(0, 100)}%`,
    left: `${random(0, 100)}%`,
  },
});

const Sparkles: React.FC<SparklesProps> = ({
  color = DEFAULT_COLOR,
  children,
  ...delegated
}) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>(() =>
    range(8).map(() => generateSparkle(color))
  );

  const prefersReducedMotion = usePrefersReducedMotion();

  useRandomInterval(
    () => {
      const sparkle = generateSparkle(color);
      const now = Date.now();
      setSparkles((prev) => [
        ...prev.filter((sp) => now - sp.createdAt < 750),
        sparkle,
      ]);
    },
    prefersReducedMotion ? null : 40,
    prefersReducedMotion ? null : 450
  );

  return (
    <Wrapper {...delegated}>
      {sparkles.map((sparkle) => (
        <Sparkle key={sparkle.id} {...sparkle} />
      ))}
      <ChildWrapper>{children}</ChildWrapper>
    </Wrapper>
  );
};

interface SparkleProps {
  size: number;
  color: string;
  style: React.CSSProperties;
}

const Sparkle: React.FC<SparkleProps> = ({ size, color, style }) => {
  const path =
    "M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z";

  return (
    <SparkleWrapper style={style}>
      <SparkleSvg width={size} height={size} viewBox="0 0 68 68" fill="none">
        <path d={path} fill={color} />
      </SparkleSvg>
    </SparkleWrapper>
  );
};

const comeInOut = keyframes`
  0% { transform: scale(0); }
  50% { transform: scale(1); }
  100% { transform: scale(0); }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(180deg); }
`;

const Wrapper = styled.span`
  display: inline-block;
  position: relative;
`;

const SparkleWrapper = styled.span`
  position: absolute;
  display: block;
  z-index: 2; /* Ensure sparkles appear above */
  animation: ${comeInOut} 700ms forwards;
`;

const SparkleSvg = styled.svg`
  display: block;
  animation: ${spin} 1000ms linear;
`;

const ChildWrapper = styled.strong`
  position: relative;
  z-index: 1; /* Ensure it's below the sparkles */
  font-weight: bold;
`;

export default Sparkles;
