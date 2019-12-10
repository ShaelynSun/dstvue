<template>
  <div>
    <label>
      <div class="vue-title">
        <h2>Search your position</h2>
      </div>
      <GmapAutocomplete :position.sync="markers[0].position" @keyup.enter="usePlace" @place_changed="setPlace"
                        style="position:relative;left:300px"
                        :options="{
       zoomControl: true,
       mapTypeControl: true,
       scaleControl: true,
       streetViewControl: true,
       rotateControl: false,
       fullscreenControl: true,
       disableDefaultUi: true,
     }"
      >
      </GmapAutocomplete>
      <button class="btn btn-primary btn1" type="submit" @click="usePlace">Search</button>
    </label>
    <gmap-map
      :center="centers"
      :zoom="11"
      map-type-id="terrain"
      style="width:60%; height: 500px;  position:relative;left:300px;"
    >
      <button class="btn btn-primary btn1" type="submit" @click="usePlace">Search</button>
      <gmap-marker
        @dragend="updateMaker"
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="centers=m.position"
      />
    </gmap-map>
  </div>
</template>

<script>
export default {
  data () {
    return {
      centers: {lat: 51.508742, lng: -0.120850},
      markers: [{
        position: {lat: 51.508742, lng: -0.120850}
      }],
      place: null
    }
  },
  description: 'Autocomplete Example (#164)',
  mounted () {

  },
  methods: {
    setPlace (place) {
      this.place = place
    },
    setDescription (description) {
      this.description = description
    },
    usePlace (place) {
      if (this.place) {
        var newPostion = {
          lat: this.place.geometry.location.lat(),
          lng: this.place.geometry.location.lng()
        }
        this.centers = newPostion
        this.markers[0].position = newPostion
        this.place = null
      }
    },

    updateMaker: function (event) {
      console.log('updateMaker, ', event.latLng.lat())
      this.markers[0].position = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      }
    }
  }
}
</script>
<style>
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 30pt;
    margin-bottom: 10px;
  }
  .btn1 {
    width: 100px;
    height: 30px;
    font-size: 14pt;
    text-align: center;
    padding: 0;
  }
</style>
