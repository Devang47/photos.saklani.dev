import { error } from '@sveltejs/kit';
import { createApi } from 'unsplash-js';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const unsplash = createApi({
		accessKey: import.meta.env.VITE_UNSPLASH_ACCESS_KEY
	});

	const response = await unsplash.users.getPhotos({ username: 'devang47', page: 1, perPage: 40 });

	if (response.errors) {
		error(404);
	}

	const photos: {
		full: string;
		thumbnail: string;
	}[] = [];

	response.response?.results.map((e) => {
		photos.push({ full: e.urls.full, thumbnail: e.urls.regular });
	});

	return new Response(JSON.stringify(photos));
}
