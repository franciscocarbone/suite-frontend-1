import Ember from "ember";
import ENV from "suite-frontend/config/environment";

export default Ember.Service.extend({
  ajax: Ember.inject.service(),

  iniciar(url, nombre, parametros) {
    let base = ENV.API_URL;
    parametros = parametros || {};

    let promesa = this.get("ajax").raw(`${base}${url}`, {
      dataType: "binary",
      data: parametros,
      xhrFields: {
        responseType: "blob"
      }
    });

    promesa.then(data => {
      const blob_url = URL.createObjectURL(data.response);

      const dl = document.createElement("a");
      dl.href = blob_url;
      dl.download = nombre;
      document.body.appendChild(dl);
      dl.click();

      Ember.run.later(() => {
        URL.revokeObjectURL(blob_url);
      }, 2000);
    });

    return promesa;
  },

  iniciarDesdeURL(url) {
    const dl = document.createElement("a");
    dl.href = url;
    dl.target = "_blank";
    dl.download = true;
    document.body.appendChild(dl);
    dl.click();
  }
});
