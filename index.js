var reactTemplates = require('react-templates/src/reactTemplates');
var url = require('url');
var queryString = require('querystring');

module.exports = function(source) {
	var options = queryString.parse(url.parse(this.query).query);
	options['targetVersion'] = "0.14.0";
	this.cacheable && this.cacheable();
	return reactTemplates.convertTemplateToReact(source, options);
};
