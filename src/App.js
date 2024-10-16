import React, { Component } from 'react';
import './App.css';
import './AppDark.css';
import Bar from './components/Bar';
//import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import AppControls from './components/molecules/AppControls';
import TopBar from './components/organisms/TopBar';
import AppDrawer from './components/organisms/AppDrawer';
import SortVisualizer from './components/organisms/SortVisualizer';
import Footer from './components/molecules/Footer';
import Buttons from './components/atoms/Button';

import BubbleSort, {
  BubbleSortKey,
  BubbleSortDesc
} from './algorithms/BubbleSort';
import SelectionSort, {
  SelectionSortKey,
  SelectionSortDesc
} from './algorithms/SelectionSort';
import InsertionSort, {
  InsertionSortKey,
  InsertionSortDesc
} from './algorithms/InsertionSort';

  import LinearSearch, {
	LinearSearchKey,
	LinearSearchDesc
  } from './algorithms/LinearSearch';

  import BinarySearch, {
	BinarySearchKey,
	BinarySearchDesc
  } from './algorithms/BinarySearch';

class App extends Component {

  state = { 
    darkMode: false,
    arraySize: 10,
    appDrawerOpen: false,
    array: [], 
	arraySteps: [], 
	colorKey: [],
	colorSteps: [],
	currentStep: 0,
	delay: 500, 
	algorithm: 'Bubble Sort', 
	timeouts: [], 
	search: 100,
	
  };

  ALGORITHM = {
	'Linear Search': LinearSearch,
	'Binary Search': BinarySearch,
    'Bubble Sort': BubbleSort,
    'Selection Sort': SelectionSort,
    'Insertion Sort': InsertionSort,
  };

  ALGORITHM_KEY = {
	'Linear Search': LinearSearchKey,
	'Binary Search': BinarySearchKey,
    'Bubble Sort': BubbleSortKey,
    'Selection Sort': SelectionSortKey,
    'Insertion Sort': InsertionSortKey,
  };

  ALGORITHM_DESC = {
	'Linear Search': LinearSearchDesc,
	'Binary Search': BinarySearchDesc,
    'Bubble Sort': BubbleSortDesc,
    'Selection Sort': SelectionSortDesc,
    'Insertion Sort': InsertionSortDesc,
  };

  handleAlgorithmChange = (algorithm) => {
    this.setState({ algorithm }, this.generateRandomArray);
  };

  handleArraySizeChange = (size) => {
    size = Number(size);
    size = size > 100 ? 100 : size;
    size = size < 0 ? 0 : size;
    this.setState({ arraySize: size }, this.generateRandomArray);
  };

  toggleDarkMode = () => {
    this.setState((prevState) => ({ darkMode: !prevState.darkMode }));
  };

  toggleAppDrawer = () => {
    this.setState((prevState) => ({
      appDrawerOpen: !prevState.appDrawerOpen
    }));
  };

  componentDidMount() {
		this.generateRandomArray();
	}
	
	generateSteps = () => {
		let array = this.state.array.slice();
		let steps = this.state.arraySteps.slice();
		let colorSteps = this.state.colorSteps.slice();
		if (this.state.algorithm==='Binary Search'){
			this.arraySort();
		}
		
		this.ALGORITHM[this.state.algorithm](array, 0, steps, colorSteps,this.state.search);

		this.setState({
			arraySteps: steps,
			colorSteps: colorSteps,
		});
	};

	arraySort =() => {
		this.state.array.sort((a, b) => a-b);
	}

	clearTimeouts = () => {
		this.state.timeouts.forEach((timeout) => clearTimeout(timeout));
		this.setState({
			timeouts: [],
		});
	};

	clearColorKey = () => {
		let blankKey = new Array(this.state.arraySize).fill(0);

		this.setState({
			colorKey: blankKey,
			colorSteps: [blankKey],
		});
	};

	// Not traditional function because u have to bind every single function in the constructor
	generateRandomNumber = (min, max) => {
		return Math.floor(Math.random() * (max - min) + min);
	};

