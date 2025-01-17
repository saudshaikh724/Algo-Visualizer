import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './style.css';

import Button from '../../atoms/Button';
import Switch from '../../atoms/Switch';
import Menu from '../../molecules/Menu';

const AppControls = ({
  algorithm,
  onAlgorithmChange,
  onGenerateRandomArray,
  arraySize,
  onArraySizeChange,
  onToggleDarkMode,
  darkMode
}) => {
  return (
    <Fragment>
      <Menu
        placeholder="Sort Algorithm"
        items={[
          'Bubble Sort',
          'Selection Sort',
          'Insertion Sort'
        ]}
        selected={algorithm}
        onSelect={onAlgorithmChange}
      />
      
      <div className="AppControls__Size">
        <span>Size</span>
        <Menu
          placeholder="Array Size"
          items={['5', '10', '15', '20', '25', '30']}
          selected={String(arraySize)}
          onSelect={onArraySizeChange}
        />
      </div>
      
      <Button onClick={onGenerateRandomArray}>Random Elements</Button>

      <Switch
        label="Dark Mode"
        onSwitch={onToggleDarkMode}
        checked={darkMode}
      />
    </Fragment>
  );
};

AppControls.propTypes = {
  algorithm: PropTypes.string,
  onAlgorithmChange: PropTypes.func.isRequired,
  onGenerateRandomArray: PropTypes.func.isRequired,
  arraySize: PropTypes.number,
  onArraySizeChange: PropTypes.func.isRequired,
  onToggleDarkMode: PropTypes.func.isRequired,
  darkMode: PropTypes.bool
};

export default AppControls;
