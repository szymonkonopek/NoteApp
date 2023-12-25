<template>
  <NotesList v-if="userDetails" :uid="userDetails.uid"></NotesList>
  <NotesList v-else :uid="''"></NotesList>
  <NewNoteButton></NewNoteButton>
</template>

<script>
import NotesList from "@/components/NotesList";
import NewNoteButton from "@/components/NewNoteButton";
import { fetchUserDetails } from "@/store/utils/userDetails"

export default {
  name: "AppUserNotes",
  components: { NotesList, NewNoteButton },
  async mounted() {
    this.userDetails = await fetchUserDetails();
  },
  data() {
    return {
      userDetails: null,
    };
  },
};
</script>
