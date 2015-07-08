import React from 'react'

export default function controllable(initialState) {
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

          acc[handlerKey] = (eventOrValue) => {
            const value = eventOrValue.target
              ? ('checked' in eventOrValue.target
                ? eventOrValue.target.checked
                : eventOrValue.target.value)
              : eventOrValue

            this.setState({[key]: value})
          }
          acc[linkKey] = {
            value: this.state[key],
            requestChange: (value) => {
              this.setState({[key]: value})
            }
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
