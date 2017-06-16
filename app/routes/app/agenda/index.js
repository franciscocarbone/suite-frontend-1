import Ember from "ember";

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      eventos: this.store.findAll("evento"),
      mostrarFinesDeSemana: true
    });
  }
});
