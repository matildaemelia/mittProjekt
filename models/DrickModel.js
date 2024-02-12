var mongoose = require('mongoose');

var DrickSchema = new mongoose.Schema({
name: String,
flavour: String,
color: String,
},
{
collection: 'drickor'
});

module.exports = mongoose.model('DrickModel', DrickSchema);