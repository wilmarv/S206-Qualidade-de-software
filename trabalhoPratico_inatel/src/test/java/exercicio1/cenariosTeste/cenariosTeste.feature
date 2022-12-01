Feature: testes ultilizando karate e json server para emular uma api
  Leia os reamd para mais detalhes

  Background:
    * url 'http://localhost:3000/'
    * def novoAlquimista = {id:4,nome: "Isaac McDougal",alcunha:"Alquimista de Gelo" }

  Scenario: Testando o numero de personagem da lista seja igual a 4
    Given path "person"
    When method get
    Then status 200
    And match response == "#[4]"

  Scenario: Testando a busca do Alquimista Das Chamas
    Given path "person?alcunha=Alquimista%20das%20Chamas"
    When method get
    Then status 200
    And match response[0].alcunha == "Alquimista das Chamas"

  Scenario: Teste Negativo a busca o alquimista que não existe NA LISTA
    Given path "person?alcunha=Alquimista%20de%20Gelo"
    When method get
    Then status 200
    And match response == []

  Scenario: Teste Adicionando um person na lista
    Given path "person"
    And request novoAlquimista
    When method post
    Then status 201
    * print response

  Scenario: Teste deletando o ultimo alquimista
    Given path "person/4"
    When method DELETE
    Then status 200

  
  Scenario: Teste Negativo buscando pelo sexto alquimista
    Given path "person/4"
    When method get
    Then status 404

    

  