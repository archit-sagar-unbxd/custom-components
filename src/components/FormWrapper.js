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
		formData = {},
	} = props;

	const debounce = (callback, wait) => {
		let timeoutId = null;
		return (...args) => {
			window.clearTimeout(timeoutId);
			timeoutId = window.setTimeout(() => {
				callback.apply(null, args);
			}, wait);
		};
	};

	const onChange = (obj = {}) => {
		let objData = obj.data;
		if (objData) {
			for (let configEl of config) {
				let options = configEl.options;
				const dataType = configEl.dataType;
				if (options) {
					let name = configEl.name;
					let selectedVal = objData[name];
					if (selectedVal && dataType === "string") {
						selectedVal = selectedVal.value;
					} else if (selectedVal && dataType === "boolean") {
						for (let option of options) {
							if (option.id === parseInt(selectedVal)) {
								selectedVal = option.value;
							}
						}
					}
					objData = { ...objData, [name]: selectedVal };
				}
			}

			// handle obj.errors later on
			if (objData) {
				updateFormData(objData, moduleKey);
			}
		}
	};

	const onCodeChange = (field, code) => {
		// if (code) {
		updateFormData({ [field]: code }, moduleKey);
		// }
	};

	const delayChange = debounce(function (element, code) {
		if (!code) {
			onChange(element);
		} else {
			onCodeChange(element, code);
		}
	}, 1000);

	return (
		<Form onChange={delayChange}>
			<h1 className="moduleName">{moduleName}</h1>
			<p className="moduleDesc">{moduleDesc}</p>
			<a className="moduleLink" href={docLink} target="_blank">
				Read more about {moduleName} here
			</a>
			{config.map((conf, index) => {
				return (
					<ConfigWrapper
						formData={formData}
						key={index}
						docLink={docLink}
						attrConfig={conf}
						onChange={delayChange}
						onCodeChange={delayChange}
					/>
				);
			})}
		</Form>
	);
};

export default FormWrapper;
