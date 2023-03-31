import React, { useState } from "react";
import DashboardHeader from "./DashboadHeader";
import DashboardContent from "./DashboardContent";

const DashboardWrapper = (props) => {
	const [viewConfigTab, setViewConfigTab] = useState(true);

	const toggleViewConfigTab = () => {
		if (viewConfigTab) {
			setViewConfigTab(false);
		} else {
			setViewConfigTab(true);
		}
	};

	return (
		<div className="dashboardWrapper">
			<DashboardHeader
				toggleConfigTab={toggleViewConfigTab}
				viewConfigTab={viewConfigTab}
			/>
			<DashboardContent viewConfigTab={viewConfigTab} />
		</div>
	);
};

export default DashboardWrapper;
