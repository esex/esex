// import controllable from 'react-controllables'
import PageHeader from '../PageHeader/PageHeader'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import ContentWrapper from '../ContentWrapper/ContentWrapper'
import MessageTop from '../MessageTop/MessageTop'
import AddContent from '../AddContent/AddContent'
import Category from '../Category/Category'
import CategoryPhoto from '../Category/CategoryPhoto'

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
  pageHeaderMenuOpened: false,
  addContentMenuOpened: false
})
export default class MarkupCategoryAndPhoto {
  render() {
    const {
      pageHeaderMenuOpened,
      onPageHeaderMenuOpenedChange,
      addContentMenuOpened,
      onAddContentMenuOpenedChange
    } = this.props

    return (
      <div>

        <MessageTop> Какое-то сообщение пользователю </MessageTop>
        <PageHeader
          menuOpened={pageHeaderMenuOpened}
          onMenuToggle={onPageHeaderMenuOpenedChange}
        />
        <Breadcrumbs />
        <ContentWrapper>
          <Category
            title="Название рубрики или категории1"
          />
          <CategoryPhoto
            title="Название рубрики или категории2"
          />
          <AddContent
            menuOpened={addContentMenuOpened}
            onMenuToggle={onAddContentMenuOpenedChange}
          />
        </ContentWrapper>

      </div>
    )
  }
}
