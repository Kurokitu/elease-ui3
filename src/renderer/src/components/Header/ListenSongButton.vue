<template>
  <div class="listenbtn-style"></div>
</template>

<style>
.listenbtn-style {
  @apply w-[38px] h-[38px] rounded-lg cursor-pointer;
  border: 1px solid transparent;
  background: linear-gradient(to right, #d9e6f9, #f6e2f1) border-box;
  -webkit-mask: linear-gradient(rgba(255, 255, 255, 0.8) 0 0) padding-box,
    linear-gradient(rgba(255, 255, 255, 0.8) 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}
</style>
