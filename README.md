# 🍽️ Buscador de Recetas - Gourmet Go

Aplicación web Front-End que permite visualizar un prototipo de buscador de recetas.
El objetivo es mostrar una interfaz atractiva, intuitiva y responsiva donde los usuarios pueden buscar recetas por ingredientes y explorar ejemplos visuales.

---
📸 **Vista previa del proyecto:**

<img width="1706" height="868" alt="buscadorderecetas" src="https://github.com/user-attachments/assets/bad26add-3ec8-4bc2-99eb-c81352588ea4" />

---

## 🎬 Demo

🔗 **Demo en vivo:**  https://multialianza.github.io/BuscadorDeRecetas/

---

## 🧰 Stack Tecnológico

### 🚀 Frontend

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)

### 🎨 Framework CSS

![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=for-the-badge\&logo=bootstrap\&logoColor=white)

---

## 🧱 Arquitectura

* 📐 **Tipo:** Aplicación Front-End estática

* 🧩 **Estructura:**

  * `index.html` → estructura principal
  * `style.css` → estilos personalizados
  * `app.js` → lógica básica (eventos)

* 🔄 **Flujo:**
  Usuario → Interfaz → Evento JS → Consola (simulación de búsqueda)

* 🧠 **Decisiones tomadas:**

  * Uso de Bootstrap para rapidez y responsividad
  * Separación de responsabilidades (HTML, CSS, JS)
  * Diseño mobile-first
  * Prototipo sin backend (Sprint 1)

---

## 🔍 Funcionalidades

- ✅ Buscador visual de recetas
- ✅ Tarjetas de recetas (cards Bootstrap)
- ✅ Diseño completamente responsivo
- ✅ Sección de contacto funcional (UI)
- ✅ Footer profesional
- ✅ Simulación de búsqueda en consola

---

## 🖥️ Ejecutar Proyecto en Local

Sigue estos pasos para correr el proyecto en tu máquina:

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/multialianza/buscadorderecetas.git
```

### 2️⃣ Entrar al proyecto

```bash
cd buscadorderecetas
```

### 3️⃣ Abrir el proyecto

Simplemente abre el archivo:

```bash
index.html
```

O puedes usar Live Server en VS Code:

```bash
Click derecho → Open with Live Server
```

---

## 📱 Responsividad

El proyecto está diseñado con el sistema de grillas de Bootstrap:

* 📺 Desktop → 3 columnas
* 💻 Tablet → 2 columnas
* 📱 Mobile → 1 columna

---

## 🚀 Despliegue

Puedes publicar fácilmente con:

### 🔹 GitHub Pages

1. Ir a Settings del repositorio
2. Activar Pages
3. Seleccionar branch `main`
4. Guardar

### 🔹 Alternativas

* Vercel
* Netlify

---

## 🧪 Pruebas

No aplica en este sprint (prototipo visual).

---

## 📄 Licencia

MIT License

---

## 👨‍💻 Autor

- Proyecto desarrollado por: Multialianza
- Parte de mi  formación Fullstack.



---

### 💼 Caso
# BuscadorDeRecetas
# 📥EF-M3 Proyecto Integrador Sprint 1
**Sprint 1: Maquetación y Prototipo Visual del "Buscador de Recetas"**

---
**Briefing del Cliente: "Gourmet Go"**

¡Bienvenido al equipo! Nuestro cliente, Gourmet Go, nos ha encargado la creación de una nueva aplicación web: el "Buscador de Recetas". Antes de desarrollar la lógica y conectar la aplicación a servicios externos, el cliente necesita aprobar un prototipo visual de alta fidelidad.
El objetivo de este primer sprint es construir una maqueta estática y completamente funcional a nivel visual. Debemos entregar una única página que demuestre cómo se verá y se sentirá la aplicación, asegurando que el diseño sea intuitivo, atractivo y responsivo.
________________________________________
---
**Historias de Usuario a Implementar**

**HU-01: Interfaz Principal de Búsqueda**

-	Como usuario que visita el sitio,
-	Quiero ver un encabezado claro y un campo de búsqueda prominente,
-	Para entender inmediatamente el propósito de la aplicación y cómo empezar a usarla.

**Criterios de Aceptación:**

-	✅ La página debe tener un título principal, como "Buscador de Recetas".
-	✅ Debe existir un formulario que contenga un campo de texto (<input>) con un placeholder descriptivo (ej: "Busca por ingrediente...").
-	✅ El formulario debe incluir un botón (<button>) con un texto claro (ej: "Buscar").
-	✅ Los elementos deben estar estilizados usando clases de Bootstrap para form y button.
________________________________________
---
**HU-02: Visualización de Recetas de Ejemplo**

-	Como usuario nuevo,
-	Quiero ver una galería con ejemplos de recetas al cargar la página,
-	Para tener una idea de cómo se presentarán los resultados y qué tipo de contenido esperar.

**Criterios de Aceptación:**

-	✅ Se debe mostrar una sección de resultados debajo del buscador.
-	✅ Esta sección debe contener entre 3 y 6 tarjetas de recetas escritas directamente en el archivo index.html (hard-codeadas).
-	✅ Cada tarjeta debe utilizar el componente card de Bootstrap.
-	✅ Cada tarjeta debe incluir obligatoriamente:
o	Una imagen.
o	Un título.
o	Un botón o enlace.
________________________________________
---
**HU-03: Experiencia en Dispositivos Móviles**

-	Como usuario de smartphone,
-	Quiero que la aplicación se adapte fluidamente a mi pantalla,
-	Para poder buscar recetas cómodamente desde cualquier lugar.

**Criterios de Aceptación:**

-	✅ El diseño debe ser completamente responsivo.
-	✅ En pantallas grandes (desktop), las tarjetas de recetas deben mostrarse en una grilla (ej: 3 columnas).
-	✅ En pantallas pequeñas (móviles), las tarjetas deben apilarse verticalmente (1 columna).
-	✅ El sistema de grillas de Bootstrap (row, col-lg-4, col-md-6, etc.) debe ser utilizado para lograr la responsividad.
________________________________________
---
**Requisitos Técnicos y Entregables**
-	**Estructura del Proyecto:** El código debe estar organizado en tres archivos base: index.html para la estructura, style.css para estilos personalizados, y app.js (que permanecerá vacío o con comentarios, preparando el terreno para el Sprint 2).
-	**Frameworks y Librerías:** Se debe utilizar Bootstrap 5 como framework principal de CSS. Se permite el uso de un style.css adicional para personalizar detalles finos (colores, fuentes, sombras, etc.).
-	**Entregable:** Un repositorio público de GitHub que contenga la carpeta del proyecto con los tres archivos. El enlace al repositorio es el único entregable requerido.
