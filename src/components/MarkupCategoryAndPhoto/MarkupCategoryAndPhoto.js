// import controllable from 'react-controllables'
import PageHeader from '../PageHeader/PageHeader'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import ContentWrapper from '../ContentWrapper/ContentWrapper'
import MessageTop from '../MessageTop/MessageTop'

import React from 'react'
function controllable(initialState) {
  return Component => class Controllable extends React.Component {
    constructor(...args) {
      super(...args)
      this.state = initialState
    }

    render() {
      const handlers = Object.keys(this.state)
        .reduce((acc, key) => {
          const handlerKey = `on${key[0].toUpperCase()}${key.slice(1)}Change`
          const linkKey = `${key}Link`

          acc[handlerKey] = (value) => {
            this.setState({[key]: value})
          }
          acc[linkKey] = {
            value: this.state[key],
            requestChange: acc[handlerKey]
          }

          return acc
        }, {})

      return (
        <Component
          {...this.props}
          {...this.state}
          {...handlers}
        />
      )
    }
  }
}

@controllable({
  pageHeaderMenuOpened: false
})
export default class MarkupCategoryAndPhoto {
  render() {
    const {
      pageHeaderMenuOpened,
      onPageHeaderMenuOpenedChange
    } = this.props

    return (
      <div>

        <MessageTop />
        <PageHeader
          menuOpened={pageHeaderMenuOpened}
          onMenuToggle={onPageHeaderMenuOpenedChange}
        />
        <Breadcrumbs />
        <ContentWrapper />

      </div>
    )
  }
}
