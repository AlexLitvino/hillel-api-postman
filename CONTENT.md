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


## First requests. cURL

### 13 Introduction to qauto app
Environment 1  
https://qauto.forstudy.space/    Web app (login:guest, password:welcome2qauto)  
https://qauto.forstudy.space/api-logs    Logs. Could be viewed only after user registration  
https://qauto.forstudy.space/api-docs/    Api docs for hillel-qauto project

Environment2  
https://qauto2.forstudy.space/    Web app (login:guest, password:welcome2qauto)  
https://qauto2.forstudy.space/api-logs     Logs. Could be viewed only after user registration  
https://qauto2.forstudy.space/api-docs/    Api docs for hillel-qauto project


### 14 cURL
cURL (Client URL) supports many protocols (HTTP, HTTPS, FTP, FTPS, SCP, SFTP, TFTP, DICT, TELNET, LDAP, FILE, IMAP, SMTP, POP3).  

```shell
curl https://guest:welcome2qauto@qauto.forstudy.space
```

```shell
curl -i -X POST -H "Content-Type: application/json" -d "{\"name\": \"John\", \"lastName\": \"Dou\", \"email\": \"testfgf53631@test.com\", \"password\": \"Qwerty12345\", \"repeatPassword\": \"Qwerty12345\"}" https://qauto.forstudy.space/api/auth/signup

HTTP/1.1 201 Created
Server: nginx
Date: Sat, 05 Sep 2026 10:27:24 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 113
Connection: keep-alive
X-Powered-By: Express
Vary: Origin
Access-Control-Allow-Credentials: true
ETag: W/"71-Lb6f5VtWkLltC1juugvPKEfUI40"
Set-Cookie: sid=s%3Ai687y-xDlxGwYbOtl4fhdlaGX-U0KOMC.ZiPIQMlLER1c56lRi8XkZRVh9fgvCKXymxKykP1Zak4; Domain=.forstudy.space; Path=/; Expires=Sun, 06 Sep 2026 10:27:24 GMT

{"status":"ok","data":{"userId":395925,"photoFilename":"default-user.png","distanceUnits":"km","currency":"usd"}}
```
-i - output headers and content  
-X - request method  
-H - adds header to request  
-d - body  

```shell
curl -b"sid=s%3Ai687y-xDlxGwYbOtl4fhdlaGX-U0KOMC.ZiPIQMlLER1c56lRi8XkZRVh9fgvCKXymxKykP1Zak4" https://qauto.forstudy.space/api/users/profile

{"status":"ok","data":{"userId":395925,"photoFilename":"default-user.png","name":"John","lastName":"Dou"}}
```

-b - set cookie  

```shell
curl -X PUT -H "Content-Type: application/json" -b"sid=s%3Ai687y-xDlxGwYbOtl4fhdlaGX-U0KOMC.ZiPIQMlLER1c56lRi8XkZRVh9fgvCKXymxKykP1Zak4" -d "{ \"photo\": \"user-1621352948859.jpg\", \"name\": \"John\", \"lastName\": \"Dou\", \"dateBirth\": \"2021-03-17T15:21:05.000Z\", \"country\": \"Ukraine\" }" https://qauto.forstudy.space/api/users/profile

{"status":"ok","data":{"userId":395925,"photoFilename":"default-user.png","name":"John","lastName":"Dou","dateBirth":"2021-03-17T15:21:05.000Z","country":"Ukraine"}}
```

```shell
curl -i -X DELETE -H "Content-Type: application/json" -b"sid=s%3Ai687y-xDlxGwYbOtl4fhdlaGX-U0KOMC.ZiPIQMlLER1c56lRi8XkZRVh9fgvCKXymxKykP1Zak4"  https://qauto.forstudy.space/api/users

HTTP/1.1 200 OK
Server: nginx
Date: Sat, 05 Sep 2026 10:36:04 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 15
Connection: keep-alive
X-Powered-By: Express
Vary: Origin
Access-Control-Allow-Credentials: true
Set-Cookie: remember_me=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT
Set-Cookie: sid=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT
ETag: W/"f-VaSQ4oDUiZblZNAEkkN+sX+q3Sg"

{"status":"ok"}
```

Options:  
--verbose - additional information  
--trace FILE_NAME - hexdump of all incoming and outgoing data (including headers, traffic, and connection details) for a specific curl transfer.
-o FILE_NAME - save output to file  
--retry NUMBER - if error, retry request up to NUMBER times  
--retry-connrefused - retry even when connection refused  
--retry-delay - set delay between retries  
-T FILE_NAME - upload file to server  

