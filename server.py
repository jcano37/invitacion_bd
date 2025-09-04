#!/usr/bin/env python3
"""
Servidor local simple para la invitación de boda
Ejecuta este archivo para ver tu página en http://localhost:8000
"""

import http.server
import socketserver
import webbrowser
import os
from pathlib import Path

# Puerto donde se ejecutará el servidor
PORT = 8000

# Directorio actual donde están los archivos
DIRECTORY = Path(__file__).parent

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(DIRECTORY), **kwargs)

def main():
    # Cambiar al directorio del script
    os.chdir(DIRECTORY)
    
    # Crear el servidor
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print(f"🚀 Servidor iniciado en http://localhost:{PORT}")
        print(f"📁 Directorio: {DIRECTORY}")
        print("🌐 Abriendo navegador automáticamente...")
        print("⏹️  Presiona Ctrl+C para detener el servidor")
        
        # Abrir el navegador automáticamente
        webbrowser.open(f"http://localhost:{PORT}")
        
        try:
            # Mantener el servidor corriendo
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n🛑 Servidor detenido")

if __name__ == "__main__":
    main()
