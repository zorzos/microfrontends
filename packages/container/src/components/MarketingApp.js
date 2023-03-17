import React, { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingApp";

console.log("RAFAIL ZORZOS");

export default () => {
	const ref = useRef(null);

	useEffect(() => {
		mount(ref.current);
	});

	return <div ref={ref} />;
};
