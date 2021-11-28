<template>
    <header :class="{'scrolled-nav': scrolledNav }">
        <nav>
            <div class="branding">
                <img src="@/assets/logo.svg" alt="">
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
    export default {
        name: "Navigation",
        data(){
            return{
                scrolledNav: null,
                mobile: true,
                mobileNav: null,
                windowWidth: null,
            };
        },
        /*event handler that switches nav menu to mobile or desktop. Commented out because our design maintains hammburger/ mobile menu always created(){
            window.addEventListener('resize',this.checkScreen);
            this.checkScreen();
        },*/
        mounted(){
            window.addEventListener('scroll',this.updateScroll)
        },
        watch: {
            '$route' () {
                this.mobileNav=false;
            }
        },
        methods: {
            toggleMobileNav(){
                this.mobileNav = !this.mobileNav;
            },
            updateScroll(){
                const scrollPosition= window.scrollY;
                if(scrollPosition>50){
                    this.scrolledNav=true;
                    return;
                }
                this.scrolledNav=false;
            },
            checkScreen(){
                this.windowWidth=window.innerWidth;
                if(this.windowWidth<=750)
                {
                    this.mobile=true;
                    return;
                }
                this.mobile=false;
                this.mobileNav=false;
                return;
            }

        }
    };
</script>

<style lang="scss" scoped>
header{
    background-color: rgba(255, 255, 255, 0.8);
    z-index:99;
    width: 100%;
    position: fixed;
    transition: .5s ease all;
    color: #fff;

    nav{ 
        position: relative;
        display: flex;
        flex-direction:row;
        padding: 12px 0;
        transition: .5s ease all;
        width:90%;
        margin: 0 auto;
        @media(min-width: 1140px){
            max-width: 1140px;
        }
        ul,.link{
            font-weight: 500;
            color: #fff;
            list-style:none;
            text-decoration:none;

        }
        li{
            text-transform: uppercase;
            padding:16px;
            margin-left:16px;
        }
        .link{
            font-size:14px;
            transition: .5s ease all;
            padding-bottom: 4px;
            border-bottom: 1px solid transparent;
            &:hover{
                color: #00afea;
                border-color: #00afea;
            }
        }
        .branding{
            display: flex;
            align-items: center;

            img{
                width: 50px;
                transition: .5s ease all
            }
        }
        .navigation{
            display: flex;
            align-items:center;
            flex:1;
            justify-content: flex;
        }
        .icon{
            display: flex;
            align-items:center;
            position: absolute;
            color: blue;
            top:0;
            right: 24px;
            height: 100%;
            i{
                cursor: pointer;
                font-size: 24px;
                transition: 0.8s ease all;
            }
        }
        .icon-active{
            transform: rotate(180deg);

        }

        .dropdown-nav{
            display: flex;
            flex-direction: column;
            position: fixed;
            width: 100%;
            max-width: 250px;
            height: 100%;
            background-color: #fff;
            top: 0;
            left:0;

            li{
                margin-left: 0;
                .link{
                    color: black;
                }
            }
        }
        .mobile-nav-enter-active,
        .mobile-nav-leave-active{
            transition: 1s ease all;
        }
        .mmobile-nav-enter-from, .mobile-nav-leave-to{
            transform: translateX(-250px);
        }
        .mobile-nav-enter-to{
            transform:translateX(0);
        }
    }
}
.scrolled-nav{
    background-color:#fff;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06); 
    nav{
        padding:8px 0;
        .branding{
            img{
                width:40px;
                box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06); 
            }
        }
    }
}
</style>