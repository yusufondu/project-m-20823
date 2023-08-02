<template>
  <div id="app">
    <header>
      <img src="@/assets/logo.svg" alt="mercedes logo" />
    </header>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}

header {
  padding: 50px 0 20px 0;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
