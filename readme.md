# S206 L1 Trabalho Pratico
Teste de APi com Karate

### 🔧 Instalação

#### Baixar dependencia do projeto.

```
npm install -g json-server
```
para mais informações da biblioteca entre em https://github.com/typicode/json-server

### ⚙️ Inicializando o Teste Karate
Abra o terminal dentro do projeto e execute o comando 

```
json-server --watch db.json
``` 

Abra outro terminal e execute 

```
cd ./trabalhoPratico_inatel
``` 
```
mvn test -Dtest=CenariosRunner
``` 