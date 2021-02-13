module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
	},
	'extends': [
		'google',
	],
	'parserOptions': {
		'ecmaVersion': 12,
		'sourceType': 'module',
	},
	'rules': {
		'linebreak-style': ['error', 'windows'],
		'indent': [2, 'tab'],
		'no-tabs': ['error', {allowIndentationTabs: true}],
	},
};