<script lang="ts" setup>
const route = useRoute();
definePageMeta({
  layout: "default"
});

const {data: page} = await useAsyncData(route.path, () => queryCollection('content').path(route.path).first());

if (!page.value) {
  throw createError({statusCode: 404, statusMessage: "Page not found", fatal: true});
}
</script>

<template>
  <ContentRenderer v-if="page" :value="page"/>
</template>
