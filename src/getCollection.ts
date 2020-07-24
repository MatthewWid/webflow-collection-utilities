import Collection from "./Collection";

const getCollection = (selector: string): Collection | null => {
	const element = document.querySelector<HTMLElement>(selector);

	if (element) {
		return new Collection(element);
	} else {
		return null;
	}
};

export default getCollection;
