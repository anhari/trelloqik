export default function (server) {
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  server.create('todo', { title: 'Buy Milk', status: 'Done' });
  server.create('todo', { title: 'Dog Bath', status: 'In Progress' });
  server.create('todo', { title: 'Donate to UNICEF' });
  server.create('todo', { title: "Ponder life's meaning" });
}
