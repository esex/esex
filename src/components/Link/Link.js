import createObservableComponent from 'react-observable'

function Link(props) {
  const {href, onTransition} = props

  // TODO: handle edge cases like ctrl+click
  const handleClick = event => {
    event.preventDefault()
    onTransition(href)
  }

  return (
    <a {...props} onClick={handleClick} />
  )
}

export default createObservableComponent(Link)
