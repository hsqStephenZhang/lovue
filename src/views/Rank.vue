<template>
    <div>
        <h1>this is rank page</h1>
        <div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>商品名称</th>
                        <th>商品单价</th>
                        <th>购买数量</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- <tr v-for="(item,index,key) in list">

                    </tr>-->
                    <tr v-for="(item, index) in list" :key="index">
                        <td>{{index+1}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.price}}</td>
                        <td>
                            <button @click="handleReduce(index)">-</button>
                            {{item.count}}
                            <button
                                @click="handleIncrease(index)"
                            >+</button>
                        </td>
                        <td>
                            <button @click="handleRemove(index)">remove</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2>totalPrice:{{totalPrice}}</h2>
        </div>
    </div>
</template>


<script>
export default {
    name: 'rank',
    data() {
        return {
            list: [
                { id: 1, name: 'a', count: 4, price: 10 },
                { id: 2, name: 'b', count: 3, price: 20 },
                { id: 3, name: 'c', count: 2, price: 30 },
                { id: 4, name: 'd', count: 1, price: 40 },
            ],
        }
    },
    computed: {
        totalPrice() {
            var total = 0
            for (let i = 0; i < this.list.length; i++) {
                var item = this.list[i]
                total += item.price * item.count
            }
            return total.toString()
        },
    },
    methods: {
        handleReduce(index) {
            if (this.list[index].count === 1) return
            this.list[index].count--
        },
        handleIncrease(index) {
            this.list[index].count++
        },
        handleRemove(index) {
            this.list.splice(index, 1)
        },
    },
}
</script>

<style>
table {
    font-size: 30px;
    border: 1px solid #e9e9e9;
    border-collapse: collapse;
    border-spacing: 0px;
    empty-cells: show;
    width: 500px;
    margin: 0 auto;
}
th,
td {
    padding: 8px, 16px;
    border: 1px solid #e9e9e9;
    text-align: left;
    min-width: 10px;
}
th {
    background: #f7f7f7;
    color: #5c6b77;
    font-weight: 300;
    white-space: nowrap;
    min-width: 10px;
}
</style>