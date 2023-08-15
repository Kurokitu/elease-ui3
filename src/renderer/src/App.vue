<template>
  <div class="w-full h-full absolute overflow-hidden">
    <div class="w-full h-[30px] fixed top-0" style="-webkit-app-region: drag"></div>

    <div class="w-full h-full flex flex-row">
      <div class="w-[204px] h-full bg-gray-100"></div>

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
  background: transparent;
}
</style>
