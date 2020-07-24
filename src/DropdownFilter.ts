import Filter from "./Filter";

class DropdownFilter extends Filter {
	constructor(private dropdown: HTMLElement) {}

	getFilteredList(collectionList) {
		return collectionList;
	}
}

export default DropdownFilter;
