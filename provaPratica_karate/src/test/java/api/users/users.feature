Feature: Testes de API ultilzando karate
  site para teste https://pokeapi.co

  Background:
    * url "https://gorest.co.in/"

  Scenario: Test verificando tipo retornado eh um array de usuarios 
    Given path "public/v2/users"
    When method get
    Then status 200
    And response == "#[]"

    * print response

   


  