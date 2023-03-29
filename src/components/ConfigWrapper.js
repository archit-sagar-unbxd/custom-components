import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { darculaInit } from "@uiw/codemirror-theme-darcula";
import { tags as t } from "@lezer/highlight";
import { javascript } from "@codemirror/lang-javascript";

import { getConfig } from "../utils/getConfig";
import CustomDrop from "./formComponents/CustomDrop";
import CustomInput from "./formComponents/CustomInput";
import CustomRadio from "./formComponents/CustomRadio";
import WrapperPreloader from "./WrapperPreloader";

const ConfigWrapper = (props = {}) => {
	const {
		attrConfig: { dataType = "", required = false, name = "", options } = {},
		onChange,
		onCodeChange,
		docLink,
		formData,
		moduleKey,
	} = props;

	switch (dataType) {
		case "number": //text type(number)
			return (
				<div className="wrapper">
					<WrapperPreloader
						name={name}
						dataType={dataType}
						required={required}
						docLink={docLink}
					/>
					<CustomInput
						type="number"
						name={name}
						defaultValue={parseInt(formData[name])}
					/>
				</div>
			);

		case "object":
		case "function":
		case "array": //code
			return (
				<div className="wrapper">
					<WrapperPreloader
						name={name}
						dataType={dataType}
						required={required}
						docLink={docLink}
					/>
					<CodeMirror
						className="codeMirrorComponent"
						value={JSON.parse(JSON.stringify(formData[name], null, 2))}
						// theme={darculaInit({
						// 	settings: {
						// 		caret: "#c6c6c6",
						// 		fontFamily: "monospace",
						// 	},
						// 	styles: [{ tag: t.comment, color: "#6272a4" }],
						// })}
						placeholder="Insert code here..."
						height="200px"
						width="100%"
						name={name}
						extensions={[javascript({ jsx: true })]}
						onChange={(code) => onCodeChange(name, code)}
					/>
				</div>
			);

		case "boolean": {

			let defaultVal;
			try{
				const config = getConfig(moduleKey, name);
				let options = config.options;
				for (let option of options) {
					if (option.value === formData[name]) {
						defaultVal = option;
						break;
					}
				}
			}catch(err){}

			return (
				<div className="wrapper">
					<WrapperPreloader
						name={name}
						dataType={dataType}
						required={required}
						docLink={docLink}
					/>
					<CustomRadio
						name={name}
						appearance="block"
						defaultValue={defaultVal?defaultVal.id:null}
						options={options}
					/>
				</div>
			);

			// const radioOnChange = (e) => {
			// 	console.log(e.target.value, formData)
			// }

			// // console.log(moduleKey, name, options, defaultVal, formData[name]);

			// let renderRadioList = () => {
			// 	return options.map((item) => {
			// 		const { name, id } = item;
			// 		try {
			// 			const selected = defaultVal.id === id ? "selected-tab" : " ";
			// 			return (
			// 				<div
			// 					key={id}
			// 					htmlFor={id}
			// 					className={`transparent-btn radio-tab ${selected}`}
			// 				>
			// 					<input
			// 						type="radio"
			// 						className="radio-input"
			// 						// className="radio-input"
			// 						// onChange={onChangeTab}
			// 						id={id}
			// 						name="banner_tab"
			// 						value={id}
			// 						checked={(selected==='selected-tab'?true:false)}
			// 						// onChange={radioOnChange}
			// 						// onChange={onChange}
			// 					/>
			// 					<label className={`radio-label`} htmlFor={id}>
			// 						{name}
			// 					</label>
			// 				</div>
			// 			);
			// 		} catch (error) {}
			// 	});
			// };

			// return (
			// 	<div className="wrapper">
			// 		<WrapperPreloader
			// 			name={name}
			// 			dataType={dataType}
			// 			required={required}
			// 			docLink={docLink}
			// 		/>
			// 		{renderRadioList()}
			// 	</div>
			// );
		}

		case "string":
		case "element":
		default: {
			if (options === undefined) {
				return (
					<div className="wrapper">
						<WrapperPreloader
							name={name}
							dataType={dataType}
							required={required}
							docLink={docLink}
						/>
						<CustomInput
							name={name}
							type="text"
							defaultValue={formData[name]}
							value={formData[name]}
						/>
						{/* <CustomInput name={name} value={formData[name]} /> */}
					</div>
				);
			} else {
				const config = getConfig(moduleKey, name);
				let defaultVal;
				// console.log(moduleKey, name, formData[name], config);
				for (let option of config.options) {
					if (option.value === formData[name]) {
						// console.log(option, formData[name]);
						defaultVal = option;
						break;
					}
				}
				return (
					<div className="wrapper">
						<WrapperPreloader
							name={name}
							dataType={dataType}
							required={required}
							docLink={docLink}
						/>
						<CustomDrop
							name={name}
							appearance="block"
							className=""
							options={options}
							defaultValue={defaultVal}
						/>
					</div>
				);
			}
		}
	}
};

export default ConfigWrapper;
