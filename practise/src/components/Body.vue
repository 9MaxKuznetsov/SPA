<template>
  <div class="body">
    <div class="card"
    v-for="user in users"
    :key="'userPreview' + user.username"
    @click="goToPage(user.userId)"
    >
      <h1 class="task">{{ user.title}}</h1>
      <h2 class="completed">{{ user.completed }}</h2>
   </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      users: [
        {
          userId: 1,
          title: `delectus aut autem`,
          completed: false
        },
        {
          userId: 2,
          title: `quis ut nam facilis et officia qui`,
          completed: false
        },
        {
          userId: 3,
          title: `fugiat veniam minus`,
          completed: false
        },
        {
          userId: 4,
          title: `et porro tempora`,
          completed: true
        },
        {
          userId: 5,
          title: `laboriosam mollitia et enim quasi adipisci quia provident illum`,
          completed: false
        },
        {
          userId: 6,
          title: `qui ullam ratione quibusdam voluptatem quia omnis`,
          completed: false
        },
        {
          userId: 7,
          title: `illo expedita consequatur quia in`,
          completed: false
        },
        {
          userId: 8,
          title: `quo adipisci enim quam ut ab`,
          completed: true
        },
        {
          userId: 9,
          title: `molestiae perspiciatis ipsa`,
          completed: false
        },
        {
          userId: 10,
          title: `illo est ratione doloremque quia maiores aut`,
          completed: true
        },
        {
          userId: 11,
          title: `vero rerum temporibus dolor`,
          completed: true
        },
        {
          userId: 12,
          title: `ipsa repellendus fugit nisi`,
          completed: true
        },
        {
          userId: 13,
          title: `et doloremque nulla`,
          completed: false
        },
        {
          userId: 14,
          title: `repellendus sunt dolores architecto voluptatum`,
          completed: true
        },
        {
          userId: 15,
          title: `ab voluptatum amet voluptas`,
          completed: true
        },
        {
          userId: 16,
          title: `accusamus eos facilis sint et aut voluptatem`,
          completed: true
        },
        {
          userId: 17,
          title: `quo laboriosam deleniti aut qui`,
          completed: true
        },
        {
          userId: 18,
          title: `dolorum est consequatur ea mollitia in culpa`,
          completed: false
        },
        {
          userId: 19,
          title: `molestiae ipsa aut voluptatibus pariatur dolor nihil`,
          completed: true
        },
        {
          userId: 20,
          title: `ullam nobis libero sapiente ad optio sint`,
          completed: true
        }
      ]
    }
  },
  methods: {
    goToPage (userId) {
      this.$router.push('id' + userId)
    }
  }
}
</script>

<!-- Add `scoped` attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.body {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
}
.card {
  border: 1px solid grey;
  cursor: pointer;
  height: 170px;
  width: 350px;
  margin: 10px;
}
</style>
