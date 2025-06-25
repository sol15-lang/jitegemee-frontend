<script setup>
import { useCoursesStore } from "../stores/courses";
import {ref} from 'vue';
const coursesStore = useCoursesStore();
const courses = coursesStore.courses;

const selectedCourse = courses.find(course=> course.id == coursesStore.selectedCourse);
//model(to uniquely identify each text field)
const firstName =defineModel('firstName')
const middleName =defineModel('middleName')
const lastName = defineModel('lastName')
const emailAddress =defineModel('emailAddress')
const phoneNumber = defineModel('phoneNumber')
const physicalAddress = defineModel('physicalAddress')
const gender = defineModel('gender')
const dob = defineModel('dob')
const nationality = defineModel('nationality')
//object to hold form data
const applicationFormDetails = ref({
    firstName:firstName,
    middleName:middleName,
    lastName:lastName,
    emailAddress:emailAddress,
    phoneNumber:phoneNumber,
    physicalAddress:physicalAddress,
    gender:gender,
    dob:dob,
    nationality:nationality,
    course:selectedCourse
})
//function to save data
function saveData(){
   for(let item in applicationFormDetails.value){
    console.log(applicationFormDetails.value[item])
   }
}
</script>

<template>
  <v-container>
    <v-row>
      <p>You are applying for{{ selectedCourse.name}}  , the next intake is in {{selectedCourse.intake }} </p>
    </v-row>
  </v-container>
  <!--Form-->
  <v-container>
    <!--Names-->
    <v-row>
      <v-col md="4">
        <v-text-field label="First Name" v-model="firstName"></v-text-field>
      </v-col>
      <v-col md="4">
        <v-text-field label="Middle Name" v-model="middleName"></v-text-field>
      </v-col>
      <v-col md="4">
        <v-text-field label="Last Name" v-model="lastName"></v-text-field>
      </v-col>
    </v-row>
       <!--Contacts-->
    <v-row>
      <v-col md="4">
        <v-text-field label="Phone Number" v-model="phoneNumber"></v-text-field>
      </v-col>
      <v-col md="4">
        <v-text-field label="Email Address" v-model="emailAddress"></v-text-field>
      </v-col>
      <v-col md="4">
        <v-text-field label="Physical Address" v-model="physicalAddress"></v-text-field>
      </v-col>
    </v-row>
    <!--Bio Data -->
    <v-row>
      <v-col md="4">
        <v-text-field label="Gender" v-model="gender"></v-text-field>
      </v-col>
      <v-col md="4">
        <v-text-field label="Date of Birth" v-model="dob"></v-text-field>
      </v-col>
      <v-col md="4">
        <v-text-field label="Nationality" v-model="nationality"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
        <v-btn block color="primary" @click="saveData()">Submit</v-btn>
    </v-row>
  </v-container>
</template>
