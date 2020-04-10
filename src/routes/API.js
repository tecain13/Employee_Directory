import { useEffect, useContext } from 'react';
import { EmployeeAttributes } from "../components/EmployeeAttributes"
import axios from "axios"

export function useGet(url) {
    const { employees, allEmployees, criteriaEmployees, visibleEmployees } = useContext(EmployeeAttributes)


    useEffect(() => {
        async function retrieveEmployees() {
            try {
                const response = await axios.get(url)
                // using employees to store a copy of employees that won't be edited
                allEmployees(response.data.results)
                // retrieve a sample of all employees who can be used for sorting and filtering
                visibleEmployees(response.data.results)
            }
            catch (error) {
                console.log("error ocurred getting info from the API: ", error)
            }
        }
        retrieveEmployees()
    }, [])

    // sort options
    function sortEmployees(sort) {
        switch (sort) {
            case "name":
                FirstNameSort()
                break
            case "age":
                AgeSort()
                break
            default:
                console.log("sort does not match any cases")
        }
    }

    // will sort based on an employee's first name
    function FirstNameSort() {
        employees.sort(function (a, b) {
            if (a.name.first < b.name.first) {
                return -1;
            } else {
                return 1;
            }
        })

        visibleEmployees([...employees])
    }

    // sorts the employees by age.
    function AgeSort() {
        employees.sort(function (a, b) {
            return (a.dob.age - b.dob.age)
        })
        visibleEmployees([...employees])
    }

    return { criteriaEmployees, sortEmployees }
}