import './CategoryMainHeader.less'

export default class CategoryMainHeader {
  render() {
    return (
      <div className="category-main-header  row">
        <h1 className="h1--m0  col-sm-8  col--p0">
          {this.props.title}
          <hr className="visible-xs" />
          {/*<span className="filters">
            <span className="btn-group">
              <span className="btn  btn-default  btn-sm  disabled">{this.props.tag1}</span>
              <span className="btn  btn-default  btn-sm" title="убрать этот фильтр"><i className="icon-cancel"></i></span>
            </span>
            <span className="btn-group">
              <span className="btn  btn-default  btn-sm  disabled">{this.props.tag2}</span>
              <span className="btn  btn-default  btn-sm" title="убрать этот фильтр"><i className="icon-cancel"></i></span>
            </span>
          </span>*/}
        </h1>
        {/*<div className="col-sm-4  col--p0  text-right">
          тут был фильтр
        </div>*/}
      </div>
    )
  }
}
