import React, { useState, useContext } from 'react';
import { useGet } from "../routes/API.js"
import "./Table.css"
import Button from "./Button.js"
import { EmployeeAttributes } from './EmployeeAttributes.js';

function Table() {
    // https://randomuser.me/documentation#howto
    //open source user info api

    const [url] = useState("https://randomuser.me/api/?results=20")

    const { sortEmployees } = useGet(url);
    // contains the employees that meet a certain criteria
    const { criteriaEmployees } = useContext(EmployeeAttributes)

    return (
        <table>
            <thead>
                <tr>
                    <td onClick={() => sortEmployees("name")}><Button>First Name</Button></td>
                    <td>Last Name</td>
                    <td>User ID</td>
                    <td>Gender</td>
                    <td>E-mail</td>
                    <td onClick={() => sortEmployees("age")}><Button>Age</Button></td>
                </tr>
            </thead>
            <tbody>
                {criteriaEmployees.map(employee => {
                    return (
                        <tr key={employee.login.uuid}>
                            <td>{employee.name.first}</td>
                            <td>{employee.name.last}</td>
                            <td>{employee.login.uuid}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.email}</td>
                            <td>{employee.dob.age}</td>
                        </tr>
                    )
                }
                )}
            </tbody>
        </table>
    )
}
export default Table;