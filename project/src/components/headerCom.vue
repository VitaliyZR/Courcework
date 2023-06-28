<template>
  <header>
    <nav>
      <ul>
        <li :class="{ active: isLinkActive('/clients') }">
          <router-link to="/clients">Клієнти</router-link>
        </li>
        <li :class="{ active: isLinkActive('/property-cities') }">
          <router-link to="/property-cities">Міста власності</router-link>
        </li>
        <li :class="{ active: isLinkActive('/property-status') }">
          <router-link to="/property-status">Статуси власності</router-link>
        </li>
        <li :class="{ active: isLinkActive('/properties') }">
          <router-link to="/properties">Власності</router-link>
        </li>
        </ul>
        <ul>
        <li :class="{ active: isLinkActive('/agents') }">
          <router-link to="/agents">Агенти</router-link>
        </li>
        <li :class="{ active: isLinkActive('/advertisements') }">
          <router-link to="/advertisements">Оголошення</router-link>
        </li>
        <li :class="{ active: isLinkActive('/rental-contracts') }">
          <router-link to="/rental-contracts">Орендні договори</router-link>
        </li>
        <li :class="{ active: isLinkActive('/sales-deals') }">
          <router-link to="/sales-deals">Угоди про продаж</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>  
export default {
  methods: {
    isLinkActive(link) {
      return this.$route.path === link;
    },
  },
}
</script>

<style>
header {
  background-color: #fff;
  width: 1400px;
  margin: 0 auto;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
}

nav ul li {
  margin: 10px;
}

nav ul li a {
  color: #555;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.active a {
  color: #fff;
  background-color: #4CAF50;
}

.active a:hover {
  background-color: #4CAF50;
}
</style>
