const change = (state = 0, action) => {
    const val = parseFloat(action.payload);
    if (!isNaN(val)) {
        switch (action.type) {
            case 'INC':
                return state + val;
            case 'DNC':
                return state - val;
            case 'MUL':
                return state * val;
            case 'DIV':
                return state / val;
            default:
                return state;
        }
    }
    return state;
};
export default change;