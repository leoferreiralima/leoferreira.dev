export function slugify(input?: string) {
    if (!input) return '';

    // make lower case and trim
    var slug = input.toLowerCase().trim();

    // remove accents from charaters
    slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    // replace invalid chars with spaces
    slug = slug.replace(/[^a-z0-9\s-]/g, ' ').trim();

    // replace multiple spaces or hyphens with a single hyphen
    slug = slug.replace(/[\s-]+/g, '-');

    return slug;
}

export async function getImageMetadata(path: string) {
    const images = import.meta.glob<{ default: ImageMetadata }>('/src/assets/*.{jpeg,jpg,png,gif,webp}');

    if (!images[path]) {
        throw new Error(`"${path}" does not exist in glob: "src/assets/*.{jpeg,jpg,png,gif}"`);
    }

    const image = await images[path]();
    return image.default;
}

export function getReadTimeInMintues(text: string) {
    const wpm = 200;
    const wordsQuantity = text.split(/[^A-Za-z]+/).length;
    return Math.ceil(wordsQuantity / wpm);
}
