Feature: Testando API StarWars.

Background: Executa antes de cada teste
    * def url_base = "https://swapi.dev/api"
    
Scenario: Testando retorno people/1/
        Given url "https://swapi.dev/api/people/1/"
        When method get
        Then status 200
Scenario: Testando retorno people/1/ com informações inválidas.
        Given url "https://swapi.dev/api/people/1/1234"
        When method get
        Then status 404

Scenario: Testando retorno Luke Skywalker e verificando o JSON.
    Given url url_base 
    And path "/people/1"
    When method get
    Then status 200
    And match response.name == "Luke Skywalker"
    And match response.height == "172"

Scenario: Testando retorno films entrando em um dos elemntos do array de films e testando retorno Json
    Given url url_base 
    And path "/people/1"
    When method get
    Then status 200
    And def film = $.films[0]
    And url film
    When method get
    Then status 200
    And match $.title == "A New Hope"
    And match $.episode_id == 4