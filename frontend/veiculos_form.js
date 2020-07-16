// formulario criação veículo

const veiculo_form ={
    data: function(){
        return{

            titulo:"Cadastrar veículo",
            dados:
               {
                veiculo:"",
                marca:"",
                ano:"",
                descricao:"",
                vendido: false
            }     
        }
    },
    
    methods:{
        
        cadastrar_veiculo: function(){
            self = this;
            axios.post('http://localhost:8080/veiculos', 
                this.dados)
              .then(function (response) {
                console.log(response);
                alert("Veículo cadastrado");
                let id = response.data.id
                self.$router.push({path: `/veiculo_detail/${id}`})
                  
              })
              .catch(function (error) {
                console.log(error);
              });
            
        },

        editar_veiculo: function(id){
            axios.put('http://localhost:8080/veiculos/' + id,
            this.dados)
            .then(function (response) {
                console.log(response);
                alert("Veiculo atualizado");
            })
            .catch(function (error) {
                console.log(error)
            });
            
        }




    },

    mounted(){

    },

    template: 
    `
    <div>
        <div class="row justify-content-center mb-5 h3"> {{ titulo }} </div>


            <form name=veiculo_form>
                <div class="form-group">
                Veiculo: <input type=text name=veiculo v-model="dados.veiculo">
                </div class="form-group">

                <div class="form-group">
                Marca: <input type=text name=marca v-model="dados.marca">
                </div class="form-group">

                <div class="form-group">
                Ano: <input type=text name=ano v-model="dados.ano" >
                </div class="form-group">

                <div class="form-group">
                Descrição: <input type=text name=descricao v-model="dados.descricao" >
                </div class="form-group">

                <div class="form-group">
                Vendido: <input type=checkbox name=vendido v-model="dados.vendido" >
                </div class="form-group">

                <div class="form-group">
                <input type=button value=Salvar @click="cadastrar_veiculo"  class="btn-primary">
                </div class="form-group">
            </form>
    </div>

    `
}
