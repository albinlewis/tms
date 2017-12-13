import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { isNull } from 'util';

import { ApiService } from './api-service';
import { Task } from '../models/task';

@Injectable()
export class TaskDataService {

    constructor(private taskApi: ApiService) { }

    /**
     * used to get all tasks from the database
     */
    getTasks(): Observable<Task[]> {
        return this.taskApi.getAllTasks();
    }

    /**
     * used to get a single task from the database
     * @param _id 
     */
    getTask(_id: String): Observable<Task> {
        return this.taskApi.getTaskById(_id);
    }

    /**
     * used to create a new task in the database
     * @param task 
     */
    addTask(task: Task): Observable<Task> {
        return this.taskApi.createTask(task);
    }

    /**
     * used to delete a task from the database
     * @param _id 
     */
    deleteTask(_id: String): Observable<Task> {
        return this.taskApi.deleteTaskById(_id);
    }

    /**
     * used to update a task in the database
     * @param task 
     */
    updateTask(task: Task): Observable<Task> {
        return this.taskApi.updateTaskById(task);
    }

    // TODO - add more functions to handle data manipulation

}
