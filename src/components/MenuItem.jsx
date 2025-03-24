const MenuItem = ({ icon, label }) => {
    const isSelectSkip = label === "Select Skip";
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "10px", color: isSelectSkip ? "#EFB036" : "#555", fontWeight: isSelectSkip ? "bold" : "normal", cursor: "pointer", flex: "1", justifyContent: "center"}}>
        {icon}
        <span style={{fontSize: "14px" }}>{label}</span>
      </div>
    );
  };
  
  export default MenuItem;