<script setup>
import { ref } from "vue";
const events = ref([
  {
    name: "Community Outreach at Northern Kenya",
    image: "../../public/Images/Events/nico-smit-NFoerQuvzrs-unsplash.jpg",
    date: "July 6th 2025",
    location: "Northern Kenya School",
    category: "Community Outreach",
  },
  {
    name: "Graduation 2025",
    image: "../../public/Images/Events/jakob-rosen-CTd5_C7p__8-unsplash.jpg",
    date: "July 5th 2025",
    location: "Jitegemee University",
    category: "Graduation",
  },
  {
    name: "Cultural Festivel",
    image:
      "../../public/Images/Events/wanyoike-mbugua-dsFrAJUrUuU-unsplash.jpg",
    date: "July 19 2025",
    location: "Jitegemee University",
    category: "Social Event",
  },
  {
    name: "Full Stack Software Development ",
    image: "../../public/Images/Events/markus-spiske-1LLh8k2_YFk-unsplash.jpg",
    date: "July 21st 2025- September 29th 2025",
    location: "Jitegemee University",
    category: "Short Course",
  },
]);
</script>

<template>
  <v-container>
    <v-row>
      <v-col md="4" v-for="event in events" :key="event">
        <v-card class="mx-auto" max-width="400" color="#BBDEFB">
          <v-img
            class="align-end text-white"
            height="200"
            :src="event.image"
            cover
          >
            <v-card-title>{{ event.name }}</v-card-title>
          </v-img>

          <v-card-subtitle class="pt-4">{{ event.date }} </v-card-subtitle>

          <v-card-text>
            <div>{{ event.location }}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="orange" :text="event.category"></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
