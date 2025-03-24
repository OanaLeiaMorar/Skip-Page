import skipImage from "../assets/skip.jpeg";
const Card = ({ title, description, isChecked, onCheck }) => {
    return (
      <div className="card">
        <input type="checkbox" className="card-checkbox" checked={isChecked} 
        onChange={onCheck}/>
        <img src={skipImage} alt={title} className="card-image" />
        <div className="card-overlay">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
      </div>
    );
  };
  
  export default Card;