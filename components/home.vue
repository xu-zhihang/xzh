<template>
    <div>
        <!-- 轮播图区域 -->
        <lunbotu :list="list"></lunbotu>
        
        <h1>首页</h1>  
    </div>    
</template>

<script> 
import lunbotu from '../views/lunbotu.vue' 
export default{
    data(){
        return {
            list:[]
        }
    },
    created(){
        this.getlunbotu();
    },
    methods:{
        getlunbotu(){
            this.$http.get('http://47.102.142.80:8080/qzzp/dzsj.do').then(result=>{
               
                for(let data of result.body){
                    let doc={}
                    doc.id=data.r_id
                    doc.name=data.f_name
                    doc.url="http://47.102.142.80:8080"+data.f_logourl
                    this.list.push(doc)
                }
                 
                console.log( this.list)
            })
            
        } 
    },
    components:{
        lunbotu
    }
   
}
</script>

<style scoped>
    
</style>
