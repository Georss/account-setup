const profileData = (state = 0, action) => {
    switch (action.type) {
        case 'UPDATE_PROFILE_DATA':
            return action.props;
        default:
            return state;
    }
};

export default profileData;
