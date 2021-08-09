import { useEffect, useState } from 'react';

export const useHook = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [data, setData] = useState<string[]>([]);

	useEffect(() => {
		setData(['foo', 'bar']);
		setIsLoading(false);
	}, []);

	return { data, isLoading };
};
