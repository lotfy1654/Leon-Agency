<template>
  <div id="home">
    <app-header />
    <landing-page :changed="paragraph" :getProp="getProp" :title="title" />
    <features-section />
    <services-section :title="title" />
    <portfilo-footer />
    <router-view />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import LandingPage from "@/components/global/Landing.vue";
import FeaturesSection from "@/components/global/Features.vue";
import ServicesSection from "@/components/global/Services.vue";
import PortfiloFooter from "@/components/global/Portfilo.vue";
export default {
  props: [],
  data() {
    return {
      title: "Welcome",
      paragraph: "we are leon - super creative & minimal agency web template",
    };
  },
  methods: {
    getProp: function () {
      // console.log("work");
      return this.title = "Hello There";
    },
  },
  components: {
    AppHeader,
    LandingPage,
    FeaturesSection,
    ServicesSection,
    PortfiloFooter,
  },
};
</script>
