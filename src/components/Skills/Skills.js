import "./skills.scss"
import { images } from "../../constants"
import { useState } from "react"

const { html, css, javascript, mern, sass, redux, git, figma, mu5, api } =
  images
const Skills = () => {
  const [active, setActive] = useState(false)

  console.log(active)

  return (
    <section id="skills" className="skills">
      <h2 className="head-text app-flex">
        My <span>Skills</span>
      </h2>

      <div className="mern">
        <div className={active ? "mern-circles" : "mern-circles active"}>
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
    </section>
  )
}

export default Skills
