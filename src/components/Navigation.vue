<template>
    <header :class="{'scrolled-nav': scrollPosition }">
        <nav>
            <div class="branding">
                <img src="@/assets/logo.png" alt="">
            </div>
            <ul v-show="!mobile" class="navigation">   
                <li><router-link class="link" :to="{name: 'Home'}">Home</router-link></li>
                <li><router-link class="link" :to="{name: 'Bubblesort'}">Bubble Sort</router-link></li>
                <li><router-link class="link" :to="{name: 'Quicksort'}">Quick Sort</router-link></li>
                <li><router-link class="link" :to="{name: 'Mergesort'}">Merge Sort</router-link></li>
                <li><router-link class="link" :to="{name: 'Insertionsort'}">Insertion Sort</router-link></li>
                <li><router-link class="link" :to="{name: 'Selectionsort'}">Selection Sort</router-link></li>
                <li><router-link class="link" :to="{name: 'Pancakesort'}">Pancake Sort</router-link></li>
                <li><router-link class="link" :to="{name: 'About'}">About</router-link></li>
            </ul>
            <div class="icon">
                <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{'icon-active': mobileNav}"></i>
            </div>
            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">   
                    <li><router-link class="link" :to="{name: 'Home'}">Home</router-link></li>
                    <li><router-link class="link" :to="{name: 'Bubblesort'}">Bubble Sort</router-link></li>
                    <li><router-link class="link" :to="{name: 'Quicksort'}">Quick Sort</router-link></li>
                    <li><router-link class="link" :to="{name: 'Mergesort'}">Merge Sort</router-link></li>
                    <li><router-link class="link" :to="{name: 'Insertionsort'}">Insertion Sort</router-link></li>
                    <li><router-link class="link" :to="{name: 'Selectionsort'}">Selection Sort</router-link></li>
                    <li><router-link class="link" :to="{name: 'Pancakesort'}">Pancake Sort</router-link></li>
                    <li><router-link class="link" :to="{name: 'About'}">About</router-link></li>
                </ul>    
            </transition> 
        </nav>
    </header>
</template>

<script>
    export default {};
</script>

<style lang="scss" scoped>

</style>