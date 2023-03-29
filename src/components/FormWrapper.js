import React, { useState } from "react";
import { Form } from "unbxd-react-components";
import ConfigWrapper from "./ConfigWrapper";
import { getConfig } from "../utils/getConfig";

const FormWrapper = (props = {}) => {
	const DEBOUNCE_DELAY = 400;

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
		let objData = obj.data || {};
		try {
			for (let key in objData) {
				if (objData[key] !== formData[key]) {
					const config = getConfig(moduleKey, key);
					if (config !== -1 && config.options) {
						let { options, dataType, name } = config;
						let selectedVal = "";
						if (dataType === "string") {
							selectedVal = objData[name].value;
						} else if (dataType === "boolean") {
							for (let option of options) {
								if (option.id === parseInt(objData[name])) {
									selectedVal = option.value;
								}
							}
						}
						objData = { ...objData, [name]: selectedVal };
					}
				}
			}
		} catch (err) {
			// console.log("error:", objData, err);
		}

		// handle obj.errors later on
		if (objData) {
			updateFormData(objData, moduleKey);
		}
	};

	const onCodeChange = (field, code) => {
		updateFormData({ [field]: code }, moduleKey);
	};

	const delayChange = debounce(function (element, code) {
		if (!code) {
			onChange(element);
		} else {
			onCodeChange(element, code);
		}
	}, DEBOUNCE_DELAY);

	return (
		<Form onChange={delayChange}>
			{config.map((conf, index) => {
				return (
					<ConfigWrapper
						moduleKey={moduleKey}
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
