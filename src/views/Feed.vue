<template>
  <div>Feed</div>
  <NotesList :uid="'9I4pFBfpeKS3gBh7FTdJIJki5g92'"></NotesList>
</template>

<script>
import NotesList from "@/components/NotesList.vue";
export default {
  name: "AppFeedView",
  components: { NotesList },
};
</script>
