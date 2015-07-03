import createObservableComponent from 'react-observable'
import {navigateTo} from '../../flux/router/routerActions'
import Link from '../Link/Link'
import SignIn from '../SignIn/SignIn'

import './MarkupPage.css'

function MarkupPage() {
  return (
    <div className="MarkupPage">

      <div className="MarkupPage-Component">
        <SignIn data={{email: 'blabla', password: 'blabla'}} validationMessagesVisible
          validation = {{children: {email:{message: 'message'}, password: {message: 'password'}}}}
          disabled={false}
          error={new Error('Error')}
          onEmailChange={::console.log}
          onPasswordChange={::console.log}
          onSubmit={::console.log}/>
      </div>

      <div className="MarkupPage-Component">
        <Link href='/' onTransition={::console.log}>home</Link>
      </div>

    </div>
  )
}

export default createObservableComponent(MarkupPage)
