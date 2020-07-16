// Detalhes do veículo

const veiculo_detail ={
    data: function(){
        return{
            titulo:"Detalhes do veículo",
            veiculo:"",
            marca:"",
            ano:"",
            descricao:"",
            vendido:""
        }
    },

    methods:{
        get_veiculo:function(){
            self = this;
            
            //retorna o ID passado pelo router-url
            let id = this.$route.params.id
            
            axios.get('http://localhost:8080/veiculos/'+id)
            .then(function (response) {
                console.log(response);
                let dados = response.data
        
                self.veiculo = dados.veiculo
                self.marca = dados.marca
                self.ano = dados.ano
                self.descricao = dados.descricao
                self.vendido = dados.vendido
                
            })
            .catch(function (error) {
            console.log(error);
            })
        }
    },

    mounted(){
        this.get_veiculo();
    },

    template: 
    `
    <div>
        <div class="row justify-content-center mb-5 h3"> {{ titulo }} </div>

                Veiculo: {{ veiculo }} <br>
                Marca: {{ marca }} <br>
                Ano: {{ ano }} <br>
                Descrição: {{ descricao }} <br>
                Vendido: <input type=checkbox v-model=vendido> <br>
                
    </div>

    `
}
