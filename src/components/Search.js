import React, { useState, useContext } from 'react';
import { EmployeeAttributes } from './EmployeeAttributes.js';


function Search() {
    // stores the characters entered into the search bar
    const [search, setSearch] = useState("")
    const { employees, visibleEmployees } = useContext(EmployeeAttributes)

    function updateSearch({ target }) {

        const searchTerm = target.value

        setSearch(searchTerm)
        // filters the employees based on search bar

        const filteredEmployees = employees.filter(function (employee) {
            // Looks at every employee's first name, sets the name to lowercase, 
            // ... if first name contains searched characters, put it on the DOM
            // ... if not, remove it
            return employee.name.first.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ? true : false
        })
        visibleEmployees([...filteredEmployees])
    }

    return (
        <input type="text" onChange={updateSearch} value={search}></input>
    )
}
export default Search;