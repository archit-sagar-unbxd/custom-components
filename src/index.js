import React from "react";
import ReactDOM from "react-dom/client";
import { Form } from "unbxd-react-components";
import { Custombutton } from "./formComponents/customButton";
import { Customchecks } from "./formComponents/customCheckbox";
import { Custominput } from "./formComponents/customInput";
import { Customradio } from "./formComponents/customRadioList";
import { Customslider } from "./formComponents/customRangeSlider";

const el = document.getElementById("app");

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
	<div>
		{/* Button Section */}
		<Form
			className=""
			onChange={function noRefCheck() {}}
			onSubmit={function noRefCheck() {}}
		>
			<Custombutton
				appearance="default"
				className=""
				onClick={function noRefCheck() {}}
				size="large"
			>
				LARGE
			</Custombutton>

			{/* Checkbox Section */}
			<Customchecks
				appearance="inline"
				className=""
				label="Orange"
				name="orange"
			/>
			<Customchecks
				appearance="inline"
				className=""
				label="Pineapple"
				name="pineapple"
				onChange={function noRefCheck() {}}
				value
			/>
			<Customchecks
				appearance="inline"
				className=""
				label="Grapes"
				name="grapes"
			/>

			{/* Input Section */}
			<Custominput
				appearance="block"
				autoComplete="off"
				className=""
				label="Name"
				name="email"
				placeholder="Enter your email"
				type="text"
				validations={[
					{
						message: "Please enter a valid email address",
						type: "EMAIL",
					},
				]}
			/>

			{/* Radio List Section */}
			<Customradio
				appearance="block"
				className=""
				label="Are you sure?"
				name="yesNoOption"
				options={[
					{
						id: "YES",
						name: "Yes",
					},
					{
						id: "NO",
						name: "No",
					},
				]}
			/>

			{/* Range Slider Section */}
			<Customslider
				appearance="block"
				className=""
				defaultValue="10"
				label="Select price range"
				max="100"
				min="10"
				name="price"
				showBubble
			/>
		</Form>
	</div>
);
