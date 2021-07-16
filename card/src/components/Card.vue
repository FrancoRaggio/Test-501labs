<template>
  <div class="card">
    <div class="card-title">
      <h2>{{ title }}</h2>
    </div>
    <div class="card-body">
      <p>{{ body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    body: String,
  },
};
</script>

<style scoped lang="scss">
.card {
  height: 300px;
  width: 150px;
  font-family: Arial;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.25);
  border: 1px solid #cfd0d4;
  border-radius: 6px;
  .card-title {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    h2 {
      margin: 0;
      padding: 0;
    }
  }
  .card-body {
    height: 240px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    font-size: 14px;
    background-color: #cccccc;
    p {
      margin: 10px 0px 0px;
      padding: 0px 5px;
    }
  }
}
</style>
