const profileImage = (state = '', action) => {
    switch (action.type) {
        case 'UPLOAD_IMAGE':
            return action.props;
        default:
            return state;
    }
};

export default profileImage;
