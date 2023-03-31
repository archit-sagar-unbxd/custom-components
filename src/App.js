import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "unbxd-react-components/components/theme.css";
import "unbxd-react-components/components/core.css";
import "../public/styles/components/general.scss";
import "../public/styles/components/vanilla2.scss";

import DashboardWrapper from "./components/dashboardComponents/DashboardWrapper";

const App = (props) => {
	return (
		<Routes>
			<Route path="builder" element={<DashboardWrapper />} />
			<Route
				path="/"
				element={
					<div>
						<h1>You are in the home page.</h1>
						<a
							href="/builder"
							style={{ textDecoration: "none", color: "cornflowerblue" }}
						>
							Click to go to the QA platform with default configurations.
						</a>
					</div>
				}
			/>
			{/* <Route path="/builder" element={<h1>Builder Page</h1>} /> */}
		</Routes>
	);
};
// const App = (props) => {
// 	return <DashboardWrapper />;
// };

export default App;
