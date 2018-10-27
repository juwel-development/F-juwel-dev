module.exports = {
	'transform': {
		'.*\\.(ts|vue)$': 'ts-jest'
	},
	'moduleFileExtensions': [
		'ts',
		'js',
		'vue'
	],
	'moduleNameMapper': {
		'@jl/base-utils': '<rootDir>/node_modules/@jl/base-utils/dist/index.js',
		'@src/(.*)$': '<rootDir>/src/$1'
	},
	'testRegex': '/test/.*\\.(ts|js)$',
	'collectCoverageFrom': [
		'src/**/*.{js,ts}',
		'!**/*.d.ts'
	],
	'coveragePathIgnorePatterns': [
		'/node_modules/',
		'/test/.*\\.(ts|js)$',
		'/.*\\.vue$'
	],
	'coverageThreshold': {
		'global': {
			'branches': 55,
			'functions': 50,
			'lines': 65,
			'statements': 65
		}
	},
	'testEnvironment': 'jsdom',
	'testURL': 'http://localhost/'
};