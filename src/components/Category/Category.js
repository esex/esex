import CategoryMainHeader from './CategoryMainHeader'

export default class Category {
  render() {
    return (
      <section className="category">
        <CategoryMainHeader  {...this.props}/>

        <div className="row row--inline-blocks">
          <div className="col-sm-6 col-md-4">
            {this.props.children}
          </div>
        </div>
      </section>
    )
  }
}
