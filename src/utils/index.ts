export const shuffle = (array: Array<any>): Array<any> => {
	for (
		let j, x, i = array.length;
		i;
		j = Math.floor(Math.random() * i),
			x = array[--i],
			array[i] = array[j],
			array[j] = x
	);
	return array;
};
