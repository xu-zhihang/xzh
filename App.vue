<template>
  <div class="app">
    <mt-header fixed title="求职招聘"></mt-header>
    
    <router-view></router-view>

   <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopping">
				<span class="mui-icon  mui-icon-extra mui-icon-extra-cart" >
					<span class="mui-badge">9</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/setup">
				<span class="mui-icon mui-icon-gear-filled"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>


<style scoped>
  .app{
    padding-top:44px;
  } 
  
</style>
