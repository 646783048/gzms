<template>
            <el-row :getter="10">
                  <el-menu
                        :default-active="activeIndex2"
                        class="el-menu-demo"
                        mode="horizontal"
                        @select="handleSelect"
                        background-color="#72797f"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                    <el-col :span="3">
                        <el-menu-item index="1" id="leader"><img src="../../public/img/logo.png" alt=""></el-menu-item>
                    </el-col>

                    <el-col :span="3">
                        <el-menu-item index="1" id="leader">首页</el-menu-item>
                    </el-col>

                     <el-col :span="3">
                    <el-submenu index="2">
                        <template slot="title">经典景点</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                    </el-submenu> 
                    </el-col>
                    <el-col :span="3">
                    <el-submenu index="3">
                        <template slot="title">热门景点</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                    </el-submenu>
                     </el-col>
                    <el-col :span="3">
                    <el-submenu index="4">
                        <template slot="title">冷门景点</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                    </el-submenu>  
                    </el-col>
                        <el-col :span="3"><el-menu-item index="5" >排行榜</el-menu-item></el-col>
                        <el-col :span="3"> <el-menu-item index="6" >民宿推荐</el-menu-item></el-col>
                       
                         <el-col :span="1.5">
                             <el-menu-item index="7" >
                                <router-link to="#">登录</router-link>
                            </el-menu-item>
                         </el-col>
                          <el-col :span="1.5">
                             <el-menu-item index="7" >
                                 <router-link to="#">注册</router-link>
                            </el-menu-item>
                         </el-col>
                        
                  </el-menu>
            </el-row>
</template>
<style  scoped>
    #leader{
      font-size: 18px;
    }
    .el-row{
      background-color: rgb(127 138 149);
    }
   .el-col{
        text-align: center;
        padding-bottom:0px;
    }
     .el-col li{
        font-size:15px;
    }
    img{
        height:38px;
        width: 116px;
    }
    .el-menu-item:nth-child(1){
      font-size: 15px;
    }
    .el-menu-item>a{
        text-decoration:none;
        color:rgb(255, 255, 255);
    }
</style>
<script>
  export default {
    name:"Header",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>