import config from './config'

const { apiKey } = config
const URL = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=mexico&api_key=${apiKey}&format=json`;

console.log(URL);

export default function getArtists() {
	return fetch(URL)
		.then(res => res.json())
		.then(json => json.topartists.artist)
}
