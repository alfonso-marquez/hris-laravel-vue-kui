<script setup>
    import { ref, onMounted } from 'vue'
    import AuthenticatedLayout from '@/Layouts/Authenticated.vue'
    import Button from '@/Components/Button.vue'
    import { GithubIcon } from '@/Components/Icons/brands'
    // import { Header, Item } from 'vue3-easy-data-table'
    import Vue3EasyDataTable from "vue3-easy-data-table";

    import { isDark } from '@/Composables'

    const headers = [
        { text: "Last Name", value: "last_name" },
        { text: "First Name", value: "first_name", sortable: true },
        { text: "Middle Name", value: "middle_name", sortable: true },
        { text: "Suffix Name", value: "suffix_name", sortable: true },
        { text: "Gender", value: "gender", sortable: true },
        { text: "Birth Date", value: "birth_date", sortable: true },
        { text: "Department", value: "department_id", sortable: true },
        { text: "Position", value: "position_id", sortable: true }
    ];
    const items = ref([]);
    const itemsSelected = ref([items[0]]);
    let loading = true
    const emp = 'SAMPLE';
    // const self = this;
    onMounted(async () => {
        // alert('Application started')
        await axios.get('http://localhost:8000/sanctum/csrf-cookie')
            .then(response => {
                // this.token = response.data
                axios
                    .get('http://localhost:8000/api/employees/')
                    .then(response => {
                        items.value = response.data.employees.data
                        console.log(response.data.employees.data)
                        console.log(items.value)
                        loading = false
                        // console.log(response.data)
                    }).catch((response) => {
                        alert(response)
                    });
                // console.log(response.data)
            }).catch((response) => {
                alert(response)
            });
        // const config = {
        //     headers: { Authorization: "XSRF-TOKEN" }
        // };
    })

</script>
<template>
    <AuthenticatedLayout title="Dashboard">
        <template #header>
            <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <h2 class="text-xl font-semibold leading-tight">
                    Dashboard
                </h2>
            </div>
        </template>
        <div class="p-6 overflow-hidden bg-white rounded-md shadow-md dark:bg-dark-eval-1">
            <Vue3EasyDataTable :headers="headers" :items="items" :items-selected="itemsSelected" :loading="loading"
                class="p-6 overflow-hidden bg-white rounded-md shadow-md dark:bg-dark-eval-1" />
        </div>
    </AuthenticatedLayout>
</template>