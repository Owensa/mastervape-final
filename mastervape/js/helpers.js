// Helpers
function first(obj) {
	try {
		return obj[Object.keys(obj)[0]];
	} catch(err) {
		return '';
	}
}
