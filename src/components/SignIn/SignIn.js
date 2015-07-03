import createObservableComponent from 'react-observable'
import preventEvent from '../../utilities/preventEvent'

function SignIn(props) {
  const {data, validationMessagesVisible, validation, disabled, error} = props
  const {onEmailChange, onPasswordChange, onSubmit} = props

  const emailLink = {
    value: data.email,
    requestChange: onEmailChange
  }

  const passwordLink = {
    value: data.password,
    requestChange: onPasswordChange
  }

  return (
    <form onSubmit={preventEvent(onSubmit)}>
      <div>Email</div>
      <div>
        <input
          valueLink={emailLink}
          disabled={disabled}
        />
        {validationMessagesVisible && validation.children.email.message}
      </div>
      <div>Password</div>
      <div>
        <input
          type="password"
          valueLink={passwordLink}
          disabled={disabled}
        />
        {validationMessagesVisible && validation.children.password.message}
      </div>
      <div>
        <button disabled={disabled}>Submit</button>
      </div>
      {error && <div>{error.message}</div>}
    </form>
  )
}

export default createObservableComponent(SignIn)
