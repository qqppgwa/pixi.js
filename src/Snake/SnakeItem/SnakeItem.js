import React from 'react';

import { useState } from 'react';
import { Sprite, useTick, useApp } from '@inlet/react-pixi';

let i = 0;

const SnakeItem = () => {
  const app = useApp();
  // console.log(app);

  // states
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotation, setRotation] = useState(0);

  useTick((delta) => {
    i += 0.05 * delta;

    setX(Math.floor((Math.random() * 800) / 10));
    setY(i);
    setRotation(-10 + Math.sin(i / 10 + Math.PI * 2) * 10);
  });

  return (
    <Sprite
      image="./Snake.png"
      anchor={0.5}
      x={x}
      y={y}
      rotation={rotation}
      width={50}
      height={50}
      alpha={0.3}
    ></Sprite>
  );
};

// export default withPixiApp(SnakeItem);
export default SnakeItem;
