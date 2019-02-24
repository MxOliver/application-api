import { SchemaDirectiveVisitor } from "apollo-server-lambda";

export default class AdminDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    return field;
  }
  visitObject(field) {
    return field;
  }
  visitEnum(field) {
    return field;
  }
}
