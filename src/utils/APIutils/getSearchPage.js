import { getMediaPageByTitle, getCharactersPageByTitle } from "./Anime";

const getSearchPage = async (page, perPage, title) => {
    const anime = {
        found: false,
        data: {},
        error: false,
    };
    const manga = {
        found: false,
        data: {},
        error: false,
    };
    const characters = {
        found: false,
        data: {},
        error: false,
    };

    getMediaPageByTitle("ANIME", title, page, perPage)
        .then(res => {
            if (res.res.ok) {
                anime.data = res.data.Page.media;
                if (anime.data.length) {
                    anime.found = true;
                }
            } else {
                anime.error = true;
            }
        })
        .catch(e => console.log(e));

    getMediaPageByTitle("MANGA", title, page, perPage)
        .then(res => {
            if (res.res.ok) {
                manga.data = res.data.Page.media;
                if (manga.data.length) {
                    manga.found = true;
                }
            } else {
                manga.error = true;
            }
        })
        .catch(e => console.log(e));

    getCharactersPageByTitle(title, page, perPage)
        .then(res => {
            if (res.res.ok) {
                characters.data = res.data.Page.characters;
                if (characters.data.length) {
                    characters.found = true;
                }
            } else {
                characters.error = true;
            }
        })
        .catch(e => console.log(e));

    return { anime, manga, characters };
};

export default getSearchPage;
