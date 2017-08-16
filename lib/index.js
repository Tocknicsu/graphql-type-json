'use strict';

exports.__esModule = true;

var _graphql = require('graphql');

var _language = require('graphql/language');

function identity(value) {
  return JSON.stringify(value);
}

function parseLiteral(ast) {
  switch (ast.kind) {
    case _language.Kind.STRING:
      return JSON.parse(ast);
    default:
      return null;
  }
}

exports.default = new _graphql.GraphQLScalarType({
  name: 'JSON',
  description: 'The `JSON` scalar type represents JSON values as specified by ' + '[ECMA-404](http://www.ecma-international.org/' + 'publications/files/ECMA-ST/ECMA-404.pdf).(Note: You should stringify your json object.)',
  serialize: identity,
  parseValue: identity,
  parseLiteral: parseLiteral
});
module.exports = exports['default'];