const componentTypes = require('./config/componentTypes');
const controTypes = require('./config/controlTypes');

function parseFilter(config) {
  const imports = [];
  const extraImports = {
    
  }
  if (config.controls) {
    config.controls.forEach((control) => {
      const type = controTypes[control.type];
      if (type) {
        imports.push({
          name: control.type,
          type
        })
      }
    })
  }
  
  return imports;
}

function parseImport(config) {
  switch (config.type) {
    case componentTypes.Filter:
      return parseFilter(config);
    default:
      return [];
  }
}

module.exports = parseImport;
