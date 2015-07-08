import createObservableComponent from 'react-observable'
import Link from './Link'
import {navigateTo} from '../../flux/router/routerActions'

function LinkContainer(props) {
  const {dispatcher, href} = props

  const handleTransition = () => {
    dispatcher.dispatch(navigateTo(href))
  }

  return (
    <Link {...props} onTransition={handleTransition} />
  )
}

export default createObservableComponent(LinkContainer)
