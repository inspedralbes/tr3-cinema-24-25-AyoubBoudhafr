# Documentació API SimplySwap

## 📌 Informació General
- **URL Base**: `http://localhost:8080/api`
- **Format**: JSON
- **Autenticació**: JWT (JSON Web Token)

## 📦 Productes

### Llistar Productes
```http
GET /products
```

**Paràmetres de Consulta:**
- `page` (opcional): Número de pàgina (per defecte: 0)
- `size` (opcional): Mida de pàgina (per defecte: 20)
- `category` (opcional): ID de categoria
- `search` (opcional): Terme de cerca
- `sort` (opcional): Camp d'ordenació (price, date)
- `order` (opcional): Direcció d'ordenació (asc, desc)

**Response:**
```json
{
  "content": [
    {
      "id": 1,
      "title": "iPhone 12",
      "description": "Excel·lent estat",
      "price": 500.00,
      "category": "Electrònica",
      "images": ["url1", "url2"],
      "seller": {
        "id": 1,
        "name": "Venedor"
      },
      "createdAt": "2024-03-28T10:00:00Z"
    }
  ],
  "totalPages": 10,
  "totalElements": 200,
  "size": 20,
  "number": 0
}
```

### Obtenir Producte
```http
GET /products/{id}
```

### Crear Producte
```http
POST /products
```

**Request Body:**
```json
{
  "title": "iPhone 12",
  "description": "Excel·lent estat",
  "price": 500.00,
  "categoryId": 1,
  "images": ["base64-image-1", "base64-image-2"]
}
```

## 👤 Usuaris

### Perfil d'Usuari
```http
GET /users/{id}
```

### Actualitzar Perfil
```http
PUT /users/{id}
```

**Request Body:**
```json
{
  "name": "Nou Nom",
  "phone": "987654321",
  "avatar": "base64-image"
}
```

## 💬 Missatges

### Llistar Converses
```http
GET /messages/conversations
```

### Obtenir Missatges de Conversa
```http
GET /messages/conversations/{conversationId}
```

### Enviar Missatge
```http
POST /messages
```

**Request Body:**
```json
{
  "receiverId": 2,
  "productId": 1,
  "content": "Està disponible?"
}
```

## ⭐ Valoracions

### Crear Valoració
```http
POST /reviews
```

**Request Body:**
```json
{
  "userId": 2,
  "productId": 1,
  "rating": 5,
  "comment": "Excel·lent venedor"
}
```

## 🔍 Cerca

### Cerca Global
```http
GET /search
```

**Paràmetres de Consulta:**
- `q`: Terme de cerca
- `type`: Tipus de cerca (products, users)
- `filters`: Filtres addicionals en format JSON

## 📁 Categories

### Llistar Categories
```http
GET /categories
```

### Obtenir Categoria
```http
GET /categories/{id}
```

## ⚠️ Gestió d'Errors

### Format d'Error
```json
{
  "status": 400,
  "error": "Bad Request",
  "message": "Descripció de l'error",
  "timestamp": "2024-03-28T10:00:00Z",
  "path": "/api/products"
}
```

### Codis d'Estat
- `200`: Èxit
- `201`: Creat
- `400`: Sol·licitud incorrecta
- `401`: No autoritzat
- `403`: Prohibit
- `404`: No trobat
- `500`: Error intern del servidor

## 🔒 Seguretat

### Capçaleres Requerides
```http
Authorization: Bearer <token>
Content-Type: application/json
```

### Limitació de Peticions
- 100 peticions per minut per IP
- 1000 peticions per hora per usuari autenticat

## 📊 Paginació
Totes les respostes paginades segueixen aquest format:
```json
{
  "content": [],
  "totalPages": 0,
  "totalElements": 0,
  "size": 20,
  "number": 0,
  "first": true,
  "last": true
}
```

## 🔄 WebSocket

### Connexió
```javascript
ws://localhost:8080/ws
```

### Esdeveniments
- `CHAT_MESSAGE`: Nou missatge de xat
<!-- - `PRODUCT_UPDATE`: Actualització de producte
- `NOTIFICATION`: Notificació general  -->