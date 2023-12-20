<template>
  <div class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">{{ note.data.title }}</h5>
      <p class="card-text">{{ note.data.content }}</p>
    </div>
    <div v-for="(tag, index) in note.data.tags" :key="index">
      <span class="badge rounded-pill bg-primary">tag : {{ tag }}</span>
    </div>
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
