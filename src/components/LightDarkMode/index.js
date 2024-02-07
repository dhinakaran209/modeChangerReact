import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isLightMode: true}

  changeTheme = () => {
    this.setState(prevState => ({isLightMode: !prevState.isLightMode}))
  }

  render() {
    const {isLightMode} = this.state
    const classNames = isLightMode ? 'light-mode' : 'dark-mode'
    const buttonText = isLightMode ? 'Dark Mode' : 'Light Mode'

    return (
      <div className="bg-container">
        <div className={`card ${classNames}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button
            type="button"
            onClick={this.changeTheme}
            className="mode-button"
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
