// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value

          const onChangeTheme = () => {
            console.log(isDarkTheme)
            toggleTheme(isDarkTheme)
          }
          return isDarkTheme ? (
            <>
              <div className="nav-con-dark">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                  alt="website logo"
                  className="icon"
                />
                <ul className="home-about-con">
                  <li>
                    <Link to="/" className="link">
                      <p className="nav-text-dark">Home</p>{' '}
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="link">
                      <p className="nav-text-dark">About</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/designed-by" className="link">
                      <p className="nav-text-dark">Designed By</p>{' '}
                    </Link>
                  </li>
                </ul>
                <button className="but-dark" onClick={onChangeTheme}>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                    className="icon"
                    alt="theme"
                    data-testid="theme"
                  />
                </button>
              </div>
            </>
          ) : (
            <div className="nav-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="theme"
                className="icon"
              />
              <ul className="home-about-con">
                <li>
                  <Link to="/" className="link">
                    <p className="nav-text">Home</p>
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="link">
                    <p className="nav-text">About</p>
                  </Link>
                </li>
                <li>
                  <Link to="/designed-by" className="link">
                    <p className="nav-text">Designed By</p>
                  </Link>
                </li>
              </ul>
              <button className="but" onClick={onChangeTheme}>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  className="icon"
                  alt="theme"
                  data-testid="theme"
                />
              </button>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Navbar
