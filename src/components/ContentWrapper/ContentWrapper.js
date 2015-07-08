import AddContent from '../AddContent/AddContent'
import Category from '../Category/Category'
import CategoryPhoto from '../Category/CategoryPhoto'

import './ContentWrapper.less'

export default class ContentWrapper {
  render() {
    return (
      <div className="content-wrapper">
        <div className="container">
          <Category />
          <CategoryPhoto />
          <AddContent />
        </div>
      </div>
    )
  }
}
