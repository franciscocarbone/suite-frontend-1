import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-detalle/autor-de-la-tarea', 'Integration | Component | suite detalle/autor de la tarea', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{suite-detalle/autor-de-la-tarea}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#suite-detalle/autor-de-la-tarea}}
      template block text
    {{/suite-detalle/autor-de-la-tarea}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