Running commands from file

Create file script.sh
```text
#!/bin/bash

curl --verbose <https://guest:welcome2qauto@qauto.forstudy.space/>
curl --verbose <https://another-example.com>
```

Give it permission for execution
```shell
chmod +x script.sh
```

Run file
```shell
./script.sh
```

https://curl.se/download.html    cURL Releases and Downloads  
https://curl.se/    command line tool and library for transferring data with URLs  
https://idratherbewriting.com/learnapidoc/docapis_install_curl.html#install-curl-on-windows    curl intro and installation  
https://youtu.be/V5vZWHP-RqU    Mastering cURL with Daniel Stenberg  
https://youtu.be/I6id1Y0YuNk    Using cURL better  


## POSTMAN basic level

### 15 Introduction to Postman
https://www.postman.com/product/    Postman
https://www.postman.com/pricing/    Postman pricing  
https://www.postman.com/downloads/    Download Postman  
https://learning.postman.com/docs/use/send-requests/create-requests/create-requests/    Create and send API requests in Postman  
https://learning.postman.com/docs/use/send-requests/response-data/visualizer/    Visualize request responses using Postman Visualizer  
https://learning.postman.com/docs/use/send-requests/create-requests/parameters/    Send parameters and body data with API requests in Postman  
https://learning.postman.com/docs/use/send-requests/create-requests/headers/    Configure headers for API requests in Postman  


### 16 First requests in Postman
https://learning.postman.com/docs/use/send-requests/create-requests/create-requests/    Create and send API requests in Postman  
https://learning.postman.com/docs/use/send-requests/response-data/visualizer/    Visualize request responses using Postman Visualizer  
https://learning.postman.com/docs/use/send-requests/create-requests/parameters/    Send parameters and body data with API requests in Postman  
https://learning.postman.com/docs/use/send-requests/create-requests/headers/    Configure headers for API requests in Postman  
https://qauto.forstudy.space/api-docs-json    Qauto Forstudy Space

Homework requests  
https://qauto.forstudy.space/api/auth/signup
{
  "name": "John",
  "lastName": "Dou",
  "email": "test@test.com",
  "password": "Qwerty12345",
  "repeatPassword": "Qwerty12345"
}


### 17 Working with Cookie
Cookie used for:
- Sessions and authentication
- User tracking and analytics
- Saving settings

Cookie structure:
- Name
- Value
- Domain
- Path
- Expires
- Max-Age
- Secure
- HttpOnly

To see all coookies, run this function in browser console (except HttpOnly=true):
```javascript
(function() {
	// Отримати всі куки
	var cookies = document.cookie.split(';');
	// Вивести кожен куки у консоль
	for (var i = 0; i < cookies.length; i++) {
	    console.log(cookies[i].trim());
	}
})();
```

Create and capture cookies using Postman's cookie manager
https://learning.postman.com/docs/use/send-requests/response-data/cookies/


### Authentication and Authorization
Authentication:
- Basic authentication
- Session-Based Authentication
- Token/JWT (JSON Web Token)-Based Authentication
- OAuth 2.0

Basic authentication - sending username and password encrypted as Base64 in header.  
Request Authorization base64(username:password) ->

Session-Based Authentication - server creates session for logged-in user.
Request username:password ->
<- Response Set-Cookie:JSESSIONID: 1234567

Token-Based Authentication  
Tokens:
- JWT (JSON Web Tokens)
- Opaque Tokens
- Bearer Tokens
- Refresh Tokens
- ID Tokens
- MAC Tokens (Message Authentication Code Tokens)

JWT:
- Header
- Payload
- Signature

JWT  
Request username:password ->
<- Response {Token: JWT}

OAuth 2.0 - allows one system to have access on another system.

Authorization - defining access level to system.

Authorization:
- RBAC (Role-Based Access Control)
- ABAC (Attribute-Based Access Control)
- DAC (Discretionary Access Control)

https://www.base64decode.org/    Base64 decode  
https://www.keepersecurity.com/blog/2023/12/26/authentication-vs-authorization-whats-the-difference/    Authentication vs Authorization: What’s the Difference?  
https://www.osohq.com/post/ten-types-of-authorization    The 10 Types of Authorization: The Families of RBAC, ReBAC and ABAC  


