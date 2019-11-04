import {NAV_LINKS_URL, SIDE_LINKS_URL} from "./URLs";

export let getNavLinks = async () => {
    let response = await fetch(NAV_LINKS_URL);
    let links = await response.json();

    return links || [];
};

export let getSideLinks = async () => {
    let response = await fetch(SIDE_LINKS_URL);
    let links = await response.json();

    return links || [];
};