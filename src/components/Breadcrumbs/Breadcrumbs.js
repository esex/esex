import './Breadcrumbs.less'

export default class Breadcrumbs {
  render() {
    return (
      <div className="breadcrumbs">
        <p className="container">
          <span className="breadcrumbs__item"><a href="">Главная</a></span>
          <span className="breadcrumbs__item"><a href="">Вторая</a></span>
          <span className="breadcrumbs__item"><a href="">Третья</a></span>
        </p>
      </div>
    )
  }
}
