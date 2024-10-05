import React, { useState, useEffect } from "react";
import { debugData, fetchNui } from "../utils/utils";
debugData([{ action: "setVisible", data: true }]);
import "./app.scss";
const App: React.FC = () => {
	const [servername, setServerName] = useState<string>("Test Server");
	const [startingMoney, setStartingMoney] = useState<number>(1000);
	const [pvp, setPvp] = useState<string>("disabled");

	useEffect(() => {
		fetchNui("getServerInfo").then((data: any) => {
			setServerName(data.serverName);
			setStartingMoney(data.StartingMoney);
			setPvp(data.EnablePvP);
		});
	}, []);

	return (
		<>
			<div className="background">
				<h1 className="title">React x Lua Boileplate for FiveM</h1>
				<h2 className="sub-title">Created by CodesAndGames</h2>

				<div className="body">
					<p>Welcome to {servername}</p>
					<p>Your Starting money is ${startingMoney}</p>
					<p>PVP is currently {pvp}</p>
				</div>

				<button className="close" onClick={() => fetchNui("hideFrame")}>
					Close
				</button>
			</div>
		</>
	);
};

export default App;
