<{{$data.c.type}}{{each $data.c.options.props}}
              {{$index}}={{$data.config.utils.parsePropsValue($value)}}{{/each}}
              data={filter.get('{{$data.c.name}}')}
              onChange={(e) => { onFilterChange('{{$data.c.name}}', e.target.data); }}
            />