import CategoryMainHeader from './CategoryMainHeader'

import './CategoryPhoto.less'

export default class CategoryPhoto {
  render() {
    return (
      <section className="category-photo">
        <CategoryMainHeader {...this.props}/>

        <div className="row row--inline-blocks">
          <div className="col-sm-6 col-md-4">
            {this.props.children}
          </div>
        </div>
      </section>
    )
  }
}
