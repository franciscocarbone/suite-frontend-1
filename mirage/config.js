export default function() {
  // this.urlPrefix = '';
  // this.namespace = '';
  //this.timing = 1400;

  this.get('/eventos');
  this.get('/eventos/:id');
  this.put('/eventos/:id');
  this.del('/eventos/:id');
  this.post('/eventos');
  this.patch('/eventos/:id');

  this.get('/users');
  this.get('/users/:id');
  this.put('/users/:id');
  this.del('/users/:id');
  this.post('/users');
  this.patch('/users/:id');

  this.get('/perfiles');
  this.get('/perfiles/:id');
  this.put('/perfiles/:id');
  this.del('/perfiles/:id');
  this.post('/perfiles');
  this.patch('/perfiles/:id');
}