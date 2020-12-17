<template>
    <img src="../assets/background-4659604_1920.jpg" class="photo1">
    <div class="container">
        <div>
           <br/><br/>
            <p id="text1" class="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis tellus hendrerit, sagittis turpis a, ultricies eros. Donec feugiat sem quis est malesuada rhoncus. Ut ipsum enim, porta eget felis id, aliquet ultricies sapien. Phasellus convallis elit vel eros consequat finibus. Fusce tincidunt sagittis nulla ac mollis. Integer ullamcorper convallis laoreet. Phasellus sapien lacus, fringilla hendrerit magna at, mattis gravida neque.
            </p><br/>
        </div>
        <div>
            <p class="text">
                Phasellus ultricies neque vitae molestie convallis. Sed non auctor odio. Quisque pellentesque libero sit amet luctus hendrerit. Vestibulum sed velit non purus porta scelerisque. Donec cursus, mauris nec convallis rhoncus, leo ex iaculis diam, quis ultrices ante erat non tellus. Morbi pulvinar velit sed felis dignissim, vel venenatis lorem dapibus. Nunc augue libero, interdum nec pulvinar eu, congue non augue. Proin urna lacus, lacinia et tincidunt maximus, auctor eget nibh. Aenean eget lorem eget est dictum ultricies. Praesent vel turpis nec justo vulputate blandit. Donec eros sapien, vehicula sed finibus eget, finibus a metus. Praesent vehicula fringilla est eget malesuada.
            </p><br/><br/><br/><br/>
        </div>



    </div>
    <div class="container2">
        <div>
            <transition name="fade">
                <img v-show="2" :src="slides[index].src" class="photo2">
            </transition>
        </div>
        <div>
            <p class="container2" id="text2">{{ slides[index].text }}</p>
        </div>
    </div>

</template>


<script>
    export default {
        name: 'Home',
        data() {
            return {
                count: 0,
                index: 0,
                slides: [{
                        src: require("../assets/masque-moustache.jpg"),
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dui leo, consequat ut elit ultrices, commodo dignissim diam. Aliquam eros purus, mattis eget quam vitae, feugiat gravida ante."
                    },
                    {
                        src: require("../assets/tetris-lamp.jpg"),
                        text: "Praesent dignissim interdum pharetra. Etiam vehicula interdum purus, sed pellentesque augue lacinia nec. In hac habitasse platea dictumst. Suspendisse ut orci tincidunt, volutpat nulla sed, commodo tortor. Sed dui dui, imperdiet sit amet nunc vel, pellentesque porttitor nisi."
                    },
                    {
                        src: require("../assets/christmas-sweater.jpg"),
                        text: "Nunc finibus nibh quis orci consectetur tincidunt non ac massa. Suspendisse tempus est et erat imperdiet, eget posuere turpis sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed volutpat enim at orci molestie interdum. Donec est sem, mattis ac egestas ut, vehicula quis libero. "
                    }
                ]
            }
        },
        methods: {
            

        },
        computed: {

        },
        mounted() {
            setInterval(() => {
                this.count++
            }, 1000);

            setInterval(() => {
                if (this.index < this.slides.length) {
                    this.index++
                } else {
                    this.index = 0
                }
            }, 2000);
            
        }
    };

</script>


<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        flex-wrap: wrap;
    }
    .container2{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        flex-wrap: wrap;
    }

    .photo1 {

        width: 100%;
        height: 100%;
        max-height: 600px;
       
    }

    .photo2 {
        width: 100%;
        max-width: 800px;

    }

    #text1 {
        padding-left: 50px;
        padding-right: 50px;
        
    }

    .text {
        width: 100%;
        max-width: 1200px;
    }
    #text2{
        width: 100%;
        max-width: 700px;
        
        ;
        
    }

    .fade-enter-active {
        animation: fade-in 1s;
    }

    .fade-leave-active {
        animation: fade-in 1s reverse;
    }

    @keyframes fade-in {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

</style>
