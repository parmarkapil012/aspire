<template id="Confirmation">
  <div class="Confirmation">
    <div class="Confirmation-window">
      <h4>Are you sure you want to delete this card?</h4>
      <div class="action mt-4">
        <b-button variant="outline-primary" class="mr-3" @click="Oncancel()"
          >Cancel</b-button
        >
        <b-button variant="primary" @click="Onconfirm()">OK</b-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Prop } from "vue-property-decorator";
import Component from "vue-class-component";
@Component
export default class Confirmationmodel extends Vue {
  Onconfirm() {
    this.$emit("confirm");
  }
  Oncancel() {
    this.$emit("cancel");
  }
}
</script>
