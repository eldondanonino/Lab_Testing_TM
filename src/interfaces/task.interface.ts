import {TaskState} from '../enum/task-state.enum';

export interface Task {
  name: string;
  id: number;
  state: TaskState;
}
