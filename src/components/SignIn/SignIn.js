import createObservableComponent from 'react-observable'
import classNames from 'classnames'
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
      <div className={classNames({
        'form-group': true,
        'has-error': validationMessagesVisible && !validation.children.email.valid
      })}>
        <label htmlFor="SignIn-Email" className="control-label">Email</label>
        <input
          type="email"
          className="form-control"
          id="SignIn-Email"
          placeholder="Email"
          valueLink={emailLink}
          disabled={disabled}
        />
        <span className="help-block">{validationMessagesVisible && validation.children.email.message}</span>
      </div>
      <div className={classNames({
        'form-group': true,
        'has-error': validationMessagesVisible && !validation.children.password.valid
      })}>
        <label htmlFor="SignIn-Password" className="control-label">Password</label>
        <div>
          <input
            type="password"
            className="form-control"
            id="SignIn-Password"
            placeholder="Password"
            valueLink={passwordLink}
            disabled={disabled}
          />
          <span className="help-block">{validationMessagesVisible && validation.children.password.message}</span>
        </div>
      </div>
      <button className="btn btn-default" disabled={disabled}>Submit</button>
      {error && <p className="bg-danger">{error.message}</p>}
    </form>
  )
}

export default createObservableComponent(SignIn)
