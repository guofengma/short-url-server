/**
 * Created by user on 2017/4/13.
 */
var mongoose = require('mongoose');

module.exports = mongoose.Schema({
	dateCreated: {type: Date},
	convertVersion: {type: String},
	longUrl: {type: String, index: { unique: true } },
	shortCode: {type: String, index: { unique: true } },
	visitCount: {type: Number},
	lastVisited: {type: Date}
});