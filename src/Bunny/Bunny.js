import React from 'react';

import { Stage, Container } from '@inlet/react-pixi';
import BunnyItem from './BunnyItem';

const Bunny = () => {
  return (
    <Stage>
      <Container x={150} y={150}>
        <BunnyItem />
      </Container>
    </Stage>
  );
};

export default Bunny;
