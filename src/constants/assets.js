const currentDate = new Date().toLocaleDateString().split('.').reverse().join('-');

const maxDate = (date) => {
    const currentDate = new Date().toLocaleDateString().split('.').reverse().join('-');

    // if the condition is true, we set max date for input 'endDate'
    // if the condition is false, we set max date for input 'startDate'
    if (date && date !== currentDate) {
        const maxDate = new Date(new Date(date.split('-').join('.')).getTime() + 15 * 24 * 60 * 60 * 1000);
        return maxDate.toLocaleDateString().split('.').reverse().join('-');
    } else {
        const maxDate = new Date(new Date(currentDate).getTime() + 15 * 24 * 60 * 60 * 1000);
        return maxDate.toLocaleDateString().split('.').reverse().join('-');
    }
}

const minDate = () => {
    const currentDate = new Date().toLocaleDateString();
    return currentDate.split('.').reverse().join('-');
}

const initialState = {
    city: 'Berlin',
    'startDate': `${currentDate}`,
    'endDate': `${maxDate(currentDate)}`
}

export {
    initialState,
    maxDate,
    minDate,
    currentDate,
}