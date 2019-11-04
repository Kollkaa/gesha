export let generateNavLinksAction = (navLinks) => {
    return {
        type: "NAV_LINKS_GOT",
        navLinks: navLinks
    }
};

export let generateSideLinksAction = (sideLinks) => {
    return {
        type: "SIDE_LINKS_GOT",
        sideLinks: sideLinks
    }
};