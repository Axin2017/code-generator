{{include './' + 'import.tpl' config}}
{{include './controlDependencies.tpl' config}}
function {{config.componentName}}({
  filter,
  onFilterChange,{{each config.props}}
  {{$value.name}},{{/each}}
}){
  return (
    <table className={fcStyles.filterContainer}>
      <tbody>{{each config.controls}}
        <tr>
          <th>{{$value.options.label}}</th>
          <td>
            {{set c = {c:$value, config:config} }}{{include './' + 'Controls/' + $value.type + '.tpl' c}}
          </td>
        </tr>{{/each}}
      </tbody>
    </table>
  );
}

{{config.componentName}}.propTypes = { 
  filter: PropTypes.object, 
  onFilterChange: PropTypes.func,{{each config.props}}
  {{$value.name}}: PropTypes.{{$value.type}}, {{/each}}
};

export default {{config.componentName}};
