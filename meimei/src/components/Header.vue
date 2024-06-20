<template>
  <header class="header">
    <div class="logo">
      <img src="../assets/logo-removebg.png" alt="Site logo">
      <span>MEI MEI</span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header_vue'
}
</script>

<style scoped>
.header {
  background-color: rgb(249, 213, 219);
  padding: 20px;
}

.logo {
  display: flex;
  align-items: center;
  font-family: 'Courier New', Courier, monospace; /* Change this to the desired font family */
  font-size: 50px;
  color: red; 
}

.logo img {
  height: 120px;
  margin-right: 10px;
}

.logo span {
  display: flex;
  align-items: center;
}
</style>
