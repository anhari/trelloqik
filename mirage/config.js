export default function () {
  this.namespace = 'api';

  this.resource('todos', { except: ['index'] });
  this.get('/todos', (schema, request) => {
    return schema.todos.where({
      status: request.queryParams['filter[status]'],
    });
  });
}
