export default class PageHeaderAuthorization {
  render() {
    return (
      <form action="" className="login-for-index">
        <p className="h3">Авторизация</p>
        <div className="form-group">
          <input type="email" className="form-control" placeholder="Email" />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Войти на сайт</button>
      </form>
    )
  }
}
