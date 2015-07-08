import './ContactOrangeBtn.less'

export default class ContactOrangeBtn {
  render() {
    return (
      <a href="tel:+74993462082" className="contact-orange-btn">
        <span className="contact-orange-btn__inner">
          <i className="icon-phone"></i>
          <span className="contact-orange-btn__text">Многоканальный телефон:</span>
          <span className="contact-orange-btn__numbers">8 499 346 2082</span>
        </span>
      </a>
    )
  }
}
