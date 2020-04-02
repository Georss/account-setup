const colorSelect1 = (state = null, action) => {
    switch (action.type) {
        case 'COLOR_SELECT_1':
            return state = action.props;
        default:
            return state;
    }
};

export default colorSelect1;
