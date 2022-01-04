<template>
  <div>

    <div id="grade-scoring">
        <Scoring ></Scoring>
    </div>

    <!-- <div id="choice">
        <Choice></Choice>

    </div> -->





  </div>
</template>



<script>
import Scoring from "@/components/teacher/scoring";
// import Choice from "@/components/teacher/choice";

export default {
  props: ["studentList"],
  components: {
    Scoring: Scoring,
    // Choice:Choice,
    Scoring,
  },
  methods: {
    

  },
};
</script>