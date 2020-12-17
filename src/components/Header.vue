<template>
    <nav class=" w3-top">
        <div class="w3-row w3-large w3-light-grey">
            <div class="w3-col s3">
                <router-link to="/" class="w3-button w3-block">Home</router-link>
            </div>
            <div class="w3-col s3">
                <router-link to="/Equipe" class="w3-button w3-block" id="equipe">Equipe</router-link>
            </div>
            <div class="w3-col s3">
                <router-link to="/Shop" class="w3-button w3-block">Shop</router-link>
            </div>
            <div class="w3-col s3">
                <router-link to="/Contact" class="w3-button w3-block">Contact</router-link>
            </div>
            
        </div>




    </nav>


</template>


<script>
    export default {
        name: "Header",
        data() {
            return {
                cart: [],
                displayCart: false,
            }
        }
    }

</script>


<style scoped>
    h2 {
        color: green;
    }
</style>
