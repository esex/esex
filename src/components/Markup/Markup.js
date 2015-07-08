import createObservableComponent from 'react-observable'
import {navigateTo} from '../../flux/router/routerActions'

function Markup(props) {
  const {dispatcher, href} = props

  const handleClick = event => {
    event.preventDefault()
    dispatcher.dispatch(navigateTo(href))
  }

  return (
    <div>Markup</div>
  )
}

export default createObservableComponent(Markup)