	generateRandomArray = () => {
		this.clearTimeouts();
		this.clearColorKey();
		const arraySize = this.state.arraySize;
		const temp = [];

		for (let i = 0; i < arraySize; i++) {
			temp.push(this.generateRandomNumber(50, 200));
		}

		this.setState(
			{
				array: temp,
				arraySteps: [temp],
				currentStep: 0,
			},
			() => {
				this.generateSteps();
			}
		);
	};

	changeArray = (index, value) => {
		let arr = this.state.array;
		arr[index] = value;
		this.setState(
			{
				array: arr,
				arraySteps: [arr],
				currentStep: 0,
			},
			() => {
				this.generateSteps();
			}
		);
	};

	previousStep = () => {
		let currentStep = this.state.currentStep;
		if (currentStep === 0) return;
		currentStep -= 1;
		this.setState({
			currentStep: currentStep,
			array: this.state.arraySteps[currentStep],
			colorKey: this.state.colorSteps[currentStep],
		});
	};

	nextStep = () => {
		let currentStep = this.state.currentStep;
		if (currentStep >= this.state.arraySteps.length - 1) return;
		currentStep += 1;
		this.setState({
			currentStep: currentStep,
			array: this.state.arraySteps[currentStep],
			colorKey: this.state.colorSteps[currentStep],
		});
	};

	start = () => {
		
		let steps = this.state.arraySteps;
		let colorSteps = this.state.colorSteps;

		this.clearTimeouts();

		let timeouts = [];
		let i = 0;

		while (i < steps.length - this.state.currentStep) {
			let timeout = setTimeout(() => {
				let currentStep = this.state.currentStep;
				this.setState({
					array: steps[currentStep],
					colorKey: colorSteps[currentStep],
					currentStep: currentStep + 1,
				});
				timeouts.push(timeout);
			}, this.state.delay*i);
			i++;
		}

		this.setState({
			timeouts: timeouts,
		});
		
	};
	

  render() {
    let theme = `App`;
    if (this.state.darkMode) theme += ` App_dark`;
    if (this.state.appDrawerOpen) theme += ` App_modal_open`;

    let bars = this.state.array.map((value, index) => (
			<Bar
				key={index}
				index={index}
				length={value}
				color={this.state.colorKey[index]}
				changeArray={this.changeArray}
			/>
			
		));

		
		
		
    const colorKey = this.ALGORITHM_KEY[this.state.algorithm];
    const desc = this.ALGORITHM_DESC[this.state.algorithm];

    const controls = (
      <AppControls
        onGenerateRandomArray={this.generateRandomArray}
        algorithm={this.state.algorithm}
        onAlgorithmChange={this.handleAlgorithmChange}
        arraySize={this.state.arraySize}
        onArraySizeChange={this.handleArraySizeChange}
        onToggleDarkMode={this.toggleDarkMode}
        darkMode={this.state.darkMode}
		search = {this.state.search}
      />
    );

    return (
      <div className={theme}>
        <TopBar
          drawerOpen={this.state.appDrawerOpen}
          toggleDrawer={this.toggleAppDrawer}
        >
          {controls}
        </TopBar>

        <AppDrawer
          open={this.state.appDrawerOpen}
          closeDrawer={this.toggleAppDrawer}
        >
          {controls}
        </AppDrawer>

        <main className="App__Body">
        <div className='frame'>
					<div className='barsDiv container card'>{bars}</div>
				</div>
				<Buttons 
		color="primary"
		variant="outlined"
		onClick={this.previousStep}>Prev</Buttons>
		

		<Buttons 
		id="prev"
		color="primary"
		variant="outlined"
		onClick={()=>{
			//this.changeArray()
			this.start()
			
			}}>Start</Buttons>

		<Buttons
		color="primary"
		variant="outlined"
		onClick={this.nextStep}>Next</Buttons>
				
          <SortVisualizer
            array={this.state.array}
            trace={this.state.trace}
            colorKey={colorKey}
            desc={desc}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
