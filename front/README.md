# Frontend de SimplySwap

## 🎯 Visió General
El frontend de SimplySwap està construït amb Next.js, utilitzant les últimes característiques de React i un disseny modern amb CSS. Aquesta part del projecte gestiona tota la interfície d'usuari i l'experiència d'usuari de la plataforma de compravenda.

## 🛠️ Stack Tecnològic
- **Next.js**: Framework de React per a producció
- **React**: Biblioteca per a interfícies d'usuari
- **Tailwind CSS**: Framework de CSS utilitari
- **Axios**: Client HTTP per a peticions API
- **Socket.io-client**: Per a funcionalitats en temps real
- **JWT**: Per a autenticació d'usuaris

## 📁 Estructura del Projecte
```
front/
├── src/
│   ├── app/             # Pàgines i rutes de l'aplicació
│   ├── components/      # Components reutilitzables
│   ├── context/        # Contextos de React
│   ├── hooks/          # Hooks personalitzats
│   ├── services/       # Serveis d'API
│   └── utils/          # Utilitats i helpers
├── public/             # Arxius estàtics
└── styles/            # Estils globals
```

## ⚙️ Configuració de l'Entorn

### Variables d'Entorn
Crea un arxiu `.env` al directori `/front` amb el següent contingut:
```bash
# Copia el contingut de .env.develop
cp .env.develop .env
```

### Desenvolupament Local
1. Instal·la les dependències:
```bash
npm install
```

2. Inicia el servidor de desenvolupament:
```bash
npm run dev
```

3. Accedeix a http://localhost:3000

### Producció amb Docker
El frontend està configurat per executar-se en un contenidor Docker:
```bash
docker compose up frontend
```

## 📦 Característiques Principals
- **Autenticació**: Sistema complet de registre i login
- **Llistat de Productes**: Vista grid amb filtres i cerca
- **Detalls de Producte**: Pàgines detallades amb imatges i descripció
- **Xat en Temps Real**: Comunicació entre usuaris
- **Panell d'Usuari**: Gestió de productes i perfil
- **Disseny Responsive**: Adaptable a tots els dispositius

## 🔍 Testing
- Encara no hi ha testing implementat

## 📚 Guies de Desenvolupament
- Seguir els principis de Atomic Design per a components
- Utilitzar TypeScript per a tot el codi nou
- Mantenir consistència amb ESLint i Prettier
- Documentar components principals i hooks personalitzats

## 📈 Monitoratge
- Logs centralitzats amb [SISTEMA_DE_LOGS]
- Mètriques de rendiment amb [SISTEMA_DE_METRIQUES]
- Monitoratge d'errors amb [SISTEMA_DE_ERRORS]

## 🤝 Contribució
1. Crear una nova branca des de `dev`
2. Realitzar canvis seguint les guies d'estil
3. Crear un Pull Request amb una descripció detallada
4. Esperar la revisió del codi

