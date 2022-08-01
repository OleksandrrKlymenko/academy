<template>
    <my_header :darkTheme="true"></my_header>
    <section class="location">
      <div id="map" @click="emitMap">
        <LMap :zoom="zoom" :center="this.$store.state.choosenCity.geo">
          <LTileLayer :url="url"></LTileLayer>
          <LMarker :lat-lng="city.geo" v-for="city in location" :key="city"></LMarker>
        </LMap>
      </div>
    </section>
    <modal></modal>
  <my_footer></my_footer>
</template>

<style lang="scss" scoped> 
.location {
    #map {
        max-width: 880px;
        height: 410px;
        padding: 10px;
        margin: 130px auto 0;
    }
}
</style>

<script>
import "leaflet/dist/leaflet.css"
import { LMap, LTileLayer,LMarker } from "@vue-leaflet/vue-leaflet";

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 16,
      bounds: null,
      location: this.$store.state.location,
      map: LMap,
      center: this.$store.state.choosenCity.geo,
    }
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  beforeMount() {
    if( this.$store.state.choosenCity.length == undefined ) {
      return this.$store.state.choosenCity.geo = [46.48903242477565, 30.722489824518462];
    }
  }

}
</script>