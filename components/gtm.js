import { uid } from "quasar";

export default {
	logEvent(category, action, label, value) {
		dataLayer.push({
			event: "quasar-event",
			category: category,
			action: action,
			label: label,
			value: value,
			cid: this.getCid(),
		});
	},

	logPage(path) {
		// Here you can preprocess the path, if needed
		dataLayer.push({
			event: "quasar-pageview",
			path: path,
			cid: this.getCid(),
		});
	},

	getCid() {
		// We need an unique identifier for this session
		// We store it in a localStorage, but you may use cookies, too
		if (!localStorage.cid) {
			localStorage.cid = uid();
		}
		return localStorage.cid;
	},
};
