import React, { useRef, useState } from "react";
import Vanilla2 from "../vanilla2/Vanilla2";
// import Vanilla2 from "../../../oldVanilla2b";
import FormBuilder from "../formComponents/FormBuilder";

const DashboardContent = (props) => {
	// const confirmModalRef = useRef();
	const { viewConfigTab, viewConfigOption } = props;
	console.log("dashboard content:", viewConfigOption);

	const [validatedConfig, setValidatedConfig] = useState({});

	// const viewConfig = viewConfigOption && viewConfigTab ? true : false;

	// const showConfirmModal = () => {
	// 	confirmModalRef.current.showConfirmModal();
	// };
	console.log(
		"viewConfigTab:",
		viewConfigTab,
		"viewConfigOption:",
		viewConfigOption
	);
	return (
		<div className="formMaster">
			<div
				className="vanilla2"
				style={
					viewConfigOption
						? viewConfigTab
							? { width: "70%" }
							: { width: "100%" }
						: { width: "100%" }
				}
				// style={viewConfigTab ? { width: "70%" } : { width: "100%" }}
				// style={{ width: { viewConfig } ? "70%" : "100%" }}
			>
				<Vanilla2 validatedConfig={validatedConfig} />
			</div>
			{viewConfigOption && (
				<FormBuilder
					// showConfirmModal={showConfirmModal}
					viewConfigTab={viewConfigTab}
					setValidatedConfig={setValidatedConfig}
				/>
			)}
		</div>
	);
};

export default DashboardContent;
