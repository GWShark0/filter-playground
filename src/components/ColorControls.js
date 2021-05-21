import styles from './ColorControls.module.css';

function handleChange(callback) {
  return function getTargetValue(event) {
    callback(event.target.valueAsNumber);
  };
}

const defaultRangeOptions = {
  type: 'range',
  min: 0,
  max: 2,
  step: 0.01,
};

export default function ColorControls(props) {
  const {
    brightness,
    contrast,
    gamma,
    saturation,
    onBrightnessChange,
    onContrastChange,
    onGammaChange,
    onSaturationChange,
    onReset,
  } = props;

  return (
    <div className={styles.controls}>
      <label className={styles.label}>Brightness</label>
      <input
        {...defaultRangeOptions}
        value={brightness}
        onChange={handleChange(onBrightnessChange)}
      />
      <label className={styles.label}>Contrast</label>
      <input
        {...defaultRangeOptions}
        value={contrast}
        onChange={handleChange(onContrastChange)}
      />
      <label className={styles.label}>Exposure</label>
      <input
        {...defaultRangeOptions}
        value={gamma}
        onChange={handleChange(onGammaChange)}
      />
      <label className={styles.label}>Saturation</label>
      <input
        {...defaultRangeOptions}
        value={saturation}
        onChange={handleChange(onSaturationChange)}
      />
      <button className={styles.button} onClick={onReset}>
        Reset
      </button>
    </div>
  );
}
