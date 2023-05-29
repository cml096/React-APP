export interface GalaxiesResponse {
    "collection": {
        "items": Array<GalaxyItem>,
        "version": string,
        "href": string,
        "metadata": {
            "total_hits": number
        },
        "links": Array<{
            "rel": string,
            "prompt": string,
            "href": string
        }>
    }
}

export interface GalaxyItem {
    "href": string,
    "data": Array<{
        "center": string,
        "title": string,
        "nasa_id": string,
        "date_created": string,
        "keywords": Array<string>,
        "media_type": string,
        "description_508": string,
        "secondary_creator": string,
        "description": string
    }>,
    "links": Array<{
        "href": string,
        "rel": string,
        "render": string
    }>
}