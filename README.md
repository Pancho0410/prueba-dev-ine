# 🧪 Prueba Técnica Frontend – INE

Este proyecto corresponde a una **prueba técnica frontend** para evaluar conocimientos en **React + TypeScript**, utilizando **Astro** como framework de composición y **Tailwind CSS** para estilos.

El objetivo no es solo “que funcione”, sino evaluar **criterio técnico, reutilización de componentes, tipado, estructura y buenas prácticas**.

---

## 🛠️ Stack tecnológico

- **Astro** – Layout, composición y rendimiento (Islands Architecture)
- **React** – Componentes interactivos
- **TypeScript** – Tipado estático
- **Tailwind CSS** – Estilos utilitarios
- **Vite** – Bundler

---

## 📁 Estructura del proyecto 

```diff
 PRUEBA-DEV-INE/
 ├─ public/
+│  └─ img/                             # Recursos estáticos (logos, imágenes institucionales, etc.)
 │     └─ 2025_INE_LOGO_H.svg
 ├─ src/
 │  ├─ components/
+│  │  ├─ astro/                        # Componentes de layout y estructura (NO interactivos)
 │  │  │  ├─ PageShell.astro
 │  │  │  ├─ SidebarShell.astro
 │  │  │  └─ TopBar.astro
+│  │  └─ react/                        # Componentes React (Islands)
 │  │     ├─ features/
 │  │     │  └─ announcements/
 │  │     │     ├─ AnnouncementCard.tsx
 │  │     │     ├─ AnnouncementsFeed.tsx
 │  │     │     ├─ Filters.tsx
 │  │     │     └─ SearchBar.tsx
+│  │     ├─ ui/                        # Componentes UI reutilizables (Button, Badge, etc.)
 │  │     │  ├─ Badge.tsx
 │  │     │  └─ Button.tsx
 │  │     └─ widgets/
 │  │        ├─ AnnouncementsWidget.tsx
 │  │        └─ HelloWidget.tsx
 │  ├─ data/
+│  │  └─ announcements.json            # Documento con fuente de informacion
 │  ├─ layouts/
 │  │  └─ BaseLayout.astro
 │  ├─ pages/
+│  │  └─ index.astro                   # Página principal (orquesta layouts + widgets)
 │  ├─ styles/
 │  │  └─ global.css
 │  └─ types/
 │     ├─ announcement.types.ts
 │     └─ hello.interface.ts
 ├─ .gitignore
 ├─ astro.config.mjs
 ├─ package.json
 ├─ package-lock.json
 ├─ tsconfig.json
 └─ README.md

```