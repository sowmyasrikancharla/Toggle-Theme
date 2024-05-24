// Write your code here
import {Component} from 'react'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class Home extends Component {
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
                <div className="home-con-dark">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                    alt="home"
                    className="logo"
                  />
                  <h1 className="home-head-dark">Home</h1>
                </div>
              ) : (
                <div className="home-con">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                    alt="home"
                    className="logo"
                  />
                  <h1 className="home-head">Home</h1>
                </div>
              )}
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
