import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs/Rx';

@Injectable()
export class InteractionService {

  isSelected: BehaviorSubject<boolean> = new BehaviorSubject(false);
  activeTask: BehaviorSubject<string> = new BehaviorSubject(null);

  constructor() { }
}
