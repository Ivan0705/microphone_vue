<template>
    <section class="list-employeers _container">
        <div>
            <div v-if="isLoading">
                <div v-for="user in users" :key="user.id">
                    <Employee :user="user"/>
                </div>
            </div>
            <div v-else>
                <Preloader/>
            </div>
        </div>
    </section>

</template>

<script>
    import Employee from "./Employee";
    import Preloader from "./Preloader";
    import NotFound from "./NotFound";
    import {mapActions, mapMutations, mapState} from "vuex";

    export default {
        name: 'ListEmployers',
        components: {NotFound, Preloader, Employee},
        data() {
        },
        methods: {
            ...mapMutations({
                setUsers: 'user/setUsers',
                setIsLoading: 'user/setIsLoading',
            }),
            ...mapActions({
                fetchUsers: 'user/fetchUsers'
            }),
        },
        mounted() {
            this.fetchUsers();
        },
        computed: {
            ...mapState({
                users: state => state.user.users,
                isLoading: state => state.user.isLoading,
            }),


        }
    }
</script>

<style>
    /*---------CONTAINER--------*/
    ._container {
        box-sizing: content-box;
        max-width: 1300px;
        padding: 0 30px;
    }

    /*--------LIST_EMPLOYEERS-----------*/
    .list-employeers {
        margin-top: 110px;
    }

    .list-employeers input[type='text'] {
        width: 400px;
        height: 70px;
        padding: 0 20px;
        border-radius: 15px;
        font-size: 25px;
    }
</style>
