<template>
    <p>Product</p>
</template>


<script>
    export default {
        name: "Product",
        data() {
            return {
                products: [{
                        name: "Masque moustache",
                        price: 18,
                        image: "./image/masque-moustache.jpg",
                        image2: "./image/masque-moustache-2.jpg",
                        hovered: null,
                        stock: 26,
                        tags: {
                            Type: "Drôle"
                        },
                    },
                    {
                        name: "Pull de noël",
                        price: 35,
                        image: "./image/christmas-sweater.jpg",
                        image2: "./image/christmas-sweater-2.jpg",
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
                        image: "./image/tetris-lamp.jpg",
                        image2: "./image/tetris-lamp-2.jpg",
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

        }
    }

</script>


<style scoped>

</style>
