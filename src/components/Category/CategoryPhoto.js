import PhotoCardMini from '../PhotoCardMini/PhotoCardMini'

import CategoryMainHeader from './CategoryMainHeader'

import './CategoryPhoto.less'

export default class CategoryPhoto {
  render() {
    return (
      <section className="category-photo">
        <CategoryMainHeader {...this.props}/>

        <div className="row row--inline-blocks">
          <div className="col-sm-6 col-md-4">
            <PhotoCardMini
              description="Фото в труселях"
              photo="http://placehold.it/690x460"
              tags={["#неведомое2", "#БРЕНД", "#НЛО", "#турнир"]}/>
          </div>
        </div>
      </section>
    )
  }
}
