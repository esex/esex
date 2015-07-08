import ProductCardMini from '../ProductCardMini/ProductCardMini'

import CategoryMainHeader from './CategoryMainHeader'

export default class Category {
  render() {
    return (
      <section className="category">
        <CategoryMainHeader  {...this.props}/>

        <div className="row row--inline-blocks">
          <div className="col-sm-6 col-md-4">
            <ProductCardMini
              description="Фото в шортах"
              price="100 000"
              photo="http://placehold.it/690x460"
              tags={["#неведомое1", "#БРЕНД", "#НЛО", "#турнир"]}
            />
          </div>
        </div>
      </section>
    )
  }
}
