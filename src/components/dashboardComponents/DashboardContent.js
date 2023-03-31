import React, { useRef } from "react";
import Vanilla2 from "../../Vanilla2";
// import Vanilla2 from "../../../oldVanilla2b";
import FormBuilder from "../FormBuilder";

const DashboardContent = (props) => {
	// const confirmModalRef = useRef();
	const { viewConfigTab } = props;

	// const showConfirmModal = () => {
	// 	confirmModalRef.current.showConfirmModal();
	// };

	return (
		<div className="formMaster">
			<div
				className="vanilla2"
				style={{ width: viewConfigTab ? "70%" : "100%" }}
			>
				<Vanilla2 />
			</div>
			<FormBuilder
				// showConfirmModal={showConfirmModal}
				viewConfigTab={viewConfigTab}
			/>
		</div>
	);
};

export default DashboardContent;
