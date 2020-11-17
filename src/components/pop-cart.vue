<template>
  <el-popover
    width="350"
    trigger="hover"
  >
    <el-table :data="cartProducts" size="mini">
      <el-table-column property="title" width="130" label="商品"></el-table-column>
      <el-table-column property="price" label="价格"></el-table-column>
      <el-table-column property="count" width="50" label="数量"></el-table-column>
      <el-table-column label="操作">
        <template v-slot="{row}">
          <el-button size="mini" @click="removeCart(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div>
      <p>共 {{allCount}} 件商品 共计¥{{allPrice}}</p>
      <el-button size="mini" type="danger" @click="$router.push({ name: 'cart' })">去购物车</el-button>
    </div>
    <el-badge :value="allCount" class="item" slot="reference">
      <el-button type="primary">我的购物车</el-button>
    </el-badge>
  </el-popover>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
export default {
  name: 'PopCart',
  data () {
    return {
    }
  },
  computed: {
    ...mapState('carts', ['cartProducts']),
    ...mapGetters('carts', ['allPrice', 'allCount'])
  },
  methods: {
    // 从购物车中移除
    ...mapMutations('carts', ['removeProduction', 'removeCart'])
  }
}
</script>

<style>

</style>
