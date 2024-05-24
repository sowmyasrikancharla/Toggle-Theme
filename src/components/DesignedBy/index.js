import {FaLinkedin, FaGithubSquare} from 'react-icons/fa'

import {FiExternalLink} from 'react-icons/fi'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const DesignedBy = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      console.log(isDarkTheme)
      return (
        <div>
          <Navbar />
          {isDarkTheme ? (
            <div className="my-container">
              <div className="border-con">
                <h1 className="my-heading">About me</h1>
                <div className="name-con">
                  <p className="text">Name:Sowmya Sri Kancharla</p>
                </div>
                <div>
                  <p className="text">
                    LinkedIn <FaLinkedin /> :{' '}
                    <a
                      className="link"
                      href="https://www.linkedin.com/in/sowmya-sri-kancharla-47569a299/"
                    >
                      www.linkedin.com
                      <FiExternalLink className="visit-icons" />
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text">
                    Github <FaGithubSquare /> :{' '}
                    <a
                      className="link"
                      href="https://github.com/sowmyasrikancharla/"
                    >
                      www.Github.com
                      <FiExternalLink className="visit-icons" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="my-container-dark">
              <div className="border-con-dark">
                <h1 className="my-heading-dark">About me</h1>
                <div className="name-con-dark">
                  <p className="text-dark">Name:Sowmya Sri Kancharla</p>
                </div>
                <div>
                  <p className="text-dark">
                    LinkedIn <FaLinkedin className="dark" /> :{' '}
                    <a
                      className="link-dark"
                      href="https://www.linkedin.com/in/sowmya-sri-kancharla-47569a299/"
                    >
                      www.linkedin.com
                      <FiExternalLink className="visit-icons-dark" />
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-dark">
                    Github <FaGithubSquare className="dark" /> :{' '}
                    <a
                      className="link-dark"
                      href="https://github.com/sowmyasrikancharla/"
                    >
                      www.Github.com
                      <FiExternalLink className="visit-icons-dark" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default DesignedBy
