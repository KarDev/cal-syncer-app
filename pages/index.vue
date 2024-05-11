<template>
  <div>
    <p>Google Calendar API</p>

    <button @click="handleAuthClick">Authorize</button>
  </div>
</template>
<script setup lang="ts">
import { googleApi } from "../composables/api/googleApi";

const isLoading = ref(false);

onMounted(() => {
  if (useRoute().query.userId) {
    console.log(useRoute().query);

    localStorage.setItem("userId", useRoute().query.userId as string);
    navigateTo("/dashboard");
  }

  const isAuthoirized = useHelper().isAuthorized();

  if (isAuthoirized) {
    navigateTo("/dashboard");
  }
});

const handleAuthClick = async () => {
  isLoading.value = true;

  try {
    const url = await googleApi().getGoogleAuthUrl();

    navigateTo(url, { external: true });
  } finally {
    isLoading.value = false;
  }
};
</script>
