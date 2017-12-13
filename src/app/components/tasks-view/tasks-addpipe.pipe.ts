import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tasksAddpipe'
})
export class TasksAddpipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
