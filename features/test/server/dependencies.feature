Feature: Server dependencies

  Scenario: A person wants to run a server
    Given the server has dependencies
      And the server colors dependency is installed
      And the server express dependency is installed
      And the server bodyParser dependency is installed
      And the server morgan dependency is installed
      And the server _ dependency is installed
      And the server cucumber dependency is installed
      And the server chai dependency is installed
      And the server neo4j dependency is installed
      And the server socketIo dependency is installed
      And the server puppeteer dependency is installed