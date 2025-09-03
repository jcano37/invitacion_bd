# 🚀 Guía de Publicación en GitHub Pages

## Paso a Paso para Publicar tu Página de Boda

### 1. 📝 Preparar el Proyecto

Antes de subir a GitHub, necesitas personalizar la información:

1. **Cambia la URL en `package.json`**
   ```json
   "homepage": "https://TU-USUARIO.github.io/mario-rosa-wedding"
   ```
   Reemplaza `TU-USUARIO` con tu nombre de usuario de GitHub.

2. **Personaliza la información de la boda:**
   - `src/components/About.js` - Nombres, fecha, foto
   - `src/components/Parents.js` - Padres y padrinos
   - `src/components/EventDetails.js` - Lugares y horarios
   - `src/components/GiftInfo.js` - Cuentas bancarias
   - `src/components/Hotels.js` - Información del hotel

### 2. 🔧 Crear el Repositorio en GitHub

1. Ve a [github.com](https://github.com)
2. Haz clic en "New repository"
3. Nombre: `mario-rosa-wedding`
4. Descripción: "Invitación de boda de Mario y Rosa"
5. Hazlo **Público** (necesario para GitHub Pages)
6. **NO** inicialices con README (ya tenemos uno)
7. Haz clic en "Create repository"

### 3. 📤 Subir el Código a GitHub

Abre tu terminal en la carpeta del proyecto y ejecuta:

```bash
# Inicializar git (si no está inicializado)
git init

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "Initial commit: Página de boda Mario y Rosa"

# Agregar el repositorio remoto (reemplaza TU-USUARIO)
git remote add origin https://github.com/TU-USUARIO/mario-rosa-wedding.git

# Subir a GitHub
git push -u origin main
```

### 4. 🛠️ Instalar Dependencias y Desplegar

```bash
# Instalar dependencias
npm install

# Desplegar en GitHub Pages
npm run deploy
```

### 5. ⚙️ Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Haz clic en "Settings" (pestaña)
3. En el menú lateral, haz clic en "Pages"
4. En "Source", selecciona "Deploy from a branch"
5. En "Branch", selecciona "gh-pages"
6. Haz clic en "Save"

### 6. 🎉 ¡Tu Sitio Está Listo!

Tu página estará disponible en:
`https://TU-USUARIO.github.io/mario-rosa-wedding`

## 🔄 Actualizaciones Futuras

Para hacer cambios y actualizar el sitio:

```bash
# Hacer cambios en el código
# Luego:
git add .
git commit -m "Actualización: [descripción de cambios]"
git push origin main

# Desplegar cambios
npm run deploy
```

## 🆘 Solución de Problemas

### Error: "gh-pages command not found"
```bash
npm install gh-pages --save-dev
```

### Error: "homepage field is missing"
Asegúrate de que en `package.json` tengas:
```json
"homepage": "https://TU-USUARIO.github.io/mario-rosa-wedding"
```

### El sitio no se actualiza
- Espera 5-10 minutos después de `npm run deploy`
- Verifica que la rama `gh-pages` se haya creado en GitHub
- Revisa la configuración en Settings > Pages

## 📱 Personalización Adicional

### Cambiar Colores
Edita `tailwind.config.js` para cambiar la paleta de colores.

### Agregar Más Fotos
Modifica `src/components/Gallery.js` y `src/components/Hero.js`.

### Cambiar Información de Contacto
Actualiza `src/components/Footer.js` con tus redes sociales.

---

**¡Tu página de boda estará lista en minutos! 🎉**
