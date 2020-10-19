import React from 'react';
import PropTypes from 'prop-types';
import { Search } from 'antd';
import DateRangePicker from 'wombat-shared/ProductsComponents/DateRangePicker';
import { Select } from 'antd';

import moment from 'moment';
const { Option } = Select;
const { Search } = Input;
import fcStyles from 'styles/filter-container.css';

function Filter({
  filter,
  onFilterChange,
  lines,
}){
  return (
    <table className={fcStyles.filterContainer}>
      <tbody>
        <tr>
          <th>呼叫号码</th>
          <td>
            <Search
              style={{"width":"320px"}}
              placeholder="输入要查询的号码，必填"
              maxLength={20}
              data={filter.get('phone')}
              onChange={(e) => { onFilterChange('phone', e.target.data); }}
            />
          </td>
        </tr>
        <tr>
          <th>日志时间</th>
          <td>
            <DateRangePicker
              options={[7,30,90]}
              isMust={true}
              data={filter.get('dateRange')}
              onChange={(e) => { onFilterChange('dateRange', e.target.data); }}
              disabledDate={(date) => date && moment().isBefore(date, 'day')}
            />
          </td>
        </tr>
        <tr>
          <th>线路名称</th>
          <td>
            <Select
              mode="multiple"
              style={{"width":"200px"}}
              placeholder="请输入并选择线路"
              allowClear={true}
              data={filter.get('lineNames')}
              onChange={(e) => { onFilterChange('lineNames', e.target.data); }}
            >
            {
lines&&lines.map((item) => (<Option
key={item._id}
value={item._id}
>
{item.line_name}
</Option>))
            }
            </Select>
            
          </td>
        </tr>
      </tbody>
    </table>
  );
}

Filter.propTypes = { 
  filter: PropTypes.object, 
  onFilterChange: PropTypes.func,
  lines: PropTypes.object, 
};

export default Filter;
