<template>
  <div class="search-style">
    <div class=""></div>
    <div class="flex-auto">
      <input
        class="w-full h-full bg-transparent outline-none text-[16px] placeholder:text-[#787F8D]"
        placeholder="搜索"
      />
    </div>
    <div class=""></div>
  </div>
</template>

<style>
.search-style {
  @apply w-[290px] h-[38px] rounded-lg flex flex-row px-[18px] space-x-[18px];
  border: 1px solid transparent;
  background: linear-gradient(to right, #d9e6f9, #f6e2f1) border-box;
  -webkit-mask: linear-gradient(rgba(255, 255, 255, 0.8) 0 0) padding-box,
    linear-gradient(rgba(255, 255, 255, 0.8) 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}
</style>
