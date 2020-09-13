<template>
  <div>
    <div>
      <!-- <row :display="'flex'" :justify-content="'center'">
      <Input class="inputbox" size="small" v-model="input1" />
      <p>{{ input1 }}</p>
    </row>
    <row :display="'flex'" :justify-content="'space-around'">
      <Input class="inputbox" size="mediu" v-model="input2" />
      <p>{{ input2 }}</p>
    </row>
    <row :display="'flex'" :justify-content="'space-between'">
      <column :span="4">
        <Input class="inputbox" size="large" v-model="input3" />
      </column>
      <column :span="20" style="background:red">
        <p>{{ input3 }}</p>
      </column>
    </row>
    <row :display="'flex'" :justify-content="'space-between'">
      <column :span="4" :gutter="2">
        <Input class="inputbox" size="large" v-model="input3" />
      </column>
      <column :span="20" :gutter="2"></column>
    </row> -->
    </div>
    <div>
      <h2>test of checkbox</h2>
      <div style="display:flex;flex-direction:column"></div>
      <checkbox></checkbox>
      <radio></radio>
      <my-switch></my-switch>
    </div>
    <!-- <div>
      <dropdown style="position:absolute;left:100px"></dropdown>
    </div> -->
  </div>
</template>

<script>
// import Input from "@/components/input/Input";
// import row from "@/components/row";
// import column from "@/components/column";
import checkbox from "@/components/input/checkbox";
import radio from "@/components/input/radio";
import mySwitch from "@/components/input/mySwitch";
// import dropdown from "@/components/dropdown";

export default {
  components: {
    // Input,
    // row,
    // column,
    checkbox,
    radio,
    mySwitch,
    // dropdown,
  },
  data() {
    return {
      //   input1: "input1",
      //   input2: "input2",
      //   input3: "input3",
    };
  },
};
</script>

<style scoped>
.inputbox {
  display: inline-block;
}
</style>
