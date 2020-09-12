<template>
  <div>
    <row>
      <column :span="6"></column>
      <column :span="12"></column>
      <column :span="6"></column>
    </row>
    <row>
      <column :span="4"></column>
      <column :span="4"></column>
      <column :span="16"></column>
    </row>
    <row>
      <column :span="8"></column>
      <column :span="8"></column>
      <column :span="8"></column>
    </row>
    <row>
      <column :span="6"></column>
      <column :span="12"></column>
      <column :span="6"></column>
    </row>
  </div>
</template>

<script>
import row from "@/components/row";
import column from "@/components/column";
export default {
  components: {
    row,
    column,
  },
};
</script>
