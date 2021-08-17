import React from 'react';
import SnakeItem from './SnakeItem';

import { Stage, Container } from '@inlet/react-pixi';

const Snake = () => {
  return (
    <Stage width={800} height={600}>
      <Container x={50} y={50}>
        <SnakeItem />
      </Container>
    </Stage>
  );
};

export default Snake;
