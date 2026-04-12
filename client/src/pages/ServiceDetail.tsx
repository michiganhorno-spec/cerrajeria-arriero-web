'use client';

import { useState } from 'react';
import { useLocation, Link } from 'wouter';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';

const serviceData = {
  'puertas-correderas-automaticas': {
    seo_content: `## Puertas Correderas Automáticas Profesionales en Talavera de la Reina

Fabricamos e instalamos puertas correderas automáticas de hierro y aluminio soldado con tecnología de última generación. Sistemas de apertura suave, silenciosa y segura para garajes, accesos comerciales y residenciales.

### Características de Nuestras Puertas Correderas Automáticas

- **Sistemas Motorizados**: Apertura automática suave y silenciosa
- **Control Remoto**: Mandos a distancia profesionales incluidos
- **Hierro y Aluminio Soldado**: Fabricación resistente y duradera
- **Seguridad Garantizada**: Sistemas de cierre automático y controlado
- **Instalación Profesional**: Equipo especializado con garantía

### Servicios en Talavera de la Reina y Alrededores

Instalamos puertas correderas automáticas en Talavera de la Reina, Montecarlo, Prado del Arca, Pueblanueva, El Chaparral, Lucillos y pueblos cercanos. Soluciones personalizadas para cada proyecto.

### Aplicaciones

- Garajes residenciales y comerciales
- Accesos a naves industriales
- Puertas de entrada a comercios
- Cerramientos de aparcamientos
- Accesos de seguridad controlada

### Tecnología Incluida

- Motores de última generación
- Sistemas de seguridad avanzados
- Control remoto profesional
- Sensores de movimiento opcionales
- Sistemas de emergencia manual

### Mantenimiento y Reparación

Ofrecemos servicios de mantenimiento preventivo y reparación especializada para todas las puertas correderas automáticas.

### Contacta con Nosotros

Solicita presupuesto para tu puerta corredera automática personalizada. Más de 40 años de experiencia en carpintería metálica.`,
    
    title: 'Puertas Correderas Automáticas',
    description: 'Puertas correderas automáticas de hierro y aluminio soldado. Fabricación e instalación profesional en Talavera de la Reina y pueblos cercanos.',
    gallery: [
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-correderas-automaticas-talavera-reina_bcd8e5ee.jpg",
                  title: "Puerta Corredera Automática Talavera de la Reina - Sistema Motorizado",
                  alt: "Puerta corredera automática en Talavera de la Reina y alrededores con sistema motorizado profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-puertas-correderas-automaticas-talavera-reina_08f0a94d.jpg",
                  title: "Puerta Corredera Automática Pepino - Hierro Soldado",
                  alt: "Puerta corredera automática en Pepino y Talavera con hierro soldado"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-puertas-correderas-automaticas-talavera-reina_e7681138.jpg",
                  title: "Puerta Corredera Automática Cebolla - Control de Acceso",
                  alt: "Puerta corredera automática en Cebolla con control de acceso"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-puertas-correderas-automaticas-talavera-reina_5b3550f2.jpg",
                  title: "Puerta Corredera Automática Mejorada - Instalación Profesional",
                  alt: "Puerta corredera automática en Mejorada con instalación profesional"
                }
              ,
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-correderas-01-52588611_2179120735443021_5408929809394827264_n_bd693a87.jpg",
                  title: "Puerta Corredera Automática en Talavera de la Reina - Control de Acceso",
                  alt: "Puerta Corredera Automática en Talavera de la Reina Control de Acceso"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-correderas-03-IMG-20201126-WA0010_e9309add.jpg",
                  title: "Puerta Corredera Motorizada en Montecarlo - Sistema Profesional",
                  alt: "Puerta Corredera Motorizada en Montecarlo Sistema Profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-correderas-04-IMG20240213153926_af510ccf.jpg",
                  title: "Acceso Automático en Prado del Arca - Puerta Corredera Segura",
                  alt: "Acceso Automático en Prado del Arca Puerta Corredera Segura"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-correderas-05-IMG20240213154204_3726e8e1.jpg",
                  title: "Puerta Corredera Automática en Pueblanueva - Control de Acceso",
                  alt: "Puerta Corredera Automática en Pueblanueva Control de Acceso"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-correderas-06-IMG20250612112032_5fe008fc.jpg",
                  title: "Puerta Corredera Motorizada en El Chaparral - Sistema Profesional",
                  alt: "Puerta Corredera Motorizada en El Chaparral Sistema Profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-correderas-07-IMG20250626115424_0bcde9e1.jpg",
                  title: "Acceso Automático en Talavera de la Reina - Puerta Corredera Segura",
                  alt: "Acceso Automático en Talavera de la Reina Puerta Corredera Segura"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-correderas-08-IMG_20160714_144644_3078dbb7.jpg",
                  title: "Puerta Corredera Automática en Montecarlo - Control de Acceso",
                  alt: "Puerta Corredera Automática en Montecarlo Control de Acceso"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-correderas-09-IMG_20191009_164611_285e9e90.jpg",
                  title: "Puerta Corredera Motorizada en Prado del Arca - Sistema Profesional",
                  alt: "Puerta Corredera Motorizada en Prado del Arca Sistema Profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-correderas-10-IMG_20211018_115325_3acacc26.jpg",
                  title: "Acceso Automático en Pueblanueva - Puerta Corredera Segura",
                  alt: "Acceso Automático en Pueblanueva Puerta Corredera Segura"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-correderas-11-IMG_20221028_101439_1314bcf0.jpg",
                  title: "Puerta Corredera Automática en El Chaparral - Control de Acceso",
                  alt: "Puerta Corredera Automática en El Chaparral Control de Acceso"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-correderas-12-IMG_20230206_114525_e1cd3f63.jpg",
                  title: "Puerta Corredera Motorizada en Talavera de la Reina - Sistema Profesional",
                  alt: "Puerta Corredera Motorizada en Talavera de la Reina Sistema Profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-correderas-portada_24f45dd5.jpg",
                  title: "Acceso Automático en Montecarlo - Puerta Corredera Segura",
                  alt: "Acceso Automático en Montecarlo Puerta Corredera Segura"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-correderas-02-DSC03837_e35f0e44.JPG",
                  title: "Puerta Corredera Automática en Prado del Arca - Control de Acceso",
                  alt: "Puerta Corredera Automática en Prado del Arca Control de Acceso"
                }
              ]
  },
  'puertas-seccionales': {
    seo_content: `## Puertas Seccionales Automáticas en Talavera de la Reina

Fabricamos e instalamos puertas seccionales automáticas de alta calidad en acero galvanizado y aluminio soldado. Sistemas de apertura suave y silenciosa con mecanismos de seguridad avanzados para garajes, naves industriales y accesos comerciales.

### Características de Nuestras Puertas Seccionales

- **Sistemas Automáticos**: Apertura suave, silenciosa y segura
- **Acero Galvanizado y Aluminio**: Fabricación resistente y duradera
- **Mecanismos de Seguridad**: Sistemas avanzados de cierre y control
- **Panel Sándwich**: Aislamiento térmico y acústico profesional
- **Instalación Profesional**: Equipo especializado con garantía

### Servicios en Talavera de la Reina

Instalamos puertas seccionales automáticas en Talavera de la Reina, Pepino, Cebolla, Mejorada y comarca. Soluciones personalizadas para cada proyecto.

### Aplicaciones

- Garajes residenciales y comerciales
- Naves industriales y almacenes
- Accesos a comercios y oficinas
- Cerramientos de aparcamientos
- Accesos de seguridad controlada

### Acabados Disponibles

- Lacado al horno RAL
- Acabado madera
- Acabado profesional
- Panel sándwich con aislamiento

### Mantenimiento y Reparación

Ofrecemos servicios de mantenimiento preventivo y reparación especializada para todas las puertas seccionales automáticas.

### Contacta con Nosotros

Solicita presupuesto para tu puerta seccional personalizada. Más de 40 años de experiencia en carpintería metálica.`,
    
    title: 'Puertas Seccionales',
    description: 'Puertas seccionales automáticas de acero galvanizado y aluminio. Fabricación e instalación profesional en Talavera de la Reina y pueblos cercanos.',
    gallery: [
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puerta-seccional-talavera-reina-1_8e112a6e.jpg",
                  title: "Puerta Seccional Panel Sandwich Talavera de la Reina - Acabado Madera Automatizada",
                  alt: "Puerta Seccional Panel Sandwich Talavera de la Reina - Acabado Madera Automatizada con Motor"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puerta-seccional-automatica-talavera-2_0bb6558e.jpg",
                  title: "Puerta Seccional Panel Sandwich Pepino - Lacado al Horno RAL Automatizada",
                  alt: "Puerta Seccional Panel Sandwich Pepino - Lacado al Horno RAL Automatizada con Motor"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puerta-seccional-garaje-talavera-3_965be917.jpg",
                  title: "Puerta Seccional Panel Sandwich Cebolla - Acabado Profesional Automatizada",
                  alt: "Puerta Seccional Panel Sandwich Cebolla - Acabado Profesional Automatizada con Motor"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puerta-seccional-metalica-talavera-4_7390da26.jpg",
                  title: "Puerta Seccional Panel Sandwich Mejorada - Lacado al Horno Automatizada",
                  alt: "Puerta Seccional Panel Sandwich Mejorada - Lacado al Horno Automatizada con Motor"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puerta-seccional-hierro-talavera-5_9ed978ba.jpg",
                  title: "Puerta Seccional Panel Sandwich Talavera la Nueva - Acabado Madera Automatizada",
                  alt: "Puerta Seccional Panel Sandwich Talavera la Nueva - Acabado Madera Automatizada con Motor"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puerta-seccional-aluminio-talavera-6_b6e321dd.jpg",
                  title: "Puerta Seccional Panel Sandwich Belvis de la Jara - Lacado al Horno RAL Automatizada",
                  alt: "Puerta Seccional Panel Sandwich Belvis de la Jara - Lacado al Horno RAL Automatizada con Motor"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puerta-seccional-seguridad-talavera-7_ce76b07f.jpg",
                  title: "Puerta Seccional Panel Sandwich Sevilleja - Acabado Profesional Automatizada",
                  alt: "Puerta Seccional Panel Sandwich Sevilleja - Acabado Profesional Automatizada con Motor"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puerta-seccional-personalizada-talavera-8_4001a2bf.jpg",
                  title: "Puerta Seccional Panel Sandwich Cervera de los Montes - Lacado al Horno Automatizada",
                  alt: "Puerta Seccional Panel Sandwich Cervera de los Montes - Lacado al Horno Automatizada con Motor"
                }
              ]
  },
  'rejas-seguridad': {
    seo_content: `## Rejas de Seguridad Profesionales en Talavera de la Reina

Ofrecemos rejas de seguridad personalizadas fabricadas en hierro macizo y aluminio soldado de la más alta calidad. Nuestras rejas combinan protección máxima con diseño profesional adaptado a tu estilo arquitectónico.

### Características de Nuestras Rejas de Seguridad

- **Hierro Macizo Forjado**: Fabricación artesanal con soldadura de calidad profesional
- **Diseños Personalizados**: Adaptamos cada reja a tus necesidades y preferencias estéticas
- **Acabados Profesionales**: Lacado al horno y tratamientos anticorrosión garantizados
- **Instalación Segura**: Equipo profesional con garantía de instalación rápida
- **Resistencia Total**: Protección garantizada contra intentos de robo y vandalismo

### Servicios de Rejas en Talavera de la Reina

Fabricamos e instalamos rejas de seguridad en Talavera de la Reina, Cebolla, Seguirilla, Mejorada, Talavera la Nueva y pueblos cercanos. Nuestro equipo se desplaza a cualquier zona para realizar trabajos personalizados.

### Tipos de Rejas que Fabricamos

- Rejas para ventanas de hierro forjado
- Rejas para puertas y balcones
- Rejas de seguridad con diseño tradicional
- Rejas modernas y contemporáneas
- Rejas con adornos y detalles artesanales
- Rejas de aluminio lacado

### Proceso de Fabricación

Cada reja se fabrica de forma artesanal, respetando los estándares de calidad más exigentes. Utilizamos hierro macizo de primera calidad, soldadura profesional y acabados de larga duración.

### Garantía y Mantenimiento

Todas nuestras rejas incluyen garantía de fabricación e instalación. Ofrecemos servicios de mantenimiento y reparación especializada.

### Contacta con Nosotros

Solicita presupuesto sin compromiso para tu reja de seguridad personalizada. Más de 40 años de experiencia en carpintería metálica en Talavera de la Reina.`,
    
    title: 'Rejas de Seguridad',
    description: 'Rejas de seguridad de hierro soldado a medida. Protección profesional para ventanas y puertas en Talavera de la Reina.',
    gallery: [
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/reja-seguridad-mejorada-4_d03023be.jpg",
                  title: "Reja de Seguridad Tradicional Mejorada - Hierro Negro Forjado Clasico",
                  alt: "Reja de seguridad tradicional en Mejorada con hierro forjado negro, diseño clasico y proteccion garantizada para accesos"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/reja-aluminio-azul-talavera-reina_1d126599.jpg",
                  title: "Reja de Seguridad Aluminio Azul Talavera de la Reina - Diseño Moderno Elegante",
                  alt: "Reja de seguridad de aluminio lacado azul en Talavera de la Reina, diseño moderno y elegante para ventanas y balcones"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/reja-hierro-gris-moderno-talavera_133b6b01.jpg",
                  title: "Reja de Seguridad Hierro Gris Moderno Talavera - Diseño Contemporaneo",
                  alt: "Reja de seguridad moderna en Talavera con hierro soldado lacado gris, diseño contemporaneo y proteccion profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/reja-barrotes-macizos-adornos-talavera-1_1e1e8d35.jpg",
                  title: "Reja de Seguridad Barrotes Macizos con Adornos Talavera de la Reina - Hierro Forjado Artesanal",
                  alt: "Reja de seguridad con barrotes macizos y adornos en Talavera de la Reina, hierro forjado artesanal, proteccion y elegancia"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/reja-barrotes-adornos-lacado-al-horno-talavera-2_84822e12.jpg",
                  title: "Reja de Seguridad Barrotes con Adornos Lacado al Horno Talavera - Acabado Profesional",
                  alt: "Reja de seguridad con barrotes y adornos lacados al horno en Talavera, acabado profesional y resistencia garantizada"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/reja-forja-tradicional-talavera-3_2453fb77.jpg",
                  title: "Reja de Forja Tradicional Talavera de la Reina - Hierro Macizo Artesanal",
                  alt: "Reja de forja tradicional en Talavera de la Reina, hierro macizo artesanal, diseño clasico y proteccion total"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/reja-castellana-lacado-al-horno-talavera-4_4e8f0ee7.jpg",
                  title: "Reja Modelo Castellana Lacado al Horno Talavera - Diseño Tradicional Elegante",
                  alt: "Reja modelo castellana lacada al horno en Talavera de la Reina, diseño tradicional elegante, proteccion y estilo"
                }
              ,
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/rejas-01-IMG20250120120057_7d60377b.jpg",
                  title: "Reja de Seguridad en Talavera de la Reina - Hierro Macizo",
                  alt: "Reja de Seguridad en Talavera de la Reina Hierro Macizo"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/rejas-02-IMG_20160830_104814_846574e5.jpg",
                  title: "Protección Ventana en Cebolla - Reja Personalizada",
                  alt: "Protección Ventana en Cebolla Reja Personalizada"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/rejas-03-IMG_20210928_104226_4725745b.jpg",
                  title: "Reja Profesional en Seguirilla - Acabado de Calidad",
                  alt: "Reja Profesional en Seguirilla Acabado de Calidad"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/rejas-04-reja_d96fd5df.jpg",
                  title: "Reja de Seguridad en Mejorada - Hierro Macizo",
                  alt: "Reja de Seguridad en Mejorada Hierro Macizo"
                }
              ]
  },
  'puertas-entrada-vivienda': {
    seo_content: `## Puertas de Entrada a Vivienda en Talavera de la Reina

Fabricamos puertas de entrada a vivienda personalizadas en hierro y aluminio soldado. Seguridad y elegancia para tu hogar con diseños adaptados a cualquier fachada.

### Características de Nuestras Puertas de Entrada

- **Hierro y Aluminio Soldado**: Fabricación resistente y profesional
- **Diseños Personalizados**: Adaptados a tu fachada y preferencias
- **Seguridad Avanzada**: Sistemas de cierre de seguridad profesionales
- **Aislamiento Térmico y Acústico**: Confort garantizado
- **Instalación Profesional**: Equipo especializado con garantía

### Servicios en Talavera de la Reina

Fabricamos puertas de entrada en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvís, Sevilleja, Cervera y pueblos cercanos.

### Tipos de Puertas

- Puertas de entrada de hierro forjado
- Puertas de entrada de aluminio
- Puertas con cristales de seguridad
- Puertas con diseños personalizados
- Puertas con acabados profesionales

### Ventajas de Nuestras Puertas

- Seguridad total para tu hogar
- Diseño elegante y moderno
- Aislamiento térmico superior
- Reducción de ruido exterior
- Durabilidad garantizada

### Garantía y Mantenimiento

Todas nuestras puertas de entrada incluyen garantía de fabricación e instalación. Ofrecemos servicios de mantenimiento especializado.

### Contacta con Nosotros

Solicita presupuesto para tu puerta de entrada personalizada. Más de 40 años de experiencia en carpintería metálica.`,
    
    title: 'Puertas de Entrada a Vivienda',
    description: 'Puertas de entrada a vivienda de hierro y aluminio. Seguridad y diseño personalizado para tu hogar en Talavera de la Reina.',
    gallery: [
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-entrada-vivienda-talavera-reina_ce7f6c3f.jpg",
                  title: "Puerta de Entrada Talavera de la Reina - Hierro y Aluminio",
                  alt: "Puerta de entrada en Talavera con hierro y aluminio"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-puertas-entrada-vivienda-talavera-reina_5d91fc72.jpg",
                  title: "Puerta de Entrada Pepino - Diseño Elegante",
                  alt: "Puerta de entrada en Pepino con diseño elegante"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-puertas-entrada-vivienda-talavera-reina_eec65455.jpg",
                  title: "Puerta de Entrada Cebolla - Seguridad Garantizada",
                  alt: "Puerta de entrada en Cebolla con seguridad garantizada"
                }
              ,
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-entrada-01-IMG-20190928-WA0012_93e4eca9.jpg",
                  title: "Puerta de Entrada en Talavera de la Reina - Seguridad Garantizada",
                  alt: "Puerta de Entrada en Talavera de la Reina Seguridad Garantizada"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-entrada-02-IMG-20201126-WA0011_38e2ac49.jpg",
                  title: "Puerta Vivienda en Pepino - Hierro y Aluminio",
                  alt: "Puerta Vivienda en Pepino Hierro y Aluminio"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-entrada-03-IMG20240201161500_1fb8b4e1.jpg",
                  title: "Acceso Principal en Cebolla - Diseño Elegante",
                  alt: "Acceso Principal en Cebolla Diseño Elegante"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-entrada-04-IMG_20190221_103245_974085a0.jpg",
                  title: "Puerta de Entrada en Mejorada - Seguridad Garantizada",
                  alt: "Puerta de Entrada en Mejorada Seguridad Garantizada"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-entrada-05-IMG_20210728_121954_00635ec4.jpg",
                  title: "Puerta Vivienda en Talavera la Nueva - Hierro y Aluminio",
                  alt: "Puerta Vivienda en Talavera la Nueva Hierro y Aluminio"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-entrada-06-IMG_20230615_191842_d02e05de.jpg",
                  title: "Acceso Principal en Talavera de la Reina - Diseño Elegante",
                  alt: "Acceso Principal en Talavera de la Reina Diseño Elegante"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-entrada-07-IMG_20231011_121100_4e41158a.jpg",
                  title: "Puerta de Entrada en Pepino - Seguridad Garantizada",
                  alt: "Puerta de Entrada en Pepino Seguridad Garantizada"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-entrada-08-IMG_20231011_121139_e7fd95e8.jpg",
                  title: "Puerta Vivienda en Cebolla - Hierro y Aluminio",
                  alt: "Puerta Vivienda en Cebolla Hierro y Aluminio"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-entrada-portada_938a5f08.jpg",
                  title: "Acceso Principal en Mejorada - Diseño Elegante",
                  alt: "Acceso Principal en Mejorada Diseño Elegante"
                }
              ]
  },
  'puertas-portones': {
    seo_content: `## Puertas y Portones Automáticos en Talavera de la Reina

Fabricamos puertas y portones automáticos de última generación en hierro y aluminio soldado. Sistemas de apertura suave, segura y controlada para garajes y accesos.

### Características de Nuestras Puertas y Portones

- **Sistemas Automáticos**: Apertura automática con control remoto
- **Hierro y Aluminio Soldado**: Fabricación resistente y duradera
- **Seguridad Avanzada**: Sistemas de cierre automático y controlado
- **Instalación Profesional**: Equipo especializado con garantía
- **Tecnología Moderna**: Mandos a distancia y controles de acceso

### Servicios en Talavera de la Reina

Instalamos puertas y portones en Talavera de la Reina, Cornicabral, Cervines, Las Nieves, Espinosillo y pueblos cercanos.

### Aplicaciones

- Garajes residenciales y comerciales
- Accesos a naves industriales
- Puertas de entrada a comercios
- Cerramientos de aparcamientos
- Accesos de seguridad controlada

### Tecnología Incluida

- Motores de última generación
- Sistemas de seguridad avanzados
- Control remoto profesional
- Sensores de movimiento opcionales
- Sistemas de emergencia manual

### Mantenimiento y Reparación

Ofrecemos servicios de mantenimiento preventivo y reparación especializada para todas las puertas y portones automáticos.

### Contacta con Nosotros

Solicita presupuesto para tu puerta o portón automático personalizado. Más de 40 años de experiencia en carpintería metálica.`,
    
    title: 'Puertas y Portones',
    description: 'Puertas y portones de hierro y aluminio a medida. Fabricación profesional para garajes y accesos en Talavera de la Reina.',
    gallery: [
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puerta-porton-automatico-talavera-1_46a7a963.jpg",
                  title: "Puerta Automática Talavera de la Reina - Sistema Motorizado Profesional",
                  alt: "Puerta automática en Talavera de la Reina con sistema motorizado profesional, apertura suave y controlada"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puerta-porton-automatico-talavera-2_f1dd0fd1.jpg",
                  title: "Puerta Automática Pepino - Hierro Soldado Motorizado",
                  alt: "Puerta automática en Pepino con hierro soldado y sistema motorizado, seguridad y confort garantizados"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puerta-porton-automatico-talavera-3_d7f6d033.jpg",
                  title: "Puerta Automática Cebolla - Control de Acceso Avanzado",
                  alt: "Puerta automática en Cebolla con control de acceso avanzado, mando a distancia y seguridad profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puerta-porton-automatico-talavera-8_f91d15c0.jpg",
                  title: "Puerta y Portón Automático Talavera - Instalación Profesional",
                  alt: "Puerta y portón automático en Talavera de la Reina con instalación profesional y mantenimiento garantizado"
                }
              ,
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-portones-02-IMG-20201215-WA0001_07853c16.jpg",
                  title: "Puerta Portón en Talavera de la Reina - Automatismo Profesional",
                  alt: "Puerta Portón en Talavera de la Reina Automatismo Profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-portones-03-IMG-20230214-WA0005_e414fdfa.jpg",
                  title: "Portón Garaje en Cornicabral - Seguridad Máxima",
                  alt: "Portón Garaje en Cornicabral Seguridad Máxima"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-portones-04-IMG20250430171643_965b1d38.jpg",
                  title: "Puerta Automática en Cervines - Sistema Motorizado",
                  alt: "Puerta Automática en Cervines Sistema Motorizado"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-portones-05-IMG_20190522_122246_34b6a8ef.jpg",
                  title: "Puerta Portón en Las Nieves - Automatismo Profesional",
                  alt: "Puerta Portón en Las Nieves Automatismo Profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-portones-06-IMG_20200806_125505_463b2013.jpg",
                  title: "Portón Garaje en Espinosillo - Seguridad Máxima",
                  alt: "Portón Garaje en Espinosillo Seguridad Máxima"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-portones-07-IMG_20200916_104417_06f52457.jpg",
                  title: "Puerta Automática en Talavera de la Reina - Sistema Motorizado",
                  alt: "Puerta Automática en Talavera de la Reina Sistema Motorizado"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-portones-08-IMG_20230412_113102_ceb0839b.jpg",
                  title: "Puerta Portón en Cornicabral - Automatismo Profesional",
                  alt: "Puerta Portón en Cornicabral Automatismo Profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-portones-portada_daae3efc.jpg",
                  title: "Portón Garaje en Cervines - Seguridad Máxima",
                  alt: "Portón Garaje en Cervines Seguridad Máxima"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-portones-01-DSC03835_061ed6f2.JPG",
                  title: "Puerta Automática en Las Nieves - Sistema Motorizado",
                  alt: "Puerta Automática en Las Nieves Sistema Motorizado"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-portones-09-P1010034_589b62f2.JPG",
                  title: "Puerta Portón en Espinosillo - Automatismo Profesional",
                  alt: "Puerta Portón en Espinosillo Automatismo Profesional"
                }
              ]
  },
  'puertas-portales-comunidad': {
    seo_content: `## Puertas de Portales para Comunidades en Talavera de la Reina

Diseñamos y fabricamos puertas de portales para comunidades con sistemas de seguridad y control de acceso. Soluciones modernas y seguras para edificios residenciales.

### Características de Nuestras Puertas de Portal

- **Hierro y Aluminio Soldado**: Fabricación resistente y profesional
- **Cristal de Seguridad**: Protección y visibilidad garantizadas
- **Control de Acceso**: Sistemas modernos de seguridad
- **Instalación Profesional**: Equipo especializado con garantía
- **Diseño Funcional**: Adaptado a comunidades residenciales

### Servicios en Talavera de la Reina

Instalamos puertas de portal en Talavera de la Reina, Pepino, Cebolla, Mejorada, comarca y pueblos cercanos.

### Características de Seguridad

- Cristal templado de seguridad
- Sistemas de cierre automático
- Control de acceso profesional
- Cerraduras de seguridad
- Sistemas de intercomunicación

### Ventajas de Nuestras Puertas

- Seguridad garantizada
- Diseño moderno y funcional
- Fácil mantenimiento
- Durabilidad garantizada
- Acabados de calidad

### Garantía y Mantenimiento

Todas nuestras puertas de portal incluyen garantía de fabricación e instalación. Ofrecemos servicios de mantenimiento especializado.

### Contacta con Nosotros

Solicita presupuesto para tu puerta de portal personalizada. Más de 40 años de experiencia en carpintería metálica.`,
    
    title: 'Puertas de Portales para Comunidades',
    description: 'Puertas de portales para comunidades de hierro y aluminio. Seguridad y control de acceso profesional en Talavera de la Reina.',
    gallery: [
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-portales-comunidad-talavera-reina_b52351ee.jpg",
                  title: "Puerta de Portal Talavera de la Reina - Acceso Comunitario",
                  alt: "Puerta de portal en Talavera para acceso comunitario"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-puertas-portales-comunidad-talavera-reina_a6a20823.jpg",
                  title: "Puerta de Portal Pepino - Seguridad Comunitaria",
                  alt: "Puerta de portal en Pepino para seguridad comunitaria"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-puertas-portales-comunidad-talavera-reina_6bcd4955.jpg",
                  title: "Puerta de Portal Cebolla - Cristal de Seguridad",
                  alt: "Puerta de portal en Cebolla con cristal de seguridad"
                }
              ,
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/portales-01-DSC03849_fda6941e.jpg",
                  title: "Puerta de Portal en Talavera de la Reina - Cristal de Seguridad",
                  alt: "Puerta de Portal en Talavera de la Reina Cristal de Seguridad"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/portales-02-IMG-20230228-WA0000_9512e82f.jpg",
                  title: "Acceso Comunitario en Pepino - Control Profesional",
                  alt: "Acceso Comunitario en Pepino Control Profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/portales-03-IMG20240704130233_77dd07c2.jpg",
                  title: "Puerta Automática en Cebolla - Sistema de Acceso",
                  alt: "Puerta Automática en Cebolla Sistema de Acceso"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/portales-04-IMG_20160207_182031_83c11f22.jpg",
                  title: "Puerta de Portal en Mejorada - Cristal de Seguridad",
                  alt: "Puerta de Portal en Mejorada Cristal de Seguridad"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/portales-05-IMG_20170808_160746_7bc2b5bd.jpg",
                  title: "Acceso Comunitario en Comarca - Control Profesional",
                  alt: "Acceso Comunitario en Comarca Control Profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/portales-06-IMG_20190306_152416_99a1d93f.jpg",
                  title: "Puerta Automática en Talavera de la Reina - Sistema de Acceso",
                  alt: "Puerta Automática en Talavera de la Reina Sistema de Acceso"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/portales-07-IMG_20211020_174002_c704d935.jpg",
                  title: "Puerta de Portal en Pepino - Cristal de Seguridad",
                  alt: "Puerta de Portal en Pepino Cristal de Seguridad"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/portales-portada_5383c39f.jpg",
                  title: "Acceso Comunitario en Cebolla - Control Profesional",
                  alt: "Acceso Comunitario en Cebolla Control Profesional"
                }
              ]
  },
  'cerramientos-industriales': {
    seo_content: `## Cerramientos Industriales de Hierro y Cristal en Talavera de la Reina

Diseñamos y fabricamos cerramientos industriales de hierro y cristal para separadores de espacio. Soluciones modernas para oficinas, almacenes y espacios industriales.

### Características de Nuestros Cerramientos

- **Estructura de Hierro Soldado**: Fabricación resistente y profesional
- **Cristal Templado**: Seguridad y visibilidad garantizadas
- **Diseño Funcional**: Adaptado a tus necesidades de espacio
- **Instalación Profesional**: Equipo especializado con garantía
- **Acabados de Calidad**: Resistencia y durabilidad garantizadas

### Servicios en Talavera de la Reina

Instalamos cerramientos en Talavera de la Reina, Hinojosa de San Vicente, Marrupe, Sotillo de las Palomas, Serranillos y pueblos cercanos.

### Aplicaciones

- Oficinas y despachos
- Almacenes y naves
- Talleres industriales
- Laboratorios
- Espacios comerciales

### Ventajas de Nuestros Cerramientos

- Visibilidad interior y exterior
- Aislamiento acústico
- Fácil instalación y desmontaje
- Diseño profesional
- Bajo mantenimiento

### Garantía y Mantenimiento

Todos nuestros cerramientos incluyen garantía de fabricación e instalación. Ofrecemos servicios de mantenimiento especializado.

### Contacta con Nosotros

Solicita presupuesto para tu cerramiento industrial personalizado. Más de 40 años de experiencia en carpintería metálica.`,
    
    title: 'Cerramientos Industriales de Hierro y Cristal',
    description: 'Cerramientos industriales de hierro y cristal para separadores de espacio. Diseño profesional para oficinas y fábricas en Talavera de la Reina.',
    gallery: [
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-cerramientos-industriales-hierro-cristal-talavera-reina_95c25621.jpg",
                  title: "Cerramiento Industrial Talavera de la Reina - Hierro y Cristal",
                  alt: "Cerramiento industrial en Talavera con hierro y cristal"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-cerramientos-industriales-hierro-cristal-talavera-reina_be4a5729.jpg",
                  title: "Cerramiento Industrial Pepino - Separador de Espacio",
                  alt: "Cerramiento industrial en Pepino como separador de espacio"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-cerramientos-industriales-hierro-cristal-talavera-reina_d258bc12.jpg",
                  title: "Cerramiento Industrial Cebolla - Cristal Templado",
                  alt: "Cerramiento industrial en Cebolla con cristal templado"
                }
              ,
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/cerramientos-01-IMG20241209171008_6c900aa9.jpg",
                  title: "Cerramiento Industrial en Talavera de la Reina - Hierro y Cristal",
                  alt: "Cerramiento Industrial en Talavera de la Reina Hierro y Cristal"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/cerramientos-02-IMG20250130114904_2c34635c.jpg",
                  title: "Separador de Espacio en Hinojosa de San Vicente - Estructura Profesional",
                  alt: "Separador de Espacio en Hinojosa de San Vicente Estructura Profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/cerramientos-03-IMG_20220217_181138_05ea9b0c.jpg",
                  title: "Cerramiento de Oficina en Marrupe - Cristal Templado",
                  alt: "Cerramiento de Oficina en Marrupe Cristal Templado"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/cerramientos-05-cerramiento1_f3790f7d.jpg",
                  title: "Cerramiento Industrial en Sotillo de las Palomas - Hierro y Cristal",
                  alt: "Cerramiento Industrial en Sotillo de las Palomas Hierro y Cristal"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/cerramientos-portada_82928217.jpg",
                  title: "Separador de Espacio en Serranillos - Estructura Profesional",
                  alt: "Separador de Espacio en Serranillos Estructura Profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/cerramientos-04-P1010032_da08a951.JPG",
                  title: "Cerramiento de Oficina en Talavera de la Reina - Cristal Templado",
                  alt: "Cerramiento de Oficina en Talavera de la Reina Cristal Templado"
                }
              ]
  },
  'pergolas-cubiertas': {
    seo_content: `## Pérgolas y Cubiertas con Panel Sándwich en Talavera de la Reina

Fabricamos pérgolas metálicas y cubiertas con panel sándwich para ampliar tu espacio habitable con protección total. Excelente aislamiento térmico y acústico para terrazas y patios.

### Características de Nuestras Pérgolas

- **Panel Sándwich Aislante**: Excelente aislamiento térmico y acústico
- **Estructura de Hierro y Aluminio**: Fabricación resistente y duradera
- **Diseño Moderno**: Funcional y adaptado a tu espacio
- **Instalación Profesional**: Equipo especializado con garantía
- **Protección Total**: Resistencia a la intemperie garantizada

### Servicios en Talavera de la Reina

Instalamos pérgolas en Talavera de la Reina, Belvís de la Jara, Sevilleja, Cervera de los Montes, Nuño Gómez y pueblos cercanos.

### Aplicaciones

- Terrazas residenciales
- Patios y espacios exteriores
- Zonas de descanso
- Aparcamientos cubiertos
- Espacios comerciales

### Ventajas del Panel Sándwich

- Aislamiento térmico superior
- Reducción de ruido exterior
- Durabilidad garantizada
- Bajo mantenimiento
- Estética moderna

### Garantía y Mantenimiento

Todas nuestras pérgolas incluyen garantía de fabricación e instalación. Ofrecemos servicios de mantenimiento especializado.

### Contacta con Nosotros

Solicita presupuesto para tu pérgola personalizada. Más de 40 años de experiencia en carpintería metálica.`,
    
    title: 'Pérgolas y Cubiertas con Panel Sándwich',
    description: 'Pérgolas y cubiertas con panel sándwich de hierro y aluminio. Protección total para terrazas y patios en Talavera de la Reina.',
    gallery: [
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-pergolas-cubiertas-talavera-reina_ccf48341.jpg",
                  title: "Pérgola y Cubierta Talavera de la Reina - Panel Sándwich",
                  alt: "Pérgola y cubierta en Talavera con panel sándwich"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-pergolas-cubiertas-talavera-reina_5bd5eeb7.jpg",
                  title: "Pérgola Pepino - Aislamiento Térmico",
                  alt: "Pérgola en Pepino con aislamiento térmico"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-pergolas-cubiertas-talavera-reina_368f8f76.jpg",
                  title: "Cubierta Cebolla - Protección Total",
                  alt: "Cubierta en Cebolla con protección total"
                }
              ,
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/pergolas-01-IMG_20210305_103314_e87c9862.jpg",
                  title: "Pérgola Metálica en Talavera de la Reina - Panel Sándwich",
                  alt: "Pérgola Metálica en Talavera de la Reina Panel Sándwich"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/pergolas-02-IMG_20210305_105443_517a3b2e.jpg",
                  title: "Cubierta Profesional en Belvís de la Jara - Aislamiento Térmico",
                  alt: "Cubierta Profesional en Belvís de la Jara Aislamiento Térmico"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/pergolas-03-IMG_20210305_105509_e577ba33.jpg",
                  title: "Pérgola Terraza en Sevilleja - Protección Total",
                  alt: "Pérgola Terraza en Sevilleja Protección Total"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/pergolas-04-IMG_20211028_161903_fee72a7f.jpg",
                  title: "Pérgola Metálica en Cervera de los Montes - Panel Sándwich",
                  alt: "Pérgola Metálica en Cervera de los Montes Panel Sándwich"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/pergolas-portada_08ece2ac.jpg",
                  title: "Cubierta Profesional en Nuño Gómez - Aislamiento Térmico",
                  alt: "Cubierta Profesional en Nuño Gómez Aislamiento Térmico"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/pergolas-06-received_966731537436431_e3dad23c.jpeg",
                  title: "Pérgola Terraza en Talavera de la Reina - Protección Total",
                  alt: "Pérgola Terraza en Talavera de la Reina Protección Total"
                }
              ]
  },
  'cancelas-hierro': {
    seo_content: `## Cancelas de Hierro a Medida en Talavera de la Reina

Diseñamos y fabricamos cancelas de hierro personalizadas para fincas, propiedades y accesos residenciales. Combinan resistencia estructural con diseño profesional adaptado a tu estilo.

### Características de Nuestras Cancelas

- **Hierro Macizo**: Fabricación resistente y duradera
- **Diseños Personalizados**: Adaptados a tu arquitectura y necesidades
- **Acabados Profesionales**: Lacado al horno y tratamientos anticorrosión
- **Instalación Segura**: Equipo profesional con garantía
- **Protección Total**: Seguridad y elegancia para tu propiedad

### Servicios en Talavera de la Reina

Fabricamos cancelas en Talavera de la Reina, Real de San Vicente, San Román, Pueblanueva, Castillo Bayuela y pueblos cercanos.

### Tipos de Cancelas

- Cancelas tradicionales de hierro forjado
- Cancelas modernas y contemporáneas
- Cancelas con automatismos
- Cancelas de doble hoja
- Cancelas con diseños personalizados

### Proceso de Fabricación

Cada cancela se fabrica artesanalmente con hierro de primera calidad, soldadura profesional y acabados de larga duración.

### Garantía y Mantenimiento

Todas nuestras cancelas incluyen garantía de fabricación e instalación. Ofrecemos servicios de mantenimiento y reparación especializada.

### Contacta con Nosotros

Solicita presupuesto para tu cancela de hierro personalizada. Más de 40 años de experiencia en carpintería metálica.`,
    
    title: 'Cancelas de Hierro',
    description: 'Cancelas de hierro a medida. Acceso seguro y elegante para fincas y propiedades en Talavera de la Reina.',
    gallery: [
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-cancelas-hierro-talavera-reina_5c124a04.jpg",
                  title: "Cancela de Hierro Talavera de la Reina - Diseño Tradicional",
                  alt: "Cancela de hierro en Talavera con diseño tradicional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/10-cancelas-hierro-talavera-reina_1adf2291.jpg",
                  title: "Cancela de Hierro Pepino - Acabado Profesional",
                  alt: "Cancela de hierro en Pepino con acabado profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/11-cancelas-hierro-talavera-reina_b89a2a1c.jpg",
                  title: "Cancela de Hierro Cebolla - Seguridad Garantizada",
                  alt: "Cancela de hierro en Cebolla con seguridad garantizada"
                }
              ,
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/cancelas-01-52638728_407893416448731_5071050010733314048_n_c4cbce16.jpg",
                  title: "Cancela de Hierro en Talavera de la Reina - Diseño Tradicional",
                  alt: "Cancela de Hierro en Talavera de la Reina Diseño Tradicional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/cancelas-02-52806621_2230661347198210_4117361340224372736_n_97a75fc9.jpg",
                  title: "Acceso Seguro en Real de San Vicente - Cancela Personalizada",
                  alt: "Acceso Seguro en Real de San Vicente Cancela Personalizada"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/cancelas-03-IMG20250130095956_18f5aec0.jpg",
                  title: "Cancela Automática en San Román - Protección Total",
                  alt: "Cancela Automática en San Román Protección Total"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/cancelas-04-IMG20250527103749_e7deb337.jpg",
                  title: "Cancela de Hierro en Pueblanueva - Diseño Tradicional",
                  alt: "Cancela de Hierro en Pueblanueva Diseño Tradicional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/cancelas-05-IMG_20141222_180107_f69eda09.jpg",
                  title: "Acceso Seguro en Castillo Bayuela - Cancela Personalizada",
                  alt: "Acceso Seguro en Castillo Bayuela Cancela Personalizada"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/cancelas-06-IMG_20180131_110833_c1de96a9.jpg",
                  title: "Cancela Automática en Talavera de la Reina - Protección Total",
                  alt: "Cancela Automática en Talavera de la Reina Protección Total"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/cancelas-07-IMG_20191025_103935_de712213.jpg",
                  title: "Cancela de Hierro en Real de San Vicente - Diseño Tradicional",
                  alt: "Cancela de Hierro en Real de San Vicente Diseño Tradicional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/cancelas-08-IMG_20230214_090314_e0230845.jpg",
                  title: "Acceso Seguro en San Román - Cancela Personalizada",
                  alt: "Acceso Seguro en San Román Cancela Personalizada"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/cancelas-12-SAVE_20190506_174112_3841e933.jpg",
                  title: "Cancela Automática en Pueblanueva - Protección Total",
                  alt: "Cancela Automática en Pueblanueva Protección Total"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/cancelas-13-big-es-puerta-con-ventanuco_bf070fa7.jpg",
                  title: "Cancela de Hierro en Castillo Bayuela - Diseño Tradicional",
                  alt: "Cancela de Hierro en Castillo Bayuela Diseño Tradicional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/cancelas-portada_6caf687a.jpg",
                  title: "Acceso Seguro en Talavera de la Reina - Cancela Personalizada",
                  alt: "Acceso Seguro en Talavera de la Reina Cancela Personalizada"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/cancelas-09-P1010038_3fde97ba.JPG",
                  title: "Cancela Automática en Real de San Vicente - Protección Total",
                  alt: "Cancela Automática en Real de San Vicente Protección Total"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/cancelas-10-P1010050_c3d21ccd.JPG",
                  title: "Cancela de Hierro en San Román - Diseño Tradicional",
                  alt: "Cancela de Hierro en San Román Diseño Tradicional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/cancelas-11-P1010052_72f8c412.JPG",
                  title: "Acceso Seguro en Pueblanueva - Cancela Personalizada",
                  alt: "Acceso Seguro en Pueblanueva Cancela Personalizada"
                }
              ]
  },
  'barandillas-escaleras': {
    seo_content: `## Barandillas, Balcones y Escaleras de Hierro en Talavera de la Reina

Diseñamos y fabricamos barandillas, balcones y escaleras de hierro a medida con diseños clásicos y contemporáneos. Seguridad y estética garantizadas para tu hogar o negocio.

### Características de Nuestras Barandillas

- **Hierro Soldado**: Fabricación artesanal con soldadura profesional
- **Diseños Personalizados**: Clásicos y contemporáneos
- **Acabados Profesionales**: Lacado al horno y tratamientos anticorrosión
- **Instalación Segura**: Equipo profesional con garantía
- **Resistencia Estructural**: Durabilidad garantizada

### Servicios en Talavera de la Reina

Fabricamos barandillas en Talavera de la Reina, Pepino, Castillo Bayuela, Mejorada, Cebolla y pueblos cercanos.

### Tipos de Barandillas

- Barandillas de hierro forjado tradicional
- Barandillas modernas y contemporáneas
- Barandillas para escaleras
- Barandillas para balcones
- Barandillas para terrazas

### Aplicaciones

- Escaleras interiores y exteriores
- Balcones residenciales
- Terrazas y patios
- Espacios comerciales
- Edificios públicos

### Ventajas de Nuestras Barandillas

- Seguridad total garantizada
- Diseño elegante y funcional
- Fabricación artesanal de calidad
- Acabados profesionales
- Bajo mantenimiento

### Garantía y Mantenimiento

Todas nuestras barandillas incluyen garantía de fabricación e instalación. Ofrecemos servicios de mantenimiento especializado.

### Contacta con Nosotros

Solicita presupuesto para tu barandilla personalizada. Más de 40 años de experiencia en carpintería metálica.`,
    
    title: 'Barandillas, Balcones y Escaleras',
    description: 'Barandillas, balcones y escaleras de hierro forjado. Seguridad y diseño profesional para interiores y exteriores en Talavera de la Reina.',
    gallery: [
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-barandillas-escaleras-talavera-reina_72e0db48.jpg",
                  title: "Barandilla Escalera Hierro Talavera de la Reina - Diseño Profesional",
                  alt: "Barandilla escalera de hierro en Talavera de la Reina con diseño profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/10-barandillas-escaleras-talavera-reina_44dc43fe.jpg",
                  title: "Barandilla Escalera Interior Pepino - Hierro Forjado",
                  alt: "Barandilla escalera interior en Pepino con hierro forjado"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/11-barandillas-escaleras-talavera-reina_bf8c8876.jpg",
                  title: "Barandilla Escalera Exterior Cebolla - Seguridad Garantizada",
                  alt: "Barandilla escalera exterior en Cebolla con seguridad garantizada"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/12-barandillas-escaleras-talavera-reina_acb5dce0.jpg",
                  title: "Barandilla Balcón Mejorada - Diseño Elegante",
                  alt: "Barandilla balcón en Mejorada con diseño elegante"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/13-barandillas-escaleras-talavera-reina_e263396e.jpg",
                  title: "Barandilla Escalera Profesional Castillo Bayuela - Acabado Artesanal",
                  alt: "Barandilla escalera profesional en Castillo Bayuela con acabado artesanal"
                }
              ,
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/barandillas-02-IMG-20200622-WA0006_e8d8ae34.jpg",
                  title: "Barandilla de Hierro en Talavera de la Reina - Diseño Profesional",
                  alt: "Barandilla de Hierro en Talavera de la Reina Diseño Profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/barandillas-03-IMG20250318091906_30de8bff.jpg",
                  title: "Escalera de Hierro Forjado en Pepino - Seguridad Garantizada",
                  alt: "Escalera de Hierro Forjado en Pepino Seguridad Garantizada"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/barandillas-04-IMG20250429175425_63692a78.jpg",
                  title: "Balcón de Hierro en Castillo Bayuela - Acabado Artesanal",
                  alt: "Balcón de Hierro en Castillo Bayuela Acabado Artesanal"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/barandillas-05-IMG20250821121520_04b51cdf.jpg",
                  title: "Barandilla de Hierro en Mejorada - Diseño Profesional",
                  alt: "Barandilla de Hierro en Mejorada Diseño Profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/barandillas-06-IMG20251028140545_38019670.jpg",
                  title: "Escalera de Hierro Forjado en Cebolla - Seguridad Garantizada",
                  alt: "Escalera de Hierro Forjado en Cebolla Seguridad Garantizada"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/barandillas-07-IMG_20181008_110245_236ab001.jpg",
                  title: "Balcón de Hierro en Talavera de la Reina - Acabado Artesanal",
                  alt: "Balcón de Hierro en Talavera de la Reina Acabado Artesanal"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/barandillas-08-IMG_20200326_101236_67adbae6.jpg",
                  title: "Barandilla de Hierro en Pepino - Diseño Profesional",
                  alt: "Barandilla de Hierro en Pepino Diseño Profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/barandillas-09-IMG_20210909_104059_b09014b7.jpg",
                  title: "Escalera de Hierro Forjado en Castillo Bayuela - Seguridad Garantizada",
                  alt: "Escalera de Hierro Forjado en Castillo Bayuela Seguridad Garantizada"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/barandillas-10-IMG_20210909_104557_c03b3357.jpg",
                  title: "Balcón de Hierro en Mejorada - Acabado Artesanal",
                  alt: "Balcón de Hierro en Mejorada Acabado Artesanal"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/barandillas-11-IMG_20211130_174548_9fc903d2.jpg",
                  title: "Barandilla de Hierro en Cebolla - Diseño Profesional",
                  alt: "Barandilla de Hierro en Cebolla Diseño Profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/barandillas-12-IMG_20220211_111103_26635661.jpg",
                  title: "Escalera de Hierro Forjado en Talavera de la Reina - Seguridad Garantizada",
                  alt: "Escalera de Hierro Forjado en Talavera de la Reina Seguridad Garantizada"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/barandillas-13-SAVE_20210524_192203_dbe83cce.jpg",
                  title: "Balcón de Hierro en Pepino - Acabado Artesanal",
                  alt: "Balcón de Hierro en Pepino Acabado Artesanal"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/barandillas-portada_3563df1c.jpg",
                  title: "Barandilla de Hierro en Castillo Bayuela - Diseño Profesional",
                  alt: "Barandilla de Hierro en Castillo Bayuela Diseño Profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/barandillas-01-DSC03751_f3ad262a.JPG",
                  title: "Escalera de Hierro Forjado en Mejorada - Seguridad Garantizada",
                  alt: "Escalera de Hierro Forjado en Mejorada Seguridad Garantizada"
                }
              ]
  },
  'mobiliario-complementos-metalicos': {
    seo_content: `## Mobiliario y Complementos Metálicos Personalizados en Talavera de la Reina

Fabricamos mobiliario y complementos metálicos a medida en hierro y aluminio soldado para hogar y negocio. Estructuras para mesas, barras de bar estilo industrial, escaleras móviles, tapaderas de pozo con forja artesanal, parrillas para asados, muebles industriales y más.

### Tipos de Mobiliario y Complementos

- **Estructuras para Mesas**: Diseño personalizado en hierro y aluminio
- **Barras de Bar**: Estilo industrial con acabados profesionales
- **Escaleras Móviles**: Hierro soldado resistente y seguro
- **Tapaderas de Pozo**: Forja artesanal con diseños exclusivos
- **Parrillas para Asados**: Hierro forjado a medida
- **Muebles Industriales**: Diseño funcional y resistente

### Características

- **Fabricación Artesanal**: Trabajo manual de calidad
- **Acabados Profesionales**: Pintura y protecciones de calidad
- **Diseño Personalizado**: Adaptado a tus necesidades
- **Hierro y Aluminio Soldado**: Resistencia garantizada
- **Instalación Garantizada**: Equipo especializado

### Aplicaciones

- Hogares y residencias
- Bares y restaurantes
- Comercios y tiendas
- Oficinas y espacios de trabajo
- Espacios exteriores y terrazas

### Contacta con Nosotros

Solicita presupuesto para tu mobiliario y complementos metálicos personalizados. Más de 40 años de experiencia en carpintería metálica.`,
    
    title: 'Mobiliario y Complementos Metálicos',
    description: 'Mobiliario y complementos metálicos personalizados en hierro y aluminio. Fabricación artesanal en Talavera de la Reina.',
    gallery: [
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/Escalera movil talavera_8eef3e8c.jpg",
        title: "Escalera Móvil Talavera de la Reina - Hierro Soldado Profesional",
        alt: "Escalera móvil de hierro en Talavera de la Reina"
      },
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/Estructuras para mesas_4da08d33.jpg",
        title: "Estructuras Metálicas para Mesas - Hierro y Aluminio Talavera",
        alt: "Estructuras metálicas para mesas en Talavera de la Reina"
      },
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/Puertas de chapa lisa con manilla_9b0ffe3a.jpg",
        title: "Puertas de Chapa Lisa con Manilla - Acabado Profesional Talavera",
        alt: "Puertas de chapa lisa con manilla en Talavera de la Reina"
      },
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/barra bar estilo industrial_365456d2.jpg",
        title: "Barra Bar Estilo Industrial - Hierro Forjado Talavera de la Reina",
        alt: "Barra bar estilo industrial en Talavera de la Reina"
      },
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/caperuza a 4 aguas con lamas_d65019ef.jpg",
        title: "Caperuza a 4 Aguas con Lamas - Protección Metálica Talavera",
        alt: "Caperuza a 4 aguas con lamas en Talavera de la Reina"
      },
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/estructura metalica mesa_b95f2ace.jpg",
        title: "Estructura Metálica Mesa - Diseño Personalizado Talavera",
        alt: "Estructura metálica para mesa en Talavera de la Reina"
      },
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/estructura-barra-bar-hierro-estilo-industrial.jpg_3eeba015.jpg",
        title: "Estructura Barra Bar Hierro Estilo Industrial - Talavera de la Reina",
        alt: "Estructura barra bar hierro estilo industrial en Talavera"
      },
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/mueble estilo industrial_700e0bdb.jpg",
        title: "Mueble Estilo Industrial - Hierro Macizo Talavera",
        alt: "Mueble estilo industrial en Talavera de la Reina"
      },
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/parrilla varillas_782591f7.jpg",
        title: "Parrilla Varillas - Hierro Forjado Talavera de la Reina",
        alt: "Parrilla de varillas en Talavera de la Reina"
      },
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/parrilla-hierro-medida-asados-talavera.jpg_fb01f801.jpg",
        title: "Parrilla Hierro a Medida Asados Talavera - Fabricación Artesanal",
        alt: "Parrilla de hierro a medida para asados en Talavera"
      },
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/parrillas metalicas plancha y varilla_801e94ad.jpg",
        title: "Parrillas Metálicas Plancha y Varilla - Profesional Talavera",
        alt: "Parrillas metálicas plancha y varilla en Talavera de la Reina"
      },
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/tapadera de pozo forja artesanal caballo_e6719b01.jpg",
        title: "Tapadera de Pozo Forja Artesanal Caballo - Hierro Macizo",
        alt: "Tapadera de pozo forja artesanal caballo en Talavera"
      },
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/tapadera-hierro-pozo-seguridad-talavera.jpg_78a554af.JPG",
        title: "Tapadera Hierro Pozo Seguridad Talavera - Protección Garantizada",
        alt: "Tapadera de hierro para pozo en Talavera de la Reina"
      }
    ]
  },
  'puestos-caza-aguardos': {
    seo_content: `## Puestos de Caza y Aguardos de Espera en Panel Sándwich en Talavera de la Reina

Fabricamos puestos de caza y aguardos de espera con panel sándwich para aislamiento térmico y acústico. Estructuras de hierro soldado con acabados profesionales. Protección total contra la intemperie.

### Características de Nuestros Puestos de Caza

- **Panel Sándwich**: Aislamiento térmico y acústico profesional
- **Estructura de Hierro**: Hierro soldado resistente y duradero
- **Protección Total**: Resistencia a la intemperie garantizada
- **Diseño Funcional**: Optimizado para comodidad y seguridad
- **Acabados Profesionales**: Pintura y protecciones de calidad

### Tipos de Puestos

- **Aguardos de Espera**: Diseño compacto y eficiente
- **Puestos Elevados**: Estructura de hierro con plataforma
- **Cerramientos Completos**: Protección total contra elementos
- **Sistemas Modulares**: Adaptables a diferentes terrenos

### Aplicaciones

- Turismo cinegético
- Cazaderos y cotos de caza
- Observación de fauna
- Espacios de espera en terrenos

### Ventajas del Panel Sándwich

- **Aislamiento Térmico**: Protección contra temperaturas extremas
- **Aislamiento Acústico**: Reducción de ruido exterior
- **Resistencia**: Durabilidad en condiciones adversas
- **Ligereza**: Fácil instalación y transporte
- **Mantenimiento**: Bajo mantenimiento requerido

### Contacta con Nosotros

Solicita presupuesto para tu puesto de caza personalizado. Más de 40 años de experiencia en carpintería metálica.`,
    
    title: 'Puestos de Caza y Aguardos de Espera',
    description: 'Puestos de caza y aguardos de espera con panel sándwich. Fabricación profesional en Talavera de la Reina.',
    gallery: [
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/WhatsApp Image 2026-03-15 at 08.40.41 (1)_ba2d0cd3.jpeg",
        title: "Puesto de Caza Aguardo Espera - Estructura Metálica Talavera",
        alt: "Puesto de caza aguardo espera en Talavera de la Reina"
      },
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/WhatsApp Image 2026-03-15 at 08.40.42 (1)_6ecf1d11.jpeg",
        title: "Aguardo Espera Panel Sándwich - Protección Intemperie Talavera",
        alt: "Aguardo espera con panel sándwich en Talavera"
      },
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/WhatsApp Image 2026-03-15 at 08.40.42 (2)_44a00d30.jpeg",
        title: "Puesto Caza Estructura Hierro - Diseño Profesional Talavera",
        alt: "Puesto de caza con estructura de hierro en Talavera de la Reina"
      },
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/WhatsApp Image 2026-03-15 at 08.40.42 (3)_bc33e81d.jpeg",
        title: "Aguardo Espera Aislamiento Térmico - Panel Sándwich Talavera",
        alt: "Aguardo espera con aislamiento térmico en Talavera"
      },
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/WhatsApp Image 2026-03-15 at 08.40.42_deb3d256.jpeg",
        title: "Puesto de Caza Completo - Hierro y Panel Sándwich Talavera",
        alt: "Puesto de caza completo en Talavera de la Reina"
      }
    ]
  },
};

