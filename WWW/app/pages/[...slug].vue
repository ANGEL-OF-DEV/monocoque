<script lang="ts" setup>
const route = useRoute();
definePageMeta({
  layout: "default"
});

let actual_path = route.path.toLowerCase();
const {
  data: page,
  error
} = await useAsyncData(actual_path, () => queryCollection('sources').select('body', 'extension').path(actual_path).first());

let language = "log";
if (page.value) {
  switch (page.value.extension) {
    case "props":
    case "targets":
      language = "xml";
      break;
    case "cmd":
      language = "bat";
      break;
    case "ps1":
      language = "powershell";
      break;
    case "sh":
      language = "sh";
      break;
    default:
      language = "log";
      break;
  }
}
</script>

<template>
  <div>${{ actual_path }}</div>
  <Shiki v-if="page" :code="'\n'+page.body" :lang="language"/>

  <div>
    {{ error }}
  </div>
</template>
