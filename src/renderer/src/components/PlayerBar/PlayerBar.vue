<template>
  <div
    class="w-full h-[80px] fixed bottom-0 border-solid border-[1px] border-inherit divide-t backdrop-blur-[120px] bg-white/80 flex flex-row px-[30px] items-center justify-center"
  >
    <div class="w-[270px] flex flex-row space-x-[10px]">
      <div
        class="w-[60px] h-[60px] w-min-[60px] h-min-[60px] w-max-[60px] h-max-[60px] rounded-full inline-flex items-center justify-center cover-img-bg cursor-pointer"
      >
        <img
          src="http://p3.music.126.net/14hsp5WZKQqfJLdtQI01_Q==/109951168243210964.jpg?imageView=&thumbnail=40y40&type=webp&rotate=0&tostatic=0"
          width="40"
          height="40"
          class="rounded-full"
        />
      </div>

      <div class="flex-auto flex flex-row">
        <div class="w-full pt-1">
          <span class="overflow-hidden relative flex flex-row items-center">
            <span class="text-[#333] text-[16px] font-medium mx-1">Title</span>
            <span> - </span>
            <span class="text-[#787F8D] text-[13px] font-medium mx-1">Artists</span>
          </span>
        </div>
        <div class=""></div>
      </div>
    </div>
    <div class="flex-auto"></div>
    <div class="w-[270px]"></div>
  </div>
</template>

<style>
.cover-img-bg {
  background: no-repeat url('public/assets/img/play/miniVinyl.png') center;
}
</style>
