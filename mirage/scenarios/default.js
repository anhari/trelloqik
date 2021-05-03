export default function (server) {
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  server.create('todo', { title: 'Buy Milk', status: 'Done' });
  server.create('todo', { title: 'Dog Bath' });
  server.create('todo', { title: 'Donate to UNICEF' });
  server.create('todo', { title: "Ponder life's meaning" });
  server.create('todo', {
    title:
      'Figure out why this.store.query does not update the UI via Ember Data',
    status: 'In Progress',
  });
  server.create('todo', {
    title:
      'Refactor query to make a single network request for all todos and filter it on the frontend (computed property?)',
    status: 'On Deck',
  });
}
