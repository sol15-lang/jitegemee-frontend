<script setup>
import {ref} from 'vue';
//model(to uniquely identify each text field)
const name =defineModel('Name')
const emailAddress =defineModel('emailAddress')
const password = defineModel('password')
const confirmPassword = defineModel('confirmPassword')
//object to hold form data
const loginFormDetails = ref({
    name:name,
    emailAddress:emailAddress,
    password:password,
    confirmPassword:confirmPassword
})
//function to save data
function saveData(){
   for(let item in loginFormDetails.value){
    console.log(loginFormDetails.value[item])
   }
}
</script>

<template>
    <!--Heading-->
    <v-container >
        <h1 >SIGN UP</h1>
    </v-container>
     <!--Form-->
  <v-container>
    <!--Names-->
    <v-row>
      <v-col md="12">
        <v-text-field label=" Name" v-model="name"></v-text-field>
      </v-col>
    </v-row>
       <!--Email-->
    <v-row>
      <v-col md="12">
        <v-text-field label="Email Address" v-model="emailAddress"></v-text-field>
      </v-col>
    </v-row>
    <!--password -->
    <v-row>
      <v-col md="12">
        <v-text-field type="password" label="Password" v-model="password"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="12">
        <v-text-field type="password" label="Confirm Password" v-model="confirmPassword"></v-text-field>
      </v-col>
    </v-row>
    <!--Button-->
    <v-row>
        <v-btn block color="primary" @click="saveData()">Log In</v-btn>
    </v-row>
  </v-container>
  <v-container><v-row>
    <p>Have an account ? <router-link to="/login">Log In</router-link></p>
  </v-row></v-container>
</template>