import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskDetail'
})
export class TaskDetailPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
