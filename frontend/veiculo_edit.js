// formulario de edição veículo

const veiculo_edit = {
    data: function(){
        return{

            titulo:"Editar veículo",
            dados:
               {
                id:"",
                veiculo:"",
                marca:"",
                ano:"",
                descricao:"",
                vendido: false
            }     
        }
    },
    
    methods:{
        
        pegar_veiculo: function(){

            let id = this.$route.params.id
            self = this;

            axios.get('http://localhost:8080/veiculos/' + id)
            .then(function (response) {
                console.log(response);
                let resposta = response.data

                self.dados.id = resposta.id
                self.dados.veiculo = resposta.veiculo
                self.dados.marca = resposta.marca
                self.dados.ano = resposta.ano
                self.dados.descricao = resposta.descricao
                self.dados.vendido = resposta.vendido
            
            });
          
                
        },

        editar_veiculo: function(){
            
            self = this;
            let id = this.dados.id
            let teste = this.dados
            axios.put('http://localhost:8080/veiculos/' + id, teste)
            .then(function (response) {
                alert("Veiculo atualizado");
                
                self.$router.push("/veiculo_list")
            })
            .catch(function (error) {
                console.log(error)
            })
        }

    },

    mounted: function(){

        // preenche formulario com dados do veiculo
        this.pegar_veiculo();

    },

    template: `
    <div>
        <div class="row justify-content-center mb-5 h3"> {{ titulo }} </div>



            <form name=veiculo_form>
                <div class="form-group row">
                     Veiculo: <input type=text name=veiculo v-model="dados.veiculo">
                </div class="form-group row">

                <div class="form-group row">
                    Marca: <input type=text name=marca v-model="dados.marca">
                </div class="form-group row">

                <div class="form-group row">
                    Ano: <input type=text name=ano v-model="dados.ano" ><br>
                </div class="form-group row">

                <div class="form-group row">
                    Descrição: <input type=text name=descricao v-model="dados.descricao" ><br>
                </div class="form-group row">

                <div class="form-group row">
                    Vendido: <input type=checkbox name=vendido v-model="dados.vendido" ><br>
                </div class="form-group row">

                <div class="form-group row">
                    <input type=button value=atualizar @click="editar_veiculo" ><br>
                </div class="form-group row">
                
            </form>
    </div>

    `
}
