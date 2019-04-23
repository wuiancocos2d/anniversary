<template>
  <div class="table-content">
    <a-table
      :columns="columns"
      :dataSource="data"
      :pagination="pagination"
      :loading="loading"
      @change="handleTableChange"
    >
      <template slot="name" slot-scope="name">{{name.first}} {{name.last}}</template>
    </a-table>
  </div>
</template>
<script>
import { getAuthoList } from "../service/getData.js";
const columns = [
    {
        title: 'Title',
        dataIndex: 'title',
        width: '20%'
    },
    {
        title: 'User',
        dataIndex: 'user',
        width: '30%'
    },
    {
        title: 'Date',
        dataIndex: 'date',
        width: '30%'
    },
    {
        title: 'Status',
        dataIndex: 'status',
        width: '20%'
    }
]
export default {
    name: 'approveTable',
    mounted() {
        this.getData();
    },
    data() {
        return {
            data: [],
            pagination: {},
            loading: false,
            columns
        }
    },
    methods: {
        getData() {
            
        }
    }
};
</script>
<style lang="scss" scoped>
</style>
