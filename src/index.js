import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

function identity(value) {
  return JSON.stringify(value);
}

function parseLiteral(ast) {
  switch (ast.kind) {
    case Kind.STRING:
      return JSON.parse(ast);
    default:
      return null;
  }
}

export default new GraphQLScalarType({
  name: 'JSON',
  description:
    'The `JSON` scalar type represents JSON values as specified by ' +
    '[ECMA-404](http://www.ecma-international.org/' +
    'publications/files/ECMA-ST/ECMA-404.pdf).(Note: You should stringify your json object.)',
  serialize: identity,
  parseValue: identity,
  parseLiteral,
});
