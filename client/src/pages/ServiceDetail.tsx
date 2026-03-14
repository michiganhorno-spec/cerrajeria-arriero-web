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

### Servicios en Talavera de la Reina

Instalamos puertas correderas automáticas en Talavera de la Reina, Montecarlo, Prado del Arca, Pueblanueva, El Chaparral y pueblos cercanos. Soluciones personalizadas para cada proyecto.

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
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-puertas-correderas-automaticas-portada-talavera-reina_93c6539c.jpg', title: 'Puerta Corredera Automática Portada' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-correderas-automaticas-talavera-reina_bcd8e5ee.jpg', title: 'Puerta Corredera Automática Gris' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-puertas-correderas-automaticas-talavera-reina_08f0a94d.jpg', title: 'Puerta Corredera Automática Instalada' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-puertas-correderas-automaticas-talavera-reina_7207e14b.jpg', title: 'Puerta Corredera Automática Detalle' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-puertas-correderas-automaticas-talavera-reina_5b3550f2.jpg', title: 'Puerta Corredera Automática Pepino' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-puertas-correderas-automaticas-talavera-reina_e7681138.jpg', title: 'Puerta Corredera Automática Cebolla' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/6-puertas-correderas-automaticas-talavera-reina_9ada3cb2.jpg', title: 'Puerta Corredera Automática Mejorada' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/7-puertas-correderas-automaticas-talavera-reina_63e3aee5.jpg', title: 'Puerta Corredera Automática Talavera la Nueva' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/8-puertas-correderas-automaticas-talavera-reina_f6554cf3.jpg', title: 'Puerta Corredera Automática Belvís' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/9-puertas-correderas-automaticas-talavera-reina_bc288add.jpg', title: 'Puerta Corredera Automática Sevilleja' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/10-puertas-correderas-automaticas-talavera-reina_45177c2a.jpg', title: 'Puerta Corredera Automática Cervera' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/11-puertas-correderas-automaticas-talavera-reina_ad1874a8.jpg', title: 'Puerta Corredera Automática Control Remoto' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/12-puertas-correderas-automaticas-talavera-reina_3294ea82.jpg', title: 'Puerta Corredera Automática Profesional' },
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
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-rejas-seguridad-talavera-reina_73976128.jpg', title: 'Reja de Seguridad Portada' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-rejas-seguridad-talavera-reina_add28802.jpg', title: 'Reja de Seguridad Hierro' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-rejas-seguridad-talavera-reina_c013da21.jpg', title: 'Reja de Seguridad Instalada' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-rejas-seguridad-talavera-reina_91e49c74.jpg', title: 'Reja de Seguridad Profesional' },
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
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-entrada-vivienda-talavera-reina_ce7f6c3f.jpg', title: 'Puerta Entrada Vivienda Portada' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-puertas-entrada-vivienda-talavera-reina_5d91fc72.jpg', title: 'Puerta Entrada Vivienda Hierro' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-puertas-entrada-vivienda-talavera-reina_04586d8a.jpg', title: 'Puerta Entrada Vivienda Aluminio' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-puertas-entrada-vivienda-talavera-reina_56281770.jpg', title: 'Puerta Entrada Vivienda Pepino' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-puertas-entrada-vivienda-talavera-reina_eec65455.jpg', title: 'Puerta Entrada Vivienda Cebolla' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/6-puertas-entrada-vivienda-talavera-reina_c3074f5f.jpg', title: 'Puerta Entrada Vivienda Mejorada' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/7-puertas-entrada-vivienda-talavera-reina_b2226cdc.jpg', title: 'Puerta Entrada Vivienda Talavera la Nueva' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/8-puertas-entrada-vivienda-talavera-reina_1a6f980a.jpg', title: 'Puerta Entrada Vivienda Belvís' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/9-puertas-entrada-vivienda-talavera-reina_75da421f.jpg', title: 'Puerta Entrada Vivienda Sevilleja' },
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
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-puertas-portones-portada-talavera-reina_1325cd04.jpg', title: 'Puerta Portón Portada' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-portones-talavera-reina_b61fc7ff.jpg', title: 'Puerta Portón Hierro' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-puertas-portones-talavera-reina_6183c823.jpg', title: 'Puerta Portón Aluminio' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-puertas-portones-talavera-reina_11a34807.jpg', title: 'Puerta Portón Garaje' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-puertas-portones-talavera-reina_2b3d5ed7.jpg', title: 'Puerta Portón Pepino' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-puertas-portones-talavera-reina_6255d1b7.jpg', title: 'Puerta Portón Cebolla' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/6-puertas-portones-talavera-reina_a4c10757.jpg', title: 'Puerta Portón Mejorada' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/7-puertas-portones-talavera-reina_7934018a.jpg', title: 'Puerta Portón Talavera la Nueva' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/8-puertas-portones-talavera-reina_28cb982e.jpg', title: 'Puerta Portón Belvís' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/9-puertas-portones-talavera-reina_aa396d60.jpg', title: 'Puerta Portón Profesional' },
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
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-puertas-portales-comunidad-portada-talavera-reina_be99162f.jpg', title: 'Puerta Portal Comunidad Portada' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-portales-comunidad-talavera-reina_b52351ee.jpg', title: 'Puerta Portal Comunidad Hierro' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-puertas-portales-comunidad-talavera-reina_a6a20823.jpg', title: 'Puerta Portal Comunidad Aluminio' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-puertas-portales-comunidad-talavera-reina_754130f6.jpg', title: 'Puerta Portal Comunidad Acceso' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-puertas-portales-comunidad-talavera-reina_6bcd4955.jpg', title: 'Puerta Portal Comunidad Pepino' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-puertas-portales-comunidad-talavera-reina_b75056ff.jpg', title: 'Puerta Portal Comunidad Cebolla' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/6-puertas-portales-comunidad-talavera-reina_f4a3869f.jpg', title: 'Puerta Portal Comunidad Mejorada' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/7-puertas-portales-comunidad-talavera-reina_0f668ed3.jpg', title: 'Puerta Portal Comunidad Profesional' },
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
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-cerramientos-industriales-hierro-cristal-portada-talavera-reina_ecebc238.jpg', title: 'Cerramiento Industrial Portada' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-cerramientos-industriales-hierro-cristal-talavera-reina_95c25621.jpg', title: 'Cerramiento Industrial Hierro Cristal' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-cerramientos-industriales-hierro-cristal-talavera-reina_be4a5729.jpg', title: 'Cerramiento Industrial Separador' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-cerramientos-industriales-hierro-cristal-talavera-reina_d258bc12.jpg', title: 'Cerramiento Industrial Oficina' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-cerramientos-industriales-hierro-cristal-talavera-reina_8f128749.jpg', title: 'Cerramiento Industrial Fábrica' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-cerramientos-industriales-hierro-cristal-talavera-reina_8f356ad1.jpg', title: 'Cerramiento Industrial Profesional' },
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
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-pergolas-cubiertas-portada-talavera-reina_36a7b11e.jpg', title: 'Pérgola Cubierta Portada' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-pergolas-cubiertas-talavera-reina_ccf48341.jpg', title: 'Pérgola Cubierta Panel Sándwich' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-pergolas-cubiertas-talavera-reina_5bd5eeb7.jpg', title: 'Pérgola Cubierta Terraza' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-pergolas-cubiertas-talavera-reina_368f8f76.jpg', title: 'Pérgola Cubierta Patio' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-pergolas-cubiertas-talavera-reina_f0905f37.jpg', title: 'Pérgola Cubierta Hierro Aluminio' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-pergolas-cubiertas-talavera-reina_90e04206.jpg', title: 'Pérgola Cubierta Profesional' },
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
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-cancelas-hierro-portada-talavera-reina_1558188b.jpg', title: 'Cancela Hierro Portada' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-cancelas-hierro-talavera-reina_5c124a04.jpg', title: 'Cancela Hierro Acceso' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/10-cancelas-hierro-talavera-reina_1adf2291.jpg', title: 'Cancela Hierro Finca' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/11-cancelas-hierro-talavera-reina_b89a2a1c.jpg', title: 'Cancela Hierro Propiedad' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/12-cancelas-hierro-talavera-reina_3f818abc.jpg', title: 'Cancela Hierro Elegante' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/13-cancelas-hierro-talavera-reina_eb8ae643.jpg', title: 'Cancela Hierro Profesional' },
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
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-barandillas-escaleras-portada-talavera-reina_be14427c.jpg', title: 'Barandilla Escalera Portada' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-barandillas-escaleras-talavera-reina_72e0db48.jpg', title: 'Barandilla Escalera Hierro' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/10-barandillas-escaleras-talavera-reina_44dc43fe.jpg', title: 'Barandilla Escalera Interior' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/11-barandillas-escaleras-talavera-reina_bf8c8876.jpg', title: 'Barandilla Escalera Exterior' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/12-barandillas-escaleras-talavera-reina_acb5dce0.jpg', title: 'Barandilla Escalera Balcón' },
      { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/13-barandillas-escaleras-talavera-reina_e263396e.jpg', title: 'Barandilla Escalera Profesional' },
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
            <a href="tel:925701792" className="bg-white text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
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
