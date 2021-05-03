import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TodosController extends Controller {
  @service store;

  @action
  toggleOrientation() {
    document.getElementById('kanban-container').classList.toggle('flex-col');
  }

  @action
  addTodo(title) {
    const newTodo = {
      title,
      status: 'On Deck',
    };
    this.store.createRecord('todo', newTodo).save();
    document.getElementById('title').value = '';
  }
}
