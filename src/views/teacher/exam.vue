<template>
<div>
    <div>
    </div>
    <div id="student-supervise">
        <supervise :superviseData="superviseData"></supervise>
    </div>
    <!-- <el-button @click="test"></el-button> -->


</div>

</template>



<script>
import supervise from "@/components/teacher/supervise";


export default {
    props: ["superviseData"],
    components:{
        supervise:supervise
    },
    data() {
    return {
    //   superviseData:[],
        };
    },
    methods:{
        // test(){
        //     console.log("7867876",this.superviseData)
        // }
    }

}
</script>