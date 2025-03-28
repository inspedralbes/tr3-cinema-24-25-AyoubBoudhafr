# SimplySwap - Plataforma de Compravenda de Segona Mà

## 🌟 Descripció
SimplySwap és una plataforma web moderna i fàcil d'utilitzar dissenyada per a la compravenda d'articles de segona mà. La nostra plataforma facilita la connexió entre venedors i compradors, promovent l'economia circular i el consum sostenible.

## 👥 Equip
- Ayoub Boudhafri

## 🚀 Característiques Principals
- Llistat de productes per categories
- Sistema de cerca avançada
- Xat integrat entre usuaris
- Sistema de valoracions i ressenyes
- Gestió de perfil d'usuari
- Panell d'administració

## 🛠️ Tecnologies Utilitzades
### Frontend
- Next.js
- React
- Tailwind CSS
- Docker

### Backend
- Spring Boot
- MySQL
- Docker

## 📋 Requisits Previs
- Docker i Docker Compose
- Node.js (per desenvolupament local)
- Java 17 (per desenvolupament local)

## 🔧 Configuració i Instal·lació

### Configuració de l'Entorn
1. Clona el repositori:
```bash
git clone [URL_DEL_REPOSITORI]
```

2. Configura l'arxiu .env al directori /front:
```bash
cp front/.env.develop front/.env
```

3. Inicia l'aplicació amb Docker Compose:
```bash
docker compose up
```

L'aplicació estarà disponible a:
- Frontend: http://localhost:3000
- Backend: http://localhost:8080
- Adminer: http://localhost:8081

## 📚 Documentació Addicional
- [Documentació Frontend](/front/README.md)
- [Documentació Backend](/back/README.md)
- [Documentació API](/doc/API.md)

## 📈 Estat del Projecte
Aquest projecte forma part del grau superior de Desenvolupament d'Aplicacions Web, on disposàvem de 4 setmanes per al seu desenvolupament. Degut a aquesta limitació temporal, hi ha algunes funcionalitats que no s'han pogut completar totalment:

### Funcionalitats Completades:
- Sistema d'autenticació bàsic
- CRUD de productes
- Llistat i filtratge de productes
- Interfície d'usuari responsive
- Configuració de Docker per a desenvolupament

### Funcionalitats Pendents:
- Sistema de xat en temps real
- Implementació completa de valoracions
- Tests unitaris i d'integració
- Optimització de rendiment
- Millores en la seguretat

Tot i que el projecte es va desenvolupar inicialment com a treball de classe, tinc la intenció de continuar treballant-hi en un futur per implementar totes les funcionalitats pendents i convertir-lo en una plataforma completament funcional.


