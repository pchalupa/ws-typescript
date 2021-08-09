//* See: https://www.typescriptlang.org/docs/handbook/utility-types.html

const partial: Partial<{ id: number; name: string }> = { id: 1 };

const record: Record<string, string> = { foo: 'bar' };

interface User {
	name: string;
	age: number;
}

const title: Pick<User, 'name'> = { name: 'foo' };

const age: Omit<User, 'name'> = { age: 1 };

function getUser(id: string) {
	return {
		name: 'Foo',
	};
}
