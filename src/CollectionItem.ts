import {ATTR_FIELD_FILTER_NAME} from "./constants";

class CollectionItem {
	constructor(public element: HTMLElement) {}

	getValueFromName(name: string): string | null {
		const foundField = document.querySelector(
			`[${ATTR_FIELD_FILTER_NAME}="${name}"]`
		) as HTMLElement;

		if (foundField) {
			return foundField.innerText;
		} else {
			return null;
		}
	}
}

export default CollectionItem;
