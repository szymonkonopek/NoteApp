<template>
  <button
    type="button"
    class="btn btn-danger"
    @click="deleteNote"
  >
    Delete
  </button>
</template>


<script>
import { db } from "@/main.js";
import {
 doc,
 deleteDoc,
} from "firebase/firestore";
export default {
name: "DeleteButton",
props: {
  noteId: {
    type: String,
    required: true
  }
},
methods: {
  deleteNote() {
    return new Promise((resolve) => {
        deleteDoc(doc(db, "notes", this.noteId)).then(() => {
          this.$router.go();
          resolve();
        })
      })
    }
  }
}
</script>
