import React from "react";

const WrapperPreloader = (props) => {
	const { name, dataType, required, docLink } = props;
	return (
		<div className="preloader">
			<h1 className="preloader-Title">{name}</h1>
			<span className="preloader-Datatype">{dataType}</span>
			<span className="preloader-Required">{required && "required"}</span>
			<a
				className="preloader-Doclink"
				href={docLink + "#" + name.toLowerCase()}
			>
				i
			</a>
		</div>
	);
};

export default WrapperPreloader;
