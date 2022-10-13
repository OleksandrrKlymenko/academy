<template>
    <my_header :darkTheme="true"></my_header>
    <section class="news">
        <div class="container">
            <h1>
                News HOD Future Academy
            </h1>
            <div class="news__list">
                <div class="news__item hover" v-for="item, index in list" :key="index">
                    <div class="news__wrapper">
                        <img :src="item.urlToImage" alt="news image" class="item__image">
                        <div class="item__content">
                            <p class="item__date">
                                {{ nowDateFormated }}
                            </p>
                            <h4 class="item__title">
                                {{ item.title }}
                            </h4>
                            <p class="item__description"> 
                                {{ item.description }} 
                            </p>
                            <p class="item__link">
                                More information
                            </p>
                        </div>
                        <router-link :to="{name: 'One', params: {title: item.title}}" class="news__link"></router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <modal></modal>
    <my_footer></my_footer>
</template>

<style lang="scss" scoped>
    h1 {
        font-size: 44px;
        margin: 20px 0 30px;
    }

    .news__list {
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
        .news__wrapper {
            border-radius: 20px;
            background-color: white;
            height: 100%;
            width: inherit;
            position: relative;
            .news__link {
                position: absolute;
                top: 0;
                left: 0;
            }
        }
    }

    .news__item {
        max-width: 380px;
        height: min-content;
        position: relative;
        .item__image {
            border-radius: 20px 20px 0 0;
            max-width: 380px;
            height: 250px;
            object-fit: cover;
        }
        .item__content {
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding: 20px 30px;
            height: 250px;
        }
        .item__date {
            font-size: 12px;
            color: $black;
        }
        .item__title {
           font-size: 18px; 
        }
        .item__description {
            font-size: 14px;
            color: $gray;
            overflow: hidden;
            height: 55px;   
        }
        .item__link {
            font-size: 16px;
            margin-top: auto;
        }
        .item__title, .item__link {
            color: $dark_blue;
            font-weight: 500;
        }
    }
</style>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                list: '',
                page: 1,
            }
        },
        computed: {
            nowDateFormated() { 
                const d = new Date()
                let month = d.getMonth()+1
                let day = d.getDate()
                return d.getFullYear()+'-'+(month < 10 ? '0' + month : month)+'-'+(day < 10 ? '0' + day : day)
            },
        },
        created() {
            this.fetchData()
        },
        methods: {
            fetchData() {
                let url = 'https://newsapi.org/v2/everything?q=apple&apiKey=9d47edb60635430b8fc24e885e17bc6e'
                // url += '&from='+this.nowDateFormated
                url += '&to='+this.nowDateFormated
                url += '&language=en'
                url += '&pageSize=20'
                url += '&page='+this.page
                axios
                    .get(url)
                    .then(resp =>(
                    this.list = resp.data.articles  
                    ))
                console.log(this.nowDateFormated)
            }
        },
        mounted () {
            window.scrollTo(0, 0)
        }
    }
</script>

