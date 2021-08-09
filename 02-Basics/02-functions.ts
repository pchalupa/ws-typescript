const add = (a: number, b: number): number => a + b;

add(1, 1);
// add('1', '1');

function sendMessage(to: number, message: string): { recepient: number; message: string } {
	return {
		recepient: to,
		message,
	};
}

sendMessage(123456789, 'Hey');
