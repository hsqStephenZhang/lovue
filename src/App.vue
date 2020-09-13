<template>
  <div id="app" v-cloak>
    <div id="nav">
      <button>
        <router-link to="/" class="link">Home</router-link>
      </button>
      <button>
        <router-link to="/about" class="link">About</router-link>
      </button>
      <button>
        <router-link to="/Rank" class="link">Rank</router-link>
      </button>
      <button>
        <router-link to="/Messages" class="link">Message</router-link>
      </button>
      <button>
        <router-link to="/Login" class="link">Login</router-link>
      </button>
      <!-- <button>
        <router-link to="/row_test" class="link"
          >test of row column</router-link
        >
            </button>-->
      <button>
        <router-link to="/treeTest" class="link">menu</router-link>
      </button>
      <button>
        <router-link to="/todo" class="link">todo</router-link>
      </button>
      <button>
        <router-link to="/components" class="link">components</router-link>
      </button>
    </div>
    <router-view />
  </div>
</template>

<style>
[v-clock] {
  display: none;
}

* {
  margin: 0px;
  padding: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 20px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: flex;
}

#nav button {
  flex: 1;
  justify-content: space-around;
  min-height: 30px;
  border: 1px;
  margin: 2px 3px;
  font-size: 20px;
  color: skyblue;
}

#nav .link {
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: red;
}
</style>
