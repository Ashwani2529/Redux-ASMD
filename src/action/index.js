export const inc = (value) => {
    return {
        type: 'INC',
        payload: value, 
    };
}

export const dnc = (value) => {
    return {
        type: 'DNC',
        payload: value, 
    };
}

export const mul = (value) => {
    return {
        type: 'MUL',
        payload: value, 
    };
}

export const div= (value) => {
    return {
        type: 'DIV',
        payload: value, 
    };
}

