<template>
  <div class="app">
    <Card
      title="titulo configurable"
      body="lorem ipsum dolor sit amet
    consectetur adipiscing, elit aptent commodo tempus gravida, eleifend mollis
    condimentum neque sollicitudin.Elementum magnis lacinia diam eget facilisi
    consequat ullamcorper,litora praesent, semper."
    >
    </Card>
  </div>
</template>

<script>
import Card from "./components/Card.vue";

export default {
  name: "App",
  components: {
    Card,
  },
};
</script>

<style lang="scss">
.app {
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 60px;
}
</style>
