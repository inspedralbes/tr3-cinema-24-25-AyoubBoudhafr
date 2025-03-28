# Backend de SimplySwap

## 🎯 Visió General
El backend de SimplySwap està construït amb Spring Boot, proporcionant una API RESTful robusta i escalable. Gestiona tota la lògica de negoci, autenticació i persistència de dades de la plataforma de compravenda.

## 🛠️ Stack Tecnològic
- **Spring Boot**: Framework principal
- **Spring Security**: Seguretat i autenticació
- **Spring Data JPA**: Persistència de dades
- **MySQL**: Base de dades relacional
- **WebSocket**: Comunicació en temps real
- **JWT**: Tokens d'autenticació

## 📁 Estructura del Projecte
```
back/
├── spring/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   ├── controllers/    # Controladors REST
│   │   │   │   ├── models/         # Entitats i models
│   │   │   │   ├── repositories/   # Repositoris JPA
│   │   │   │   ├── services/       # Lògica de negoci
│   │   │   │   ├── config/         # Configuracions
│   │   │   │   └── security/       # Configuració de seguretat
│   │   │   └── resources/          # Arxius de configuració
│   │   └── test/                   # Tests unitaris i integració
│   └── pom.xml                     # Dependències Maven
├── dbseed.sql                      # Script de dades inicials
└── simplyswap.sql                 # Esquema de base de dades
```

## 🗄️ Base de Dades
L'esquema de la base de dades inclou les següents taules principals:
- Users
- Products
- Categories
- Messages
- Transactions

### Scripts SQL
- `simplyswap.sql`: Conté l'esquema complet de la base de dades
- `dbseed.sql`: Dades de prova i configuració inicial

## ⚙️ Configuració de l'Entorn

### Requisits Previs
- Java 17 o superior
- Maven
- MySQL 8.0 o superior

### Desarrollo Local
1. Configurar la base de dades:
```bash
mysql -u root -p < simplyswap.sql
mysql -u root -p < dbseed.sql
```

2. Compilar el projecte:
```bash
cd spring
mvn clean install
```

3. Executar l'aplicació:
```bash
mvn spring-boot:run
```

### Producció amb Docker
El backend està configurat per executar-se en un contenidor Docker:
```bash
docker compose up backend
```

## 🔌 API Endpoints

### Autenticació
- POST `/api/auth/login`
- POST `/api/auth/register`
- POST `/api/auth/refresh-token`

### Productes
- GET `/api/products`
- GET `/api/products/{id}`
- POST `/api/products`
- PUT `/api/products/{id}`
- DELETE `/api/products/{id}`

### Usuaris
- GET `/api/users/{id}`
- PUT `/api/users/{id}`
- GET `/api/users/{id}/products`

### Missatges
- GET `/api/messages`
- POST `/api/messages`
- GET `/api/messages/{conversationId}`

## 🔒 Seguretat
- Autenticació basada en JWT
- Validació de rols i permisos
- Protecció contra CSRF
- Rate limiting
- Sanitització de dades

## 📊 Monitoratge i Logs
- Actuator endpoints per a monitoratge
- Logging amb Logback
- Mètriques amb Micrometer
- Traçabilitat amb Spring Cloud Sleuth

## 🔍 Testing
- Encara no hi ha testing implementat

## 📚 Documentació API
La documentació de l'API està disponible a:
- Swagger UI: `/swagger-ui.html`
- OpenAPI JSON: `/v3/api-docs`

## 🚀 Desplegament
1. Construir el JAR:
```bash
mvn clean package
```

2. Executar amb el perfil de producció:
```bash
java -jar -Dspring.profiles.active=prod target/simplyswap-backend.jar
```

## 🤝 Contribució
1. Crear una branca feature des de `develop`
2. Seguir les guies d'estil de Java
3. Assegurar cobertura de tests
4. Crear Pull Request amb descripció detallada
