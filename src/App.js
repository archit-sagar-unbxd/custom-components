import React, { useState } from "react";
import "unbxd-react-components/components/theme.css";
import "unbxd-react-components/components/core.css";
import "../public/styles/components/general.scss";
import "../public/styles/components/vanilla2.scss";
import FormBuilder from "./components/FormBuilder";

import Vanilla2 from "./Vanilla2";

const App = () => {
	const [validatedConfig, setValidatedConfig] = useState({});

	return (
		<div className="formMaster">
			<div className="vanilla2">
				<Vanilla2 />
			</div>
			<FormBuilder setValidatedConfig={setValidatedConfig} />
		</div>
	);
};

export default App;
