import {TaskDataService} from './../../services/task-data-service';
import {Task} from './../../models/task';
import {Component, OnInit, Input, Inject} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {interval} from 'rxjs/observable/interval';
import {UpdateService} from '../../services/UpdateService';


@Component({
  selector: 'app-tasks-view',
  templateUrl: './tasks-view.component.html',
  styleUrls: ['./tasks-view.component.scss']
})
export class TasksViewComponent implements OnInit {
  @Input() tasks: Task[];
  tasksToDo: Task[];
  tasksDone: Task[];
  tasksDaily: Task[];
  tasksFavorite: Task[];
  tasksNotAssigned: Task[];
  tasksAll: Task[];

  notes: String[];
  task: Task = new Task();
  selectedTask: Task;
  tasktitle: String;
  openCollapse = false;
  status = false;

  showT = false;
  showD = false;
  showDa = false;
  showF = false;
  showA = false;
  showAll = false;
  showCategory: String;

  title: String;
  description: String;
  category: String;

  lockedTaskID: String = null;
  constructor(private taskDataService: TaskDataService, public dialog: MatDialog, public snackBar: MatSnackBar, private u: UpdateService) {
  }

  ngOnInit() {
    this.updateArrays();
    // this.taskDataService.activeTask.subscribe((activeTask: Task) => {
    //   this.selectedTask = activeTask;
    //   if (activeTask) {
    //     this.notes = activeTask.notes;
    //     this.tasktitle = activeTask.title;
    //   } else {
    //     this.notes = [];
    //   }
    // });
    this.showTAll();
    this.taskDataService.activeTask.subscribe((change) => {
      if (change) {
        this.lockedTaskID = change._id;
      }
      else{
        this.lockedTaskID = null;
      }
    })
  }

  onselect(task: Task): void {
    // this.selectedTask = task;

    if (this.taskDataService.activeTask.getValue()) {
      this.lockedTaskID = this.taskDataService.activeTask.getValue()._id;
    }

    if (this.selectedTask === task && this.openCollapse === true) {
      this.openCollapse = false;
      this.selectedTask = null;
    }
    else if (this.selectedTask !== task && this.openCollapse === true) {
      this.selectedTask = task;
      this.openCollapse = true;
    }
    else {
      this.selectedTask = task;
      this.openCollapse = true;
    }

    // if (this.openCollapse === true) {
    //   this.openCollapse = false;
    // }else {
    //   this.openCollapse = true;
    // }

  }

