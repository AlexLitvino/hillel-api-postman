# API Tester & Postman Advanced

## Theory of API testing

### 01 Intro to API (part 1)
API (Application Programming Interface) - set of rules, protocols and tools, that allow programs to interact with each other.
API specifies what functions, methods and parameters are accessible for usage and how they should interact.

API:
- API of Web services
- API of OS
- API of DB
- API of mobile platforms

API by access:
- Internal
- Partner
- Public

Web API styles:
- REST (Representational State Transfer): uses standard HTTP-methods (GET, POST, PUT, DELETE) and uses URL identified resources.
- SOAP (Simple Object Access Protocol): SOAP is a protocol of message interaction. In SOAP messages are coded in XML and send via HTTP or other protocols.
- GraphQL: GraphQL - is query language and environment for executing Web-API. It allows to ask only needed data.
- JSON-RPC and XML-RPC
- gRPC: It is build based on HTTP/2 and uses Protobuf (Protocol Buffers) for data serialization.

API testing requires special tools:
- curl
- Postman
- SoapUI
- Swagger
- Jmeter
- RestAssured

https://blog.postman.com/different-types-of-apis/    Types of APIs: A Complete Guide to API Architectures  
https://aws.amazon.com/ru/what-is/api/    Что такое интерфейс прикладного программирования (API)?


### 02 Intro to API (part 2)
API testing goals:
- Increasing testing effectiveness
- More extensive testing
- Decreasing cost
- Running tests that are impossible to run manually
- Speed up test run
- Increasing testing frequency/decreasing time to test cycle

API testing objects:
- Subsystems
- Interfaces
- Microservices

API testing types:
- Functional testing
- Performance testing (Load/Stress/Endurance/Volume/Spike/Scalability)
- Security testing (Authentication and Authorization/Session management/Input validation/Encryption)
- Error code and message testing
- Compliance testing

#### STLC
Requirements analysis:
- Requirements (User stories, PRD, SRS, use cases)
- Diagrams
- API documentation (Swagger, GraphQl UI)

Test planning:
- Testing strategy
- Environments
- Resources
- Defining volume of testing

Test case development:
- Test scenarios creation
- Defining input data
- Defining expected results

Environment setup:
- HW setup
- SW setup
- Environment configuration
- Uploading test data

Test execution:
- Test scenarios execution
- Recording results
- Defect documentation and tracking

Test cycle closure:
- Test results assessment
- Reporting
- Test process analysis
- Changes introduction

Advantages:
- More tests
- Test that can't be run manually
- Independence from GUI
- Faster
- More effective

Disadvantages:
- Additional expenses
- Additional technologies
- Time for new tests development
- Tests support


## Web applications development

### 03 Client-server architecture. Client
Client - who makes requests

Web Apps:
- HTML
- CSS
- JavaScript

Clients:
- Thin
- Thick

https://www.geeksforgeeks.org/system-design/client-server-model/    Client-Server Model  
https://www.simplilearn.com/what-is-client-server-architecture-article#:~:text=In%20the%20IT%20context%2C%20the,access%20to%20data%20and%20services    What is Client-Server Architecture? Everything You Should Know  
https://www.theknowledgeacademy.com/blog/client-server-architecture/    What is Client-Server Architecture? Explained in Detail  
