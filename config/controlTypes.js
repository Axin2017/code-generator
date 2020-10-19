function _c(from, notDefault, parent, extra) {
  return {
    from,
    notDefault,
    parent,
    extra
  }
}

module.exports = {
  Select: _c('antd', true),
  Input: _c('antd', true),
  Search: _c('antd', true, 'Input'),
  Badge: _c('antd', true),
  DateRangePicker: _c('wombat-shared/ProductsComponents/DateRangePicker', false, ),
  CheckButtonGroup: _c('wombat-shared/ProductsComponents/CheckButtonGroup'),
  CompanySelect: _c('wombat-shared/ProductsComponents/CompanySelect'),
  AudioButton: _c('wombat-shared/ProductsComponents/AudioButton'),
  DownloadButton: _c('wombat-shared/ProductsComponents/DownloadButton'),
}