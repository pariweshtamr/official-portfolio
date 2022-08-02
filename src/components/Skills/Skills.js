import "./skills.scss"
import { images } from "../../constants"
import { useState } from "react"

const { html, css, javascript, mern, sass, redux, git, figma, mu5, api } =
  images

const Skills = () => {
  const [active, setActive] = useState(true)

  return (
    <section id="skills" className="skills">
      <h2 className="head-text">
        My <span>Skills</span>
      </h2>

      <div className="skills-container">
        <div className="skills-top">
          <div className={active ? "mern-circles active" : "mern-circles"}>
            {[html, css, javascript, sass, git, redux, figma, api].map(
              (circle, i) => (
                <div className="skill-circle app-flex" key={`circle-${i}`}>
                  <img src={circle} alt="circle" />
                </div>
              )
            )}
          </div>

          <img src={mern} alt="mernBanner" onClick={() => setActive(!active)} />
        </div>

        <div className="skills-bottom">
          <div className="container">
            <div className="card">
              <div
                className="percent"
                style={{ "--color": "#E65100", "--num": "75" }}
              >
                <div className="dot"></div>
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number">
                  <h2>
                    75 <span>%</span>
                  </h2>
                  <p>HTML</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div
                className="percent"
                style={{ "--color": "#0177BD", "--num": "80" }}
              >
                <div className="dot"></div>
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number">
                  <h2>
                    80 <span>%</span>
                  </h2>
                  <p>CSS</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div
                className="percent"
                style={{ "--color": "#FED602", "--num": "60" }}
              >
                <div className="dot"></div>
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number">
                  <h2>
                    60 <span>%</span>
                  </h2>
                  <p>JavaScript</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div
                className="percent"
                style={{ "--color": "#61DBFB", "--num": "75" }}
              >
                <div className="dot"></div>
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number">
                  <h2>
                    75 <span>%</span>
                  </h2>
                  <p>React</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div
                className="percent"
                style={{ "--color": "#7E57C2", "--num": "65" }}
              >
                <div className="dot"></div>
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number">
                  <h2>
                    65 <span>%</span>
                  </h2>
                  <p>Redux Toolkit</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div
                className="percent"
                style={{ "--color": "#9EC24B", "--num": "60" }}
              >
                <div className="dot"></div>
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number">
                  <h2>
                    60 <span>%</span>
                  </h2>
                  <p>Node</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
