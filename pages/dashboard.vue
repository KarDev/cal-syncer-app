<template>
  <div>
    <h1>Events</h1>

    <button @click="showEvents">Show Events</button>
    <button @click="handleSignoutClick">Sign Out</button>
  </div>
  <div>
    <div v-if="events.length > 0" v-for="event in events" :key="event.id">
      <p>{{ event.summary }}</p>
      <p><strong>Starts:</strong> {{ formatDate(event.start.dateTime) }}</p>
      <p><strong>Ends:</strong> {{ formatDate(event.end.dateTime) }}</p>
      <p>{{ event.description }}</p>
      <hr />
    </div>
  </div>
</template>
<script setup lang="ts">
import type { IEvent } from "~/common/dto";
import { eventsApi } from "~/composables/api/eventsApi";

const isLoading = ref(false);
const events = ref<IEvent[]>([]);

onMounted(() => {
  const isAuthoirized = useHelper().isAuthorized();

  if (!isAuthoirized) {
    navigateTo("/");
  }
});

const handleSignoutClick = async () => {
  isLoading.value = true;

  try {
    // const url = await googleApi().getGoogleAuthUrl();
    // navigateTo(url, { external: true });

    localStorage.removeItem("userId");
    navigateTo("/");
  } finally {
    isLoading.value = false;
  }
};

const showEvents = async () => {
  isLoading.value = true;

  try {
    events.value = await eventsApi().listEvents();

    console.log(events.value);
  } finally {
    isLoading.value = false;
  }
};

const formatDate = (dateTime: string) => {
  const date = new Date(dateTime);
  return date.toLocaleString();
};
</script>