export default function ServiceDetail() {
  const [location] = useLocation();
  const slug = location.split('/').pop() || '';
  const service = serviceData[slug as keyof typeof serviceData];
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!service) {
    return <div className="text-center py-20">Servicio no encontrado</div>;
  }

  const currentPhoto = service.gallery[currentIndex];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container max-w-4xl">
        {/* Header with Logo and Back Button */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center gap-2 text-orange-500 hover:text-orange-600 transition">
            <Home size={24} />
            <span className="font-bold text-xl">Cerrajería L. Arriero</span>
          </Link>
        </div>
        <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
        <p className="text-lg text-muted-foreground mb-8">{service.description}</p>

        {/* Main Gallery */}
        <div className="bg-card rounded-lg overflow-hidden shadow-lg mb-8">
          <div className="relative bg-black aspect-video flex items-center justify-center">
            <img
              src={currentPhoto.url}
              alt={currentPhoto.title}
              className="w-full h-full object-cover"
            />
            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + service.gallery.length) % service.gallery.length)}
              className="absolute left-4 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % service.gallery.length)}
              className="absolute right-4 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition"
            >
              <ChevronRight size={24} />
            </button>
            {/* Counter */}
            <div className="absolute bottom-4 right-4 bg-black/75 text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1}/{service.gallery.length}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="space-y-4 p-4">
            <h3 className="font-semibold">Galería ({service.gallery.length} fotos)</h3>
            <div className="grid grid-cols-2 gap-2 max-h-96 overflow-y-auto">
              {service.gallery.map((photo, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentIndex ? 'border-orange-500' : 'border-gray-300'
                  }`}
                >
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-24 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Photo Title */}
        <div className="bg-card p-6 rounded-lg mb-8">
          <p className="text-lg font-semibold text-foreground">{currentPhoto.title}</p>
        </div>

        {/* SEO Content */}
        {service.seo_content && (
          <div className="bg-card p-8 rounded-lg mb-8 prose prose-invert max-w-none">
            <div className="text-foreground space-y-4 leading-relaxed">
              {service.seo_content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('##')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-6 mb-4 text-orange-500">
                      {paragraph.replace(/^#+\s/, '')}
                    </h2>
                  );
                } else if (paragraph.startsWith('###')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold mt-4 mb-2 text-orange-400">
                      {paragraph.replace(/^#+\s/, '')}
                    </h3>
                  );
                } else if (paragraph.startsWith('-')) {
                  return (
                    <ul key={index} className="list-disc list-inside space-y-1 ml-4">
                      {paragraph.split('\n').map((item, i) => (
                        <li key={i} className="text-gray-300">
                          {item.replace(/^-\s/, '')}
                        </li>
                      ))}
                    </ul>
                  );
                } else {
                  return (
                    <p key={index} className="text-gray-300 text-base">
                      {paragraph}
                    </p>
                  );
                }
              })}
            </div>
          </div>
        )}

        {/* Contact Section */}
        <div className="bg-orange-500 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">¿Te interesa este servicio?</h2>
          <p className="mb-6">Contacta con nosotros para más información y presupuesto</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:661622160" className="bg-white text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              📞 Llamar
            </a>
            <a href="https://wa.me/34661622160" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
