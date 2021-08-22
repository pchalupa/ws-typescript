interface Car<Type> {
	name: string;
	type: Type;
}

const x: Car<string> = { name: 'foo', type: 'fast' };

type errorCallback<ErrorType> = (error: ErrorType) => void;

async function fetchData<DataType>(url: string) {
	try {
		const response = await fetch(url);
		const data: DataType = await response.json();

		return data;
	} catch (error) {
		console.error(error);
	}
}

fetchData<{ id: number; name: string }>('https://jsonplaceholder.typicode.com/users/1');
