let initialState = {
    navLinks: [],
    sideLinks: []
};

export let navSideLinksReducer = (state = initialState, action) => {
    switch (action.type) {
        case "NAV_LINKS_GOT":
            return {
                navLinks: action.navLinks,
                sideLinks: state.sideLinks
            };
        case "SIDE_LINKS_GOT":
            return {
                sideLinks: action.sideLinks,
                navLinks: state.navLinks
            };
        default:
            return state;
    }
};