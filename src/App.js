import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { inc, dnc, mul, div } from './action/index';

const App = () => {
  const [value, setValue] = useState(0);
    const [selectedOption, setSelectedOption] = useState('INC'); 
  const dispatch = useDispatch();
  const countValue = useSelector((state) => state.change);
  const handleChange = (event) => {
    setValue(Number(event.target.value));
  };
  
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setValue(0); 
  };

  return (
    <div>
      <h1 className='my-2' style={{textAlign:'center',textDecoration:'overline'}}>INCREASE/DECREASE</h1>
      <div className='App'>
      
        <select  style={{color:' white',background:'black'}} id="selectUnit" className='my-3' onChange={handleSelectChange}>
          <option value="INC">Add by</option>
          <option value="DNC">Subtract by</option>
          <option value="MUL">Multiply by</option>
          <option value="DIV">Divide by</option>
        </select><br/>
          {"  "}<br/>
     
        <input
          id='input'
          name='num'
          type='number'
          className='num_inp'
          value={value}
          onChange={handleChange}
        /><br/>
    
       
        <div id="output" style={{color:' rgb(0, 0, 0)'}} className="output-box my-3">Value = {countValue}</div>
     
      <button className={`btn btn-primary plus ${selectedOption !== 'INC' ? 'disabled' : ''}`} title='INC' onClick={() => dispatch(inc(value))}>
          <span>+</span>
        </button><br/>
    
        <button className={`btn btn-primary minus ${selectedOption !== 'DNC' ? 'disabled' : ''}`} title='DNC' onClick={() => dispatch(dnc(value))}>
          <span>-</span>
        </button><br/>
      
        <button className={`btn btn-primary multiply ${selectedOption !== 'MUL' ? 'disabled' : ''}`} title='MUL' onClick={() => dispatch(mul(value))}>
          <span>*</span>
          
        </button><br/>
          {"  "}
        <button className={`btn btn-primary divide ${selectedOption !== 'DIV' ? 'disabled' : ''}`} title='DIV' onClick={() => dispatch(div(value))}>
          <span>%</span>
        </button>
      </div>
    </div>
  );
};
export default App;