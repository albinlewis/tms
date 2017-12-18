import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/Rx';
import { isNull } from 'util';

import { ApiService } from './api-service';
import { Task } from '../models/task';

@Injectable()
export class TaskDataService {

    activeTask: BehaviorSubject<Task> = new BehaviorSubject(null);
    timerState: BehaviorSubject<Number> = new BehaviorSubject(0);

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
    timerHelper(oldTask: Task, newTask: Task, timerState: Number) {

        if (oldTask != null) {
            let oldT_update: Task = oldTask;
            oldT_update.active = false;
            oldT_update.time = Number(timerState);

            let newT_update: Task = newTask;
            newT_update.active = true;

            this.timerState.next(newTask.time);
            this.activeTask.next(newT_update);
            this.taskApi.updateTaskById(oldT_update).subscribe(() => { });
            this.taskApi.updateTaskById(newT_update).subscribe(() => { });
        }
        else {
            let newT_update: Task = newTask;
            newT_update.active = true;

            this.timerState.next(newTask.time);
            this.activeTask.next(newTask);
            this.taskApi.updateTaskById(newT_update).subscribe(() => { });
        }
    }

    addNote(activeTask: Task, note: String) {
        var T_update = activeTask;
        T_update.notes.push(note);
        this.updateTask(T_update).subscribe(() => { });
    }
}
