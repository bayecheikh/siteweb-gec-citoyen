<template>
  <ul class="mainmenu custom-mainmenu">
    <li class="custom-mainmenu "><n-link to="/" class="custom-mainmenu">Accueil</n-link>
    </li>
    <li class="custom-mainmenu"><a href="/#faq" class="custom-mainmenu">Comment envoyer un courrier ?</a>
    </li>
    <li class="custom-mainmenu"><a target="_blank" href="https://service-public.bj/" class="custom-mainmenu">Services
        publics</a>
    </li>

  </ul>
</template>


<style scoped>

  .mainmenu {
    margin-right: 0px !important;
    margin-left: 0px !important;
    margin-bottom: 0px !important;
    padding: 0px !important;
  }

  .custom-mainmenu {
    color: var(--color-white) !important;
  }

  .mainmenu-nav .mainmenu>li>a:hover,
  .mainmenu-nav .mainmenu>li>a.active {
    color: orange !important;
  }

</style>