<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>购物车</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table
      :data="cartProducts"
      style="width: 100%"
    >
      <el-table-column
        width="55">
        <template v-slot:header>
          <!-- 这里最大的反选按钮， 用v-model绑定计算属性，或者用:value 和 @change 事件都是可以的 -->
            <el-checkbox size="mini"
            v-model="allIsChecked"
          >
          </el-checkbox>
        </template>
        <!--
          @change="updateProductChecked"  默认参数：更新后的值
          @change="updateProductChecked(productId, $event)"  123, 原来那个默认参数
            当你传递了自定义参数的时候，还想得到原来那个默认参数，就手动传递一个 $event
         -->
        <template v-slot="{row}">
          <el-checkbox
            size="mini"
            :value="row.isChecked"
            @change="updateProductChecked(row, $event)"
          >
          </el-checkbox>
        </template>
      </el-table-column>
      <el-table-column
        prop="title"
        label="商品">
      </el-table-column>
      <el-table-column
        prop="price"
        label="单价">
      </el-table-column>
      <el-table-column
        prop="count"
        label="数量">
        <template v-slot="{row}">
          <el-input-number size="mini" :min="0" v-model="row.count" @change="changeChartItemNumber(row)"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column
        prop="totalPrice"
        label="小计">
      </el-table-column>
      <el-table-column
        label="操作">
        <template v-slot="{row}">
          <el-button size="mini" @click="removeCart(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div>
      <p>已选 <span>{{checkedCount}}</span> 件商品，总价：<span>{{checkedPrice}}</span></p>
      <el-button type="danger">结算</el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'

export default {
  name: 'Cart',
  data () {
    return {
    }
  },
  computed: {
    ...mapState('carts', ['cartProducts']),
    ...mapGetters('carts', ['checkedPrice', 'checkedCount']),
    // 全部的 选中和反选按钮定义在组件的内部
    allIsChecked: {
      get () {
        return this.cartProducts.every(item => item.isChecked)
      },
      set (value) {
        this.changeAllProduct(value) // 将反选所有item的isChecked
      }
    }
  },
  methods: {
    ...mapMutations('carts', ['updateProductChecked', 'changeAllProduct', 'changeChartItemNumber', 'removeCart'])
  }
}
</script>

<style></style>
