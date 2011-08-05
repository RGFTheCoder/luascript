function translateNode(node) {
  return ASTWalker[node[0]](node);
}

function translateAST(ast) {
  var buffer = "";
  for(var node in ast) {
    buffer += translateNode(node);
  };
  return buffer;
}

var ASTWalker = {
  "BINOP": function(current) {
    var left  = translateNode(current[2]);
    var right = translateNode(current[3]);
    return "(" + left + current[1] + right + ")";
  },
  "UNOP": function(current) {
    var expr  = translateNode(current[2]);
    return "(" + current[1] + expr + ")";
  },
  "NUMBER": function(current) {
    return current[1]
  }
}

module.exports = {
  "translateAST": translateAST,
  "translateNode": translateNode
}