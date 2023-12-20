<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    Add new note
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">New note</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent>
            <div class="mb-3">
              <label for="titleInput" class="form-label">Title</label>
              <input
                type="text"
                class="form-control"
                id="titleInput"
                maxlength="60"
                aria-describedby="textHelp"
                v-model="noteTitle"
                required
              />
              <div id="textHelp" class="form-text">
                Type title of your new note
              </div>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Note content</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                aria-describedby="textAreaHelpblock"
                maxlength="255"
                v-model="noteContent"
                required
              ></textarea>
            </div>
            <small id="textAreaHelpblock" class="form-text text-muted">
              {{ noteContent.length }}/255
            </small>
            <div class="pt-3 pb-3">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="checkbox1"
                  value="School"
                  v-model="checkedTags"
                />
                <label class="form-check-label" for="inlineCheckbox1"
                  >School</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                  value="Work"
                  v-model="checkedTags"
                />
                <label class="form-check-label" for="inlineCheckbox2"
                  >Work</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="checkbox3"
                  value="Personal"
                  v-model="checkedTags"
                />
                <label class="form-check-label" for="inlineCheckbox3"
                  >Personal</label
                >
              </div>
            </div>
            <div>
              <button
                class="btn btn-primary p-1 m-1 text-white"
                @click="submit"
              >
                Submit
              </button>
              <button class="btn btn-primary p-1 m-1 text-white" @click="ai">
                Enchance with AI
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { actionTypes } from "@/store/modules/firebasedb";
import { ref } from "vue";

export default {
  name: "NewNoteButton",
  data() {
    return {
      noteTitle: "",
      noteContent: "",
      isSchool: false,
      isWork: false,
      isPersonal: false,
      checkedTags: ref([]),
    };
  },
  methods: {
    submit() {
      if (this.noteTitle.length > 0 && this.noteContent.length > 0) {
        this.$store
          .dispatch(actionTypes.addNote, {
            title: this.noteTitle,
            content: this.noteContent,
            tags: this.checkedTags,
          })
          .then(() => {
            //Trzeba zamknąć modal

            this.noteTitle = "";
            this.noteContent = "";
            this.checkedTags = [];
          })
          .then(() => {
            this.$store.dispatch(actionTypes.getNotesByUserId, {
              uid: "",
            });
          });
      }
    },
    ai() {
      console.log("ai");
    },
  },
};
</script>
