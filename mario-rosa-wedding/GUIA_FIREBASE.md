# 🔥 Guía de Publicación en Firebase

## Paso a Paso para Publicar tu Página de Boda en Firebase

### 1. 📝 Preparar el Proyecto

Antes de configurar Firebase, personaliza la información:

1. **Cambia la URL en `package.json`**
   ```json
   "homepage": "https://tu-proyecto.web.app"
   ```
   Reemplaza `tu-proyecto` con el ID de tu proyecto de Firebase.

2. **Personaliza la información de la boda:**
   - `src/components/About.js` - Nombres, fecha, foto
   - `src/components/Parents.js` - Padres y padrinos
   - `src/components/EventDetails.js` - Lugares y horarios
   - `src/components/GiftInfo.js` - Cuentas bancarias
   - `src/components/Hotels.js` - Información del hotel

### 2. 🔧 Crear Proyecto en Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Haz clic en "Crear un proyecto"
3. Nombre: `mario-rosa-wedding`
4. Habilita Google Analytics (opcional)
5. Haz clic en "Crear proyecto"

### 3. 🗄️ Configurar Firestore Database

1. En tu proyecto de Firebase, ve a "Firestore Database"
2. Haz clic en "Crear base de datos"
3. Selecciona "Comenzar en modo de prueba"
4. Ubicación: elige la más cercana a tu ubicación
5. Haz clic en "Habilitar"

### 4. 🌐 Configurar Hosting

1. En Firebase Console, ve a "Hosting"
2. Haz clic en "Comenzar"
3. Instala Firebase CLI (si no lo tienes):
   ```bash
   npm install -g firebase-tools
   ```

### 5. 🔑 Obtener Credenciales de Firebase

1. En Firebase Console, ve a Configuración del proyecto (⚙️)
2. En "Tus apps", haz clic en "Agregar app" > "Web"
3. Registra la app con un nombre (ej: "mario-rosa-wedding")
4. Copia la configuración que aparece

### 6. ⚙️ Configurar Firebase en tu Proyecto

1. **Actualiza `src/firebase.js`** con tus credenciales:
   ```javascript
   const firebaseConfig = {
     apiKey: "tu-api-key-real",
     authDomain: "tu-proyecto.firebaseapp.com",
     projectId: "tu-proyecto",
     storageBucket: "tu-proyecto.appspot.com",
     messagingSenderId: "tu-messaging-sender-id",
     appId: "tu-app-id"
   };
   ```

2. **Inicializa Firebase en tu proyecto:**
   ```bash
   firebase login
   firebase init
   ```
   
   Durante la inicialización:
   - Selecciona tu proyecto
   - Selecciona Hosting y Firestore
   - Directorio público: `build`
   - Configurar como SPA: `Sí`
   - Sobrescribir index.html: `No`

### 7. 🚀 Desplegar en Firebase

```bash
# Instalar dependencias
npm install

# Construir el proyecto
npm run build

# Desplegar en Firebase
firebase deploy
```

### 8. 🎉 ¡Tu Sitio Está Listo!

Tu página estará disponible en:
- `https://tu-proyecto.web.app`
- `https://tu-proyecto.firebaseapp.com`

## 🔄 Actualizaciones Futuras

Para hacer cambios y actualizar el sitio:

```bash
# Hacer cambios en el código
# Luego:
npm run build
firebase deploy
```

## 📊 Ver Datos RSVP

1. Ve a Firebase Console > Firestore Database
2. Verás la colección `rsvp` con todas las confirmaciones
3. Cada documento contiene:
   - name: Nombre del invitado
   - email: Email
   - phone: Teléfono
   - attending: "yes" o "no"
   - guests: Número de invitados
   - message: Mensaje opcional
   - timestamp: Fecha y hora

## 🆘 Solución de Problemas

### Error: "firebase command not found"
```bash
npm install -g firebase-tools
```

### Error: "Project not found"
Asegúrate de estar logueado y haber seleccionado el proyecto correcto:
```bash
firebase login
firebase use tu-proyecto-id
```

### Error: "Permission denied"
Verifica que tengas permisos de administrador en el proyecto de Firebase.

### El sitio no se actualiza
- Espera 1-2 minutos después de `firebase deploy`
- Verifica que el build se haya generado correctamente
- Revisa los logs en Firebase Console > Hosting

## 🔒 Seguridad

Las reglas actuales permiten lectura y escritura a todos. Para producción, considera:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /rsvp/{document} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## 📱 Personalización Adicional

### Cambiar Colores
Edita `tailwind.config.js` para cambiar la paleta de colores.

### Agregar Más Fotos
Modifica `src/components/Gallery.js` y `src/components/Hero.js`.

### Cambiar Información de Contacto
Actualiza `src/components/Footer.js` con tus redes sociales.

---

**¡Tu página de boda estará lista en Firebase! 🔥**
