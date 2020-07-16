

const home = {
    data: function(){
        return {
            mensagem: "Desafio :D"
        }
    },
    template: "<div><h5> {{ mensagem }}</h5></div>"
}


const routes = [
    { path: '/', component: home },
    { path: '/veiculo_list', component: veiculo_lista },
    { path: '/veiculo_form', component: veiculo_form },
    { path: '/veiculo_detail/:id', component: veiculo_detail},
    { path: '/veiculo_edit/:id', component: veiculo_edit },
    { path: '/veiculo_stats', component: veiculo_stats}
];


const router = new VueRouter({
    routes
});

const app = new Vue({
    el:'#app',
    template: `
    
    <div>
    <body>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul class="navbar-nav"> 
                <li class="nav-item" ><router-link to="/" class="nav-link"> Home </router-link></li>
                <li class="nav-item" ><router-link to="/veiculo_list" class="nav-link"> Listar veiculos </router-link></li>
                <li class="nav-item" ><router-link to="/veiculo_form" class="nav-link"> Cadastrar veiculo </router-link></li>
                <li class="nav-item" ><router-link to="/veiculo_stats" class="nav-link"> Stats </router-link></li>
            </ul>
        </nav>
        <div class=container>
            <div class="row justify-content-center">
                <div class="mt-5">
                <router-view></router-view>
                </div>
            </div>
        </div>
    </body>
        
    </div>
        `,
        data:{
            titulo:"Desafio Tinnova SPA"
        },
        router

})