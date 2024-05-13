import React, { useState, useEffect } from "react";

export const TrafficLight = () => {
	const [color, setColor] = useState("red");

	return (
		<div className="container my-5">
			<div className="container bg-dark p-3 rounded">
				<div
					className={
						"light red " + (color == "red" ? "selected" : "")
					}
					onClick={() => setColor("red")}></div>
				<div
					className={
						"light yellow " + (color == "yellow" ? "selected" : "")
					}
					onClick={() => setColor("yellow")}></div>
				<div
					className={
						"light green " + (color == "green" ? "selected" : "")
					}
					onClick={() => setColor("green")}></div>
			</div>
		</div>
	);
};

export default TrafficLight;