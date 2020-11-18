<template>
    <b-container class="bv-example-row">
    <b-row align-v="center">
      <b-col>1 of 3</b-col>
      <b-col @click="created" id="nowPlaying">Now Playing!</b-col>
      <b-col v-for="movie in movies" v-bind:key = movie.title>2 of 3</b-col>
      <b-col id="movieDetails">THIS IS THE THIRD COLUMN</b-col>
    </b-row>
    </b-container>
</template>


<script>
import axios from 'axios'

export default {
    data() {
    return {
      movies: [],
    };
  },
    created() {
    axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=22291b84074a8a7ddb5b1547378f77e7&language=en-US&page=1")
    .then((response) => {
      console.log(response.data);this.movies = response.data
      for (var i = 0; i < response.data.results.length; i++) {
            var moviesNowPlaying = document.getElementById("nowPlaying");
            //var movieDetails = document.getElementById("movieDetails");

            console.log(response.data.results[i].title);
            var li = document.createElement("li");
             var details = document.createElement("li")
             li.innerHTML = response.data.results[i].title + "<br />" + "<ul>" + response.data.results[i].overview;
             details.innerHTML = response.data.results[i].overview;
             moviesNowPlaying.appendChild(li)
             //movieDetails.appendChild(details)
      } 
    })
    .catch((error) => {
      console.log("ERROR!!! " + error.response);
      });
  },
  methods: {
    // deleteDog(id) {
    //   if (window.confirm("Do you really want to delete?")) {
    //     db.collection("dogs")
    //       .doc(id)
    //       .delete()
    //       .then(() => {
    //         console.log("Document deleted!");
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //       });
    //   }
    // },
  // getMovies(){

  //   const nowPlaying_url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=22291b84074a8a7ddb5b1547378f77e7&language=en-US&page=1'

  //   let response = await fetch(nowPlaying_url)
  //   let data = await response.json();
  //   console.log(data)
  //   let movieOne = JSON.stringify(data.results[0].title)
  //   console.log(data.results[1])

  //   var moviesNowPlaying = document.getElementById("nowPlaying");
  //   var movieDetails = document.getElementById("movieDetails");

  //   for (i = 0; i < data.results.length; i++) {
  //           //console.log(data.results[i].title);
  //           var li = document.createElement("li");
  //           var details = document.createElement("li")
  //           li.innerHTML = data.results[i].title + "<br />" + "<ul>" + data.results[i].overview;
  //           //details.innerHTML = data.results[i].overview;
  //           moviesNowPlaying.appendChild(li)
  //           //movieDetails.appendChild(details)
  //       } 
  //   }
  },
} 
</script>



<style lang="stylus" scoped>

</style>