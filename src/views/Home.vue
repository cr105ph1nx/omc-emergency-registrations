<template>
  <div>
    <div class="row">
      <div class="col-md-4">
        <div class="title"><p>🐧✨ Join the Family !</p></div>
        <div class="description">
          <p>
            Tout a émergé en 2009 de la volonté d’un groupe d'étudiants de
            l’USTHB qui a organiser la première install party dans le pays. Ils
            se sont posé pour défi d’apporter l’open source au grand public. Ce
            challenge primordial est constituant de l’essence du club. Ces
            étudiants ont ensuite fondé Open Minds Club, afin de mieux pouvoir
            relever le défi en permanence en se fixant de nouveaux objectifs, en
            organisant plus d'activités et de rencontres sous des formes
            diverses, mais dont le but est toujours le même. Le but et la raison
            d'être du club est la promotion de ce qui est vraiment pour nous
            “l'esprit" ou la “philosophie” du libre et de l’open source d'où
            notre slogan, "Ce qui ne se partage pas se perd".
          </p>
        </div>
        <div class="button">
          <router-link class="btn" to="register">S'inscrire</router-link>
        </div>
      </div>
      <div class="col-md-4 ml-auto">
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
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      show: false,
    };
  }
};
</script>
