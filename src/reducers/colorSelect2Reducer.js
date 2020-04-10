const colorSelect2 = (state = '#5c6bc0', action) => {
    switch (action.type) {
        case 'COLOR_SELECT_2':
            return action.props;
        default:
            return state;
    }
};

export default colorSelect2;
