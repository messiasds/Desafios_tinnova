
const veiculo_stats = {

    data:function(){
        return {
            titulo: "Estatísticas sobre os veículos",
            lista_marca:[],
            lista_decada:[]
        }
    },

    methods:{

        fazer_requisicao(url){

            axios.get(url)
            .then(function (response) {
                console.log(response.data);
                return response.data
            })
            .catch(function (error) {
            console.log(error);
            })
        },


        pegar_dados_marca() {

            self = this;

            let url = 'http://localhost:8080/veiculos/stats?by=marca';
            axios.get(url)
            .then(function (response) {
                console.log(response.data)
                self.lista_marca = response.data
            })
            .catch(function (error) {
            console.log(error);
            })
        },
            

        pegar_dados_decada(){

            self = this;
            let url = 'http://localhost:8080/veiculos/stats?by=decada';

            axios.get(url)
            .then(function (response) {
                console.log(response.data)
                self.lista_decada = response.data
            })
            .catch(function (error) {
            console.log(error);
            })
        }
            
    },

        
    mounted(){

        this.pegar_dados_decada();
        this.pegar_dados_marca();

    },
    
    template : 
    `
    <div>
        <div class="h3 mb-5"> {{ titulo }} </div>
        
        <div class=".h4 mb-1"> Quantidade de veículos por década </div>
        <ul>
            <li v-for="item in lista_decada" >
            <div> {{ item.decada }} [ {{ item.qtd }} ] cadastro(s) </div>
            </li>
        </ul>

        <div class=".h4 mb-1"> Quantidade de veículos por marca </div>
        <ul>
            <li v-for="item in lista_marca" >
            <div> {{ item.marca }} [ {{ item.qtd }} ] cadastro(s) </div>
            
            </li>
        </ul> 

    </div>
    
    `

}