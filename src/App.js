import { useState } from 'react';
import * as PIXI from 'pixi.js';
import { Stage, Container, Sprite, useTick } from '@inlet/react-pixi';
import Bunny from './Bunny';
import Snake from './Snake';

// const app = new PIXI.Application({ backgroundColor: 0xeef1f5 });
// document.body.appendChild(app.view);
function App() {
  return <Snake />;
}

export default App;
