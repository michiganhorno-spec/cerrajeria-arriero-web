import { ChevronLeft, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { useRoute } from "wouter";

// Datos de servicios con URLs CORRECTAS de CDN
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
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-puertas-correderas-automaticas-portada-talavera-reina_30585b74.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-correderas-automaticas-talavera-reina_a0672c42.jpg", title: "Puerta Corredera 1", alt: "Puerta corredera automática" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/10-puertas-correderas-automaticas-talavera-reina_7a710796.jpg", title: "Puerta Corredera 2", alt: "Puerta corredera automática" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/11-puertas-correderas-automaticas-talavera-reina_f1b8e4bc.jpg", title: "Puerta Corredera 3", alt: "Puerta corredera automática" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/12-puertas-correderas-automaticas-talavera-reina_df8feed9.jpg", title: "Puerta Corredera 4", alt: "Puerta corredera automática" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-puertas-correderas-automaticas-talavera-reina_05f51707.jpg", title: "Puerta Corredera 5", alt: "Puerta corredera automática" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-puertas-correderas-automaticas-talavera-reina_0bdcb39d.jpg", title: "Puerta Corredera 6", alt: "Puerta corredera automática" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-puertas-correderas-automaticas-talavera-reina_f14a4d34.jpg", title: "Puerta Corredera 7", alt: "Puerta corredera automática" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-puertas-correderas-automaticas-talavera-reina_7bbc3989.jpg", title: "Puerta Corredera 8", alt: "Puerta corredera automática" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/6-puertas-correderas-automaticas-talavera-reina_464404de.jpg", title: "Puerta Corredera 9", alt: "Puerta corredera automática" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/7-puertas-correderas-automaticas-talavera-reina_d70a80e6.jpg", title: "Puerta Corredera 10", alt: "Puerta corredera automática" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/8-puertas-correderas-automaticas-talavera-reina_a7253e42.jpg", title: "Puerta Corredera 11", alt: "Puerta corredera automática" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/9-puertas-correderas-automaticas-talavera-reina_b1d1d9a1.jpg", title: "Puerta Corredera 12", alt: "Puerta corredera automática" }
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
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-rejas-seguridad-talavera-reina_0ec3a907.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-rejas-seguridad-talavera-reina_7a87f623.jpg", title: "Reja 1", alt: "Reja de seguridad" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-rejas-seguridad-talavera-reina_f82c9529.jpg", title: "Reja 2", alt: "Reja de seguridad" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-rejas-seguridad-talavera-reina_b2ec1757.jpg", title: "Reja 3", alt: "Reja de seguridad" }
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
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-entrada-vivienda-talavera-reina_24c3acc1.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-puertas-entrada-vivienda-talavera-reina_b9071fb7.jpg", title: "Puerta 1", alt: "Puerta de entrada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-puertas-entrada-vivienda-talavera-reina_3b266544.jpg", title: "Puerta 2", alt: "Puerta de entrada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-puertas-entrada-vivienda-talavera-reina_0b35097e.jpg", title: "Puerta 3", alt: "Puerta de entrada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-puertas-entrada-vivienda-talavera-reina_fbe27ae4.jpg", title: "Puerta 4", alt: "Puerta de entrada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/6-puertas-entrada-vivienda-talavera-reina_66352ad2.jpg", title: "Puerta 5", alt: "Puerta de entrada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/7-puertas-entrada-vivienda-talavera-reina_7468c5f3.jpg", title: "Puerta 6", alt: "Puerta de entrada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/8-puertas-entrada-vivienda-talavera-reina_2fdce797.jpg", title: "Puerta 7", alt: "Puerta de entrada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/9-puertas-entrada-vivienda-talavera-reina_a2c8acd2.jpg", title: "Puerta 8", alt: "Puerta de entrada" }
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
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-puertas-portones-portada-talavera-reina_129eea77.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-portones-talavera-reina_1b20f5da.jpg", title: "Portón 1", alt: "Portón automático" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-puertas-portones-talavera-reina_a158808b.jpg", title: "Portón 2", alt: "Portón automático" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-puertas-portones-talavera-reina_177688be.jpg", title: "Portón 3", alt: "Portón automático" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-puertas-portones-talavera-reina_c59b39d7.jpg", title: "Portón 4", alt: "Portón automático" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-puertas-portones-talavera-reina_2508b9bf.jpg", title: "Portón 5", alt: "Portón automático" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/6-puertas-portones-talavera-reina_506b6939.jpg", title: "Portón 6", alt: "Portón automático" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/7-puertas-portones-talavera-reina_4fafd420.jpg", title: "Portón 7", alt: "Portón automático" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/8-puertas-portones-talavera-reina_8312c702.jpg", title: "Portón 8", alt: "Portón automático" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/9-puertas-portones-talavera-reina_9a036eca.jpg", title: "Portón 9", alt: "Portón automático" }
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
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-puertas-portales-comunidad-portada-talavera-reina_288394a5.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-portales-comunidad-talavera-reina_d6a65192.jpg", title: "Portal 1", alt: "Puerta de portal" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-puertas-portales-comunidad-talavera-reina_638c7e21.jpg", title: "Portal 2", alt: "Puerta de portal" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-puertas-portales-comunidad-talavera-reina_9911ae0e.jpg", title: "Portal 3", alt: "Puerta de portal" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-puertas-portales-comunidad-talavera-reina_d8537e4e.jpg", title: "Portal 4", alt: "Puerta de portal" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-puertas-portales-comunidad-talavera-reina_9ebfc742.jpg", title: "Portal 5", alt: "Puerta de portal" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/6-puertas-portales-comunidad-talavera-reina_75a7b68f.jpg", title: "Portal 6", alt: "Puerta de portal" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/7-puertas-portales-comunidad-talavera-reina_2706a3ba.jpg", title: "Portal 7", alt: "Puerta de portal" }
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
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-cerramientos-industriales-portada-talavera-reina_85f0b015.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-cerramientos-industriales-hierro-cristal-talavera-reina_0a832793.jpg", title: "Cerramiento 1", alt: "Cerramiento industrial" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-cerramientos-industriales-hierro-cristal-talavera-reina_a6db517b.jpg", title: "Cerramiento 2", alt: "Cerramiento industrial" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-cerramientos-industriales-hierro-cristal-talavera-reina_410f0c8a.jpg", title: "Cerramiento 3", alt: "Cerramiento industrial" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-cerramientos-industriales-hierro-cristal-talavera-reina_b78c8f29.jpg", title: "Cerramiento 4", alt: "Cerramiento industrial" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-cerramientos-industriales-hierro-cristal-talavera-reina_fd9eee62.jpg", title: "Cerramiento 5", alt: "Cerramiento industrial" }
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
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-pergolas-cubiertas-portada-talavera-reina_a52611d7.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-pergolas-cubiertas-talavera-reina_f1289c17.jpg", title: "Pérgola 1", alt: "Pérgola y cubierta" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-pergolas-cubiertas-talavera-reina_d938639f.jpg", title: "Pérgola 2", alt: "Pérgola y cubierta" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-pergolas-cubiertas-talavera-reina_3caad37b.jpg", title: "Pérgola 3", alt: "Pérgola y cubierta" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-pergolas-cubiertas-talavera-reina_f981d2f2.jpg", title: "Pérgola 4", alt: "Pérgola y cubierta" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-pergolas-cubiertas-talavera-reina_44b0479c.jpg", title: "Pérgola 5", alt: "Pérgola y cubierta" }
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
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-cancelas-hierro-portada-talavera-reina_4fa20efc.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-cancelas-hierro-talavera-reina_cf803d83.jpg", title: "Cancela 1", alt: "Cancela de hierro" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/10-cancelas-hierro-talavera-reina_dbbcd681.jpg", title: "Cancela 2", alt: "Cancela de hierro" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/11-cancelas-hierro-talavera-reina_c8c73b43.jpg", title: "Cancela 3", alt: "Cancela de hierro" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/12-cancelas-hierro-talavera-reina_185ae418.jpg", title: "Cancela 4", alt: "Cancela de hierro" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/13-cancelas-hierro-talavera-reina_666875ef.jpg", title: "Cancela 5", alt: "Cancela de hierro" }
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
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-barandillas-escaleras-portada-talavera-reina_81014639.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-barandillas-escaleras-talavera-reina_2d814f1c.jpg", title: "Barandilla 1", alt: "Barandilla de hierro" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/10-barandillas-escaleras-talavera-reina_aff2eb14.jpg", title: "Barandilla 2", alt: "Barandilla de hierro" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/11-barandillas-escaleras-talavera-reina_b56927c8.jpg", title: "Barandilla 3", alt: "Barandilla de hierro" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/12-barandillas-escaleras-talavera-reina_5dfea99b.jpg", title: "Barandilla 4", alt: "Barandilla de hierro" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/13-barandillas-escaleras-talavera-reina_fb9d3a3c.jpg", title: "Barandilla 5", alt: "Barandilla de hierro" }
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
