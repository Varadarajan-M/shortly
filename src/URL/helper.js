export const makeURLOptions = (body = {}, method = 'GET') => ({
	method,
	mode: 'cors',
	...(method !== 'GET' &&
		Object.keys(body).length > 0 && { body: JSON.stringify(body) }),
});

export const makeHttpReq = async (url, options = {}) => {
	try {
		const res = await fetch(url, options);
		const data = await res.json();
		return { status: res.status, data };
	} catch (err) {
		console.log(`Something went wrong ${err}`);
	}
};

export const localStorageService = {
	save: (key, value) => {
		localStorage.setItem(key, JSON.stringify(value));
	},
	get: (key) => {
		const data = localStorage.getItem(key);
		return data !== undefined || data !== null ? JSON.parse(data) : null;
	},
	remove: (key) => {
		localStorage.removeItem(key);
	},

	clear: () => {
		localStorage.clear();
	},
};
