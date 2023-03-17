import React from "react";

const WrapperPreloader = (props = {}) => {
	const { name = "", dataType = "", required = false, docLink = "" } = props;
	return (
		<div className="preloader">
			<h1 className="title">{name}</h1>
			<span className="datatype">{dataType}</span>
			{required && <span className="required">required</span>}
			<a
				className="doclink"
				href={docLink + "#" + name.toLowerCase()}
				target="_blank"
			>
				i
			</a>
		</div>
	);
};

export default WrapperPreloader;
