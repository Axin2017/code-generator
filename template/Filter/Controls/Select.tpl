<{{$data.c.type}}{{each $data.c.options.props}}
              {{$index}}={{$data.config.utils.parsePropsValue($value)}}{{/each}}
              data={filter.get('{{$data.c.name}}')}
              onChange={(e) => { onFilterChange('{{$data.c.name}}', e.target.data); }}
            >
            {{
              $data.c.options.children && 
                '{' + '\n' +
                $data.c.options.children.dataSource + '&&' + $data.c.options.children.dataSource + '.map((item) => (<' + $data.c.options.children.type + '\n' +
                  'key={item.' + $data.c.options.children.keyField + '}' + '\n' + 
                  'value={item.' + $data.c.options.children.valueField + '}' + '\n' +
                '>' + '\n' +
                '{item.' + $data.c.options.children.labelField +'}' + '\n' +
                '</' + $data.c.options.children.type + '>'
                
            }}))
            }
            </{{$data.c.type}}>
            