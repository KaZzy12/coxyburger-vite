<template>
    <div id="carte">
        <div class="p-2">
            <ul class="text-xl mr-auto md:w-screen flex flex-wrap justify-around gap-4">
                <li>
                    <router-link 
                    class="inline-block rounded bg-[#234b90] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]" 
                    :to="{name: 'BrowseFrites'}">
                        Frites
                    </router-link>
                </li>
                <li>
                    <router-link
                    class="inline-block rounded bg-[#234b90] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]" 
                    :to="{name: 'BrowseHamburgers'}">
                        Hamburgers
                    </router-link>
                </li>
                <li>
                    <router-link
                    class="inline-block rounded bg-[#234b90] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]" 
                    :to="{name: 'Browsemitraillettes'}">
                        Mitraillettes
                    </router-link>
                </li>
                <li>
                    <router-link
                    class="inline-block rounded bg-[#234b90] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]" 
                    :to="{name: 'BrowseBrochettes'}">
                        Brochettes
                    </router-link>
                </li>
                <li>
                    <router-link
                    class="inline-block rounded bg-[#234b90] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]" 
                    :to="{name: 'BrowseSnacks'}">
                        Snacks
                    </router-link>
                </li>
                <li>
                    <router-link
                    class="inline-block rounded bg-[#234b90] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]" 
                    :to="{name: 'BrowsePetiteRestauration'}">
                        Petite restauration
                    </router-link>
                </li>
                <li>
                    <router-link
                    class="inline-block rounded bg-[#234b90] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]" 
                    :to="{name: 'BrowseSauces'}">
                        Sauces
                    </router-link>
                </li>
                <li>
                    <router-link
                    class="inline-block rounded bg-[#234b90] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]" 
                    :to="{name: 'BrowseVegetarien'}">
                        Végétarien
                    </router-link>
                </li>
                <li>
                    <router-link
                    class="inline-block rounded bg-[#234b90] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]" 
                    :to="{name: 'BrowseSofts'}">
                        Softs
                    </router-link>
                </li>
                <li>
                    <router-link
                    class="inline-block rounded bg-[#234b90] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]" 
                    :to="{name: 'BrowseAlcools'}">
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
    @apply bg-[#922028];
    @apply shadow-[0_4px_9px_-4px_#922028]
}
</style>
