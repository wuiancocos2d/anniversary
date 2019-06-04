<template>
  <div class="rules-container">
    <div class="rules">
      <a-timeline mode="alternate">
        <a-timeline-item>
          <div class="desctiption">
            <strong>From 6/15 to 7/15</strong>
            <br>You can upload your photos to us
            <strong>
              duplicated, laminated, color edited, photomontage (computer synthesis)
              related photography works are not acceptable
            </strong>
            (Maximum 2 photography works per person)
          </div>
        </a-timeline-item>
        <a-timeline-item>
          <div class="desctiption">
            <strong>From 7/16 - 7/20</strong>
            <br>General Affairs Department - Training and Development Division (TDD) and Human Resources Division (HRD) will
            conduct the initial screening
          </div>
        </a-timeline-item>
        <a-timeline-item>
          <div class="desctiption">
            <strong>From 07/21 to 07/31</strong>
            <br>All loyal employees from the Air Macau will do the secret ballot and their
            uploading photography works between the valid contest dates
            <strong>You only have 10 voting opportunities. Once you choose, you cannot cancel</strong>
          </div>
        </a-timeline-item>
        <a-timeline-item>
          <div class="description">
            <strong>From 05/08 to 09/08</strong>
            <br>inviting the Air Macau’s CEO, Departments’ VPs and GMs to assembly of
            the Professional Election Panel for the final audition.
            <br>
            Training and Development Division  and
            Human Resources Division  will contact the top 10 winners by email
            and follow up with the telephone calls to inform all winners.
          </div>
        </a-timeline-item>
      </a-timeline>
    </div>
  </div>
</template>
<script>
import { Timeline, Icon } from "ant-design-vue";
import { mapState } from "vuex";
export default {
  name: "Rules",
  data() {
    return { ruleState: 0 };
  },
  computed: {
    ...mapState(["userStage"])
  },
  components: {
    "a-timeline": Timeline,
    "a-timeline-item": Timeline.Item,
    "a-icon": Icon
  }
};
</script>

<style lang="scss" scoped>
.rules-container {
  margin-top: 30px;
  .rules {
    max-width: 900px;
    margin:  0 auto;
  }
}
</style>
