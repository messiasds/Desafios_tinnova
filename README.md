# Desafios Tinnova

Pasta exercicios contém os exercicos de programação básica


A pasta frontend contém um mini SPA em vue.js, sem webpack  

A pasta backend contém uma aplicação web, feita com springBoot com banco de dados H2 

# Executando o projeto 

Baixar o projeto entrar

Entrar na pasta Desafios_Tinnova

## backend

Executar o backend usar os comandos: 

Para compilar o JAR

**./mvnw clean & ./mvnw package**

Para executar o JAR
**java -jar backend/target/*.jar**

**Endereço do backend 127.0.0.1:8080**

## Lista de EndPoints REST

**/veiculos** - retorna todos


**/veiculos/{id}** - GET - detalhes do veículo 


**/veiculos/{id}** - PUT - editar  veículo


**/veiculos/{id}** - DELETE - deletar veículo


**/veiculos/find?by=Vendido** - retorna todos os veiculos vendidos


**/veiculos/find?by=naoVendido** - retorna todos os veiculos não vendidos


**/veiculos/find?by=ultimaSemana** - retorna todos os veiculos cadastrados na ultima semana


**/veiculos/stats?by=marca** - retorna a quantidade de veiculo por marca

**/veiculos/stats?by=decada** - retorna a quantidade de veiculo por decada



## frontend

Para executar o frontend foi utilizado o módulo SimpleServer nativo do python3

comandos para executar o projeto: 


**cd frontend**

**python3 -m http.server**

**acessar 127.0.0.0:8000**

