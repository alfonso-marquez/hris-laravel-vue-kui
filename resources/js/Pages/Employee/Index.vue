<script setup>
    import AuthenticatedLayout from '@/Layouts/Authenticated.vue'
    import Button from '@/Components/Button.vue'
    import DataTable from '@/Components/DataTable.vue'
    import { GithubIcon } from '@/Components/Icons/brands'

    // import axios from 'axios'
    // import {
    //     onMounted,
    //     ref,
    // } from 'vue';
    // const employees = ref([])
    // const self = this;

    // onMounted: (async () => {
    //     await axios.get('http://localhost:8000/sanctum/csrf-cookie')
    //     await axios
    //         .get('http://localhost:8000/api/employees/')
    //         .then(response => {
    //             self.employees = response.data
    //             console.log(response.data)
    //         })
    // })
</script>

<script>
    import axios from 'axios'
    import {
        ref,
    } from 'vue';


    export default {
        setup() {
            const count = ref(0)
            let employees = ref([])
            // const self = this

            // expose to template and other options API hooks
            return {
                employees
            }
        },

        // onMounted: (() => {
        //     axios.get('http://localhost:8000/sanctum/csrf-cookie')
        //     axios
        //         .get('http://localhost:8000/api/employees/')
        //         .then(response => {
        //             // self.employees = response.data
        //             console.log(response.data)
        //         })
        // }),

        mounted() {
            axios.get('http://localhost:8000/sanctum/csrf-cookie')
            axios
                .get('http://localhost:8000/api/employees/')
                .then(response => {
                    this.employees = response.data.employees
                    console.log(this.employees)
                    // console.log(response.data)
                })
            // console.log('count') // 0
        }
    }
</script>

<template>
    <AuthenticatedLayout title="Employee Index">
        <span>Employee Page rendered by Inertia</span>
        <DataTable />
    </AuthenticatedLayout>
</template>