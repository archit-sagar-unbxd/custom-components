import React, { useState } from "react";
import Vanilla2 from "../Vanilla2";
import FormWrapper from "./FormWrapper";

import authConfig from "../config/formConfig/authentication.json";
import searchBoxConfig from "../config/formConfig/searchBox.json";
import productsConfig from "../config/formConfig/products.json";
import facetsConfig from "../config/formConfig/facets.json";
import paginationConfig from "../config/formConfig/pagination.json";
import pageSizeConfig from "../config/formConfig/pageSize.json";
import sortingConfig from "../config/formConfig/sorting.json";
import productViewConfig from "../config/formConfig/productView.json";
import breadcrumbsConfig from "../config/formConfig/breadcrumbs.json";
import spellCheckConfig from "../config/formConfig/spellCheck.json";
import bannerConfig from "../config/formConfig/banners.json";
import variantsConfig from "../config/formConfig/variants.json";
import swatchesConfig from "../config/formConfig/swatches.json";
import noResultsConfig from "../config/formConfig/noResults.json";
import loaderConfig from "../config/formConfig/loader.json";

import CodeMirror from "@uiw/react-codemirror";
import { darculaInit } from "@uiw/codemirror-theme-darcula";
import { tags as t } from "@lezer/highlight";
import { javascript } from "@codemirror/lang-javascript";

// import madrasLink from "../inputJson/madrasLink_searchconfig";

const FormBuilder = (props = {}) => {
	let masterConfig = {};
	let validatedData = {};
	const [formData, setFormData] = useState({});

	const formConfigs = [
		authConfig,
		searchBoxConfig,
		productsConfig,
		facetsConfig,
		paginationConfig,
		pageSizeConfig,
		sortingConfig,
		productViewConfig,
		breadcrumbsConfig,
		spellCheckConfig,
		bannerConfig,
		variantsConfig,
		swatchesConfig,
		noResultsConfig,
		loaderConfig,
	];

	const updateMasterConfig = (formConfigs) => {
		formConfigs.map((formConfig = {}, i) => {
			if (formConfig.moduleKey) {
				masterConfig = {
					...masterConfig,
					[formConfig.moduleKey]: { ...formConfig.config },
				};
			}
		});
	};
	updateMasterConfig(formConfigs);

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

	var validator = () => {
		return JSON.stringify(
			{ ...formData },
			function (idx, value) {
				for (let moduleKey in value) {
					let moduleConfig = masterConfig[moduleKey];
					let formConfig = formData[moduleKey];

					validatedData = {
						...validatedData,
						[moduleKey]: { ...formConfig },
					};
					for (let element in formConfig) {
						for (let index in moduleConfig) {
							const eleConfig = moduleConfig[index];

							if (eleConfig["name"] === element) {
								const eleDataType = eleConfig["dataType"];

								// based on dataType do the required
								if (eleDataType === "element" || eleDataType === "array") {
									try {
										const eleVal = formConfig[element];
										if (eleVal) {
											let valModuleConfig = {
												...validatedData[moduleKey],
												[element]: eval(eleVal),
											};
											validatedData = {
												...validatedData,
												[moduleKey]: { ...valModuleConfig },
											};
										}
									} catch (error) {
										console.log(error);
									}
								} else if (eleDataType === "object") {
									try {
										const eleVal = formConfig[element];
										if (eleVal) {
											let valModuleConfig = {
												...validatedData[moduleKey],
												[element]: JSON.parse(eleVal),
											};
											validatedData = {
												...validatedData,
												[moduleKey]: { ...valModuleConfig },
											};
										}
									} catch (error) {
										console.log(error);
									}
								} else if (eleDataType === "function") {
									try {
										// x = formConfig[element];
										let evaluatedVal = eval("(" + formConfig[element] + ")");
										let valModuleConfig = {
											...validatedData[moduleKey],
											[element]: evaluatedVal,
										};
										validatedData = {
											...validatedData,
											[moduleKey]: { ...valModuleConfig },
										};
									} catch (error) {
										console.log(error);
									}
								}
							}
						}
					}
				}
				console.log(validatedData);
			},
			2
		);
	};

	return (
		<div className="formMaster">
			{/* <div className="vanilla2">
				<Vanilla2 />
			</div> */}
			<div className="formbuilder">
				<div className="components">
					{formConfigs.map((formConfig = {}, i) => {
						// updateMasterConfig(formConfig.config, formConfig.moduleKey);
						return (
							<FormWrapper
								key={i}
								updateFormData={updateFormData}
								moduleConfig={formConfig}
								formData={formData[formConfig.moduleKey]}
							/>
						);
					})}
				</div>
				<div className="apply">
					<button id="applyBtn" onClick={() => validator()}>
						Apply
					</button>
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
						extensions={[javascript({ json: true })]}
					/>
				</div>
			</div>

			<br />
			<br />

			{/* <CodeMirror
				value={validator}
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
				extensions={[javascript({ json: true })]}
				// onChange={(code) => updateFormData((code = code))}
				// onChange={(code) => onCodeChange(name, code)}
				// onChange={(code) => newFormData(JSON.parse(code))}
			/> */}
		</div>
	);
};

export default FormBuilder;
