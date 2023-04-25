<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <Permission></Permission>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Permission from "@/components/Permission.vue";

export default defineComponent({
  name: "About",
  components: {
    Permission,
  },
});
</script>

