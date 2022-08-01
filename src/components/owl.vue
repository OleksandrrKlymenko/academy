<template>
    <div class="owl">
      <img src="../assets/images/owl.svg" alt="owl image">
    </div>
</template>

<style lang="scss" scoped>

img {
    width: 100%;
}

@media screen and (max-width: 1090px) {
    .owl {
        img {
            width: 190px;
            height: 200px;
        }
    }
}

@media screen and (max-width: 500px) {
    .owl {
        img {
            width: 120px;
            height: 135px;
        }
    }
}
</style>

<script>
    export default {
        name: 'owl'
    }
</script>