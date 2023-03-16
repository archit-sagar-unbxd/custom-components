import React, { useState } from "react";
import { Form } from "unbxd-react-components";
import ConfigWrapper from "./ConfigWrapper";

const FormBuilder = (props = {}) => {
	const {
		moduleConfig: {
			config = [],
			docLink = "",
			moduleName = "",
			moduleDesc = "",
		} = {},
	} = props;

	const [formValue, setFormValue] = useState({});

	const onChange = (obj = {}) => {
		console.log("obj", obj);
		if (obj.data) {
			setFormValue(obj.data);
		}
	};
	const onCodeChange = (field, code) => {
		console.log({ ...formValue, [field]: code });
		setFormValue({ ...formValue, [field]: code });
	};

	return (
		<Form onChange={onChange}>
			<h1 className="moduleName">{moduleName}</h1>
			<p className="moduleDesc">{moduleDesc}</p>
			<a className="moduleLink" href={docLink}>
				Read more about {moduleName} here
			</a>
			{config.map((conf, index) => {
				return (
					<ConfigWrapper
						formValue={formValue}
						key={index}
						docLink={docLink}
						attrConfig={conf}
						onCodeChange={onCodeChange}
					/>
				);
			})}
		</Form>
	);
};

export default FormBuilder;
