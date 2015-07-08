import './MessageTop.less'

export default class MessageTop {
  render() {
    return (
      <div className="message-top">
        <div className="container">
          <div className="message-top__inner">
            {this.props.children}
            <button
              className="message-top__close"
              title="Закрыть"
              onClick={this.props.onClose}
            >
              <i className="icon-cancel"></i>
            </button>
          </div>
        </div>
      </div>
    )
  }
}
