<template>
    <div class="bg">
        <p class="tituloDepoimentos"> {{confiam.name}} </p>
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" id="descricaoDepoimentos" v-html="confiam.text1"> </div>
            </div>
            
            <Slider :depo="confiam"/>
            <div id="planos"></div>   
        </div>              
    </div>
</template>


<script>
import Slider from "~/components/Slider.vue"
export default{ 
    components:{
        Slider
    },
    data:function(){
        return{
            confiam:[],
            
        }
    },
    async fetch(){
        this.confiam = await this.$axios.$get('/api/v1/cms/?page_id=12&categories_content=true').then((res)=>{
            return res.data
        })
       
    }
    
}

</script>

<style>
.bg{
    height: 700px;
}
.fundo{
    width: auto;
    height: auto;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    opacity: 1;
    padding: 20px;  
    box-shadow: -63px 79px 12px -70px rgba(0,0,0,0.25);
    padding: 30px;
}
.tituloDepoimentos{
    text-align: center;
    font-size:40px;
    font-family: RalewayBold;
    letter-spacing: 0px;
    color: #006837;
    opacity: 1;
}
#descricaoDepoimentos{
    margin-bottom: 50px;
    text-align: center;
    font-size: 16px;
    font-family: OpenSans;
    letter-spacing: 0px;
    color: #161616;
    opacity: 0.6;
    width: 100%;
}
.depoimento{
    font-size:14px;
    font-family: OpenSans;
    text-align: left;
    letter-spacing: 0px;
    color: #101010;
    opacity: 0.5;
    
}
.nome{
    text-align: left;
    letter-spacing: 0px;
    color: #101010;
    font-size:18px;
    font-family: Roboto;
    opacity: 1;
    margin-top: 10px;
    margin-bottom: 5px;
}
.nomeEmpresa{
    text-align: left;
    letter-spacing: 0px;
    color: #727272;
    opacity: 1;
    font-size: 14px;
    font-family: OpenSans;
    margin-bottom: 20px;
}
.espacamento{
    margin-left:80px;
    
    
}
.imagemDepoimento img{
    border: 20px;
    border-radius: 100px;
    border-color: #006837;
}
.fotoDono{
    height:130px;
    width:130px;
    margin-top: 30px;
    border-radius: 100%;
    border-color: #ABBC36;
    border-width:8px;
    border-style: solid;
    
}
#dono1{
    background-color: #f5f5f5;
    background-image: url('../../../assets/img/bg.png');
}
#dono2{ 
    background-image: url('../../../assets/img/bg-2.png');
}
#dono3{
    background-image: url('../../../assets/img/bg-1.png');
}

@media screen and (max-width:375px){
    
    .depoimento{
        margin-left: 20px;
    }
    .nome{
        margin-left: 20px;
    }
    .nomeEmpresa{
        margin-left: 20px;
    }
    .fotoDono{
        margin-left: 20px;
        margin-bottom: 20px;
    }
    .espacamento{
        margin-left:0px;
    }
}
@media screen and (max-width:465px){
    .bg{
        height: auto;
        padding-bottom: 100px;
    }
    .espacamento{
        margin-left:0px;
    }
}
@media screen and (min-width:465px) and (max-width:768px){
    .espacamento{
        padding-left:50px;
    }
    .bg{
        height: auto;
        padding-bottom: 100px;
    }
}


@media screen and (min-width:768px) and (max-width: 1024px){
    .espacamento{
        margin-left:0px;
    }
    .bg{
        height: auto;
    }
}

</style>
