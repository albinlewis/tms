import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Task } from '../models/task';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

    constructor(private http: Http) { }

    /**
     * returns all task objects for the frontend views
     */
    public getAllTasks() {
        return this.http
            .get(API_URL + '/api/tasks/find/all')
            .map(response => {
                const tasks = response.json();
                return tasks.map((task) => new Task(task));
            })
            .catch(this.handleError);
    }

    /**
     * returns a single task object for detail views
     * @param _id 
     */
    public getTaskById(_id: String){
        return this.http
            .get(API_URL + '/api/tasks/find/' + _id)
            .map(response => {
                return new Task(response.json());
            })
            .catch(this.handleError);
    }

    /**
     * creates a new task in the database
     * @param task 
     */
    public createTask(task: Task): Observable<Task> {
        return this.http
            .post(API_URL + '/api/tasks/create', task)
            .map(response => {
                return new Task(response.json())
            })
            .catch(this.handleError);
    }

    /**
     * updates the task model in the database 
     * @param task 
     */
    public updateTaskById(task: Task): Observable<Task> {
        return this.http
            .put(API_URL + '/api/tasks/update/' + task._id, task)
            .map(response => {
                return new Task(response.json());
            })
            .catch(this.handleError);
    }

    /**
     * deletes the task model from the database
     * @param _id 
     */
    public deleteTaskById(_id: String): Observable<Task> {
        return this.http
            .delete(API_URL + '/api/tasks/delete/' + _id)
            .map(response => null)
            .catch(this.handleError);
    }

    /**
     * simple error handler which just logs it to the console
     * @param error caught error 
     */
    private handleError(error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }

}
