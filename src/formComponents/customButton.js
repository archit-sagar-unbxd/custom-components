import React from "react";
import { Button } from "unbxd-react-components";

const Custombutton = (props) => {
	return <Button {...props}>{props.children}</Button>;
};

export { Custombutton };
