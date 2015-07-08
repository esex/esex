// import controllable from 'react-controllables'
import PageHeader from '../PageHeader/PageHeader'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import ContentWrapper from '../ContentWrapper/ContentWrapper'
import MessageTop from '../MessageTop/MessageTop'
import AddContent from '../AddContent/AddContent'
import Category from '../Category/Category'
import CategoryPhoto from '../Category/CategoryPhoto'
import PhotoCardMini from '../PhotoCardMini/PhotoCardMini'
import ProductCardMini from '../ProductCardMini/ProductCardMini'
import controllable from '../../utilities/controllable'


@controllable({
  messageOpened: true,
  pageHeaderMenuOpened: false,
  addContentMenuOpened: false,
  amount: 1
})
export default class MarkupCategoryAndPhoto {
  render() {
    const {
      messageOpened,
      onMessageOpenedChange,
      pageHeaderMenuOpened,
      onPageHeaderMenuOpenedChange,
      addContentMenuOpened,
      onAddContentMenuOpenedChange,
      amount,
      onAmountChange
    } = this.props

    return (
      <div>

        {messageOpened &&
          <MessageTop onClose={() => onMessageOpenedChange(false)}>
            Какое-то сообщение пользователю
          </MessageTop>
        }

        <PageHeader
          menuOpened={pageHeaderMenuOpened}
          onMenuToggle={onPageHeaderMenuOpenedChange}
        />

        <Breadcrumbs>
          <a href="">Главная</a>
          <a href="">Вторая</a>
          <a href="">Третья</a>
        </Breadcrumbs>

        <ContentWrapper>
          <Category title="Название рубрики или категории1">
            <ProductCardMini
              amount={amount}
              onAmountChange={onAmountChange}
              description="Фото в шортах"
              price="100 000"
              photo="http://placehold.it/690x460"
              tags={["#неведомое1", "#БРЕНД", "#НЛО", "#турнир"]}
            />
          </Category>

          <CategoryPhoto title="Название рубрики или категории2">
            <PhotoCardMini
              description="Фото в труселях"
              photo="http://placehold.it/690x460"
              tags={["#неведомое2", "#БРЕНД", "#НЛО", "#турнир"]}/>
          </CategoryPhoto>

          <AddContent
            menuOpened={addContentMenuOpened}
            onMenuToggle={onAddContentMenuOpenedChange}
          />
        </ContentWrapper>

      </div>
    )
  }
}
