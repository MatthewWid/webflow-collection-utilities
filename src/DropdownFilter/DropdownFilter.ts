import Filter from "../Filter";
import Collection from "../Collection";
import {ATTR_DROPDOWN_FILTERS} from "../constants";
import CollectionItem from "../CollectionItem";

class DropdownFilter extends Filter {
	private collection: Collection;
	private dropdown: HTMLSelectElement;
	private filterField: string;

	constructor(collection: Collection, dropdown: HTMLSelectElement) {
		super();

		collection.addFilter(this);
		dropdown.addEventListener("change", collection.refreshFilters);

		this.collection = collection;
		this.dropdown = dropdown;
		this.filterField = dropdown.getAttribute(ATTR_DROPDOWN_FILTERS) ?? "";
	}

	getFilteredList = (items: CollectionItem[]) =>
		items.filter((collectionItem) => {
			const value = collectionItem.getValueFromName(this.filterField);

			return value && value === this.filterField;
		});
}

export default DropdownFilter;