### 19 Practice on Authentication and Authorization
https://www.base64decode.org/    Base64 decode  
https://www.keepersecurity.com/blog/2023/12/26/authentication-vs-authorization-whats-the-difference/    Authentication vs Authorization: What’s the Difference?    
https://learning.postman.com/docs/use/send-requests/authorization/authorization/    API authentication and authorization in Postman    
https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get?hl=ru    Method: users.messages.get  
https://console.cloud.google.com/apis/dashboard?pli=1    Setting accesses via Google  
https://accounts.google.com/o/oauth2/auth    Auth URL for Google  
https://accounts.google.com/o/oauth2/token    Access token URL  


### 20 Variables in Postman
Variables types:
- Postman
- Global variables
- Collection variables
- Environment variables
- Data variables
- Local variables

```
pm.globals
pm.collectionVariables
pm.environment
pm.variables
```
.get() - methods to access variable  
.set() - set value to variable  
.unset() - remove specific variable  
.clear() - remove all variables  

Custom variables {{variableName}}  
Dynamic Postman variable {{$dynamicPostmanVariable}}

https://learning.postman.com/docs/use/send-requests/variables/variables/    Store and reuse values using variables  
https://www.baeldung.com/java-postman-variables    A Guide to Variables in Postman  
https://learning.postman.com/docs/tests-and-scripts/write-scripts/variables-list/    Use dynamic variables to return randomly generated data  


## Git. Git Hub

### 21 Version Control Systems. Git
VCS functions:
- Version history
- Branching and merging
- Conflicts and version control
- Common work and access to history change
- Automatic reserve backup
- Audit and security

Types of VCS:
- Local
- Centralized
- Decentralized

```shell
git config --list
git config --global user.name <USER_NAME>
git config --global user.email <USER_EMAIL>
```

```shell
git init

git status

git add <LIST_OF_FILES>
git add .
git add *.java
git add <DIRECTORY>

git commit -m <MESSAGE>
git commit -a -m <MESSAGE>

git log

git diff
git diff <COMMIT>
git diff <FIRST_COMMIT> <SECOND_COMMIT>

git reset --soft HEAD~1
git reset --mixed HEAD~1
git reset --hard HEAD~1

git push <REMOTE> <BRANCH>
```

File statuses:
- Untracked
- Unmodified
- Staged
- Modified
- Ignored

https://git-scm.com/    Git  
https://bitbucket.org/    BitBucket  
https://github.com/    GitHub  
https://about.gitlab.com/    GitLab  
https://git-scm.com/install/windows    Git installation for Windows  
https://youtu.be/yjxv1HuRQy0    Git installation for Windows  
https://youtu.be/B4qsvQ5IqWk    Git installation for Mac  
https://git-scm.com/book/uk/v2    GitBook  
https://githowto.com/uk    Git Tour  
https://learngitbranching.js.org/?locale=ru_RU    LearnGitBranching  


### 22 Introduction to GitHub
https://docs.github.com/en    GitHub Docs  
https://help.github.com/    GitHub Support  


### 23 Branching in Git
Generate ssh key
```shell
ssh-keygen
```

```shell
git remote add <NAME> <URL>
git remote -v
git remote remove <NAME>
git remote set-url <NAME> <NEW_URL>

git branch
git branch <BRANCH_NAME>
git branch -d <BRANCH_NAME>
git branch -m <OLD_BRANCH_NAME> <NEW_BRANCH_NAME>
git branch -a

git checkout <BRANCH_NAME>

git push origin <BRANCH_NAME>

git merge <BRANCH_NAME>

git fetch
git pull origin <BRANCH_NAME>
```

Merge:
- Fast-Forward (no new commits on main branch)
- Recursive (new commits on main branch)
- Conflict

https://youtu.be/4evR80g--9k    Setting access to GitHub via SSH


## JS basis for writing Postman scripts

### 24 Why to learn JavaScript on this course. Introduction to JavaScript
Comments: //, /*    */
Variables:
```
let a;
a = 5;
```
Constants:
```
const MY_CONST = 123;
```

Data types:
- Number
- String
- Boolean
- Object
- Null
- Undefined
- Symbol
- BigInt

```
typeof variable
```

https://www.sublimetext.com/download    Sublime Text  
https://www.jetbrains.com/webstorm/download/?section=windows    WebStorm  
https://www.w3schools.com/js/js_datatypes.asp    JavaScript Data Types  
