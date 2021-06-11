import React, { FC} from 'react';
import {ITask} from '../Interfaces';

interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
}

const Todo: FC<Props> = ({task, completeTask}: Props) => {
    return (
        <div>
            <div>
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            <button onClick={() => {completeTask(task.taskName)}}>X</button>
        </div>
    )
}

export default Todo;