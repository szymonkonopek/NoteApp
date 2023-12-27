<template>
  <!-- Button trigger modal -->
  <button
    class="btn btn-link"
    data-bs-toggle="modal"
    data-bs-target="#editModal"
  >
    <i class="bi bi-pencil text-secondary"></i>
  </button>

  <!-- Modal -->
  <div
    class="modal fade modal-lg"
    id="editModal"
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
          <div>
            <button
              class="btn btn-primary p-1 m-1 text-white"
              @click="submit"
              :disabled="isLoading"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditNoteButton",
  methods: {
    editNote() {
      console.log("próba edycji notatki");
    },
    submit() {
      console.log("yay");
    },
  },
};
</script>
