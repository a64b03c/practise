<script setup>
const Menu_items = [
  {
    title: "產品",
    herf: "/products",
  },
  {
    title: "最新消息",
    herf: "/about",
  },
  {
    title: "購物須知",
    herf: "/",
  },
  {
    title: "佈置靈感",
    herf: "/",
  },
];
</script>

<template>
  <header class="z-10 top-0 left-0 fixed">
    <h1 class="logo">
      <a
        href="#"
        class="block w-24 h-14 text-[0] bg-center"
        style="background-image: url('https://fakeimg.pl/100/')"
      >
        我的小店店
      </a>
    </h1>
    <nav class="flex items-center justify-between mx-20">
      <ul class="flex grow ml-20">
        <li v-for="item in Menu_items" :key="item.title">
          <router-link class="block px-2 py-1" :to="item.herf">
            {{ item.title }}
          </router-link>
        </li>
      </ul>
      <!-- 
      <div class="flex">
        <router-link class="mr-2" to="/">我的最愛</router-link>
        <router-link class="mr-2" to="/cart">購物車</router-link>
      </div> -->
    </nav>
  </header>
</template>
