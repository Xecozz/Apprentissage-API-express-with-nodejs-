const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
  prenom: { type: String, required: true },
  nom: { type: String, required: true },
  mail: { type: String, required: true },
  password: { type: String, required: true },

});

module.exports = mongoose.model('Thing', thingSchema);