
import React, { useState } from 'react';

import './App.css';
import Navbar from "./components/Navbar"
import Table from "./components/Table"
import { EmployeeAttributes } from "./components/EmployeeAttributes"

function App() {
  const [employees, allEmployees] = useState([]);
  const [criteriaEmployees, visibleEmployees] = useState([])

  return (
    <div className="App">
      <EmployeeAttributes.Provider value={{ employees, allEmployees, criteriaEmployees, visibleEmployees }}>
        <Navbar />
        <Table />
      </EmployeeAttributes.Provider>
    </div>
  );
}

export default App;