import React from 'react';
import { useState } from 'react';
import { Sprite, useTick } from '@inlet/react-pixi';

let i = 0;
const BunnyItem = () => {
  // states
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotation, setRotation] = useState(0);

  useTick((delta) => {
    i += 0.05 * delta;

    setX(Math.sin(i) * 100);
    setY(Math.sin(i / 1.5) * 100);
    setRotation(-10 + Math.sin(i / 10 + Math.PI * 2) * 10);
  });

  return (
    <Sprite
      image="./bunny.png"
      anchor={0.5}
      x={x}
      y={y}
      rotation={rotation}
    ></Sprite>
  );
};

export default BunnyItem;
