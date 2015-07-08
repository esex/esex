import React from 'react'
import './Breadcrumbs.less'

export default class Breadcrumbs {
  render() {
    const children = React.Children.map(this.props.children,
      (item, index) =>
        <span className="breadcrumbs__item" key={index}>{item}</span>
    )

    return (
      <div className="breadcrumbs">
        <p className="container">
          {children}
        </p>
      </div>
    )
  }
}
