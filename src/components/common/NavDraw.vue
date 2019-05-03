<template>
    <div class="navDrawer-contaienr">
        <a-button>Open</a-button>
        <a-drawer></a-drawer>
    </div>
</template>
<script>
import {Button,Drawer} from 'ant-design-vue'
export default {
    name: 'navDraw',
    components: {
        "a-button": Button,
        "a-drawer": Drawer
    }
}
</script>
