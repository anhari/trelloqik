import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class TodoItemComponent extends Component {
  @action
  destroyTodo(todo) {
    todo.destroyRecord();
  }

  @action
  promoteTodo(todo) {
    switch (todo.status) {
      case 'On Deck':
        todo.status = 'In Progress';
        break;
      case 'In Progress':
        todo.status = 'Done';
        break;
      default:
        todo.status = 'Done';
        break;
    }
    todo.save();
  }
}
