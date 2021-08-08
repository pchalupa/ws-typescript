interface Car<Type> {
	name: string;
	type: Type;
}

const x: Car<string> = { name: 'foo', type: 'fast' };

/*
function fetchData<DataType>(key: string) {
	return 's' as DataType;
}
*/
