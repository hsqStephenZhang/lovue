<template>
  <div>
    <div class="login-head">
      <h2>this is the login page</h2>
    </div>
    <div class="input">
      <template v-if="type === 'name'">
        <label for="username-input">username:</label>
        <input id="username-input" placeholder="username" v-model="inputName" />
      </template>
      <template v-else>
        <label for="email-input">email:</label>
        <input id="email-input" placeholder="email" v-model="inputEmail" />
      </template>
      <br />
      <label for="password-input">password:</label>
      <input
        id="password-input"
        placeholder="password"
        v-model="inputPassword"
      />
      <br />
      <button @click="handleChangeMethod">切换输入类型</button>
      <button @click="handleLogin">登陆</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      username: "zc",
      password: "123456",
      email: "2250015961@qq.com",
      inputName: "",
      inputEmail: "",
      inputPassword: "",
      type: "name",
    };
  },
  methods: {
    handleChangeMethod() {
      this.type = this.type === "name" ? "email" : "name";
    },
    handleLogin() {
      if (this.type === "name") {
        if (
          this.inputName === this.username &&
          this.password === this.inputPassword
        ) {
          alert("success");
          return 1;
        } else return 0;
      } else {
        if (
          this.inputEmail === this.email &&
          this.password === this.inputPassword
        ) {
          alert("success");
          return 1;
        } else return 0;
      }
    },
  },
};
</script>

<style>
.login-head {
  /* background: red; */
}

input {
  width: 150px;
  height: 20px;
}

.input {
  font-size: 20px;
}

button {
  border-radius: 2px;
  height: 30px;
}
</style>
