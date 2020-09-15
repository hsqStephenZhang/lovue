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
      <!-- <checkbox></checkbox> -->
      <input type="checkbox" v-model="checkdNames" value="john" id="john" />
      <label for="john"></label>
      <input type="checkbox" v-model="checkdNames" value="bob" id="bob" />
      <label for="bob"></label>
      <input type="checkbox" v-model="checkdNames" value="mike" id="mike" />
      <label for="mike"></label>
      <p>{{ checkdNames }}</p>

      <grid>
        <grid-cell :offset="0">1</grid-cell>
        <grid-cell :offset="0">2</grid-cell>
        <grid-cell :offset="0">3</grid-cell>
        <grid-cell :offset="0">4</grid-cell>
      </grid>

      <!-- <radio value="one" v-model="picked"></radio> -->
      <!-- <radio value="two" v-model="picked"></radio> -->
      <checkbox
        id="1"
        v-model="checkCheckbox"
        @change="handleChange"
      ></checkbox>
      <h2>{{ checkCheckbox }}</h2>
      <radio v-model="checkRadio" @change="handleChange2"></radio>
      <h2>{{ checkRadio }}</h2>
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
import grid from "@/components/grid";
import gridCell from "@/components/gridCell";
export default {
  components: {
    // Input,
    // row,
    // column,
    checkbox,
    radio,
    mySwitch,
    grid,
    gridCell,
    // dropdown,
  },
  data() {
    return {
      //   input1: "input1",
      //   input2: "input2",
      //   input3: "input3",
      checkdNames: [],
      picked: "",
      checkRadio: false,
      checked1: false,
      checkCheckbox: false,
    };
  },
  methods: {
    handleChange(checked) {
      console.log(checked);
      this.checkCheckbox = checked;
    },
    handleChange2(checked) {
      console.log(checked);
      this.checkRadio = checked;
    },
  },
};
</script>

<style scoped>
.inputbox {
  display: inline-block;
}
</style>
