import {PropTypes} from 'react'
import classNames from 'classnames'

import './AddContent.less'

export default class AddContent {
  static propTypes = {
    menuOpened: PropTypes.bool
  }

  toggleMenuOpened() {
    this.props.onMenuToggle(!this.props.menuOpened)
  }

  render() {
    const {menuOpened} = this.props

    return (
      <div className="add-content">
        <div className="container">
          <ul className="add-content__link-list">
            <li><a href="#"><i className="icon-plus"></i> Новость</a></li>
            <li><a href="#"><i className="icon-plus"></i> Миссию</a></li>
            <li><a href="#"><i className="icon-plus"></i> Команду</a></li>
            <li><a href="#"><i className="icon-plus"></i> Клуб</a></li>
            <li><a href="#"><i className="icon-plus"></i> Мероприятие</a></li>
            <li><a href="#"><i className="icon-plus"></i> Объявление</a></li>
          </ul>
          <button href="#" className="add-content__icon-menu" onClick={::this.toggleMenuOpened}><i className="icon-dots"></i></button>
          <div className={classNames('add-content__wrap', {
            'add-content__wrap--visible': menuOpened
          })}>
            <div className="add-content__inner">
              <div className="add-content__pseudo-table">
                <div className="add-content__pseudo-td">
                  <h3>Добавить</h3>
                  <ul className="add-content__link-list">
                    <li><a href="#"><i className="icon-plus"></i> Новость</a></li>
                    <li><a href="#"><i className="icon-plus"></i> Миссию</a></li>
                    <li><a href="#"><i className="icon-plus"></i> Команду</a></li>
                    <li><a href="#"><i className="icon-plus"></i> Клуб</a></li>
                    <li><a href="#"><i className="icon-plus"></i> Мероприятие</a></li>
                    <li><a href="#"><i className="icon-plus"></i> Объявление</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
