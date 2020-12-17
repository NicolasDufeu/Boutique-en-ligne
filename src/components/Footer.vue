<template>
    <div>
        <div>
            <a href="http://www.facebook.com/" class="fa fa-facebook"></a>
            <a href="http://www.facebook.com/" class="fa fa-twitter"></a>
            <a href="http://www.facebook.com/" class="fa fa-youtube"></a>
            <a href="http://www.facebook.com/" class="fa fa-instagram"></a>
        </div>


    </div>
</template>


<script>
    export default {
        name: "Header",
        data() {
            return {}
        }
    }

</script>


<style scoped>
    .fa-youtube {
        background: #bb0000;
        color: white;
    }

    .fa-instagram {
        background: #125688;
        color: white;
    }

    .fa-facebook {
        background: #3B5998;
        color: white;
    }

    .fa-twitter {
        background: #55ACEE;
        color: white;
    }

    .fa {
        margin-left: 10px;
        padding: 20px;
        font-size: 20px;
        width: 60px;
        text-align: center;
        text-decoration: none;
        border-radius: 50%;
    }

    div {
        position: relative;
        bottom: 0;
        padding-left: 400px;
    }

</style>
