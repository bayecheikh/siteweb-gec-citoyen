<template>
  <ul class="mainmenu custom-mainmenu">
    <li><n-link to="/suggestion">Faire une suggestion</n-link>
    </li>
    <li><n-link to="/signaler-probleme">Signaler un problème</n-link>
    </li>
    <li><n-link to="/contact-us">Nous contacter</n-link>
    </li>
  

  </ul>
</template>


<style scoped>



 

  .mainmenu-nav .mainmenu>li>a:hover,
  .mainmenu-nav .mainmenu>li>a.active {
    color: #1ab69d !important;
    font-weight: 700px;
  }
  .mainmenu-nav .mainmenu>li>a {
    color: #8e8e8e !important;
    font-size: 13px;
  
  }

</style>