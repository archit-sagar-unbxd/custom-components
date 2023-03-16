import React from "react";
import FormBuilder from "./utils/FormBuilder";
import productsConfig from "./config/formConfig/products.json";
import "unbxd-react-components/components/theme.css";
import "unbxd-react-components/components/core.css";
import "../public/styles/components/forms.scss";

const App = () => {
	return <FormBuilder moduleConfig={productsConfig} />;
};

export default App;
