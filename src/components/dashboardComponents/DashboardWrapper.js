import React, { useState } from "react";
import DashboardHeader from "./DashboadHeader";
import DashboardContent from "./DashboardContent";

const DashboardWrapper = (props) => {
	const { viewConfigOption } = props;
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
				viewConfigOption={viewConfigOption}
			/>
			<DashboardContent
				viewConfigTab={viewConfigTab}
				viewConfigOption={viewConfigOption}
			/>
		</div>
	);
};

export default DashboardWrapper;
