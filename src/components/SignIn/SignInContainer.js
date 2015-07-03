import createObservableComponent from 'react-observable'
import {
  setEmail,
  setPassword,
  submit
} from '../../flux/signIn/signInActions'
import bindAction from '../../utilities/bindAction'
import SignIn from './SignIn'

function SignInContainer({dispatcher}) {
  return dispatcher.observable
    .map(state => ({
      dispatcher,
      ...state.signIn,
      onEmailChange: bindAction(dispatcher, setEmail),
      onPasswordChange: bindAction(dispatcher, setPassword),
      onSubmit: bindAction(dispatcher, submit)
    }))
    .map(SignIn)
}

export default createObservableComponent(SignInContainer)
