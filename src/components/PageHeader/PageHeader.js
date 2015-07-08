import {PropTypes} from 'react'
import classNames from 'classnames'

import Button from '../Button/Button'
import ContactOrangeBtn from '../ContactOrangeBtn/ContactOrangeBtn'

import PageHeaderAuthorization from './PageHeaderAuthorization'
import PageHeaderUserInfo from './PageHeaderUserInfo'

import './PageHeader.less'
import logoUrl from './logo.png'

export default class PageHeader {
  static propTypes = {
    menuOpened: PropTypes.bool,
    onMenuToggle: PropTypes.func.isRequired,
    isAuthorized: PropTypes.bool
  }

  toggleMenuOpened() {
    this.props.onMenuToggle(!this.props.menuOpened)
  }

  render() {
    const {menuOpened, isAuthorized} = this.props

    return (
      <header className="page-header">
        <div className="container">
          <div className="page-header__logo-wrap">
            <h1 className="page-header__logo">
              <a href="#"><img alt="" src={logoUrl} height="40" width="151" /></a>
            </h1>
          </div>
          <form className="page-header__search">
            <div className="container">
              <div className="row row--inline-blocks text-center">
                <div className="col-md-6">
                  <div className="page-header__search-inner input-group">
                    <input type="text" className="form-control" placeholder="Персона, Товар, Мероприятие..." />
                    <span className="input-group-btn">
                      <Button>Найти</Button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className={classNames('page-header__nav-wrap', {
            'page-header__nav-wrap--visible': menuOpened
          })}>
            <div className="page-header__nav-inner">
              <div className="page-header__lang">
                <div className="btn-group" role="group">
                  <button className="btn btn-default active">rus</button>
                  <button className="btn btn-default">eng</button>
                </div>
              </div>
              <nav className="page-header__nav">
                <ul className="page-header__nav-list">
                  <li className="page-header__nav-item">
                    <a href="events">
                      Новости
                    </a>
                  </li>
                  <li className="page-header__nav-item">
                    <a href="#">
                      Игры
                    </a>
                  </li>
                  <li className="page-header__nav-item">
                    <a href="#" className="page-header__dropdown-link">
                      Магазин <span className="btn btn-sm"><i className="icon-down-open-big"></i></span>
                    </a>
                    <div className="page-header__subnav-wrapper">
                      <p className="h3">Пейнтболёр</p>
                      <ul className="page-header__subnav-lvl-1-list">
                        <li className="page-header__subnav-lvl-1-item">
                          <a href="#" className="page-header__dropdown-link">Маркеры <span className="btn btn-sm"><i className="icon-down-open-big"></i></span></a>
                          <ul className="page-header__subnav-lvl-2-list">
                            <li className="page-header__subnav-lvl-2-item"><a href="#">Механика</a></li>
                            <li className="page-header__subnav-lvl-2-item"><a href="#">Электроника</a></li>
                            <li className="page-header__subnav-lvl-2-item"><a href="#">Пистолеты</a></li>
                            <li className="page-header__subnav-lvl-2-item"><a href="#">Механика</a></li>
                          </ul>
                        </li>
                        <li className="page-header__subnav-lvl-1-item">
                          <a href="#" className="page-header__dropdown-link">Журналы и видео <span className="btn btn-sm"><i className="icon-down-open-big"></i></span></a>
                          <ul className="page-header__subnav-lvl-2-list">
                            <li className="page-header__subnav-lvl-2-item"><a href="#">Механика</a></li>
                            <li className="page-header__subnav-lvl-2-item"><a href="#">Электроника</a></li>
                            <li className="page-header__subnav-lvl-2-item"><a href="#">Пистолеты</a></li>
                            <li className="page-header__subnav-lvl-2-item"><a href="#">Механика</a></li>
                          </ul>
                        </li>
                        <li className="page-header__subnav-lvl-1-item">
                          <a href="#" className="page-header__dropdown-link">Запчасти пейнтбол <span className="btn btn-sm"><i className="icon-down-open-big"></i></span></a>
                          <ul className="page-header__subnav-lvl-2-list">
                            <li className="page-header__subnav-lvl-2-item"><a href="#">Механика</a></li>
                            <li className="page-header__subnav-lvl-2-item"><a href="#">Электроника</a></li>
                            <li className="page-header__subnav-lvl-2-item"><a href="#">Пистолеты</a></li>
                            <li className="page-header__subnav-lvl-2-item"><a href="#">Механика</a></li>
                          </ul>
                        </li>
                      </ul>
                      <p className="h3">El soldato</p>
                      <ul className="page-header__subnav-lvl-1-list">
                        <li className="page-header__subnav-lvl-1-item">
                          <a href="#" className="page-header__dropdown-link">Маркеры <span className="btn btn-sm"><i className="icon-down-open-big"></i></span></a>
                          <ul className="page-header__subnav-lvl-2-list">
                            <li className="page-header__subnav-lvl-2-item"><a href="#">Механика</a></li>
                            <li className="page-header__subnav-lvl-2-item"><a href="#">Электроника</a></li>
                            <li className="page-header__subnav-lvl-2-item"><a href="#">Пистолеты</a></li>
                            <li className="page-header__subnav-lvl-2-item"><a href="#">Механика</a></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </nav>
              <div className="page-header__nav-user">
                {!isAuthorized && <PageHeaderAuthorization />}
                {isAuthorized && <PageHeaderUserInfo />}

                <ul className="page-header__nav-list">
                  <li className="page-header__nav-item">
                    <a href="#">
                      Админ
                    </a>
                  </li>
                  <li className="page-header__nav-item">
                    <a href="#">
                      Профиль
                    </a>
                  </li>
                  <li className="page-header__nav-item">
                    <a href="#">
                      Заказы
                    </a>
                  </li>
                  <li className="page-header__nav-item">
                    <a href="#">
                      Приоритеты ЭБ
                    </a>
                  </li>
                  <li className="page-header__nav-item">
                    <a href="#">
                      Выход из аккаунта
                    </a>
                  </li>
                </ul>
              </div>
              <div className="page-header__additional">
                <h3>Сервис</h3>
                <ul className="page-header__nav-list">
                  <li className="page-header__nav-item"><a href="#">Доставка</a></li>
                  <li className="page-header__nav-item"><a href="#">Оплата</a></li>
                  <li className="page-header__nav-item"><a href="#">Безопасность</a></li>
                  <li className="page-header__nav-item"><a href="#">Вакансии</a></li>
                  <li className="page-header__nav-item"><a href="#">Возврат</a></li>
                </ul>
                <p>
                  <ContactOrangeBtn />
                </p>
                <p className="text-center">
                  105122, Москва, <span className="text-nowrap">Щелковское шоссе, 3</span>
                  <br />
                  <span className="text-muted">
                    <span className="text-nowrap">ТЦ"Глобус Экстрим",</span>
                    <span className="text-nowrap">павильон 216,</span>
                    <br />
                    <span className="text-nowrap">Пн-Вс — 11:00-20:00</span>
                  </span>
                  <br />
                  <a href="#">Все пункты выдачи</a>
                </p>
                <p className="text-center">© Пейнтболёр, 2000–2015
                  <br />
                  <span className="text-muted">Все права защищены</span>
                </p>
              </div>
            </div>
          </div>
          <div className="page-header__icons-wrap">
            <div className="page-header__icons">
              <div className="page-header__icon page-header__icon--home">
                <a className="page-header__icon-wrapper" href="#">
                  <i className="icon-home"></i>
                  <span className="badge">11</span>
                </a>
              </div>
              <div className="page-header__icon page-header__icon--dialog">
                <a className="page-header__icon-wrapper" href="#">
                  <i className="icon-comments"></i>
                  <span className="badge">45</span>
                </a>
              </div>
              <div className="page-header__icon page-header__icon--cart">
                <a className="page-header__icon-wrapper" href="#">
                  <i className="icon-basket"></i>
                  <span className="badge">4</span>
                </a>
              </div>
              <div className="page-header__icon page-header__icon--search">
                <a className="page-header__icon-wrapper" href="#">
                  <i className="icon-search"></i>
                </a>
              </div>
            </div>
          </div>
          <button className="page-header__icon-menu" onClick={::this.toggleMenuOpened}>
            <i className="icon-menu"></i>
          </button>
        </div>
      </header>
    )
  }
}
