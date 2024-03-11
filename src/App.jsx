import React from 'react';
import './App.css';
import './components/Heading';
import Heading from './components/Heading';
import Subheading from './components/Subheading';
import Input from './components/Input';

function App() {

  return (
    <>
      <div className='p-3'>
        <Heading />
      </div>
      <div className='p-3'>
        <Subheading />
      </div>
      <div>
        <Input />
      </div>
    </>
  )
}

export default App
