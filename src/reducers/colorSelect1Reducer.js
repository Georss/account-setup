const colorSelect1 = (state = '#7e57c2', action) => {
    switch (action.type) {
        case 'COLOR_SELECT_1':
            return action.props;
        default:
            return state;
    }
};

export default colorSelect1;
