<template>
    <a href="/#presentation">
        <div :class="$style['hero__banner']">
            <picture>
                <source media="(max-width: 420px)" :srcset="require(`../../assets/images/hero/MBanner.webp`)">
                <source media="(max-width: 992px)" :srcset="require(`../../assets/images/hero/Banner.webp`)">
                <img :class="$style['hero__img']" data-not-lazy :src="require(`../../assets/images/hero/Banner.webp`)" :alt="false">
            </picture>
        </div>
    </a>
</template>

<script>
    export default {
        methods: {
        }
    }
</script>

<style lang="scss" module>
    .hero__banner {
        display: flex;
        flex-direction: column;
        height: calc(100vh - 120px);
        background-color: $color-light;
        position: relative;
        width: 100%;

        @media (max-width: $bp-xxl) {
            height: 800px;
        }

        @media (max-width: $bp-md) {
            height: 668px;
        }

        @media (max-width: $bp-sm) {
            height: 722px;
        }

        .hero__img {
            position: absolute;
            height: 100%;
            width: 100%;
            left: 0;
            top: 0;
            object-fit: contain;
        }
    }
</style>
