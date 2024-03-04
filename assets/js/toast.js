function Toast (options) {
    const defaultOptions = {
    	type: "normal",
        string: "Simple Toast",
        x: "20%",
        y: "20%"
  	};
  	// Create Object Of Options
  	const settings = Object.assign({}, defaultOptions, options);

    function show () {
        let toast = `<toast type="${settings.type}" style="top: ${settings.y}; right: ${settings.x};">${settings.string}</toast>`;
        document.querySelector("body").innerHTML += toast;
    }

    return {
        show: show,
    }
}