'use strict';

module.exports = require('../../../core/server/controllers/core.schema.controller')
('OtherDocument', {


	source: {type: String, default: ''}, // ex. IMPORT, MEM, EPIC

	title: {type: String, default: ''}, // title for hyperlink...
	link: {type: String, default: ''} , //hyperlink...
	documentType: {type: String, default: ''},
	filename: {type: String, default: ''},
	date: {type: Date},

	heading: {type: String, default: ''},
	documentName: {type: String, default: ''},
	documentFileName: {type: String, default: ''},
	agencies : [{ type:'ObjectId', ref:'Organization', default:null}],
	project : { type:'ObjectId', ref:'Project', default:null, index:true },
	projectName: {type: String, default: ''},
	projectCode: {type: String, default: ''},

	documents: [{name: String, ref: String, fileName: String, date: Date}]

});
