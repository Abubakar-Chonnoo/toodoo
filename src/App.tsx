import React, { FC, useState, ChangeEvent } from 'react';
import './App.css';
import {ITask} from './Interfaces';
import Todo from './components/Todo';

const App: FC = () => {

  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'task')
      setTask(e.target.value)
    else
      setDeadline(Number(e.target.value));
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodo(todo.filter((task) => {
      return task.taskName !== taskNameToDelete
    }))
  };

  const addTask = (): void => {
    const newTask = {taskName: task, deadline: deadline};
    setTodo([...todo, newTask]);
    console.log(todo);
  }

  return (
    <div className='App'>
      <div className='header'>
        <div className='input-container'>
          <input type='text' placeholder='Task...' onChange={handleChange} name='task' value={task} />
          <input type='number' placeholder='Deadline (in days)...' onChange={handleChange} name='deadline' value={deadline} />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='todoList'>
        {todo.map((task: ITask, key: number) => {
          return <Todo key={key} task={task} completeTask={completeTask} />
        })}        
      </div>
    </div>
  )
};

export default App;