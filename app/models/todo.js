import Model, { attr } from '@ember-data/model';

export default class TodoModel extends Model {
  @attr title;
  @attr status;
  @attr('number') sequence;
}
