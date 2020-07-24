import CollectionItem from "./CollectionItem";
import {CLASS_COLLECTION_ITEM} from "./constants";

class Collection {
	items: CollectionItem[];

	constructor(public element: HTMLElement) {
		this.items = (Array.from(
			element.getElementsByClassName(CLASS_COLLECTION_ITEM)
		) as HTMLElement[]).map((item) => new CollectionItem(item));
	}
}

export default Collection;
