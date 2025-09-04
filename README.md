# Invitación de Boda - Marlon & Bertha

## Cómo subir la página para que aparezca la imagen al compartir el enlace

### Opción 1: GitHub Pages (Gratis)

1. **Crear un repositorio en GitHub:**
   - Ve a [github.com](https://github.com)
   - Haz clic en "New repository"
   - Nombra el repositorio: `invitacion-boda`
   - Haz clic en "Create repository"

2. **Subir los archivos:**
   - Arrastra todos los archivos de tu carpeta al repositorio
   - Haz commit con el mensaje "Initial commit"
   - Haz clic en "Commit changes"

3. **Activar GitHub Pages:**
   - Ve a Settings > Pages
   - En "Source" selecciona "Deploy from a branch"
   - En "Branch" selecciona "main"
   - Haz clic en "Save"

4. **Tu página estará disponible en:**
   `https://tuusuario.github.io/invitacion-boda`

### Opción 2: Netlify (Gratis)

1. **Ve a [netlify.com](https://netlify.com)**
2. **Arrastra tu carpeta** con todos los archivos
3. **Tu página estará disponible inmediatamente**

### Opción 3: Vercel (Gratis)

1. **Ve a [vercel.com](https://vercel.com)**
2. **Conecta tu repositorio de GitHub**
3. **Deploy automático**

## Después de subir la página

Una vez que tengas tu página en línea, necesitas actualizar las meta tags con la URL completa:

```html
<meta property="og:image" content="https://tuusuario.github.io/invitacion-boda/519.jpg">
<meta property="og:url" content="https://tuusuario.github.io/invitacion-boda">
```

## Probar que funciona

1. **Facebook Sharing Debugger:**
   - Ve a [developers.facebook.com/tools/debug/](https://developers.facebook.com/tools/debug/)
   - Pega tu URL y haz clic en "Debug"

2. **Twitter Card Validator:**
   - Ve a [cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator)
   - Pega tu URL y haz clic en "Preview card"

3. **WhatsApp:**
   - Comparte el enlace en WhatsApp
   - Deberías ver la imagen y el título

## Archivos incluidos

- `index.html` - Página principal
- `style.css` - Estilos
- `script.js` - Funcionalidad
- `guests.json` - Lista de invitados
- `519.jpg` - Imagen principal
- `foto_principal.jpeg` - Imagen adicional
