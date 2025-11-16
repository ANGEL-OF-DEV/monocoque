<script lang="ts" setup>
const {data: contents} = await useAsyncData('content-list', () =>
  queryCollection('content')
    .select('id', 'title', 'path', 'description', 'body')
    .all())
</script>

<template>
  <NuxtLink v-for="doc in contents" :key="doc.path" :to="doc.path">
    <h2>id: {{ doc.id }}</h2>
    <p>path: {{ doc.path }}</p>
    <p>title: {{ doc.title }}</p>
    <p>descr: {{ doc.description }}</p>
  </NuxtLink>
</template>
