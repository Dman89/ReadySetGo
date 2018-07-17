let setColumnSort__Field;

function ascSort(a, b) {
	const field = setColumnSort__Field;
	return (a[field] + '').localeCompare(b[field]);
}

function descSort(a, b) {
	const field = setColumnSort__Field;
	return (b[field] + '').localeCompare(a[field]);
}

function setColumnSort({ array, currentField, direction, field }) {
	setColumnSort__Field = field;
	const cloneArray = [...array];
	let sortDirection = 'asc';
	const currentFieldCheck = field === currentField;
	if (currentFieldCheck) {
		sortDirection = direction === 'asc' ? 'desc' : 'asc';
	}
	if (sortDirection === 'asc') {
		cloneArray.sort(ascSort);
	} else if (sortDirection === 'desc') {
		cloneArray.sort(descSort);
	}
	return { array: cloneArray, direction: sortDirection };
}

export { setColumnSort };
