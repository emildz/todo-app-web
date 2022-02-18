import {List} from 'antd';


const tasks = [
    {id:1, task: 'Buy Milk', done: false},
    {id:2, task: 'Buy Beer', done: false},
    {id:3, task: 'Buy Trulys', done: false},
    {id:4, task: 'Buy Wine', done: false},
    {id:5, task: 'Buy Paper Towels', done: false},
]

export default function TaskList(){
    return (
        <List
        bordered
        dataSource={tasks}
        renderItem={item => (
            <List.Item>{item.task} </List.Item>
        )}
        />
    )
}