const currentDate = new Date().toLocaleDateString().split('.').reverse().join('-');

const initialState = {
    city: 'Berlin',
    'startDate': `${currentDate}`,
    'endDate': `2023-08-10`
}

export {
    initialState,
    currentDate,
}