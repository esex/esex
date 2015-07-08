export default class Button {
  render() {
    return (
      <button className="btn btn-success" type="submit">{this.props.children}</button>
    )
  }
}
