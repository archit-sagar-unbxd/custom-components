import React, { useState } from "react";
import { Input, Button } from "unbxd-react-components";

import "../../../public/styles/components/dashboardHeader/header.scss";

const DashboardHeader = (props) => {
	const { toggleConfigTab, viewConfigTab } = props;
	return (
		<div className="dashHead">
			<div class="UNX-header">
				<div class="UNX-header-inner">
					<div class="UNX-logo">
						<a href="/" class="UNX-header-logo">
							<span class="UNX-square"></span>
						</a>
					</div>
					<nav class="UNX-nav">
						<a href="javascript:void(0)">Home</a>
						<a href="javascript:void(0)">Clothing</a>
						<a href="javascript:void(0)">Electronics</a>
						<a href="javascript:void(0)">Health & Beauty</a>
						<a href="javascript:void(0)">Watches</a>
					</nav>
					<div class="UNX-right-header">
						<div id="autoSuggestInput" class="UNX-input-wrapper">
							<input
								id="unbxdInput"
								placeholder="Search here..."
								class="UNX-input"
							/>
							<button
								id="searchBtn"
								class="fa fa-search UNX-search-btn"
							></button>
							<div class="UNX-pd-parent">
								<div class="UNX-preview-debugger UNX-query"></div>
							</div>
						</div>
						<div class="UNX-shopping-cart">
							<button class="UNX-icons UNX-naked-btn UNX-shopping-cart-btn"></button>
						</div>
						<div className="userConfigs">
							<a
								href="https://unbxd.github.io/search-JS-library/"
								target="_blank"
							>
								View Documentation
							</a>
							<div className="viewConfig" onClick={() => toggleConfigTab()}>
								{viewConfigTab ? "Hide Config" : "View Config"}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardHeader;

// const DashboardHeader = (props) => {
// 	const { toggleConfigTab, viewConfigTab } = props;
// 	return (
// 		<div className="dashHead">
// 			<img src="./netcore-unbxd-logo.png" alt="Logo" />
// 			<Input name="searchBar" />
// 			<div className="userConfigs">
// 				<a href="https://unbxd.github.io/search-JS-library/" target="_blank">
// 					View Documentation
// 				</a>
// 				<div className="viewConfig" onClick={() => toggleConfigTab()}>
// 					{viewConfigTab ? "Hide Config" : "View Config"}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default DashboardHeader;
