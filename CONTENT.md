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


### 04 Client-server architecture. Server
Server - central computer or program that provides services, resources or data to clients via network.

Server functions:
- Providing resources
- Business logic
- Authentication and authorization
- Resource management

Servers:
- Physical
- Cloud

Types of architecture:
- 1-tier (centralized)
- 2-tier
- 3-tier
- N-tier


### Architecture styles of Web Applications
Architecture:
- Monolithic
- Micro-services

Monolithic architecture - all components work within one process or service.

Monolithic apps:
- Single process monolith
- Distributed monolith
- 3rd-party (black-box system)

Testing peculiarities for monolithic:
- Big number of dependencies
- Regression testing
- Big impact and defect inheritance
- Low possibility for parallel testing

Microservice architecture - is a style where program is divided on separate processes.

Testing peculiarities for microservices:
- Difficulties with integration
- Infrastructure setup difficulties
- Difficult to perform E2E testing
- Debugging
- Version compatibility

https://www.atlassian.com/microservices/microservices-architecture/microservices-vs-monolith    Microservices vs. monolithic architecture  
https://aws.amazon.com/ru/compare/the-difference-between-monolithic-and-microservices-architecture/    В чем разница между монолитной архитектурой и архитектурой микросервисов?  
https://www.geeksforgeeks.org/software-engineering/monolithic-vs-microservices-architecture/    Monolithic Vs Microservices Architecture


### 06 Intro to HTTP protocol
HTTP versions:
- 1.0 - 1996 - obsolete
- 1.1 - 1997 - current
- 2.0 - 2015 - current
- 3.0 - 2022 - current

Connection to HTTP-server
- DNS
- TCP connection
- TLS/SSL connection

Connection:
1. Put request to queue
2. DNS lookup
3. TCP connection (3 stage handshake)
4. Sending request
5. Waiting for response
6. Getting data

HTTP principles:
- Simple
- Extensible
- Stateless but not sessionless
- TCP is used for connections

https://mxtoolbox.com/SuperTool.aspx?action=a%3aqauto.forstudy.space%2f&run=toolpage#    DNS tool  
https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview    Overview of HTTP  


### 07 Start-line and its structure
HTTP message:
- Start line
  - Method
  - URI
  - Status code
- Headers
  - General
  - Request
  - Response
  - Fetch metadata
  - Representation
- Body
  - Request
  - Response

Start line for request:
```
Method Request-URI HTP-version
GET /index.html HTTP/1.1
```

Start line for response:
```
HTTP-version Status-code Reason-phrase 
HTTP/1.1 200 OK
```

HTTP methods:
- POST
- GET
- PUT
- DELETE
- PATCH
- HEAD
- OPTIONS

HTTP Status Codes:
- Information
- Success
- Redirection
- Client Error
- Server Error


### 08 HTTP headers
Headers:
- General
- Request
- Response
- Representation
- Fetch metadata request headers

https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers     HTTP headers  
https://blog.postman.com/what-are-http-headers/    What are HTTP headers? Request and Response Metadata Guide  


### 09 HTTP body
Body types:
- Text
- XML
- JSON
- Form Data
- Images, Video, Audio, etc.


### 10 Encryption process.HTTP vs HTTPS
HTTPS vs HTTP:
- Encryption
- Security certificates
- Ports (443 vs 80)
- SEO and Google rating

Encryption:
- Symmetrical - the same key for encryption and decryption
- Asymmetrical - public key for encryption, private key for decryption

Certificates goal:
- Authentication
- Encryption
- Digital signs
- Trust

SSL (Secure Socket Layer)  
TLS (Transport Layer Security)  

Encryption process:
1. Handshake:
Browser sends request for secure connection to server.
Server sends public key and certificate.

2. Certificate check:
Browser checks certificate

3. Common key generation:
Browser creates random symetrical key (common secert key).
It encrypts this key using server public key and sends back to server.

4. Key decryption and session key creation:
Server uses private key to decrypt common secret key
Browser and server now have common secret key.

5. Secure data transmission:
It is performed using common secret key.

https://www.welivesecurity.com/2018/09/03/majority-worlds-top-websites-https/    Majority of the world’s top million websites now use HTTPS  
http://httpforever.com/    HTTP Forever (A reliably insecure connection)  
https://10015.io/tools/md5-encrypt-decrypt    MD5 Encrypt/Decrypt  


### 11 Introduction to REST architecture
REST - Representational State Transfer - it is architecture style

Principles:
- Client server architecture
- Multilayer (client layer, business logic, DB access)
- Stateless
  - Request independence
  - Authorization
  - Caching
  - Parametrization
- Uniform interface (HTTP method + resource name)
- Cacheable (client/server)
- Code on demand

RESTful Web-services:
- Using correct HTTP methods
- Using correct URLs
- Using correct status codes
- API versioning
- Using authorization tokens
- Informative error processing
- Caching (client, server, DB)
- Documentation (OpenAPI, Swagger)

https://restfulapi.net/    REST API Tutorial  
https://www.geeksforgeeks.org/javascript/rest-api-architectural-constraints/    REST API Architectural Constraints  


### 12 API testing tools and frameworks
OpenAPI specification  
OpenAPI definition - JSON or YAML document that contains OpenAPI specification and describe API:
- resources
- operations
- parameters
- data schemes
- headers

Swagger is a tool set for development, documentation and testing API.

Tools for API testing:
- cURL
- POSTMAN
- SoapUI
- ReadyAPI
- Insomnia
- Jmeter
- Apigee
- Katalon Studio
- Karate DSL
- API Fortress

Frameworks and libraries for API testing

Java stack:
- Rest-assured
- TestNG
- Log4j
- Gson
- Allure

JavaScript stack:
- Axios
- Jest
- chai/mocha
- jest-html-reporters
- Playwright

How to select tool:
- Support different formats of Web API
- Complexity
- CI/CD integration
- Scalability
- Simplicity
- Price

https://swagger.io/docs/    Swagger documentation  
https://katalon.com/resources-center/blog/top-5-free-api-testing-tools#h6    15 Best Automated API Testing Tools (Compared for 2026)  
https://nordicapis.com/whats-the-difference-between-swagger-and-openapi/    What’s the Difference Between Swagger and OpenAPI?  
