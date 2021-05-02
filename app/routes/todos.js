import Route from '@ember/routing/route';

export default class TodosRoute extends Route {
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
