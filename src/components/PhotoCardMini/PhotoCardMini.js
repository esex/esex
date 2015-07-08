import './PhotoCardMini.less'

export default class PhotoCardMini {
  render() {
    return (
      <div className="photo-card-mini">
        <a href="#" className="photo-card-mini__img-and-header-link">
          <img className="photo-card-mini__img-left" src={this.props.photo} alt="" />
          <h3 className="photo-card-mini__header">
            {this.props.description}
          </h3>
          <div className="photo-card-mini__labels">
            <span className="label label-danger">Это Я!</span>
          </div>
        </a>
        <div className="small">
          <p className="photo-card-mini__tags">
            {this.props.tags.map((el) => <a href="#">{el}</a>)}
          </p>
        </div>
      </div>
    )
  }
}
