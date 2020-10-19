import React from 'react';
import PropTypes from 'prop-types';
{{each $data.imports}}import {{$value.type.notDefault ? '{ ' + ($value.parent || $value.name) + ' }' : ($value.parent || $value.name) }} from '{{$value.type.from}}';{{'\n'}}{{/each}}