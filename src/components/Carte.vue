<template>
    <div id="carte">
        <div>
            <ul class="text-xl flex flex-wrap justify-around ml-10 gap-4">
                <li>
                    <router-link class="no-underline" :to="{name: 'BrowseFrites'}">
                        Frites
                    </router-link>
                </li>
                <li>
                    <router-link class="no-underline" :to="{name: 'BrowseHamburgers'}">
                        Hamburgers
                    </router-link>
                </li>
                <li>
                    <router-link class="no-underline" :to="{name: 'Browsemitraillettes'}">
                        Mitraillettes
                    </router-link>
                </li>
                <li>
                    <router-link class="no-underline" :to="{name: 'BrowseBrochettes'}">
                        Brochettes
                    </router-link>
                </li>
                <li>
                    <router-link class="no-underline" :to="{name: 'BrowseSnacks'}">
                        Snacks
                    </router-link>
                </li>
                <li>
                    <router-link class="no-underline" :to="{name: 'BrowsePetiteRestauration'}">
                        Petite restauration
                    </router-link>
                </li>
                <li>
                    <router-link class="no-underline" :to="{name: 'BrowseSauces'}">
                        Sauces
                    </router-link>
                </li>
                <li>
                    <router-link class="no-underline" :to="{name: 'BrowseVegetarien'}">
                        Végétarien
                    </router-link>
                </li>
                <li>
                    <router-link class="no-underline" :to="{name: 'BrowseSofts'}">
                        Softs
                    </router-link>
                </li>
                <li>
                    <router-link class="no-underline" :to="{name: 'BrowseAlcools'}">
                        Bières/Vin
                    </router-link>
                </li>
            </ul>
        </div>
        <router-view v-if="$route.matched.length"></router-view>
    </div>
</template>

<script>
export default {
  name: 'BrowseMenu',
};
</script>

<style scoped>
.router-link-active {
  color: red;
}
</style>
