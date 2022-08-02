import "./card.scss"
const Card = ({ emoji, heading, detail }) => {
  return (
    <div className="service-card">
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
    </div>
  )
}

export default Card
