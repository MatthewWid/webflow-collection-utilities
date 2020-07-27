import Collection from "./Collection";
import {CLASS_COLLECTION_ROOT} from "./constants";

const getCollection = (elementId: string): Collection | never => {
	const element = document.getElementById(elementId);

	if (element && element.classList.contains(CLASS_COLLECTION_ROOT)) {
		return new Collection(element);
	} else {
		throw new Error("Collection list wrapper does not exist or is not a valid collection list.");
	}
};

export default getCollection;
