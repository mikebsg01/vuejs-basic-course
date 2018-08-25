<template lang="pug">
#app
	h1 {{ msg }}
	select(v-model="selectedCountry")
		option(v-for="country in countries", :value="country.value") {{ country.name }}
	spinner(v-show="loading")
	ul
		artist(v-for="artist in artists", :artist="artist", :key="artist.mbid")
</template>

<script>
import Artist from './components/Artist'
import Spinner from './components/Spinner'
import getArtists from './api'

export default {
	name: 'app',
	components: {
		Artist,
		Spinner
	},
 	data () {
    		return {
			msg: 'Hello World',
			artists: [],
			countries: [
				{ name: 'México', value: 'mexico' },
				{ name: 'Colombia', value: 'colombia' },
				{ name: 'Argentina', value: 'argentina' },
				{ name: 'España', value: 'spain' }
			],
			selectedCountry: 'mexico',
			loading: true
		}
	},
	methods: {
		refreshArtist() {
			this.loading = true
			getArtists(this.selectedCountry)
				.then((artists) => {
					this.loading = false
					this.artists = artists	
				})
		}	
	},
	mounted () {
		this.refreshArtist()
	},
	watch: {
		selectedCountry() {
			this.refreshArtist()
		}
	}
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px

h1, h2
  font-weight normal

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
  color red
</style>
