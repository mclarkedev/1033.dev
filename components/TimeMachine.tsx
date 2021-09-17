import React from 'react';

interface TimeMachineProps {
  width?: number | string;
  height?: number | string;
}

export default function TimeMachine({
  width = 360,
  height = 722,
}: TimeMachineProps) {
  return (
    <svg
      width="678"
      height="517"
      viewBox="0 0 678 517"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M549.389 505.143C619.917 364.24 565.907 194.362 428.753 125.711C291.6 57.0607 123.241 115.633 52.7129 256.537"
        stroke="black"
      />
      <rect y="257.029" width="53.3243" height="255.791" fill="#F8F8F8" />
      <ellipse
        cx="52.7134"
        cy="258.652"
        rx="11.0767"
        ry="11.9507"
        fill="black"
      />
      <ellipse
        cx="542.569"
        cy="504.101"
        rx="11.0767"
        ry="11.9507"
        fill="#00FF47"
      />
    </svg>
  );
}
