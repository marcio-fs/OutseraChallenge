Feature: Registro de Usuário
  Como um novo usuário
  Eu quero me registrar no site
  Para acessar recursos exclusivos

  @regression
  Scenario: Registro bem-sucedido de novo usuário
    Given Eu estou na página de login
    When Eu preencho os detalhes de registro com nome e email válidos
    And Eu preencho todas as informações obrigatórias
    And Eu clico em "Create Account"
    Then Eu vejo a mensagem "Account Created!'"
    And Eu sou redirecionado para a página inicial logado
    And Eu vejo "Logged in as" no menu