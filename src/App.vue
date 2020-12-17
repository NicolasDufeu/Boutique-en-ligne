<template>
    <Header>
        <nav class=" w3-top">
            <div class="w3-row w3-large w3-light-grey">
                <div class="w3-col s3">
                    <router-link to="/" class="w3-button w3-block">Home</router-link>
                </div>
                <div class="w3-col s3">
                    <router-link to="/Shop" class="w3-button w3-block">Shop</router-link>
                </div>
                <div class="w3-col s3">
                    <router-link to="/Contact" class="w3-button w3-block">Contact</router-link>
                </div>
            </div>

        </nav>
    </Header>

    <div class="w3-container">
        <router-view />
    </div>
    
    <Footer />
</template>

<script>
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'

    export default {
        name: 'App',
        components: {
            Header,
            Footer
        },
        data() {
            return {

            }
        }
    }

</script>

<style>
    @import url("https://www.w3schools.com/w3css/4/w3.css");
    @import url("https://www.w3schools.com/lib/w3-theme-black.css");
    @import url("https://fonts.googleapis.com/css?family=Lato");
    @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: "Lato", sans-serif;
    }

</style>
