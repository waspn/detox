const fs = require('fs');
const { parse } = require('@babel/parser');
const doctrine = require('doctrine');

function getNextMethodName(functions, comment) {
  //   return;
  for (const fn of functions) {
    if (fn.start > comment.end) {
      return fn.key.name;
    }
  }
}

const srcPath = '../../detox/src/';
const files = ['expect/index.js', 'expect/ios.js'].map((path) => srcPath + path).map((path) => fs.readFileSync(path, 'utf-8'));

for (const file of files) {
  const parsedFile = parse(file);
  const classes = parsedFile.program.body.filter((node) => node.type === 'ClassDeclaration');

  for (const classDef of classes) {
    const className = classDef.id.name;
    const methods = classDef.body.body.filter((node) => node.type === 'ClassMethod');
    const comments = parsedFile.comments.filter(
      (comment) => comment.type === 'CommentBlock' && comment.start > classDef.start && comment.end < classDef.end
    );

    for (const comment of comments) {
      const docComment = doctrine.parse('/**' + comment.value + '*/', { unwrap: true });
      const methodName = getNextMethodName(methods, comment);
      const methodPath = className + "." + methodName;
      console.log(methodPath, '=>', docComment);
    }
  }
}
