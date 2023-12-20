<template>
  <div>Feed</div>
  <NotesList :uid="'9I4pFBfpeKS3gBh7FTdJIJki5g92'"></NotesList>
  <NewNoteButton></NewNoteButton>
</template>

<script>
import NotesList from "@/components/NotesList.vue";
import NewNoteButton from "@/components/NewNoteButton.vue";
export default {
  name: "AppFeedView",
  components: { NotesList, NewNoteButton },
};
</script>
