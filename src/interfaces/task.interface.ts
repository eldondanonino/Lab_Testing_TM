import {TaskState} from '../enums/task-state.enum';

export interface Task {
  name: string;
  id: number;
  state: TaskState;
}
