import Ember from "ember";

export default Ember.Component.extend({
  perfil: Ember.inject.service(),
  puedeEditarSobreEstaEscuela: false,

  didInsertElement() {
    let model = this.get("model");
    let regionDeLaEscuela = model.get("numero_de_region");

    if (this.get("perfil").puedeEditarDentroDeLaRegion(regionDeLaEscuela)) {
      model.set("puedeEditarDentroDeLaRegion", true);
    } else {
      model.set("puedeEditarDentroDeLaRegion", false);
    }

    model.set("filaPiso", [
      {
        titulo: "Marca",
        id: "piso.servidor"
      },
      {
        titulo: "Serie",
        id: "piso.serie"
      },
      {
        titulo: "UPS",
        id: "piso.upsComoCadena"
      },
      {
        titulo: "Rack",
        id: "piso.rackComoCadena"
      },
      {
        titulo: "Estado",
        id: "piso.estadoComoCadena"
      },
      {
        titulo: "Llave",
        componente: "suite-detalle/llave-de-piso"
      }
    ]);

    model.set("filaInformacion", [
      {
        titulo: "CUE",
        id: "cue"
      },
      {
        titulo: "Nro. Provincial",
        id: ""
      },
      {
        titulo: "Nivel",
        id: "nivel.nombre"
      },
      {
        titulo: "Financiamiento",
        componente: "suite-detalle/financiamiento"
      },
      {
        titulo: "Gestión",
        id: "tipoDeGestion.nombre"
      },
      {
        titulo: "Modalidad",
        id: "modalidad.nombre"
      },
      {
        titulo: "Programas",
        componente: "suite-detalle/programas"
      },
      {
        titulo: "CUE anteriores",
        componente: "suite-detalle/cue-anteriores"
      },
      {
        titulo: "Observaciones",
        id: "observaciones"
      }
    ]);

    model.set("filaDatosDeContacto", [
      {
        titulo: "Teléfono",
        id: "telefono"
      },
      {
        titulo: "Email",
        id: "email"
      },
      {
        titulo: "Dirección",
        id: "direccion"
      },
      {
        titulo: "Localidad",
        id: "localidad.nombre"
      },
      {
        titulo: "Distrito",
        id: "localidad.distrito.nombre"
      },
      {
        titulo: "Región",
        id: "localidad.distrito.region.numero"
      }
    ]);

    return model;
  }
});
