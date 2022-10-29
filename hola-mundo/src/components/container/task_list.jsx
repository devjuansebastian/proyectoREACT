import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
import '../../styles/task.scss'
import TaskForms from '../pure/forms/taskForms';

const TaskListComponent = () => {
    const defaultTask = new Task('Example', 'desription0', false, LEVELS.BLOCKING);
    const defaultTask1 = new Task('Example1', 'tDescription1', true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'Description2', false, LEVELS.URGENTE);
    const defaultTask3 = new Task('Example3', 'Description3', true, LEVELS.NORMAL);


    const [tasks, setTasks] = useState([defaultTask, defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("Task State has been modified")
        setLoading(false)
        return () => {
            console.log("Task List component is going to unmount...")
        };
    }, [tasks]);


    function completeTask(task) {

        console.log("Complete this task ", task)
        const index = tasks.indexOf(task);

        // usar siempre una variable temporal 
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;

        //We update the state of the component and it will update the 
        //iteration of the taskin order to show the task updated

        setTasks(tempTasks);
    }

    function removeTask(task) {
        console.log('Delete this Task:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index, 1);
        setTasks(tempTasks);
    }

    function addTask(task){
        console.log('Delete this Task:', task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);    

    }

    const changeCompleted = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
    }

    return (
        <div>
            <div className='col-12'> </div>
            <div className='card'>
                {/* Card header */}
                <div className='card-header p-3'>
                    <h5>
                        Your Tasks:
                    </h5>
                </div>
                {/* Card body */}
                <div className='card-body' data-mbd-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
                    <table>
                        <thead>
                            <tr>
                                <th scope='col'> Title </th>
                                <th scope='col'> Description </th>
                                <th scope='col'> Priority </th>
                                <th scope='col'> Actions </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* iterar sobre una lista de tareas */}
                            {tasks.map((task, index) => {
                                return (
                                    <TaskComponent
                                        key={index}
                                        task={task}
                                        complete={completeTask}
                                        remove={removeTask}>
                                    </TaskComponent>
                                )
                            })}

                        </tbody>

                    </table>
                </div>

                
            </div>

            <TaskForms add={addTask}></TaskForms>

        </div>
    );
};

export default TaskListComponent;
