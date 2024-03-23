<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="/currency-list">{{$t('currencyList')}}</router-link>
        </li>
        <li>
          <router-link to="/currency-converter">{{$t('converter')}}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
header {
  background-color: #333;
  color: #fff;
  padding: 10px;
}

nav ul {
  list-style-type: none;
  padding: 0;
}

nav ul li {
  display: inline;
  margin-right: 20px;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
}

nav ul li a:hover {
  text-decoration: underline;
}
</style>
