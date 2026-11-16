# Instalación

Cómo clonar el repositorio, instalar dependencias y ejecutar Malebo localmente.

> [!NOTE]
> Al tratarse de un proyecto estático en HTML, CSS y JavaScript puros, no se requiere ningún paso de compilación o build para ejecutar el sitio web. Node.js se utiliza exclusivamente para las herramientas de desarrollo (formateo y linting).

### Requisitos previos

Antes de comenzar, asegúrese de tener instalado en su equipo:

- **Node.js** (v18 o superior)
- **Git**
- **npm** (o su gestor de paquetes preferido: `pnpm`, `yarn`, `bun`)
- **Un servidor local estático** (como la extensión "Live Server" de VS Code o `npx serve .`)

---

### 1. Clonar el repositorio

```bash
git clone https://github.com/araujoio/malebo.git
cd malebo
```

### 2. Instalar dependencias de desarrollo

Ejecute el siguiente comando en la raíz del proyecto para instalar las herramientas de código (Biome, ESLint y Husky):

```bash
npm install
```

### 3. Iniciar el servidor de desarrollo

Puede iniciar un servidor estático local mediante terminal:

```bash
npx serve .
```

O, si utiliza VS Code, haga clic derecho en `index.html` y seleccione **"Open with Live Server"**.

Una vez iniciado, acceda a la dirección indicada en su navegador (generalmente [http://localhost:3000](http://localhost:3000) o [http://localhost:5500](http://localhost:5500)) para visualizar Malebo.

<br />

<div align="left">
  <a href="../00-quickstart/README.md"
    ><strong>← Anterior: Inicio Rápido</strong></a
  >
</div>

---

_Aviso Legal: Este documento fue traducido por un proceso automatizado interno de IA y puede contener fallas, imprecisiones o errores. La documentación original en inglés debe considerarse la fuente oficial de referencia._
