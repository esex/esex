import './ContentWrapper.less'

export default class ContentWrapper {
  render() {
    return (
      <div className="content-wrapper">
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}
