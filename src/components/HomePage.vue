<script setup></script>

<template>
  <!--Rotating Images-->
  <v-carousel show-arrows="hover">
    <v-carousel-item
      src="../../public/Images/erika-fletcher-2Z0yN0Dhomw-unsplash.jpg"
      cover
    ></v-carousel-item>

    <v-carousel-item
      src="../../public/Images/rut-miit-BcEmfG0xKrc-unsplash.jpg"
      cover
    ></v-carousel-item>

    <v-carousel-item
      src="../../public/Images/dom-fou-YRMWVcdyhmI-unsplash.jpg"
      cover
    ></v-carousel-item>
    <v-carousel-item
      src="../../public/Images/rut-miit-dYdYw9fEUdA-unsplash.jpg"
      cover
    ></v-carousel-item>
  </v-carousel>

  <!--Latest from Jitegemee-->
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <v-card
          subtitle="Graduation will be held on 30/6/2025"
          text="The administration of Jitegemee University proudly announces the upcoming Graduation Ceremony for the Class of 2025.This special event marks the successful completion of academic programs by our graduating students."
          title="Graduation 2025"
          color="#1697F6"
        ></v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card color="#1697F6">
          <template v-slot:title> Sports Highlights </template>

          <template v-slot:subtitle>
            Rugby team wins national tournament
          </template>

          <template v-slot:text>
            We are proud to announce that the Jitegeme University Rugby Team has
            emerged National Champions after a thrilling performance at the
            University National Tournament held on 31/5/2025 at Kenyatta
            University.
          </template>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card color="#1697F6">
          <v-card-item>
            <v-card-title>Public Holiday Notice</v-card-title>

            <v-card-subtitle
              >School will be closed on 25/6/2025</v-card-subtitle
            >
          </v-card-item>

          <v-card-text>
            Enjoy your public Holiday! School will resume as usual afterwards.
            Take this opportunity tor prepare for your upcoming finals.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <!-- Partners-->
  <v-container>
    <v-row>
      <v-col cols="12" md="2">
            <v-img src="../../public/Images/download.png"></v-img>
      </v-col>
      <v-col cols="12" md="2">
            <v-img src="../../public/Images/download (2).png"></v-img>
      </v-col>
      <v-col cols="12" md="2">
            <v-img src="../../public/Images/download (4).png"></v-img>
      </v-col>
      <v-col cols="12" md="2">
            <v-img src="../../public/Images/RE1Mu3b.png"></v-img>
      </v-col>
      <v-col cols="12" md="2">
            <v-img src="../../public/Images/download.jpeg"></v-img>
      </v-col>
      <v-col cols="12" md="2">
            <v-img src="../../public/Images/safaricom-logo-green.png"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>
