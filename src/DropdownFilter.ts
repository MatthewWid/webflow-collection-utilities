import Filter from "./Filter";
import CollectionItem from "./CollectionItem";

class DropdownFilter extends Filter {
	constructor(private dropdown: HTMLElement) {
		super();
	}

	getFilteredList(collectionList: CollectionItem[]) {
		return collectionList;
	}
}

export default DropdownFilter;
