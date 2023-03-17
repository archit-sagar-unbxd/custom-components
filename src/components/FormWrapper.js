import React, { useState } from "react";
import { Form } from "unbxd-react-components";
import ConfigWrapper from "./ConfigWrapper";

const FormWrapper = (props = {}) => {
	const {
		moduleConfig: {
			config = [],
			docLink = "",
			moduleName = "",
			moduleDesc = "",
			moduleKey = "",
		} = {},
		updateFormData,
		formValue = {},
	} = props;

	// const [formValue, setFormValue] = useState({});

	const onChange = (obj = {}) => {
		let objData = obj.data;

		for (let configEl of config) {
			let options = configEl.options;

			if (options) {
				let name = configEl.name;
				let selectedVal = objData[name];
				if (selectedVal) {
					selectedVal = selectedVal.value;
					objData = { ...objData, [name]: selectedVal };
				}
			}
		}

		// handle obj.errors later on
		if (objData) {
			updateFormData(objData, moduleKey);
		}
	};
	const onCodeChange = (field, code) => {
		// setFormValue({ ...formValue, [field]: code });
		updateFormData({ [field]: code }, moduleKey);
	};

	return (
		<Form onChange={onChange}>
			<h1 className="moduleName">{moduleName}</h1>
			<p className="moduleDesc">{moduleDesc}</p>
			<a className="moduleLink" href={docLink} target="_blank">
				Read more about {moduleName} here
			</a>
			{config.map((conf, index) => {
				return (
					<ConfigWrapper
						formValue={formValue}
						key={index}
						docLink={docLink}
						attrConfig={conf}
						onChange={onChange}
						onCodeChange={onCodeChange}
					/>
				);
			})}
		</Form>
	);
};

export default FormWrapper;
