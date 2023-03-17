import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { darculaInit } from "@uiw/codemirror-theme-darcula";
import { tags as t } from "@lezer/highlight";
import { javascript } from "@codemirror/lang-javascript";

import CustomDrop from "./formComponents/CustomDrop";
import CustomInput from "./formComponents/CustomInput";
import CustomRadio from "./formComponents/CustomRadio";
import WrapperPreloader from "./WrapperPreloader";

const ConfigWrapper = (props = {}) => {
	const {
		attrConfig: { dataType = "", required = false, name = "", options } = {},
		formValue = {},
		onCodeChange,
		docLink,
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
						label={name}
						value={formValue[name]}
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
					<label className="RCB-form-el-label" htmlFor={name}>
						{name}
					</label>
					<CodeMirror
						theme={darculaInit({
							settings: {
								caret: "#c6c6c6",
								fontFamily: "monospace",
							},
							styles: [{ tag: t.comment, color: "#6272a4" }],
						})}
						placeholder="Insert code here..."
						height="200px"
						width="500px"
						name={name}
						extensions={[javascript({ jsx: true })]}
						onChange={(code) => onCodeChange(name, code)}
						value={formValue[name]}
					/>
				</div>
			);

		case "boolean": {
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
						className={name}
						label="Are you sure?"
						options={options}
					/>
				</div>
			);
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
						<CustomInput value={formValue[name]} name={name} label={name} />
					</div>
				);
			} else {
				return (
					<div className="wrapper">
						<WrapperPreloader
							name={name}
							dataType={dataType}
							required={required}
							docLink={docLink}
						/>
						<CustomDrop
							// onChange={(selected, e) => onDropdownChange(name, selected, e)}
							label={name}
							name={name}
							appearance="block"
							className=""
							options={options}
							value={formValue[name]}
						/>
					</div>
				);
			}
		}
	}
};

export default ConfigWrapper;
