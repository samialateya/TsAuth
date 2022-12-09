/* eslint-disable no-undef */
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: 'ts-jest', // Use ts-jest for TypeScript
	testEnvironment: 'node', // Use node for testing environment (jsdom, node, etc.)
	rootDir: 'src' // The root directory that Jest should scan for tests and modules within
};