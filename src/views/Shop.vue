<template>
    <div class="w3-top" id="test">
        <!-- barre de nav -->
        <div class=" w3-light-grey w3-card w3-animate-top">
            <a href="#" class="w3-right w3-button " v-on:click="displayCart = !displayCart"><i class="fa fa-shopping-basket"></i>({{cart.length}})PANIER</a>
        </div>

        <!-- Panier -->
        <transition name="slide">
            <div class="w3-right w3-border" v-show="displayCart">
                <table class="w3-table w3-white">
                    <tr>
                        <th>Produit</th>
                        <th>Prix
                            <a href="#" class="w3-right w3-button w3-bar-item" v-on:click="displayCart = !displayCart"><i class="fa fa-close"></i></a>
                        </th>

                    </tr>
                    <tr v-for="(item, key) in cart" :key="key">
                        <td>{{ item.name }}</td>
                        <td>{{ item.price }} €</td>
                    </tr>
                    <tr>
                        <td>Code promo</td>
                        <td><input v-model="code_promo" placeholder="Avez-vous un code ?"></td>
                    </tr>
                    <tr>
                        <th>Total</th>
                        <th v-if="code_promo === 'noel'">
                            <span style="color:grey; text-decoration: line-through">{{ totalPrice }} €</span><span>(-5€) {{totalPrice -5}} €</span>
                        </th>
                        <th v-else>{{totalPrice}} €</th>
                    </tr>
                </table>
            </div>
        </transition>
    </div>

    <div class="w3-container w3-center" style="margin-top: 60px; max-width: 1600px; margin-bottom:80px; margin-left:110px;" >
        <h1>{{ title }}</h1>

        <!-- produits -->
        <div class="w3-row-padding">
            <!-- 1 produit -->
            <div v-for="(product, index) in products" :key="index" class="w3-col l4 m6 w3-padding">
                <img :src="product.hovered === null ? product.image : product.image2" width="100%" v-on:mouseover="product.hovered = index" v-on:mouseout="product.hovered = null" style="cursor: pointer">

                <div class="w3-container w3-center w3-border">
                    <h3>{{ product.name }}</h3>
                    <h4>{{ product.price }} €</h4>
                    <p v-if="product.stock==0">Epuisé</p>
                    <p v-else><strong>{{ product.stock }} en stock</strong></p>
                    <p>
                        <span v-for="(value, name) in product.tags" :key="name"><strong>{{ name }}: </strong> {{ value }} </span>
                    </p>
                    <p>
                        <button v-on:click="addToCart(product)">Ajouter au panier</button>
                    </p>
                </div>
            </div>

        </div>
    </div>
</template>


<script>
    export default {
        title: 'Shop',
        data() {
            return {
                title:"Boutique",
                products: [
                    {
                        name: "Masque moustache",
                        price: 18,
                        image: require("../assets/masque-moustache.jpg"),
                        image2: require("../assets/masque-moustache-2.jpg"),
                        hovered: null,
                        stock: 6,
                        tags: {
                            Type: "Drôle"
                        },
                    },
                    {
                        name: "Pull de noël",
                        price: 35,
                        image: require("../assets/christmas-sweater.jpg"),
                        image2: require("../assets/christmas-sweater-2.jpg"),
                        hovered: null,
                        stock: 17,
                        tags: {
                            Size: "S,M,L,XL",
                            Material: "100% Laine"
                        },
                    },
                    {
                        name: "Lampe tetris",
                        price: 27,
                        image: require("../assets/tetris-lamp.jpg"),
                        image2: require("../assets/tetris-lamp-2.jpg"),
                        hovered: null,
                        stock: 12,
                        tags: {
                            Mood: "Retro",
                            For: "Geeks"
                        },
                    },
                    {
                        name: "Masque moustache",
                        price: 18,
                        image: require("../assets/masque-moustache.jpg"),
                        image2: require("../assets/masque-moustache-2.jpg"),
                        hovered: null,
                        stock: 6,
                        tags: {
                            Type: "Drôle"
                        },
                    },
                    {
                        name: "Pull de noël",
                        price: 35,
                        image: require("../assets/christmas-sweater.jpg"),
                        image2: require("../assets/christmas-sweater-2.jpg"),
                        hovered: null,
                        stock: 17,
                        tags: {
                            Size: "S,M,L,XL",
                            Material: "100% Laine"
                        },
                    },
                    {
                        name: "Lampe tetris",
                        price: 27,
                        image: require("../assets/tetris-lamp.jpg"),
                        image2: require("../assets/tetris-lamp-2.jpg"),
                        hovered: null,
                        stock: 12,
                        tags: {
                            Mood: "Retro",
                            For: "Geeks"
                        },
                    }
                ],
                cart: [],
                totalPrice: 0,
                code_promo: "",
                displayCart: false,
            }
        },
        methods: {
            addToCart(product) {
                this.cart.push(product);
                this.totalPrice += product.price;
                this.displayCart = true;
                console.log('Total Prix : ', this.totalPrice);
            }
        },
        computed: {

        }
    }

</script>


<style scoped>
    #test{
        margin-top: 40px;
    }
    img{
        width: 100%;
    }
</style>
