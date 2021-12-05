<template>
  <div class="bloc-modale" v-if="show">
    <div class="overlay" v-on:click="toggleModale"></div>

    <div class="modale card">
      <v-container data-app="true" class="content">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="6" md="6" class="specific-padding">
                <v-text-field
                  v-model="first_name"
                  :counter="25"
                  :rules="nameRules"
                  label="Prénom*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6" class="specific-padding">
                <v-text-field
                  v-model="last_name"
                  :counter="25"
                  :rules="nameRules"
                  label="Nom*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6" class="specific-padding">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Email*"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="6" class="specific-padding">
                <v-text-field
                  v-model="matricule"
                  :counter="12"
                  :rules="matriculeRules"
                  label="Matricule*"
                  required
                ></v-text-field>
              </v-col>

              <!--Choose LEVEL -->
              <v-col cols="12" sm="6" md="6" class="specific-padding">
                <v-select
                  attach
                  v-model="level"
                  :items="Level_LMD"
                  :rules="selectRules"
                  label="Niveau*"
                  required
                ></v-select>
              </v-col>

              <!--Choose SPECIALTY -->
              <v-col
                v-if="this.level == 'L1'"
                cols="12"
                sm="6"
                md="6"
                class="specific-padding"
              >
                <v-select
                  attach
                  v-model="faculty"
                  :items="['MI', 'SM', 'ST', 'STU', 'SNV']"
                  :rules="selectRules"
                  label="Option*"
                  required
                ></v-select>
              </v-col>
              <v-col
                v-if="this.level != 'L1'"
                cols="12"
                sm="6"
                md="6"
                class="specific-padding"
              >
                <v-select
                  attach
                  v-model="faculty"
                  :items="Faculty_USTHB"
                  :rules="selectRules"
                  label="Faculté*"
                  required
                ></v-select>
              </v-col>

              <v-col
                v-if="this.level != 'L1'"
                cols="12"
                class="specific-padding"
              >
                <v-text-field
                  v-model="speciality"
                  label="Specialite*"
                  :counter="50"
                  :rules="specialityRules"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" class="specific-padding">
                <v-textarea
                  v-model="opensource"
                  label="Savez vous ce qu'est l'open source ?*"
                  :rules="textRules"
                  auto-grow
                  rows="3"
                  required
                ></v-textarea>
              </v-col>

              <v-col cols="12" class="specific-padding">
                <v-textarea
                  v-model="motivation"
                  label="Pourquoi voullez vous rejoindre le club ?*"
                  :rules="textRules"
                  auto-grow
                  rows="3"
                  required
                ></v-textarea>
              </v-col>
            </v-row>

            <small>* Indique les champs obligatoires</small>
          </v-card-text>

          <v-card-actions>
            <button
              :disabled="!valid"
              @click="validate"
              type="submit"
              class="btn-dark btn-register"
            >
              S'inscrire
            </button>
          </v-card-actions>
        </v-form>
      </v-container>
    </div>
  </div>
</template>


<script>
import axios from "axios";
const API_URL = "http://192.168.1.42:4500";

export default {
  name: "Modale",
  props: ["show", "toggleModale"],
  data: () => ({
    dialog: false,
    bar: false,
    valid: true,
    savingSuccessful: Boolean,

    first_name: "",
    last_name: "",
    nameRules: [
      (v) => !!v || "Ce champs est requis",
      (v) =>
        (v && v.length <= 25) || "Ce champs doit être moins de 25 charactères",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "Ce champs est requis",
      (v) => /.+@.+\..+/.test(v) || "L'email doit être valide",
    ],
    matricule: "",
    matriculeRules: [
      (v) => !!v || "Ce champs est requis",
      (v) =>
        (v && v.length == 12 && /[1-9]+/.test(v)) ||
        "Le matricule doit comporter 12 chiffres",
    ],
    faculty: "",
    Faculty_USTHB: [
      "Sciences Biologiques",
      "Chimie",
      "Physique",
      "Génie Civil",
      "Electronique et Informatique",
      "Mathématiques",
      "Sciences de la terre et Aménagement du Territoire",
      "Génie Mécanique et Génie de Procédés",
    ],

    level: "",
    Level_LMD: ["L1", "L2", "L3", "M1", "M2", "D"],

    speciality: "",
    specialityRules: [
      (v) => !!v || "Ce champs est requis",
      (v) =>
        (v && v.length <= 50) || "Ce champs doit être moins de 25 charactères",
    ],

    selectRules: [(v) => !!v || "Ce champs est requis"],

    opensource: "",
    motivation: "",
    textRules: [(v) => !!v || "Ce champs est requis"],
  }),
  methods: {
    validate(event) {
      event.preventDefault();
      if (this.$refs.form.validate()) {
        let p = {
          Nom: this.first_name,
          Prenom: this.last_name,
          Email: this.email,
          Matricule: this.matricule,
          Specialite: this.speciality,
          Faculte: this.faculty,
          Lvl: this.level,
          Opensource: this.opensource,
          Motivation: this.motivation,
        };
        let $axios = axios.create({
          baseURL: API_URL,
          timeout: 5000,
        });

        this.snackbar = true;
        $axios.post("/Form/Create", p).then((res) => {
          if (res.status === 201) {
            //add something that says that the registration was succesful
            this.savingSuccessful = true;
            this.dialog = false;
            this.reset();
            this.$router.go();
          } else {
            //add something that says that the registration wasn't succesful
            this.savingSuccessful = false;
          }
        });
      }
    },
    reset() {
      this.first_name = "";
      this.last_name = "";
      this.email = "";
      this.matricule = "";
      this.level = "";
      this.faculty = "";
      this.speciality = "";
      this.opensource = "";
      this.motivation = "";
    },
  },
  mounted: function () {
    console.log("modal opened");
  },
};
</script>


<style scoped>
.bloc-modale {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
   z-index: 100000000;
}

.modale {
  color: #333;
  padding: 5rem;
  position: fixed;
}

.content {
  background: white;
}

.btn-modale {
  position: absolute;
  top: 10px;
  right: 10px;
}

.btn-dark,
.btn-dark::after,
.btn-dark:focus {
  display: inline-block;
  font: normal normal 300 1.5em "Quicksand" !important;
  text-decoration: none !important;
  color: white !important;
  brackground-color: transparent !important;
  border: 1px solid white !important;
  border-radius: 100px !important;
  padding: 0.5em 3em !important;
  margin: 5px !important;
  background-size: 200% 100% !important;
  background-image: linear-gradient(
    to right,
    transparent 50%,
    rgb(47, 117, 207) 50%
  ) !important;
  transition: background-position 0.3s cubic-bezier(0.19, 1, 0.22, 1) 0.1s,
    color 0.5s ease 0s, background-color 0.5s ease !important;
}

.btn-dark:hover {
  border: 1px solid rgb(47, 117, 207);
  color: rgba(255, 255, 255, 1);
  background-color: rgb(47, 117, 207);
  background-position: -100% 100%;
}
</style>