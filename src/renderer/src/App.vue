<template>
  <div class="w-full h-full absolute overflow-hidden">
    <div class="w-full h-[20px] fixed top-0" style="-webkit-app-region: drag"></div>

    <div class="w-full h-full flex flex-row">
      <div class="w-[200px] h-full"></div>

      <div class="flex-auto h-full flex flex-col">
        <Header />
        <Main />
      </div>
    </div>

    <PlayerBar />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less">
#app {
  width: 100%;
  height: 100vh;
  position: absolute;
  overflow: hidden;
}
</style>
