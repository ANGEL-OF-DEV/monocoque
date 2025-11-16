<script lang="ts" setup>
const {data: contents} = await useAsyncData('sources-list', () =>
  queryCollection('sources')
    .select('id', 'title', 'path', 'description', 'extension')
    .all())
</script>

<template>
  <NuxtLink v-for="doc in contents" :key="doc.path" :to="doc.path">
    <h2>id: {{ doc.id }}</h2>
    <p>path: {{ doc.path }} ({{ doc.extension }})</p>
    <p>title: {{ doc.title }}</p>
    <p>descr: {{ doc.description }}</p>
  </NuxtLink>
</template>
