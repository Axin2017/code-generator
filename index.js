const fs = require('fs');
const conponentTypes = require('./config/componentType');
const controTypes = require('./config/controlTypes');

/**
 * 生成prop信息
 *
 * @param {string} name
 * @param {string} type
 * @return {object} {name, type} 
 */
function _prop(name, type) {
  return {
    name,
    type
  }
}

/**
 * 生成控件信息
 *
 * @param {string} name
 * @param {string} type
 * @param {object} options
 * @return {object} {name, type, options} 
 */
function _control(name, type, options) {
  return {
    name,
    type,
    options
  }
}

const options = {
  config: {
    type: conponentTypes.Filter,
    componentName: 'Filter',
    props: [
      _prop('lines', 'object'),
    ],
    controls: [
      _control('phone', 'Search', {
        label: '呼叫号码',
        props: {
          style: { width: '320px' },
          placeholder: '输入要查询的号码，必填',
          maxLength: 20,
        }
      }),
      _control('dateRange', 'DateRangePicker', {
        label: '日志时间',
        props: {
          options: [7, 30, 90],
          isMust: true,
        }
      }),
      _control('lineNames', 'Select', {
        label: '线路名称',
        props: {
          mode: 'multiple',
          style: { width: '200px' },
          placeholder: '请输入并选择线路',
          allowClear: true,
        },
        children: {
          type: 'Option',
          dataSource: 'lines',
          keyField: '_id',
          valueField: '_id',
          labelField: 'line_name'
        }
      })
    ]
  }
}

function parseConfig({ config }) {
  const _parseImports = (config) => {
    const imports = [];
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
  const adaptor = {
    config: {
      imports: _parseImports(config),
      componentName: config.componentName,
      props: config.props,
      controls: config.controls,
      utils: {
        hasControl(type) {
          return config.controls.find(c => c.type === type)
        },
        parsePropsValue(value) {
          if (typeof value === 'string') {
            return `"${value}"`
          } else if (typeof value === 'function') {
            return `{${value.toString()}}`
          } else {
            return `{${JSON.stringify(value)}}`
          }
        }
      }
    }
  }
  return adaptor;
}

const template = require('art-template');
const { isNumber } = require('util');
let html = template(__dirname + '/template/Filter/index.tpl', parseConfig(options));

const replaceArra = [
  { from: '&#39;', to: '\'' },
  { from: '&#34;', to: '"' },
  { from: '&#60;', to: '<' },
  { from: '&#62;', to: '>' },
  { from: '&#38;', to: '&' }
]

replaceArra.forEach(r => {
  html = html.replace(new RegExp(`${r.from}`, 'g'), r.to);
})

fs.writeFileSync('./output/output.js', html);