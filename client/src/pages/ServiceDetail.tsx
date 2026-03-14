import { ChevronLeft, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRoute } from "wouter";

// Datos de servicios con URLs de CDN (TODAS las fotos)
const servicios: Record<string, any> = {
  "puertas-correderas-automaticas": {
    title: "Puertas Correderas Automáticas de Hierro y Aluminio en Talavera de la Reina",
    slug: "puertas-correderas-automaticas",
    description: "Puertas correderas automáticas a medida de hierro y aluminio soldado con sistemas de apertura suave, silenciosa y segura en Talavera de la Reina, Montecarlo, Prado del Arca, Pueblanueva y El Chaparral.",
    content: `En Cerrajería Arriero instalamos puertas correderas automáticas en Talavera de la Reina, Pepino, Cebolla, Mejorada y comarca. Nuestras puertas correderas combinan tecnología avanzada, seguridad y comodidad, siendo ideales para accesos comerciales, residenciales, hospitales, oficinas y espacios públicos.

Disponemos de sistemas de última generación con sensores de movimiento, control de acceso y sistemas de seguridad integrados.

## Ventajas de las puertas correderas automáticas

Nuestras puertas correderas ofrecen múltiples beneficios:

- Apertura suave y silenciosa.
- Sistemas de seguridad avanzados.
- Control de acceso integrado.
- Eficiencia energética.
- Compatibilidad con sistemas existentes.

## Instalación de puertas correderas automáticas

Realizamos la instalación de puertas correderas automáticas en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvis, Sevilleja y Cervera. Nuestro equipo se encarga de la instalación, configuración y mantenimiento especializado.

## Presupuesto para puertas correderas automáticas

Solicita presupuesto sin compromiso para tus puertas correderas automáticas. Asesoramiento personalizado y soluciones adaptadas a tus necesidades.`,
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-puertas-correderas-automaticas-portada-talavera-reina.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-correderas-automaticas-talavera-reina.jpg", title: "Puerta Corredera Automática Talavera", alt: "Puerta corredera automática en Talavera" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-puertas-correderas-automaticas-talavera-reina.jpg", title: "Puerta Corredera Automática Pepino", alt: "Puerta corredera automática en Pepino" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-puertas-correderas-automaticas-talavera-reina.jpg", title: "Puerta Corredera Automática Cebolla", alt: "Puerta corredera automática en Cebolla" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-puertas-correderas-automaticas-talavera-reina.jpg", title: "Puerta Corredera Automática Mejorada", alt: "Puerta corredera automática en Mejorada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-puertas-correderas-automaticas-talavera-reina.jpg", title: "Puerta Corredera Automática Sistema Avanzado", alt: "Puerta corredera automática con sistema avanzado" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/6-puertas-correderas-automaticas-talavera-reina.jpg", title: "Puerta Corredera Automática Control de Acceso", alt: "Puerta corredera automática con control de acceso" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/7-puertas-correderas-automaticas-talavera-reina.jpg", title: "Puerta Corredera Automática Instalación", alt: "Instalación de puerta corredera automática" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/8-puertas-correderas-automaticas-talavera-reina.jpg", title: "Puerta Corredera Automática Acabado", alt: "Acabado profesional de puerta corredera automática" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/9-puertas-correderas-automaticas-talavera-reina.jpg", title: "Puerta Corredera Automática Detalle", alt: "Detalle de puerta corredera automática" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/10-puertas-correderas-automaticas-talavera-reina.jpg", title: "Puerta Corredera Automática Seguridad", alt: "Sistema de seguridad puerta corredera" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/11-puertas-correderas-automaticas-talavera-reina.jpg", title: "Puerta Corredera Automática Mantenimiento", alt: "Mantenimiento puerta corredera automática" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/12-puertas-correderas-automaticas-talavera-reina.jpg", title: "Puerta Corredera Automática Profesional", alt: "Puerta corredera automática profesional" }
    ]
  },
  "rejas-seguridad": {
    title: "Rejas de Seguridad de Hierro a Medida en Talavera de la Reina",
    slug: "rejas-seguridad",
    description: "Rejas de seguridad personalizadas en hierro macizo y aluminio soldado en Talavera de la Reina, Cebolla, Seguirilla, Mejorada y Talavera la Nueva.",
    content: `En Cerrajería Arriero fabricamos rejas de seguridad personalizadas en hierro macizo y aluminio soldado en Talavera de la Reina, Cebolla, Seguirilla, Mejorada y Talavera la Nueva. Nuestras rejas combinan máxima protección con diseño profesional.

Disponemos de diferentes estilos y acabados que se adaptan a cualquier arquitectura, desde diseños tradicionales hasta contemporáneos.

## Ventajas de las rejas de seguridad

Nuestras rejas ofrecen múltiples beneficios:

- Máxima protección contra robos.
- Diseños personalizados y elegantes.
- Acabados profesionales de calidad.
- Resistencia a la corrosión.
- Compatibilidad con automatización.

## Instalación de rejas de seguridad

Realizamos la instalación de rejas de seguridad en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvis, Sevilleja y Cervera. Fabricación artesanal con soldadura de calidad.

## Presupuesto para rejas de seguridad

Contacta con nosotros para solicitar presupuesto sin compromiso para tus rejas de seguridad.`,
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-rejas-seguridad-portada-talavera-reina.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-rejas-seguridad-talavera-reina.jpg", title: "Reja de Seguridad Talavera", alt: "Reja de seguridad en Talavera" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-rejas-seguridad-talavera-reina.jpg", title: "Reja de Seguridad Pepino", alt: "Reja de seguridad en Pepino" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-rejas-seguridad-talavera-reina.jpg", title: "Reja de Seguridad Cebolla", alt: "Reja de seguridad en Cebolla" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-rejas-seguridad-talavera-reina.jpg", title: "Reja de Seguridad Mejorada", alt: "Reja de seguridad en Mejorada" }
    ]
  },
  "puertas-entrada-vivienda": {
    title: "Puertas de Entrada a Vivienda de Hierro y Aluminio en Talavera de la Reina",
    slug: "puertas-entrada-vivienda",
    description: "Puertas de entrada a vivienda fabricadas a medida en hierro y aluminio soldado en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvís, Sevilleja y Cervera.",
    content: `En Cerrajería Arriero fabricamos e instalamos puertas de entrada a vivienda en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvís, Sevilleja y Cervera. Nuestras puertas de entrada son la solución perfecta para combinar seguridad, elegancia y durabilidad en tu hogar.

Disponemos de diseños personalizados en hierro y aluminio soldado, adaptados a cualquier estilo arquitectónico. Cada puerta se fabrica a medida con sistemas de cierre de seguridad avanzados.

## Ventajas de las puertas de entrada a vivienda

Nuestras puertas ofrecen múltiples beneficios:

- Seguridad y protección total para tu hogar.
- Diseños personalizados y elegantes.
- Sistemas de cierre de seguridad avanzados.
- Aislamiento térmico y acústico.
- Acabados profesionales de calidad.
- Resistencia a la intemperie y durabilidad garantizada.

## Instalación de puertas de entrada a medida

Realizamos la instalación de puertas de entrada en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvis, Sevilleja y Cervera. Nuestro equipo se encarga de la fabricación, transporte e instalación completa.

## Presupuesto para puertas de entrada

Contacta con nosotros para solicitar presupuesto sin compromiso para tus puertas de entrada.`,
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-puertas-entrada-vivienda-portada-talavera-reina.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-entrada-vivienda-talavera-reina.jpg", title: "Puerta de Entrada Talavera", alt: "Puerta de entrada en Talavera" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-puertas-entrada-vivienda-talavera-reina.jpg", title: "Puerta de Entrada Pepino", alt: "Puerta de entrada en Pepino" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-puertas-entrada-vivienda-talavera-reina.jpg", title: "Puerta de Entrada Cebolla", alt: "Puerta de entrada en Cebolla" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-puertas-entrada-vivienda-talavera-reina.jpg", title: "Puerta de Entrada Mejorada", alt: "Puerta de entrada en Mejorada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-puertas-entrada-vivienda-talavera-reina.jpg", title: "Puerta de Entrada Diseño", alt: "Diseño puerta de entrada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/6-puertas-entrada-vivienda-talavera-reina.jpg", title: "Puerta de Entrada Seguridad", alt: "Puerta de entrada con seguridad" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/7-puertas-entrada-vivienda-talavera-reina.jpg", title: "Puerta de Entrada Acabado", alt: "Acabado puerta de entrada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/8-puertas-entrada-vivienda-talavera-reina.jpg", title: "Puerta de Entrada Profesional", alt: "Puerta de entrada profesional" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/9-puertas-entrada-vivienda-talavera-reina.jpg", title: "Puerta de Entrada Detalle", alt: "Detalle puerta de entrada" }
    ]
  },
  "puertas-portones": {
    title: "Puertas y Portones Automáticos en Talavera de la Reina",
    slug: "puertas-portones",
    description: "Puertas y portones automáticos de última generación en Talavera de la Reina, Cornicabral, Cervines, Las Nieves y Espinosillo.",
    content: `En Cerrajería Arriero fabricamos e instalamos puertas y portones automáticos en Talavera de la Reina, Cornicabral, Cervines, Las Nieves y Espinosillo. Nuestros portones combinan seguridad, tecnología y diseño profesional.

Disponemos de sistemas de última generación con mandos a distancia, controles de acceso y sistemas de seguridad integrados.

## Ventajas de los portones automáticos

Nuestros portones ofrecen múltiples beneficios:

- Apertura suave, segura y controlada.
- Tecnología avanzada con mando a distancia.
- Seguridad garantizada.
- Acabados profesionales de calidad.
- Mantenimiento y reparación especializada.

## Instalación de portones automáticos

Realizamos la instalación de puertas y portones en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvis, Sevilleja y Cervera. Instalación profesional y rápida con garantía.

## Presupuesto para portones automáticos

Solicita presupuesto sin compromiso para tus puertas y portones automáticos.`,
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-puertas-portones-portada-talavera-reina.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-portones-talavera-reina.jpg", title: "Portón Automático Talavera", alt: "Portón automático en Talavera" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-puertas-portones-talavera-reina.jpg", title: "Portón Automático Pepino", alt: "Portón automático en Pepino" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-puertas-portones-talavera-reina.jpg", title: "Portón Automático Cebolla", alt: "Portón automático en Cebolla" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-puertas-portones-talavera-reina.jpg", title: "Portón Automático Mejorada", alt: "Portón automático en Mejorada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-puertas-portones-talavera-reina.jpg", title: "Portón Automático Sistema", alt: "Portón automático con sistema avanzado" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/6-puertas-portones-talavera-reina.jpg", title: "Portón Automático Control", alt: "Portón automático con control" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/7-puertas-portones-talavera-reina.jpg", title: "Portón Automático Instalación", alt: "Instalación portón automático" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/8-puertas-portones-talavera-reina.jpg", title: "Portón Automático Acabado", alt: "Acabado portón automático" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/9-puertas-portones-talavera-reina.jpg", title: "Portón Automático Profesional", alt: "Portón automático profesional" }
    ]
  },
  "puertas-portales-comunidad": {
    title: "Puertas de Portales para Comunidades en Talavera de la Reina",
    slug: "puertas-portales-comunidad",
    description: "Puertas de portales para comunidades a medida en Talavera de la Reina, Pepino, Cebolla, Mejorada y comarca.",
    content: `En Cerrajería Arriero fabricamos e instalamos puertas de portales para comunidades en Talavera de la Reina, Pepino, Cebolla, Mejorada y comarca. Nuestras puertas son la solución ideal para accesos comunitarios seguros, modernos y funcionales.

Disponemos de sistemas de última generación con control de acceso, cierre automático y cristal de seguridad templado. Cada puerta se personaliza según las necesidades exactas de tu comunidad.

## Ventajas de las puertas de portales para comunidades

Nuestras puertas ofrecen múltiples beneficios:

- Seguridad y control de acceso garantizado.
- Diseño moderno y profesional.
- Cierre automático y sistemas de seguridad integrados.
- Cristal templado de seguridad.
- Acabados duraderos: Hierro, Aluminio, Lacado al Horno.
- Fácil mantenimiento y limpieza.
- Resistencia a la intemperie.

## Instalación de puertas de portales a medida

Realizamos la instalación de puertas de portales en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvis, Sevilleja y Cervera.

## Presupuesto para puertas de portales

Contacta con nosotros para solicitar presupuesto sin compromiso para tus puertas de portales.`,
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-puertas-portales-comunidad-portada-talavera-reina.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-portales-comunidad-talavera-reina.jpg", title: "Puerta de Portal Talavera", alt: "Puerta de portal en Talavera" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-puertas-portales-comunidad-talavera-reina.jpg", title: "Puerta de Portal Pepino", alt: "Puerta de portal en Pepino" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-puertas-portales-comunidad-talavera-reina.jpg", title: "Puerta de Portal Cebolla", alt: "Puerta de portal en Cebolla" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-puertas-portales-comunidad-talavera-reina.jpg", title: "Puerta de Portal Mejorada", alt: "Puerta de portal en Mejorada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-puertas-portales-comunidad-talavera-reina.jpg", title: "Puerta de Portal Seguridad", alt: "Puerta de portal con seguridad" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/6-puertas-portales-comunidad-talavera-reina.jpg", title: "Puerta de Portal Acabado", alt: "Acabado puerta de portal" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/7-puertas-portales-comunidad-talavera-reina.jpg", title: "Puerta de Portal Profesional", alt: "Puerta de portal profesional" }
    ]
  },
  "cerramientos-industriales": {
    title: "Cerramientos Industriales de Hierro y Cristal - Separadores de Espacio en Talavera de la Reina",
    slug: "cerramientos-industriales",
    description: "Cerramientos industriales de hierro y cristal para separadores de espacio en Talavera de la Reina, Hinojosa de San Vicente, Marrupe, Sotillo de las Palomas y Serranillos.",
    content: `En Cerrajería Arriero fabricamos cerramientos industriales de hierro y cristal para separadores de espacio en Talavera de la Reina, Hinojosa de San Vicente, Marrupe, Sotillo de las Palomas y Serranillos. Soluciones modernas para oficinas, almacenes, talleres y espacios industriales.

Disponemos de diseños funcionales con estructura de hierro soldado y cristal templado. Permite visibilidad y aislamiento simultáneamente.

## Ventajas de los cerramientos industriales

Nuestros cerramientos ofrecen múltiples beneficios:

- Visibilidad y aislamiento simultáneo.
- Estructura resistente en hierro soldado.
- Cristal templado de seguridad.
- Acabados profesionales de calidad.
- Fácil mantenimiento.
- Personalizable según necesidades.

## Instalación de cerramientos industriales

Realizamos la instalación de cerramientos industriales en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvis, Sevilleja y Cervera. Instalación rápida y garantizada.

## Presupuesto para cerramientos industriales

Contacta con nosotros para solicitar presupuesto sin compromiso para tus cerramientos industriales.`,
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-cerramientos-industriales-portada-talavera-reina.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-cerramientos-industriales-talavera-reina.jpg", title: "Cerramiento Industrial Talavera", alt: "Cerramiento industrial en Talavera" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-cerramientos-industriales-talavera-reina.jpg", title: "Cerramiento Industrial Pepino", alt: "Cerramiento industrial en Pepino" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-cerramientos-industriales-talavera-reina.jpg", title: "Cerramiento Industrial Cebolla", alt: "Cerramiento industrial en Cebolla" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-cerramientos-industriales-talavera-reina.jpg", title: "Cerramiento Industrial Mejorada", alt: "Cerramiento industrial en Mejorada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-cerramientos-industriales-talavera-reina.jpg", title: "Cerramiento Industrial Profesional", alt: "Cerramiento industrial profesional" }
    ]
  },
  "pergolas-cubiertas": {
    title: "Pérgolas y Cubiertas con Panel Sándwich en Talavera de la Reina",
    slug: "pergolas-cubiertas",
    description: "Pérgolas metálicas y cubiertas con panel sándwich para ampliar tu espacio habitable con protección total en Talavera de la Reina, Belvís de la Jara, Sevilleja, Cervera de los Montes y Nuño Gómez.",
    content: `En Cerrajería Arriero fabricamos pérgolas metálicas y cubiertas con panel sándwich en Talavera de la Reina, Belvís de la Jara, Sevilleja, Cervera de los Montes y Nuño Gómez. Amplía tu espacio habitable con protección total.

Disponemos de excelente aislamiento térmico y acústico. Diseño moderno y funcional. Ideal para terrazas, patios y espacios exteriores.

## Ventajas de las pérgolas y cubiertas

Nuestras pérgolas ofrecen múltiples beneficios:

- Excelente aislamiento térmico y acústico.
- Diseño moderno y funcional.
- Protección total contra intemperie.
- Aumenta el valor de la propiedad.
- Resistencia garantizada.
- Acabados profesionales de calidad.

## Instalación de pérgolas y cubiertas

Realizamos la instalación de pérgolas y cubiertas en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvis, Sevilleja y Cervera. Instalación profesional garantizada.

## Presupuesto para pérgolas y cubiertas

Contacta con nosotros para solicitar presupuesto sin compromiso para tus pérgolas y cubiertas.`,
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-pergolas-cubiertas-portada-talavera-reina.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-pergolas-cubiertas-talavera-reina.jpg", title: "Pérgola y Cubierta Talavera", alt: "Pérgola y cubierta en Talavera" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-pergolas-cubiertas-talavera-reina.jpg", title: "Pérgola Pepino", alt: "Pérgola en Pepino" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-pergolas-cubiertas-talavera-reina.jpg", title: "Cubierta Cebolla", alt: "Cubierta en Cebolla" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-pergolas-cubiertas-talavera-reina.jpg", title: "Pérgola Mejorada", alt: "Pérgola en Mejorada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-pergolas-cubiertas-talavera-reina.jpg", title: "Pérgola Profesional", alt: "Pérgola profesional" }
    ]
  },
  "cancelas-hierro": {
    title: "Cancelas de Hierro a Medida en Talavera de la Reina",
    slug: "cancelas-hierro",
    description: "Cancelas de hierro a medida en Talavera de la Reina, Real de San Vicente, San Román, Pueblanueva y Castillo Bayuela.",
    content: `En Cerrajería Arriero fabricamos cancelas de hierro a medida en Talavera de la Reina, Real de San Vicente, San Román, Pueblanueva y Castillo Bayuela. Combinan resistencia estructural con diseño profesional.

Adaptadas a cualquier estilo arquitectónico y necesidad de seguridad. Fabricación en hierro y aluminio soldado con acabados de calidad.

## Ventajas de las cancelas de hierro

Nuestras cancelas ofrecen múltiples beneficios:

- Resistencia estructural garantizada.
- Diseño profesional y elegante.
- Protección total para parcelas y fincas.
- Acabados de calidad.
- Instalación rápida y segura.
- Personalizable según necesidades.

## Instalación de cancelas de hierro

Realizamos la instalación de cancelas de hierro en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvis, Sevilleja y Cervera. Instalación profesional garantizada.

## Presupuesto para cancelas de hierro

Contacta con nosotros para solicitar presupuesto sin compromiso para tus cancelas de hierro.`,
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-cancelas-hierro-portada-talavera-reina.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-cancelas-hierro-talavera-reina.jpg", title: "Cancela de Hierro Talavera", alt: "Cancela de hierro en Talavera" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-cancelas-hierro-talavera-reina.jpg", title: "Cancela de Hierro Pepino", alt: "Cancela de hierro en Pepino" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-cancelas-hierro-talavera-reina.jpg", title: "Cancela de Hierro Cebolla", alt: "Cancela de hierro en Cebolla" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-cancelas-hierro-talavera-reina.jpg", title: "Cancela de Hierro Mejorada", alt: "Cancela de hierro en Mejorada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-cancelas-hierro-talavera-reina.jpg", title: "Cancela de Hierro Diseño", alt: "Cancela de hierro diseño" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/6-cancelas-hierro-talavera-reina.jpg", title: "Cancela de Hierro Seguridad", alt: "Cancela de hierro seguridad" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/7-cancelas-hierro-talavera-reina.jpg", title: "Cancela de Hierro Acabado", alt: "Cancela de hierro acabado" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/8-cancelas-hierro-talavera-reina.jpg", title: "Cancela de Hierro Instalación", alt: "Instalación cancela de hierro" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/9-cancelas-hierro-talavera-reina.jpg", title: "Cancela de Hierro Profesional", alt: "Cancela de hierro profesional" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/10-cancelas-hierro-talavera-reina.jpg", title: "Cancela de Hierro Detalle", alt: "Detalle cancela de hierro" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/11-cancelas-hierro-talavera-reina.jpg", title: "Cancela de Hierro Finca", alt: "Cancela de hierro para finca" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/12-cancelas-hierro-talavera-reina.jpg", title: "Cancela de Hierro Parcela", alt: "Cancela de hierro para parcela" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/13-cancelas-hierro-talavera-reina.jpg", title: "Cancela de Hierro Acceso", alt: "Cancela de hierro para acceso" }
    ]
  },
  "barandillas-escaleras": {
    title: "Barandillas, Balcones y Escaleras de Hierro a Medida en Talavera de la Reina",
    slug: "barandillas-escaleras",
    description: "Barandillas, balcones y escaleras de hierro a medida con diseños clásicos y contemporáneos en Talavera de la Reina, Pepino, Castillo Bayuela, Mejorada y Cebolla.",
    content: `En Cerrajería Arriero fabricamos barandillas, balcones y escaleras de hierro a medida en Talavera de la Reina, Pepino, Castillo Bayuela, Mejorada y Cebolla. Diseños clásicos y contemporáneos.

Fabricación artesanal en hierro soldado con acabados profesionales. Seguridad y estética garantizadas para tu hogar o negocio.

## Ventajas de barandillas, balcones y escaleras

Nuestros productos ofrecen múltiples beneficios:

- Seguridad estructural garantizada.
- Diseños clásicos y contemporáneos.
- Fabricación artesanal de calidad.
- Acabados profesionales.
- Personalizable según preferencias.
- Resistencia y durabilidad garantizadas.

## Instalación de barandillas, balcones y escaleras

Realizamos la instalación de barandillas, balcones y escaleras en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvis, Sevilleja y Cervera. Instalación profesional y rápida.

## Presupuesto para barandillas, balcones y escaleras

Contacta con nosotros para solicitar presupuesto sin compromiso para tus barandillas, balcones y escaleras.`,
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-barandillas-escaleras-portada-talavera-reina.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-barandillas-escaleras-talavera-reina.jpg", title: "Barandilla Talavera", alt: "Barandilla en Talavera" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-barandillas-escaleras-talavera-reina.jpg", title: "Barandilla Pepino", alt: "Barandilla en Pepino" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-barandillas-escaleras-talavera-reina.jpg", title: "Barandilla Cebolla", alt: "Barandilla en Cebolla" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-barandillas-escaleras-talavera-reina.jpg", title: "Barandilla Mejorada", alt: "Barandilla en Mejorada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-barandillas-escaleras-talavera-reina.jpg", title: "Escalera Talavera", alt: "Escalera en Talavera" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/6-barandillas-escaleras-talavera-reina.jpg", title: "Escalera Pepino", alt: "Escalera en Pepino" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/7-barandillas-escaleras-talavera-reina.jpg", title: "Escalera Cebolla", alt: "Escalera en Cebolla" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/8-barandillas-escaleras-talavera-reina.jpg", title: "Balcón Talavera", alt: "Balcón en Talavera" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/9-barandillas-escaleras-talavera-reina.jpg", title: "Balcón Pepino", alt: "Balcón en Pepino" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/10-barandillas-escaleras-talavera-reina.jpg", title: "Balcón Cebolla", alt: "Balcón en Cebolla" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/11-barandillas-escaleras-talavera-reina.jpg", title: "Barandilla Diseño", alt: "Barandilla diseño" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/12-barandillas-escaleras-talavera-reina.jpg", title: "Barandilla Profesional", alt: "Barandilla profesional" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/13-barandillas-escaleras-talavera-reina.jpg", title: "Barandilla Acabado", alt: "Acabado barandilla" }
    ]
  }
};

