import CollectionItem from "./CollectionItem";

abstract class Filter {
	abstract getFilteredList(collectionList: CollectionItem[]): CollectionItem[];
}

export default Filter;
