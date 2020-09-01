<template>
    <div class="publico">
        <div class="container textosPublico">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <p class="tituloPublico"> {{paraquem.name}}</p>      
                    <div class="col-12 descricaoPublico" v-html="paraquem.text1"> </div>              
                    <div class="card-deck">
                        <div class="card" v-for="item in paraquem.category1.list" :key="item.id">
                            <div class="rounded mx-auto d-block imagemCard"  :style="{ backgroundImage: `url(${item.image1})`}"></div>
                            <div class="card-body" id="cardMaior">
                                <h5 class="card-title">{{item.name}}</h5>
                                <div class="card-text" v-html="item.text1"></div>
                            </div>
                        </div>
                        
                    </div>         
                </div>                          
            </div>
        </div>
        <div id="diferencial"></div>
    </div>  
</template>
    

<script>
export default{ 
    data: function(){
        return{
            paraquem:[],
            
        }
    },
    async fetch(){
        this.paraquem = await this.$axios.$get('/api/v1/cms/?page_id=10&categories_content=true').then((res)=>{
            return res.data
        })
       
    }
    
}

</script>

<style>
#cardMaior{
    height:250px;
}
.publico{
    position: relative;
    height:auto;
    background: url('../../../assets/img/courier-delivering-parcel-to-young-woman-with-face-LQCYNQS.png') no-repeat ;
    background-size: cover;
}
.publico::after{
    position: absolute;
    width: 100%;
    height:100%;
    top:0;
    left: 0;
    content: '';
    background: transparent linear-gradient(90deg, #ACBC36 0%, #2BA583 100%) 0% 0% no-repeat padding-box;
    opacity: 0.83;
}
.textosPublico{
    position: relative;
    z-index:1;
}
.tituloPublico{
    margin-top: 60px;    
    text-align: center;
    font-size: 40px;
    font-family: RalewayBold;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
}
.descricaoPublico{
    text-align: center;
    font-size: 16px;
    font-size: OpenSans;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
}
.card-deck{
    margin-top: 130px;
}
.card-title{
    margin-top: 5px;
    font-size: 26px;
    text-align: center;
}
.card-text{
    font-size: 16px;
    color: #727272;
    text-align: center;
    padding-bottom: 50px;
}
.imagemCard{
    height:180px;
    width:180px;
    margin-top: -90px;
    background-repeat: no-repeat;
    background-size: 100%;
    
}

@media screen and (max-width:375px){
    .card-deck{
        margin-top: 80px;
    }

}
@media screen and (max-width:465px){
    .card-deck{
        margin-top: 60px;
    }
    .card{
        margin-top: 110px;
    }
       
}
@media screen and (min-width:465px) and (max-width:768px){
    
}
@media screen and (min-width: 992px) {
   

    
}

@media screen and (min-width:768px) and (max-width: 1024px){
    
}
@media screen and (min-width:1440px){
    
}

</style>
