<script lang="ts" setup>
const route = useRoute();
definePageMeta({
  layout: "default"
});

let path = route.path.toLowerCase();
const {
  data: page,
  error: error
} = await useAsyncData('decision-' + path, () => queryCollection('archive').path(path).first());

if (!page.value) {
  //throw createError({statusCode: 404, statusMessage: "Page not found", fatal: true});
}
</script>

<template>
  <ContentRenderer v-if="page" :value="page"/>
  <div>
    {{ route.path }} => {{ path }} <br/> {{ error }}
  </div>
</template>
