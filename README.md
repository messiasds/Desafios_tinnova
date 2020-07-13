#desafios tinova

Pasta exercicios contém os exercicos de programaçao básica


A pasta frontend contém um mini SPA em vue.js 

A pasta backend contém uma aplicação web feito com springBoot 

#Executando o projeto 

Baixar o projeto entrar

Entrar na pasta Desafios_Tinnova

## backend

Executar o backend usar o comando 

java -jar backend/target/web.jar

acessos das apis em 127.0.0.1:8080

## Lista de EndPoints REST

/veiculos - retorna todos


/veiculos/{id} - detalhes do veículo / remover veiculo / atualizar


/veiculos/find?by=vendidos - retorna todos os veiculos vendidos


/veiculos/find?by=naoVendidos - retorna todos os veiculos não vendidos


/veiculos/find?by=ultimaSemana - retorna todos os veiculos cadastrados na ultima semana


/veiculos/stats?by=marca - retorna a quantidade de veiculo por marca

/veiculos/stats?by=decada - retorna a quantidade de veiculo por decada



## frontend

cd frontend

python3 -m http.server

acessar 127.0.0.0:8000

