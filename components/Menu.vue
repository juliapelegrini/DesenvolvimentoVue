<template>
    <div>
        <b-navbar class="fundoMenu" toggleable="lg" type="light" variant="light">
            <b-container>
                <b-navbar-brand href="#">
                    <img src="../../../assets/img/logo.png" class="img-fluid">
                </b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item href="#" >HOME	</b-nav-item>
                        <b-nav-item href="#" >FUNCIONALIDADES	</b-nav-item>
                        <b-nav-item href="#" >PARA QUEM?	</b-nav-item>
                        <b-nav-item href="#" >DIFERENCIAL	</b-nav-item>
                        <b-nav-item href="#" >PLANOS </b-nav-item>
                        <b-nav-item href="#" >CONTATO	</b-nav-item>
                        <b-nav-item href="#"><img src="../../../assets/img/facebook-square.png">	</b-nav-item>
                        <b-nav-item href="#"><img src="../../../assets/img/instagram.png">	</b-nav-item>
                    </b-navbar-nav>			
                </b-collapse>
            </b-container>            
        </b-navbar>
    </div>
</template>


<script>
export default{ 
    
    
}

</script>

<style>
.fundoMenu{
    z-index:999;
    width:100%;
    position:fixed;
}
.nav-item{
    padding-left:25px;
}
.navbar-light .navbar-nav .nav-link{
    color:#000000;
    font-size: 14px;
    font-family: Roboto;
}
.navbar-light .navbar-nav .nav-link:hover{
    color:#006837;
    font-size: 14px;
    font-family: Roboto;
}
@media screen and (max-width:465px){
    .nav-item{
        padding-left:0px;
    }
}
</style>
