import { useState, useEffect } from 'react';
import {List} from 'antd';
import Task from './Task'


const fakeTasks = [
    {id:1, task: 'Buy Milk', done: false},
    {id:2, task: 'Buy Beer', done: false},
    {id:3, task: 'Buy Trulys', done: false},
    {id:4, task: 'Buy Wine', done: true},
    {id:5, task: 'Buy Paper Towels', done: false},
]

export default function TaskList(){
    const [tasks,setTasks] = useState(fakeTasks)
    
    
    useEffect(() => {
        fetch('https://much-todo-bc.uc.r.appspot.com/tasks')
        .then(response => response.json())
        .then(data => setTasks(data))
        .catch(alert)
    },[])

    console.log('here are my task state from API', tasks)
    return (
        <>
        <ul>
            {tasks && tasks.map(singleTask => {
                return (
                <li>{singleTask.task} </li>
                )
            }
            )}
            <li>item 2</li>
            <li>item 3</li>
        </ul>
        </>
    )
}
//   }      <List
//         bordered
//         dataSource={tasks}
//         renderItem={item => <Task item ={item} />}
//       />
//     )
// }