# QuickCart - Plataforma de E-commerce Moderna

QuickCart es una **plataforma de comercio electrónico completa** construida con Next.js, MongoDB, Clerk y tecnologías modernas.  
Ofrece una experiencia de compra rápida, segura y personalizable tanto para clientes como para vendedores.

> **📚 Nota:** Este proyecto ha sido desarrollado con fines educativos y de aprendizaje, demostrando la implementación de un e-commerce moderno con tecnologías actuales.

---

## 📋 Descripción

QuickCart es un proyecto de e-commerce full-stack que incluye:

- **Frontend moderno**: Interfaz responsive construida con Next.js 15 y Tailwind CSS
- **Autenticación segura**: Sistema de usuarios con Clerk (registro, login, perfiles)
- **Base de datos**: MongoDB Atlas con Mongoose para gestión de datos
- **Panel de vendedor**: Gestión de productos, órdenes e inventario
- **Carrito de compras**: Sistema completo de carrito con checkout
- **Gestión de órdenes**: Seguimiento de pedidos para clientes y vendedores
- **Procesamiento en segundo plano**: Inngest para tareas asíncronas (emails, webhooks)
- **Almacenamiento de imágenes**: Integración con Cloudinary

---

## ✨ Características

-   ✅ **Next.js 15** con App Router y Server Components
-   ✅ **Tailwind CSS** para diseño responsive
-   ✅ **Clerk** para autenticación y gestión de usuarios
-   ✅ **MongoDB Atlas** con caché de conexión optimizado
-   ✅ **Inngest** para procesamiento de eventos y tareas asíncronas
-   ✅ **Cloudinary** para gestión de imágenes de productos
-   ✅ **Panel de vendedor** con gestión completa de productos y órdenes
-   ✅ **Carrito de compras** persistente
-   ✅ **Sistema de direcciones** múltiples por usuario
-   ✅ **Página de órdenes** con historial completo
-   ✅ **Componentes reutilizables** y arquitectura modular
-   ✅ **ESLint** configurado para mantener calidad de código

---

## 🚀 Instalación y Configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/Dariel-dev-cloud/QuickCart.git
cd QuickCart
```

### 2. Instalar dependencias

```bash
npm install --legacy-peer-deps
```

### 3. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```ini
# Public Environment Variables
NEXT_PUBLIC_CURRENCY=$
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=tu_clerk_publishable_key

# Private Environment Variables
CLERK_SECRET_KEY=tu_clerk_secret_key
MONGODB_URI=tu_mongodb_uri
INNGEST_SIGNING_KEY=tu_inngest_signing_key
INNGEST_EVENT_KEY=tu_inngest_event_key

