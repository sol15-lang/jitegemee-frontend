<template>
  <v-container>
    <v-sheet border rounded>
      <v-data-table
        :headers="headers"
        :hide-default-footer="schools.length < 11"
        :items="schools"
      >
        <template v-slot:top>
          <v-toolbar flat color="blue">
            <v-toolbar-title>
              <v-icon
                color="medium-emphasis"
                icon="mdi-school-multiple"
                size="x-small"
                start
              ></v-icon>

              Schools Table
            </v-toolbar-title>

            <v-btn
              class="me-2"
              prepend-icon="mdi-plus"
              rounded="lg"
              text="Add a School"
              border
              @click="add"
            ></v-btn>
          </v-toolbar>
        </template>

        <template v-slot:item.title="{ value }">
          <v-chip
            :text="value"
            border="thin opacity-25"
            prepend-icon="mdi-school"
            label
          >
            <template v-slot:prepend>
              <v-icon color="medium-emphasis"></v-icon>
            </template>
          </v-chip>
        </template>

        <template v-slot:item.actions="{ item }">
          <div class="d-flex ga-2 justify-end">
            <v-icon
              color="medium-emphasis"
              icon="mdi-pencil"
              size="small"
              @click="edit(item.id)"
            ></v-icon>

            <v-icon
              color="medium-emphasis"
              icon="mdi-delete"
              size="small"
              @click="remove(item.id)"
            ></v-icon>
          </div>
        </template>

        <template v-slot:no-data>
          <v-btn
            prepend-icon="mdi-backup-restore"
            rounded="lg"
            text="Reset data"
            variant="text"
            border
            @click="reset"
          ></v-btn>
        </template>
      </v-data-table>
    </v-sheet>

    <v-dialog v-model="dialog" max-width="500">
      <v-card
        :subtitle="`${isEditing ? 'Update' : 'Create'} your favorite school`"
        :title="`${isEditing ? 'Edit' : 'Add'} a School`"
      >
        <template v-slot:text>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="record.name" label="Name"></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="record.address"
                label="Address"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field v-model="record.phone" label="Phone"></v-text-field>
            </v-col>
          </v-row>
        </template>

        <v-divider></v-divider>

        <v-card-actions class="bg-surface-light">
          <v-btn text="Cancel" variant="plain" @click="dialog = false"></v-btn>

          <v-spacer></v-spacer>

          <v-btn text="Save" @click="save"></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script setup>
import { onMounted, ref, shallowRef } from "vue";
import api from "../services/api";

const DEFAULT_RECORD = { name: "", address: "", phone: "" };

const schools = ref([]);
const record = ref({ ...DEFAULT_RECORD });
const dialog = shallowRef(false);
const isEditing = shallowRef(false);

const headers = [
  { title: "Name", key: "name", align: "start" },
  { title: "Address", key: "address" },
  { title: "Phone", key: "phone" },
  { title: "Actions", key: "actions", align: "end", sortable: false },
];

onMounted(() => {
  getSchoolsData();
});

function add() {
  isEditing.value = false;
  record.value = { ...DEFAULT_RECORD };
  dialog.value = true;
}

function edit(id) {
  isEditing.value = true;
  const found = schools.value.find((school) => school.id === id);
  record.value = {
    id: found.id,
    name: found.name,
    address: found.address, 
    phone: found.phone,
  };
  dialog.value = true;
}

async function remove(id) {
  if (confirm("Are you sure you want to delete this school?")) {
    try {
      await api.delete(`/deleteSchool/${id}`);
      await getSchoolsData();
    } catch (err) {
      console.error("Delete School failed", err);
    }
  }
}

async function save() {
  const formData = new FormData();
  formData.append("name", record.value.name);
  formData.append("address", record.value.address);
  formData.append("phone", record.value.phone);

  try {
    if (isEditing.value) {
      await api.put(`/updateSchool/${record.value.id}`, formData);
    } else {
      await api.post(`/createSchool`, formData);
    }
    dialog.value = false;
    await getSchoolsData();
  } catch (error) {
    console.error("Save School error:", error);
  }
}

async function getSchoolsData() {
  try {
    const response = await api.get("/getAllSchools");
    schools.value = response.data || [];
  } catch (err) {
    console.error("Fetch Schools failed", err);
  }
}
</script>
