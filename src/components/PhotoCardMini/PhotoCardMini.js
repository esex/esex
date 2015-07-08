import './PhotoCardMini.less'

export default class PhotoCardMini {
  render() {
    return (
      <div className="photo-card-mini">
        <a href="#" className="photo-card-mini__img-and-header-link">
          <img className="photo-card-mini__img-left" src="http://placehold.it/690x460" alt="" />
          <h3 className="photo-card-mini__header">
            Фото в труселях
          </h3>
          <div className="photo-card-mini__labels">
            <span className="label label-danger">Это Я!</span>
          </div>
        </a>
        <div className="small">
          <p className="photo-card-mini__tags">
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