export default function ServiceDetail() {
  const [, params] = useRoute("/servicios/:slug");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!params?.slug) {
    return <div>Servicio no encontrado</div>;
  }

  const servicio = servicios[params.slug];

  if (!servicio) {
    return <div>Servicio no encontrado</div>;
  }

  const currentImage = servicio.galleryImages[selectedImageIndex];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <ChevronLeft size={20} />
            Volver
          </button>
        </div>
      </div>

      {/* Contenido */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Galería */}
          <div className="space-y-4">
            <div className="relative bg-muted rounded-lg overflow-hidden aspect-square">
              <img
                src={currentImage?.url || servicio.coverImage}
                alt={currentImage?.alt || servicio.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              <div
                onClick={() => setSelectedImageIndex(-1)}
                className={`relative bg-muted rounded cursor-pointer overflow-hidden aspect-square border-2 transition-colors ${
                  selectedImageIndex === -1 ? "border-primary" : "border-transparent"
                }`}
              >
                <img
                  src={servicio.coverImage}
                  alt="Portada"
                  className="w-full h-full object-cover"
                />
              </div>
              {servicio.galleryImages.map((img: any, idx: number) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative bg-muted rounded cursor-pointer overflow-hidden aspect-square border-2 transition-colors ${
                    selectedImageIndex === idx ? "border-primary" : "border-transparent"
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Información */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                {servicio.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {servicio.description}
              </p>
            </div>

            {/* Botones de contacto */}
            <div className="space-y-3">
              <a
                href="tel:925701792"
                className="flex items-center gap-2 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                <Phone size={20} />
                Llamar: 925 70 17 92
              </a>
              <a
                href="https://wa.me/34661622160"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                <MessageCircle size={20} />
                WhatsApp: 661 62 21 60
              </a>
            </div>
          </div>
        </div>

        {/* Contenido de texto */}
        <div className="prose prose-invert max-w-none">
          {servicio.content.split("\n\n").map((paragraph: string, idx: number) => (
            <p key={idx} className="text-foreground mb-4 whitespace-pre-wrap">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
