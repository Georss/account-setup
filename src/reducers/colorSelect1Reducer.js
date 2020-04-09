const colorSelect1 = (state = '', action) => {
    switch (action.type) {
        case 'COLOR_SELECT_1':
            return action.props;
        default:
            return state;
    }
};

export default colorSelect1;
