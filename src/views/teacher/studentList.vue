<template>
    <div>
        <!-- studentList
        {{studentList}} -->

        <div id="SList">
            <SList :studentList="this.studentList"></SList>
        </div>
        
    </div>
</template>

<script>

import SList from '@/components/teacher/SList'

export default {
    props:['studentList'],
    components:{
        SList:SList
    }
}
</script>