Feature: Testes de API ultilzando karate
  site para teste https://pokeapi.co

  Background:
    * url "https://gorest.co.in/"

  Scenario: Test verificando tipo retornado eh um array de usuarios 
    Given path "public/v2/users"
    When method get
    Then status 200
    And match response == "#[]"

  Scenario: Teste negativo retorno de um usuario 33 não existente deve ser uma msg de erro
    Given path "public/v2/users/33"
    When method get
    Then status 404
    And match response.message == "Resource not found"

  
  Scenario: Busca pelo comentario usuario 4171 cdeve retornar um array com o primeiro 
    comentario com titulo especifico
    * def title = "Cur comitatus angustus suscipio comes sustineo ager avaritia fuga cometes." 

    Given path "public/v2/posts?user_id=4171"
    When method get
    Then status 200
    And match response[0].title == title
   
  Scenario: Teste Negativo deve retornar msg de erro de falha na autenticacao
    * def user = 
    """
      {
        "name": "Wilmar Nome SobreNome",
        "email": "Wilmar@Email.com",
        "gender": "male",
        "status": "inactive"
      }
      """
    Given path "public/v2/users" 
    And request user
    When method post
    Then status 401
    And response.message == "Authentication failed"

  Scenario: Teste retorno deve conter uma array list com 10 elementos
    Given path "public/v2/todos"
    When method get
    Then status 200
    And match response == "#[10]"
