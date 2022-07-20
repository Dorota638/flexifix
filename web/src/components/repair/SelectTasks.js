import { Table } from '@mantine/core';
import React from 'react'
import { useStore } from '../../Store';

function SelectTasks() {
    const addToCart = useStore((state) => state.addToCart);
    const tasks = useStore(({ tasks }) => tasks);
    console.log("tasks", tasks);
    const task = tasks?.map((task) => (
        <tr
            key={task.id}
            onClick={() => {
                addToCart(task);
            }}
        >
            <td>{task?.name}</td>
        </tr>
    ));
    return (
        <Table className='mt-10'>
            <thead>
                <tr>
                    <th>task name</th>
                </tr>
            </thead>
            <tbody>{task}</tbody>
        </Table>
    )
}

export default SelectTasks