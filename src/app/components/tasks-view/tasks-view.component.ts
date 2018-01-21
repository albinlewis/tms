import { TaskDataService } from './../../services/task-data-service';
import { Task } from './../../models/task';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';




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
  tasksAll: Task[]

  notes: String[];
  task: Task = new Task();
  selectedTask: Task;
  tasktitle: String;
  openCollapse = false;
  status = false;

  showT = true;
  showD = false;
  showDa = false;
  showF = false;
  showA = false;
  showAll = false;

  title: String;
  description: String;
  category: String;



  constructor(private taskDataService: TaskDataService, public dialog: MatDialog, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.taskDataService.activeTask.subscribe((activeTask: Task) => {
      this.selectedTask = activeTask;
      if (activeTask) {
        this.notes = activeTask.notes;
        this.tasktitle = activeTask.title;
      } else {
        this.notes = [];
      }
    });
    this.updateArrays();
  }

  onselect(task: Task): void {
    // this.selectedTask = task;

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
      data: { title: this.title, description: this.description, category: this.category }
    });

    await dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.title = result.title;
      this.description = result.description;
      this.category = result.category;

      let newtask = new Task({
        title: this.title,
        description: this.description,
        category: this.category,
        createdAt: Date.now()
      });
      console.log(newtask);
      if (newtask === null) {
        this.snackBar.open('Task', 'Error!!!', {
          duration: 4000,
        });
      } if(newtask.title !== '') {
        this.snackBar.open(String(newtask.title), 'created!!!', {
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
    this.tasksNotAssigned = this.tasks.filter(tasks => tasks.category === "" || tasks.category === null);
  }

  onAddTask(task: Task) {
    this.taskDataService.addTask(task)
      .subscribe((t) => {
        this.tasks.push(t);
      });
    // this.task = new Task();
  }
  onDeleteTask(task) {
    this.taskDataService.deleteTask(task._id).subscribe(() => { });
    this.openCollapse = false;
    this.tasks.splice(this.tasks.findIndex(function (element) { return element === task }), 1);
    this.snackBar.open(task.title, 'Deleted', {
      duration: 4000,
    });    
  }



  onTimeReset(task) {
    this.taskDataService.updateTask(task)
      .subscribe(t => {
        task.time = 0;
      });
      this.snackBar.open(task.title, 'Time Reset to 0', {
          duration: 4000,
        }); 
  }

  onupdateTask(task: Task) {
    this.taskDataService.updateTask(task)
      .subscribe(t => {
        task = t;
      });
  }

  getTasks() {
    this.taskDataService.getTasks()
      .subscribe(tasks => {
        this.tasks = tasks;
      });
  }

  showToDo() {
    this.tasksToDo = this.tasks.filter(tasks => tasks.done === false);
    console.log(this.tasksToDo);
    this.showT = true;
    this.showD = false;
    this.showDa = false;
    this.showF = false;
    this.showAll = false;

  }

  showDone() {
    this.tasksDone = this.tasks.filter(tasks => tasks.done === true);
    console.log(this.tasksDone);
    this.showT = false;
    this.showD = true;
    this.showDa = false;
    this.showF = false;
    this.showA = false;
    this.showAll = false;
  }

  showDaily() {
    this.tasksDaily = this.tasks.filter(tasks => tasks.category === 'Daily');
    console.log(this.tasksDaily);
    this.showT = false;
    this.showD = false;
    this.showDa = true;
    this.showF = false;
    this.showA = false;
    this.showAll = false;
  }

  showFavorite() {
    this.tasksFavorite = this.tasks.filter(tasks => tasks.category === "Favorite");
    console.log(this.tasksFavorite);
    this.showT = false;
    this.showD = false;
    this.showDa = false;
    this.showF = true;
    this.showA = false;
    this.showAll = false;
  }
  showNotAssigned() {
    this.tasksNotAssigned = this.tasks.filter(tasks => tasks.category === "" || tasks.category === null);
    console.log(this.tasksNotAssigned);
    this.showT = false;
    this.showD = false;
    this.showDa = false;
    this.showF = false;
    this.showA = true;
    this.showAll = false;
  }
  showTAll() {
    this.tasksAll = this.tasks;
    console.log(this.tasksAll);
    this.showT = false;
    this.showD = false;
    this.showDa = false;
    this.showF = false;
    this.showA = false;
    this.showAll = true;

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
    { value: 'Daily', view: 'Daily' },
    { value: 'Favorite', view: 'Favorite' }
  ];
  status = [
    { value: 'false', view: 'ToDo' },
    { value: 'true', view: 'Done' }
  ];

  constructor(
    public dialogRef: MatDialogRef<AddDialog>,
    private taskDataService: TaskDataService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }


  onNoClick(): void {
    this.dialogRef.close();
  }
}