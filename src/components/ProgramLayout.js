import React from "react"
// import ReactDOM from "react-dom"
import { Link } from "gatsby"
import style from "../styles/program.module.scss"

const ProgramLayout = ({ children }) => {

  return (
    <>
      <div className={style.program}>
        <div>
          {/* <h2>Web Design & Development</h2>
          <p>This is the landing page for one of the three programs features at the show. Here would might have some kind of imagery, a description of the program, instructor names, course list, skills logos, etc.</p>
          <p>Here are the three programs as they are featured on Humber's main website:</p> */}

          <h1>PROGRAMS</h1>
          <ul className="container">
          <Link to="/program/wddm" className="active" activeClassName={style.active}><li>Web Design and Development</li> </Link>           
          <Link to="/program/visualEffects" activeClassName={style.active}><li>3D Modelling and Visual Effects Production</li></Link>
          <Link to="/program/graphicDesign" activeClassName={style.active}><li>Graphic Design for Print and Web</li></Link>
            </ul>
        </div>
      </div>
      {children}
    </>
  )
}
export default ProgramLayout