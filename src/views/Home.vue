<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-auto custom-sidebar"><Sidebar /></div>
      <div class="col">
        <AspireFinance msg="Welcome to Aspire Finance App" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AspireFinance from "@/components/AspireFinance.vue";
import Sidebar from "@/components/Sidebar.vue";
export default {
  name: "Home",
  components: {
    AspireFinance,
    Sidebar,
  },
};
</script>
<style lang="scss">
.custom-sidebar {
  margin-top: 30px;
  background: #0c365a;
  max-width: 320px !important;
  height: 100vh;
  padding: 20px;
  .navbar-nav {
    padding: 10px;
    margin-top: 15px;
    margin-bottom: 15px;
    text-align: left;
    font-size: 14px;
    .nav-link {
      color: white;
      margin-top: 10px;
      margin-bottom: 10px;
      &:hover {
        color: rgb(0, 255, 128);
      }
    }
    img {
      margin-right: 15px;
    }
  }
}
</style>
