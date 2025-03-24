import { Home, Trash2, ClipboardList, CheckCircle, Calendar, CreditCard } from "lucide-react";
import MenuItem from "./MenuItem";

const MenuBar = () => {
  return (
    <div style={{width: "100%" }}>
    <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%", top: 30, left: 0}}>
      <MenuItem icon={<Home size={28} />} label="Postcode" />
      <MenuItem icon={<Trash2 size={28} />} label="Waste Type" />
      <MenuItem icon={<ClipboardList size={28} color="#EFB036"/>} label="Select Skip" />
      <MenuItem icon={<CheckCircle size={28} />} label="Permit Check" />
      <MenuItem icon={<Calendar size={28} />} label="Choose Date" />
      <MenuItem icon={<CreditCard size={28} />} label="Payment" />
      </div>
    </div>
  );
};

export default MenuBar;
