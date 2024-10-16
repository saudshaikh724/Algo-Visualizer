import React, { Component } from 'react';
import './style.css';
// Sub components
import ColorKey from '../../molecules/ColorKey';
import SortInfo from '../../molecules/SortInfo';
class SortVisualizer extends Component {

  render() {
    return (

      
      <div className="SortVisualizer">
        
       <ColorKey {...this.props.colorKey} />
        <SortInfo {...this.props.desc} />
      </div>
    );
  }
}

export default SortVisualizer;
