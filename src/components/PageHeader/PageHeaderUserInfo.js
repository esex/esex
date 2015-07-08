export default class PageHeaderUserInfo {
  render() {
    return (
      <div className="avatar">
        <div className="media">
          <span className="pull-left">
            <span className="avatar avatar--32">
              <a className="avatar__link" href="#"><img className="avatar__img" alt="" src="http://placehold.it/32x32" /></a>
            </span>
          </span>
          <div className="media-body">
            <a href="#" className="text-elipsis">Узер Наме наме на Наме наме наме наме</a>
            <div className="small text-muted">Ранг: R5</div>
          </div>
        </div>
      </div>
    )
  }
}
