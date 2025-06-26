<script setup>
    import {ref} from 'vue'

    import { useStudentLifeStore } from '../stores/student_life'
    const studentLifeStore = useStudentLifeStore() //making the events store accessible
    const student_life= studentLifeStore.student_life // linking to the events object in the store
</script>

<template>
    
    <v-container>
        <v-row>
            <v-col md="4" v-for = "item in student_life" :key="item">
                <v-card
                    class="mx-auto"
                    max-width="400"
                    color = "indigo"
                >
                    <v-img
                    class="align-end text-white"
                    height="200"
                    :src="item.image"
                    cover
                    >
                    <v-card-title>{{ item.title }}</v-card-title>
                    </v-img>
                    
                    <v-card-text>
                    <div>{{item.description}}</div>
                    </v-card-text>

                    <v-card-actions>
                    <v-btn color="white" text="Read More"></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>