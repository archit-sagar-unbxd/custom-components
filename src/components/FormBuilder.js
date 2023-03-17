import React, { useState } from "react";
import FormWrapper from "./FormWrapper";
import productsConfig from "../config/formConfig/products.json";
import bannerConfig from "../config/formConfig/banners.json";

import CodeMirror from "@uiw/react-codemirror";
import { darculaInit } from "@uiw/codemirror-theme-darcula";
import { tags as t } from "@lezer/highlight";
import { javascript } from "@codemirror/lang-javascript";

const FormBuilder = (props = {}) => {
	const [formData, setFormData] = useState({});

	const updateFormData = (data = {}, moduleKey = null) => {
		if (moduleKey) {
			setFormData({
				...formData,
				[moduleKey]: { ...formData[moduleKey], ...data },
			});
		} else {
			setFormData({ ...formData, ...data });
		}
	};

	// const formConfigs = [productsConfig, bannerConfig];
	const formConfigs = [productsConfig];
	return (
		<div>
			<div className="formbuilder">
				<div className="components">
					{formConfigs.map((formConfig, i) => {
						return (
							<FormWrapper
								key={i}
								updateFormData={updateFormData}
								moduleConfig={formConfig}
								// formValue={formData[formConfig]}
							/>
						);
					})}
				</div>
			</div>
			<div className="formjson">
				<CodeMirror
					value={JSON.stringify(formData, null, 2)}
					theme={darculaInit({
						settings: {
							caret: "#c6c6c6",
							fontFamily: "monospace",
						},
						styles: [{ tag: t.comment, color: "#6272a4" }],
					})}
					placeholder="Insert code here..."
					height="500px"
					width="500px"
					extensions={[javascript({ jsx: true, json: true })]}
					// onChange={(code) => onCodeChange(name, code)}
					// value={formValue[name]}
				/>
			</div>
		</div>
	);
};

export default FormBuilder;
