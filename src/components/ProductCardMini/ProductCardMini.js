import './ProductCardMini.less'

export default class ProductCardMini {
  render() {
    return (
      <div className="product-card-mini">
        <a href="#" className="product-card-mini__img-and-header-link">
          <img className="product-card-mini__img-left" src="http://placehold.it/690x460" alt="" />
          <h3 className="product-card-mini__header">
            Товар. Некое название товара Falcon 3000 XREN-ZX (красный)
          </h3>
          <div className="product-card-mini__labels">
            <span className="label label-success">у меня есть</span>
          </div>
        </a>
        <div className="row row--inline-block product-card-mini__buy-line">
          <div className="col-xs-4"><span className="product-card-mini__price" href="#">100 000 <span className="rub"></span></span></div>
          <form className="col-xs-8 col--pl0 text-right">
            <div className="input-group">
              <input type="number" className="form-control form-control--ultra-short" step="1" value="1" min="0" max="999" />
            </div>
            <input className="btn btn-primary" type="submit" value="Купить" />
          </form>
        </div>
        <div className="small">
          <p className="product-card-mini__tags">
            <a href="#">#неведомое</a>
            <a href="#">#БРЕНД</a>
            <a href="#">#НЛО</a>
            <a href="#">#турнир</a>
          </p>
        </div>
      </div>
    )
  }
}
