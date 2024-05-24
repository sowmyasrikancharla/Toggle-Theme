// Write your code here
// Write your code here
import {Component} from 'react'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class About extends Component {
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
                <div className="about-con-dark">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                    alt="about"
                    className="logo"
                  />
                  <h1 className="about-head-dark">About</h1>
                </div>
              ) : (
                <div className="about-con">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                    alt="about"
                    className="logo"
                  />
                  <h1 className="about-head">About</h1>
                </div>
              )}
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default About
