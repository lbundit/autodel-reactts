
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React, { Component } from "react";
import { CropData, CropType, getCropData } from './CropData.tsx';
import { CropTable } from './CropTable.tsx';

import cropList from './CropDB.json';

function App() {

  const cropData = cropList as CropData[];
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Auto Delete (Vite + React)</h1>
      <div>
      <p>
        { CropTable(cropData) }
      </p>
      </div>
    </>
  )
}

export default App
