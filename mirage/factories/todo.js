import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  status: 'On Deck',

  title(i) {
    return `Todo ${i}`;
  },

  sequence(i) {
    i;
  },
});
