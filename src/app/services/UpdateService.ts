import {EventEmitter, Injectable} from '@angular/core';
import {Task} from '../models/task';

@Injectable()
export class UpdateService {
  tasksUpdated = new EventEmitter<Task[]>();

  constructor() {
  }


}
