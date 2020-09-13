# 绑定 style 样式的方法

- 使用 class 三元表达式

- 使用 class 绑定多个 class，每一个 class 负责一部分的样式

- :style="" 内联样式

  > 这里的 style 里面的内容既可以是计算属性，也可以是函数，也可以是一个对象 甚至可以将变量传入

  > 比如 :style="{'--color':'red'}" 然后在后面的 style 中只要声明了 scoped 就可以使用该变量了
