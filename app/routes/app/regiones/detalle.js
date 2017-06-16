import Ember from "ember";

export default Ember.Route.extend({
  breadCrumb: {
    title: "Detalle"
  },

  afterModel(model) {
    let columnas = [
      {
        title: "Nombre",
        propertyName: "nombre"
      },
      {
        title: "Acciones",
        template: "tablas/distritos/acciones"
      }
    ];

    model.set("columnas", columnas);

    let numero = model.get("numero");
    this.set("breadCrumb", { title: `Detalle de la región ${numero}` });

    return this.get("store").findAll("localidad");
  }
});
