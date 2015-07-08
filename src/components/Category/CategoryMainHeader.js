import './CategoryMainHeader.less'

export default class CategoryMainHeader {
  render() {
    return (
      <div className="category-main-header  row">
        <h1 className="h1--m0  col-sm-8  col--p0">
          Название рубрики или фотогалереи
          <hr className="visible-xs" />
          <span className="filters">
            <span className="btn-group">
              <span className="btn  btn-default  btn-sm  disabled">механика</span>
              <span className="btn  btn-default  btn-sm" title="убрать этот фильтр"><i className="icon-cancel"></i></span>
            </span>
            <span className="btn-group">
              <span className="btn  btn-default  btn-sm  disabled">супер</span>
              <span className="btn  btn-default  btn-sm" title="убрать этот фильтр"><i className="icon-cancel"></i></span>
            </span>
          </span>
        </h1>
        <div className="col-sm-4  col--p0  text-right">
          тут был фильтр
        </div>
      </div>
    )
  }
}
