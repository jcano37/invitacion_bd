# Mario & Rosa - Invitación de Boda

Una hermosa invitación de boda moderna y elegante construida con React y Firebase, inspirada en el diseño de mi-convite.net.

## 🚀 Características

- ✨ Diseño moderno y elegante
- 📱 Totalmente responsivo
- 🎨 Animaciones suaves con Framer Motion
- 🔥 Integración con Firebase para RSVP
- 📸 Galería de fotos interactiva
- 💳 Información de regalos con cuentas bancarias
- 🏨 Sección de hoteles con códigos de descuento
- ❓ FAQ expandible
- 📱 PWA ready

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework de JavaScript
- **Firebase** - Backend y hosting
- **Tailwind CSS** - Framework de CSS
- **Framer Motion** - Animaciones
- **React Router** - Navegación
- **React Intersection Observer** - Efectos de scroll

## 📦 Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/mario-rosa-wedding.git
   cd mario-rosa-wedding
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Configura Firebase**
   - Crea un proyecto en [Firebase Console](https://console.firebase.google.com/)
   - Habilita Firestore Database
   - Copia las credenciales de configuración
   - Actualiza `src/firebase.js` con tus credenciales

4. **Ejecuta el proyecto**
   ```bash
   npm start
   ```

## 🔥 Despliegue en Firebase

1. **Instala Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Inicia sesión en Firebase**
   ```bash
   firebase login
   ```

3. **Inicializa Firebase en tu proyecto**
   ```bash
   firebase init
   ```
   - Selecciona Hosting y Firestore
   - Usa `build` como directorio público
   - Configura las reglas de Firestore

4. **Construye y despliega**
   ```bash
   npm run build
   firebase deploy
   ```

## 📝 Personalización

### Información de la Boda
Edita los siguientes archivos para personalizar la información:

- **Nombres y fechas**: `src/components/About.js`
- **Padres y padrinos**: `src/components/Parents.js`
- **Detalles del evento**: `src/components/EventDetails.js`
- **Cuentas bancarias**: `src/components/GiftInfo.js`
- **Información del hotel**: `src/components/Hotels.js`

### Colores y Estilos
Los colores principales se pueden modificar en:
- `tailwind.config.js` - Configuración de colores
- `src/index.css` - Estilos personalizados

### Imágenes
Reemplaza las URLs de las imágenes en:
- `src/components/Hero.js` - Imágenes del hero
- `src/components/About.js` - Foto principal
- `src/components/Gallery.js` - Galería de fotos

## 📱 Estructura del Proyecto

```
src/
├── components/
│   ├── Header.js          # Navegación principal
│   ├── Hero.js            # Sección hero con carrusel
│   ├── About.js           # Información de la boda
│   ├── Parents.js         # Padres y padrinos
│   ├── EventDetails.js    # Detalles del evento
│   ├── GiftInfo.js        # Información de regalos
│   ├── Hotels.js          # Información de hoteles
│   ├── FAQ.js             # Preguntas frecuentes
│   ├── RSVP.js            # Formulario de confirmación
│   ├── Gallery.js         # Galería de fotos
│   └── Footer.js          # Pie de página
├── App.js                 # Componente principal
├── index.js               # Punto de entrada
├── index.css              # Estilos globales
└── firebase.js            # Configuración de Firebase
```

## 🔧 Configuración de Firebase

### Firestore Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

### Estructura de Datos RSVP
```javascript
{
  name: "Nombre del invitado",
  email: "email@ejemplo.com",
  phone: "+505 2222-3333",
  attending: "yes" | "no",
  guests: 1-4,
  message: "Mensaje opcional",
  timestamp: Date
}
```

## 📞 Soporte

Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarnos:
- Email: mario.rosa@email.com
- Instagram: @mario.perez, @rosa.silva

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

**Hecho con ❤️ para celebrar nuestro amor**
