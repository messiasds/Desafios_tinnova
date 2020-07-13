const veiculo_lista = {
    data: function(){
        return{
            titulo: "Listagem de veículos",
            veiculos_lista: [],

            // controle do select dinamico
            selected: 1,
            options_select:[
                { texto: 'mostrar todos', value: 1 },
                { texto: 'mostrar cadastrados na ultima semana', value: 2 },
                { texto: 'mostrar vendidos', value: 3},
                { texto: 'mostrar não vendidos', value: 4},

            ]
        }
    },

    methods:{

        teste(event){

            let opcao = event.target.value;
            switch(opcao){
                case '1':
                    this.mostrar_todos();
                    break;
                case '2':
                    this.mostrar_cadastrados_ultima_semana();
                    break;
                case '3':
                    this.mostrar_vendidos();
                    break;
                case '4':
                    this.mostrar_nao_vendidos();
                    break;
            }
            
        },

        mostrar_todos(){

            self = this;
            axios.get('http://localhost:8080/veiculos')
            .then(function (response) {
                console.log(response);
                self.veiculos_lista = response.data;
            })
            .catch(function (error) {
            console.log(error);
            })

        },

        mostrar_vendidos(){

            self = this;
            axios.get('http://localhost:8080/veiculos/find?by=Vendido')
            .then(function (response) {
                console.log(response);
                self.veiculos_lista = response.data;
            })
            .catch(function (error) {
            console.log(error);
            })

        },

        mostrar_nao_vendidos(){

            self = this;
            axios.get('http://localhost:8080/veiculos/find?by=naoVendido')
            .then(function (response) {
                console.log(response);
                self.veiculos_lista = response.data;
            })
            .catch(function (error) {
            console.log(error);
            })

        },

        mostrar_cadastrados_ultima_semana(){

            self = this;
            axios.get('http://localhost:8080/veiculos/find?by=ultimaSemana')
            .then(function (response) {
                console.log(response);
                self.veiculos_lista = response.data;
            })
            .catch(function (error) {
            console.log(error);
            })

        },

        remover:function(id){
            self = this;
            axios.delete('http://localhost:8080/veiculos/'+id)
            .then(function (response) {
                self.mostrar_todos();
            })
            .catch(function (error) {
            console.log(error);
            })   
        },

        editar:function(veiculo_id){
            // redireciona para o edit do veiculo
            this.$router.push({ path: `veiculo_edit/${veiculo_id}`})
        },

        ver_detalhes:function(veiculo_id){
            // redireciona para o detail do veiculo
            this.$router.push({path: `veiculo_detail/${veiculo_id}`})
        },
    },
    template: 
    `
    <div>
        <div class="row justify-content-center mb-5 h3"> {{ titulo }} </div>
        <div id=filtros>
            <div class="form-group"> 
                <select @change=teste id=selectFiltros v-model=selected 
                         class="form-control form-control-sm">
                    <option v-for='option in options_select' v-bind:value=option.value>
                        {{ option.texto }}
                    </option>
                </select>
            </div>
        </div>


        <ul id='lista_veiculo' class="list-group">
            <li v-for="item in veiculos_lista" :key ="item.id" 
               class="list-group-item d-flex justify-content-between align-items-center "> 
            {{ item.veiculo }}
            <div>
                <button @click="ver_detalhes(item.id)" class="btn btn-info btn-sm" > detalhes </button>
                <button @click="editar(item.id)" class="btn btn-primary btn-sm" > editar </button>
                <button @click="remover(item.id)" class="btn btn-danger btn-sm" > remover </button>
            </div>

            
            </li>
        </ul>
    <div>

    `,
    mounted() {
        self = this;
        axios.get('http://localhost:8080/veiculos')
        .then(function (response) {
            console.log(response);
            self.veiculos_lista = response.data;
        })
        .catch(function (error) {
        console.log(error);
        })

    }

}