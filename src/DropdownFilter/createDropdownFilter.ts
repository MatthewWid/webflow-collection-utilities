import DropdownFilter from "./DropdownFilter";

const createDropdownFilter = (...args: ConstructorParameters<typeof DropdownFilter>) =>
	new DropdownFilter(...args);

export default createDropdownFilter;
