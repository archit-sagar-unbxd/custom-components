import React from "react";

const ConfirmPopUp = (props) => {
	const { trigger, setPopUps, popUps } = props;

	return trigger ? (
		<div className="popup">
			<div className="popup-inner">
				<div className="title">
					<h3>Confirm action</h3>
					<span onClick={() => setPopUps({ ...popUps, confirm: false })}></span>
				</div>
				<div className="content">
					Are you sure you want to publish this configurations?
				</div>
				<div className="footer">
					<button
						className="RCB-btn-secondary"
						onClick={() => console.log("Publish button pressed")}
					>
						Publish
					</button>
					<button
						className="RCB-btn-primary"
						// onClick={() => togglePopUp("confirm")}
						onClick={() => setPopUps({ ...popUps, confirm: false })}
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	) : (
		""
	);
};

export default ConfirmPopUp;
