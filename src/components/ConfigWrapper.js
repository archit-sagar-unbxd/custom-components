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
					<CustomInput type="number" name={name} />
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
						theme={darculaInit({
							settings: {
								caret: "#c6c6c6",
								fontFamily: "monospace",
							},
							styles: [{ tag: t.comment, color: "#6272a4" }],
						})}
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
						label=""
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
						<CustomInput name={name} />
						{/* <CustomInput value={formData[name]} name={name} /> */}
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
							name={name}
							appearance="block"
							className=""
							options={options}
						/>
					</div>
				);
			}
		}
	}
};

export default ConfigWrapper;
