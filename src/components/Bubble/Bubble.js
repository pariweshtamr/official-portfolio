import { images } from "../../constants"
import "./bubble.scss"
const Bubble = () => {
  return (
    <div className="bubbles">
      <div className="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <img src={images.react} alt="" />
      </div>
      {/* <div className="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div> */}
    </div>
  )
}

export default Bubble
