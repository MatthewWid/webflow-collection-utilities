import Collection from "./Collection";
import {CLASS_COLLECTION_ROOT} from "./constants.ts";

const getCollection = (elementId: string): Collection | null => {
	const element = document.getElementById(elementId);

	if (element && element.classList.contains(CLASS_COLLECTION_ROOT)) {
		return new Collection(element);
	} else {
		throw new Error("Element does not exist or is not a valid collection list.");
	}
};

export default getCollection;
