import './MessageTop.less'

export default class MessageTop {
  render() {
    return (
      <div className="message-top">
        <div className="container">
          <div className="message-top__inner">
            {this.props.children}
            <a className="message-top__close" title="Закрыть" href="#"><i className="icon-cancel"></i></a>
          </div>
        </div>
      </div>
    )
  }
}
