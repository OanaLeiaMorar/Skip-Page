const MenuItem = ({ icon, label }) => {
    const isSelectSkip = label === "Select Skip";
    return (
      <div className={`menu-item ${isSelectSkip ? "highlight" : ""}`}>
      <span className="menu-icon">{icon}</span>
      <span style={{ fontSize: "13px" }}>{label}</span>
    </div>
    );
  };
  
  export default MenuItem;