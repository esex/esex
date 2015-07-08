import ProductCardMini from '../ProductCardMini/ProductCardMini'

import CategoryMainHeader from './CategoryMainHeader'

export default class Category {
  render() {
    return (
      <section className="category">
        <CategoryMainHeader />

        <div className="row row--inline-blocks">
          <div className="col-sm-6 col-md-4">
            <ProductCardMini />
          </div>
        </div>
      </section>
    )
  }
}