  async addDialogTask(): Promise<any> {
    let dialogRef = await this.dialog.open(AddDialog, {
      height: '300px',
      width: '540px',
      data: {title: this.title, description: this.description, category: this.category}
    });

    await dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      this.title = result.title;
      this.description = result.description;
      this.category = result.category;

      if (this.category === 'Daily') {
        let newtask = new Task({
          title: this.title,
          description: this.description,
          category: this.category,
          createdAt: Date.now(),
          interval: {
            hasInterval: true
          }
        });
      }

      let newtask = new Task({
        title: this.title,
        description: this.description,
        category: this.category,
        createdAt: Date.now(),
        interval: {
          hasInterval: false
        }
      });
      //console.log(newtask);
      if (newtask === null) {
        this.snackBar.open('Task', 'Error!!!', {
          duration: 4000,
        });
      }
      if (newtask.title !== '') {
        this.snackBar.open(String(newtask.title), 'Created', {
          duration: 4000,
        });
      }
      this.title = '';
      this.description = '';
      this.onAddTask(newtask);
      this.updateArrays();
    });
  }

  updateArrays() {
    this.tasksToDo = this.tasks.filter(tasks => tasks.done === false);
    this.tasksDone = this.tasks.filter(tasks => tasks.done === true);
    this.tasksDaily = this.tasks.filter(tasks => tasks.category === 'Daily');
    this.tasksFavorite = this.tasks.filter(tasks => tasks.category === 'Favorite');
    this.tasksNotAssigned = this.tasks.filter(tasks => tasks.category === '' || tasks.category === null);
  }

  dailyTask(tasksTodo: Array<Task>, tasksDaily: Array<Task>) {
    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    //console.log(yesterday);
    var today = new Date();
    today.setDate(today.getDate());
    //console.log(today);

    for (const task of tasksTodo) {
      for (const taskD of tasksDaily) {
        if (taskD.category === 'Daily' && yesterday < today) {
          tasksTodo.push(taskD);
        } else {
          //console.log('Already in Todo')
        }
      }
    }
    this.tasksToDo = tasksTodo;
    // console.log(this.tasksToDo);

  }

  onAddTask(task: Task) {
    this.taskDataService.addTask(task)
      .subscribe((t) => {
        this.tasks.push(t);
        this.u.tasksUpdated.emit(this.tasks);
      });
    // this.task = new Task();

  }

  onDeleteTask(task) {
    this.taskDataService.deleteTask(task._id).subscribe(() => {
      this.u.tasksUpdated.emit(this.tasks);
    });
    this.openCollapse = false;
    this.tasks.splice(this.tasks.findIndex(function (element) {
      return element === task;
    }), 1);
    this.snackBar.open(task.title, 'Deleted', {
      duration: 4000,
    });
  }

  onNoteReset(task){
    this.taskDataService.updateTask(task)
        .subscribe(t => {
          task.notes.length = 0;
        });
    this.snackBar.open(task.title, 'Notes cleared ', {
      duration: 4000,
    });
  }

  onTimeReset(task) {
    this.taskDataService.updateTask(task)
      .subscribe(t => {
        task.time = 0;
      });
    this.snackBar.open(task.title, 'Time reset to 0', {
      duration: 4000,
    });
  }

  onupdateTask(task: Task) {
    this.taskDataService.updateTask(task)
      .subscribe(t => {
        task = t;
      });

    this.u.tasksUpdated.emit(this.tasks);
  }

  getTasks() {
    this.taskDataService.getTasks()
      .subscribe(tasks => {
        this.tasks = tasks;
      });
  }

  showToDo() {

    this.tasksToDo = this.tasks.filter(tasks => tasks.done === false);
    this.tasksDaily = this.tasks.filter(tasks => tasks.category === 'Daily');

    this.tasksToDo.forEach(task => {
      this.tasksDaily.forEach(tasksD => {

        var sameT = this.tasksToDo.includes(tasksD);
        if (tasksD.category === 'Daily' && sameT !== true && tasksD.interval.hasInterval === true) {
         // console.log(tasksD);
         // console.log(task);
          this.tasksToDo.push(tasksD);
        } else {
         // console.log('Found, already in todo, not added');
        }
      });
    });
    console.log(this.tasksToDo);
    this.showT = true;
    this.showD = false;
    this.showDa = false;
    this.showF = false;
    this.showAll = false;
    this.showCategory = 'ToDo';
  }

  showDone() {
    this.tasksDone = this.tasks.filter(tasks => tasks.done === true);
    //console.log(this.tasksDone);
    this.showT = false;
    this.showD = true;
    this.showDa = false;
    this.showF = false;
    this.showA = false;
    this.showAll = false;
    this.showCategory = 'Done';

  }

  showDaily() {
    this.tasksDaily = this.tasks.filter(tasks => tasks.category === 'Daily');
    this.tasksDaily.forEach(task => {
      task.interval.hasInterval = true;
      this.onupdateTask(task);
    });
    //console.log(this.tasksDaily);
    this.showT = false;
    this.showD = false;
    this.showDa = true;
    this.showF = false;
    this.showA = false;
    this.showAll = false;
    this.showCategory = 'Daily';

  }

  showFavorite() {
    this.tasksFavorite = this.tasks.filter(tasks => tasks.category === 'Favorite');
    //console.log(this.tasksFavorite);
    this.showT = false;
    this.showD = false;
    this.showDa = false;
    this.showF = true;
    this.showA = false;
    this.showAll = false;
    this.showCategory = 'Favorite';

  }

  showTAll() {
    //console.log(this.tasksAll);
    this.showT = false;
    this.showD = false;
    this.showDa = false;
    this.showF = false;
    this.showA = false;
    this.showAll = true;
    this.showCategory = 'All';
  }

}


@Component({
  selector: 'add-dialog',
  templateUrl: 'addDialog.html',
})
export class AddDialog {

  NameFormControl = new FormControl('', [
    Validators.required,
  ]);
  category = [
    {value: 'Daily', view: 'Daily'},
    {value: 'Favorite', view: 'Favorite'}
  ];
  status = [
    {value: 'false', view: 'ToDo'},
    {value: 'true', view: 'Done'}
  ];

  constructor(public dialogRef: MatDialogRef<AddDialog>,
              private taskDataService: TaskDataService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }


  onNoClick(): void {
    this.dialogRef.close();
  }
}
