import { Container, Stage, Sprite, withFilters } from '@inlet/react-pixi';
import { AdjustmentFilter } from '@pixi/filter-adjustment';
import * as PIXI from 'pixi.js';
import { useState } from 'react';
import { useWindowSize } from 'react-use';

import styles from './App.module.css';
import ColorControls from './components/ColorControls';

import surfer from './assets/surfer.mp4';

const texture = PIXI.Texture.from(surfer);
const video = texture.baseTexture.resource.source;
video.loop = true;

const Filters = withFilters(Container, {
  adjust: AdjustmentFilter,
});

export default function App() {
  let { width } = useWindowSize();

  if (width > 800) {
    width = 800;
  }

  const height = width * (9 / 16);

  const [brightness, setBrightness] = useState(1);
  const [contrast, setContrast] = useState(1);
  const [gamma, setGamma] = useState(1);
  const [saturation, setSaturation] = useState(1);

  const handleColorReset = () => {
    setBrightness(1);
    setContrast(1);
    setGamma(1);
    setSaturation(1);
  };

  return (
    <div className={styles.app}>
      <Stage width={width} height={height}>
        <Filters adjust={{ brightness, contrast, gamma, saturation }}>
          <Sprite texture={texture} width={width} height={height} />
        </Filters>
      </Stage>
      <ColorControls
        brightness={brightness}
        contrast={contrast}
        gamma={gamma}
        saturation={saturation}
        onBrightnessChange={setBrightness}
        onContrastChange={setContrast}
        onGammaChange={setGamma}
        onSaturationChange={setSaturation}
        onReset={handleColorReset}
      />
    </div>
  );
}
