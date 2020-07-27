import CollectionItem from "./CollectionItem";
import Filter from "./Filter";
import {CLASS_COLLECTION_ITEM} from "./constants";

class Collection {
	private items: CollectionItem[];

	private filters: Filter[] = [];

	constructor(private element: HTMLElement) {
		this.items = (Array.from(
			element.getElementsByClassName(CLASS_COLLECTION_ITEM)
		) as HTMLElement[]).map((item) => new CollectionItem(item));
	}

	addFilter(filter: Filter) {
		this.filters.push(filter);
	}

	refreshFilters() {}
}

export default Collection;
