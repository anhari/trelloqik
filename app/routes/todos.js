import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TodosRoute extends Route {
  @service store;

  async model() {
    return {
      onDeck: this.store.query('todo', {
        filter: { status: 'On Deck' },
      }),
      inProgress: this.store.query('todo', {
        filter: { status: 'In Progress' },
      }),
      done: this.store.query('todo', {
        filter: { status: 'Done' },
      }),
    };
  }
}