# Cloudinary
CLOUDINARY_CLOUD_NAME=tu_cloudinary_name
CLOUDINARY_API_KEY=tu_cloudinary_api_key
CLOUDINARY_API_SECRET=tu_cloudinary_api_secret
```

### 4. Configurar MongoDB Atlas

1. Crea una cuenta en [MongoDB Atlas](https://cloud.mongodb.com)
2. Crea un nuevo cluster
3. Ve a **Security → Network Access**
4. Agrega tu IP actual o permite todas las IPs (0.0.0.0/0) para desarrollo
5. Copia la connection string y agrégala en `MONGODB_URI`

### 5. Configurar Clerk

1. Crea una cuenta en [Clerk](https://clerk.com)
2. Crea una nueva aplicación
3. Copia las claves y agrégalas en el `.env`

### 6. Probar la conexión a la base de datos

```bash
node test-db.js
```

### 7. Ejecutar en modo desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 📂 Estructura del Proyecto

```
QuickCart/
├── app/                      # Pages y rutas de Next.js
│   ├── (routes)/             # Rutas del cliente
│   │   ├── add-address/      # Agregar direcciones
│   │   ├── all-products/     # Catálogo de productos
│   │   ├── cart/             # Carrito de compras
│   │   ├── my-orders/        # Órdenes del usuario
│   │   ├── order-placed/     # Confirmación de orden
│   │   └── product/[id]/     # Detalle de producto
│   ├── seller/               # Panel del vendedor
│   │   ├── orders/           # Gestión de órdenes
│   │   └── product-list/     # Gestión de productos
│   └── api/                  # API Routes
│       └── inngest/          # Webhooks de Inngest
├── components/               # Componentes React
│   ├── Banner.jsx
│   ├── FeaturedProduct.jsx
│   ├── Footer.jsx
│   ├── HeaderSlider.jsx
│   ├── HomeProducts.jsx
│   ├── Navbar.jsx
│   ├── NewsLetter.jsx
│   ├── OrderSummary.jsx
│   ├── ProductCard.jsx
│   └── seller/               # Componentes del vendedor
├── config/                   # Configuraciones
│   ├── db.js                 # Conexión a MongoDB
│   └── inngest.js            # Cliente de Inngest
├── context/                  # Context API
│   └── AppContext.jsx        # Estado global de la app
├── lib/                      # Utilidades
│   └── authSeller.js         # Autenticación del vendedor
├── assets/                   # Assets estáticos
├── public/                   # Archivos públicos
└── test-db.js                # Script de prueba de DB
```

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Uso |
|------------|-----|
| **Next.js 15** | Framework React con SSR y App Router |
| **React 19** | Biblioteca de UI |
| **Tailwind CSS** | Estilos y diseño responsive |
| **MongoDB** | Base de datos NoSQL |
| **Mongoose** | ODM para MongoDB |
| **Clerk** | Autenticación y gestión de usuarios |
| **Inngest** | Procesamiento de eventos en segundo plano |
| **Cloudinary** | Almacenamiento y optimización de imágenes |
| **ESLint** | Linter para mantener calidad de código |

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Puedes:

- 🎨 Mejorar el diseño y la UI/UX
- ✨ Agregar nuevas funcionalidades
- 🐛 Reportar y corregir bugs
- 📝 Mejorar la documentación
- 🔧 Optimizar el rendimiento
- 🌐 Agregar internacionalización
- ♿ Mejorar la accesibilidad
- 🧪 Agregar tests

Revisa [CONTRIBUTING.md](./CONTRIBUTING.md) para más detalles.

---

## 📝 Scripts Disponibles

```bash
npm run dev          # Iniciar servidor de desarrollo
npm run build        # Crear build de producción
npm run start        # Iniciar servidor de producción
npm run lint         # Ejecutar ESLint
node test-db.js      # Probar conexión a MongoDB
```

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT License**.

---

## 👨‍💻 Autor

**Dariel Ortega Sorzano**  
GitHub: [@Dariel-dev-cloud](https://github.com/Dariel-dev-cloud)

---

## 🌟 Contributors

¡Gracias a todos los que contribuyen a **QuickCart**!

---

## 📞 Soporte

Si tienes problemas o preguntas:

1. Revisa la sección de [Issues](https://github.com/Dariel-dev-cloud/QuickCart/issues)
2. Crea un nuevo issue describiendo tu problema
3. Proporciona detalles: versión de Node.js, sistema operativo, logs de error

---

## 🎯 Roadmap

- [ ] Implementar sistema de pagos (Stripe/PayPal)
- [ ] Agregar reviews y calificaciones de productos
- [ ] Sistema de favoritos/wishlist
- [ ] Notificaciones en tiempo real
- [ ] Panel de administración avanzado
- [ ] Análisis y reportes de ventas
- [ ] Sistema de cupones y descuentos
- [ ] Búsqueda avanzada con filtros
- [ ] Internacionalización (i18n)
- [ ] PWA (Progressive Web App)
- [ ] Tests automatizados

---

⭐ **Si te gusta este proyecto, dale una estrella en GitHub!**