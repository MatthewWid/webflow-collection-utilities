import CollectionItem from "./CollectionItem";
import Filter from "./Filter";
import DropdownFilter from "./DropdownFilter";
import {CLASS_COLLECTION_ITEM} from "./constants";

class Collection {
	items: CollectionItem[];

	filters: Filter[] = [];

	constructor(public element: HTMLElement) {
		this.items = (Array.from(
			element.getElementsByClassName(CLASS_COLLECTION_ITEM)
		) as HTMLElement[]).map((item) => new CollectionItem(item));
	}

	addDropdownFilter = (...args: ConstructorParameters<typeof DropdownFilter>) => {
		const dropdownFilter = new DropdownFilter(...args);

		this.filters.push(dropdownFilter);

		return dropdownFilter;
	};
}

export default Collection;
