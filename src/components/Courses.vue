<script setup>
import {ref} from 'vue'
import{useCoursesStore} from '../stores/courses'
const coursesStore= useCoursesStore()
const courses= coursesStore.courses

</script>

<template>
  <v-container>
    <v-row>
      <v-col md="4" v-for="course in courses">
        <v-card color="#1697F6">
          <v-card-item>
            <v-card-title>{{course.name}}</v-card-title>
            <v-card-subtitle
              >{{course.school}}</v-card-subtitle
            >
          </v-card-item>

          <v-card-text>
            {{course.description}}
          </v-card-text>
          <v-card-text>
            {{course.intake}}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
