<script setup>
import {ref} from 'vue';
//model(to uniquely identify each text field)
const name =defineModel('Name')
const emailAddress =defineModel('emailAddress')
const password = defineModel('password')
//object to hold form data
const loginFormDetails = ref({
    name:name,
    emailAddress:emailAddress,
    password:password,
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
        <h1 >LOG IN </h1>
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
    <!--Button-->
    <v-row>
        <v-btn block color="primary" @click="saveData()">Log In</v-btn>
    </v-row>
  </v-container>
  <v-container><v-row>
    <p>Don't have an account ? <router-link to="/signup">Sign Up</router-link></p>
  </v-row></v-container>
  
</template>