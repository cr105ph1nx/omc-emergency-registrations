<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.12.1/css/all.css"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />

    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#"
        ><img src="@/assets/images/logo.png"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#myNavbarToggler10"
        aria-controls="myNavbarToggler10"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="myNavbarToggler10">
        <ul class="navbar-nav mx-auto"></ul>
        <ul class="navbar-nav sm-icons mr-0">
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fab fa-facebook-f"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fab fa-instagram"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fab fa-twitter"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fab fa-linkedin"></i></a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container">
      <div class="row">
        <div class="col">
          <div class="title"><p>🐧✨ Join the Family !</p></div>
          <div class="description">
            <p>
              Tout a émergé en 2009 de la volonté d’un groupe d'étudiants de
              l’USTHB qui a organiser la première install party dans le pays.
              Ils se sont posé pour défi d’apporter l’open source au grand
              public. Ce challenge primordial est constituant de l’essence du
              club. Ces étudiants ont ensuite fondé Open Minds Club, afin de
              mieux pouvoir relever le défi en permanence en se fixant de
              nouveaux objectifs, en organisant plus d'activités et de
              rencontres sous des formes diverses, mais dont le but est toujours
              le même. Le but et la raison d'être du club est la promotion de ce
              qui est vraiment pour nous “l'esprit" ou la “philosophie” du libre
              et de l’open source d'où notre slogan, "Ce qui ne se partage pas
              se perd".
            </p>
          </div>
        <div style="position:relative">
          <modale :show="show" :toggleModale="toggleModale"></modale>
          <div v-on:click="toggleModale" class="btn">S'inscrire</div>
        </div>
          
        </div>
        <div class="col">
          <div class="video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ysnt-nAPTNo"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>

    <footer>
      <p>Made with ❤️ and &#x2615; by Humans of OMC</p>
    </footer>
  </div>
</template>

<script>
import Modale from "./components/Modale.vue";
export default {
  name: "App",
  components: {
    modale: Modale,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    parentMethod(success) {
      // Do something with the value
      this.success = success;
    },
    toggleModale: function () {
      this.show = !this.show;
    },
  },
};
</script>

<style scoped>
@import "assets/css/main.css";
</style>
