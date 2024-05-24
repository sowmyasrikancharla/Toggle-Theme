// Write your code here
import {Component} from 'react'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class NotFound extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          console.log(isDarkTheme)
          return (
            <>
              <Navbar />
              {isDarkTheme ? (
                <div className="not-found-con-dark">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                    alt="not found"
                    className="logo"
                  />
                  <h1 className="not-found-head-dark">Lost Your way?</h1>
                  <p className="not-found-text-dark">
                    We cannot seem to find the page you are looking for
                  </p>
                </div>
              ) : (
                <div className="not-found-con">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                    alt="not found"
                    className="logo"
                  />
                  <h1 className="not-found-head">Lost Your way?</h1>
                  <p className="not-found-text">
                    We cannot seem to find the page you are looking for
                  </p>
                </div>
              )}
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default NotFound
