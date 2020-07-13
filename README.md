# Desafios tinova

Pasta exercicios contém os exercicos de programaçao básica


A pasta frontend contém um mini SPA em vue.js 

A pasta backend contém uma aplicação web feito com springBoot 

# Executando o projeto 

Baixar o projeto entrar

Entrar na pasta Desafios_Tinnova

## backend

Executar o backend usar os comandos: 

Para compilar o JAR
./mvnw clean & ./mvnw package

Para executar o JAR
java -jar backend/target/*.jar

acessos das APIS em 127.0.0.1:8080

## Lista de EndPoints REST

/veiculos - retorna todos


/veiculos/{id} - detalhes do veículo / remover veiculo / atualizar


/veiculos/find?by=vendidos - retorna todos os veiculos vendidos


/veiculos/find?by=naoVendidos - retorna todos os veiculos não vendidos


/veiculos/find?by=ultimaSemana - retorna todos os veiculos cadastrados na ultima semana


/veiculos/stats?by=marca - retorna a quantidade de veiculo por marca

/veiculos/stats?by=decada - retorna a quantidade de veiculo por decada



## frontend

Para executar o frontend foi utilizado o SimpleServer nativo do python3

cd frontend

python3 -m http.server

acessar 127.0.0.0:8000

