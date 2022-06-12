<template>
  <v-app>
    <v-main>
      <ProBreaHome/>
    </v-main>
  </v-app>
</template>

<script>
import ProBreaHome from './components/ProBreaHome';

export default {
  name: 'App',

  components: {
    ProBreaHome,
  },

  data: () => ({
    //
  }),
};
</script>
