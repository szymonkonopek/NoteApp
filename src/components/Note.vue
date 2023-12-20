<template>
  <div class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">{{ note.title }}</h5>
      <p class="card-text">{{ note.content }}</p>
    </div>
    <span class="badge rounded-pill bg-primary">tag : {{ note.tag }}</span>
  </div>
</template>

<script>
export default {
  name: "AppNotesView",
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
};
</script>
