import React from 'react'
import Todo from "../../components/todolist/ToDo"
import NewRepairForm from '../../components/forms/NewRepairForm'

export default function Main() {
    return (
        <div>
            <NewRepairForm />
            <Todo />
        </div>
    )
}

