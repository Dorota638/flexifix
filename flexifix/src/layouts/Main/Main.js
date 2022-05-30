import React from 'react'
import Todo from "../../components/ToDoList/ToDo"
import NewRepairForm from '../../components/forms/NewRepairForm'

export default function Main() {
    return (
        <div>
            <NewRepairForm />
            <Todo />
        </div>
    )
}

