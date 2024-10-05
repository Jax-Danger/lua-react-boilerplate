import React, { useState } from "react";
import "./inv.css";

const Inventory: React.FC = ({}) => {
	const [maxslots, setmaxslots] = useState(10);
	return (
		<>
			<div className="inventory-background"></div>
		</>
	);
};

export default Inventory;
