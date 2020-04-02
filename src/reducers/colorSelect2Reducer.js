const colorSelect2 = (state = null, action) => {
    switch (action.type) {
        case 'COLOR_SELECT_2':
            return state = action.props;
        default:
            return state;
    }
};

export default colorSelect2;
