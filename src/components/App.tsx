import React from "react";
import DesktopLayout from "./desktop/DesktopLayout";
import { WindowFrame } from "./window";

const windows = [
  {
    position: {
      x: 100,
      y: 100,
    },
    dimensions: {
      width: 100,
      height: 100,
    },
  },
  {
    position: {
      x: 500,
      y: 300,
    },
    dimensions: {
      width: 200,
      height: 200,
    },
  },
  {
    position: {
      x: 200,
      y: 200,
    },
    dimensions: {
      width: 200,
      height: 300,
    },
  },
];

export default function App() {
  return (
    <DesktopLayout>
      {windows.map((config, idx) => (
        <WindowFrame config={config} key={idx} />
      ))}
    </DesktopLayout>
  );
}
