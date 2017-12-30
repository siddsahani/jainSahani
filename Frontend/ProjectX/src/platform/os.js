import {Platform} from "react-native"

/**
 * A simple abstraction of the current platform which primarily delegates to the React-Native one
 */
export default class {
	static get os() {
		return Platform.OS
	}

	static get ios() {
		return this.os === "ios"
	}

	static get android() {
		return this.os === "android"
	}

	static get uwp() {
		return this.os === "windows"
	}
}
