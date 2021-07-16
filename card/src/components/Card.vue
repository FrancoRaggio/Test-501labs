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
    width: 100%;
    height: 30%;
    padding-left: 2px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }

  .card-body {
    width: 100%;
    height: 70%;
    display: flex;
    text-align: center;
    justify-content: center;
    font-size: 14px;
    background-color: #cccccc;
    white-space: wrap;
    overflow: hidden;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
  }
}
</style>
