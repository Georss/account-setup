const errorForm = (state = null, action) => {
    switch (action.type) {
        case 'ERROR_FORM':
            return state = action.props;
        default:
            return state;
    }
};

export default errorForm;
