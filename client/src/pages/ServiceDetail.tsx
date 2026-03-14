import { useRoute } from 'wouter';
import { Streamdown } from 'streamdown';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Phone, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const servicesData: Record<string, any> = {
  "puertas-correderas-automaticas": {
    title: "Puertas Correderas Automáticas de Hierro y Aluminio en Talavera de la Reina",
    slug: "puertas-correderas-automaticas",
    description: "Puertas correderas automáticas fabricadas a medida en hierro y aluminio soldado en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvís, Sevilleja y Cervera.",
    content: `En Cerrajería Arriero fabricamos e instalamos puertas correderas automáticas en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvís, Sevilleja y Cervera. Nuestras puertas correderas automáticas combinan funcionalidad, seguridad y diseño profesional.

Disponemos de sistemas de automatización de última generación, motores silenciosos y controles de acceso integrados. Cada puerta se fabrica a medida con acabados de calidad profesional.

## Ventajas de las puertas correderas automáticas

Nuestras puertas ofrecen múltiples beneficios:

- Acceso automático y sin contacto.
- Sistemas de seguridad avanzados.
- Motores silenciosos y eficientes.
- Diseños personalizados y elegantes.
- Acabados profesionales de calidad.
- Compatible con sistemas de control de acceso.

## Instalación de puertas correderas automáticas

Realizamos la instalación completa de puertas correderas automáticas en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvis, Sevilleja y Cervera. Incluye fabricación, transporte e instalación profesional.

## Presupuesto para puertas correderas automáticas

Contacta con nosotros para solicitar presupuesto sin compromiso para tus puertas correderas automáticas.`,
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-puertas-correderas-automaticas-portada-talavera-reina_30585b74.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-correderas-automaticas-talavera-reina_a0672c42.jpg", title: "Puerta Corredera Automática de Hierro en Talavera", alt: "Puerta corredera automática" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/10-puertas-correderas-automaticas-talavera-reina_7a710796.jpg", title: "Puerta Corredera Automática Profesional", alt: "Puerta corredera automática" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/11-puertas-correderas-automaticas-talavera-reina_f1b8e4bc.jpg", title: "Instalación Puerta Corredera Automática", alt: "Puerta corredera automática" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/12-puertas-correderas-automaticas-talavera-reina_df8feed9.jpg", title: "Puerta Corredera Automática Comercial", alt: "Puerta corredera automática" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-puertas-correderas-automaticas-talavera-reina_05f51707.jpg", title: "Puerta Corredera Automática Segura", alt: "Puerta corredera automática" }
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
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-rejas-seguridad-talavera-reina_7a87f623.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-rejas-seguridad-talavera-reina_0ec3a907.jpg", title: "Reja de Seguridad de Hierro en Talavera", alt: "Reja de seguridad" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-rejas-seguridad-talavera-reina_7a87f623.jpg", title: "Reja de Seguridad Profesional", alt: "Reja de seguridad" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-rejas-seguridad-talavera-reina_f82c9529.jpg", title: "Reja de Seguridad Personalizada", alt: "Reja de seguridad" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-rejas-seguridad-talavera-reina_b2ec1757.jpg", title: "Reja de Seguridad Resistente", alt: "Reja de seguridad" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-rejas-seguridad-talavera-reina_custom.jpg", title: "Reja de Seguridad a Medida", alt: "Reja de seguridad" }
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
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-puertas-entrada-vivienda-talavera-reina_3b266544.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-entrada-vivienda-talavera-reina_24c3acc1.jpg", title: "Puerta de Entrada a Vivienda de Hierro", alt: "Puerta de entrada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-puertas-entrada-vivienda-talavera-reina_b9071fb7.jpg", title: "Puerta de Entrada Segura", alt: "Puerta de entrada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-puertas-entrada-vivienda-talavera-reina_3b266544.jpg", title: "Puerta de Entrada Personalizada", alt: "Puerta de entrada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-puertas-entrada-vivienda-talavera-reina_0b35097e.jpg", title: "Puerta de Entrada Profesional", alt: "Puerta de entrada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-puertas-entrada-vivienda-talavera-reina_fbe27ae4.jpg", title: "Puerta de Entrada de Aluminio", alt: "Puerta de entrada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/6-puertas-entrada-vivienda-talavera-reina_66352ad2.jpg", title: "Puerta de Entrada Moderna", alt: "Puerta de entrada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/7-puertas-entrada-vivienda-talavera-reina_7468c5f3.jpg", title: "Puerta de Entrada Resistente", alt: "Puerta de entrada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/8-puertas-entrada-vivienda-talavera-reina_2fdce797.jpg", title: "Puerta de Entrada a Medida", alt: "Puerta de entrada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/9-puertas-entrada-vivienda-talavera-reina_a2c8acd2.jpg", title: "Puerta de Entrada Elegante", alt: "Puerta de entrada" }
    ]
  },
  "puertas-portones": {
    title: "Puertas y Portones de Hierro a Medida en Talavera de la Reina",
    slug: "puertas-portones",
    description: "Puertas y portones personalizados en hierro macizo y aluminio soldado en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvís, Sevilleja y Cervera.",
    content: `En Cerrajería Arriero fabricamos puertas y portones personalizados en hierro macizo y aluminio soldado en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvís, Sevilleja y Cervera. Nuestras puertas y portones combinan resistencia, seguridad y diseño profesional.

Disponemos de diferentes estilos, desde diseños clásicos hasta contemporáneos, todos adaptados a tus necesidades específicas.

## Ventajas de las puertas y portones de hierro

Nuestras puertas ofrecen múltiples beneficios:

- Máxima resistencia y durabilidad.
- Diseños personalizados y elegantes.
- Sistemas de cierre de seguridad avanzados.
- Acabados profesionales de calidad.
- Compatible con automatización.

## Instalación de puertas y portones

Realizamos la instalación completa de puertas y portones en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvis, Sevilleja y Cervera. Fabricación artesanal con soldadura de calidad.

## Presupuesto para puertas y portones

Contacta con nosotros para solicitar presupuesto sin compromiso para tus puertas y portones.`,
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-puertas-portones-portada-talavera-reina_129eea77.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-portones-talavera-reina_1b20f5da.jpg", title: "Puerta y Portón de Hierro en Talavera", alt: "Puerta y portón" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-puertas-portones-talavera-reina_a158808b.jpg", title: "Portón Profesional", alt: "Puerta y portón" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-puertas-portones-talavera-reina_177688be.jpg", title: "Portón Personalizado", alt: "Puerta y portón" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-puertas-portones-talavera-reina_c59b39d7.jpg", title: "Portón de Seguridad", alt: "Puerta y portón" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-puertas-portones-talavera-reina_2508b9bf.jpg", title: "Portón de Aluminio", alt: "Puerta y portón" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/6-puertas-portones-talavera-reina_506b6939.jpg", title: "Portón Moderno", alt: "Puerta y portón" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/7-puertas-portones-talavera-reina_4fafd420.jpg", title: "Portón Resistente", alt: "Puerta y portón" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/8-puertas-portones-talavera-reina_8312c702.jpg", title: "Portón a Medida", alt: "Puerta y portón" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/9-puertas-portones-talavera-reina_9a036eca.jpg", title: "Portón Elegante", alt: "Puerta y portón" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/10-puertas-portones-talavera-reina_custom1.jpg", title: "Portón de Entrada", alt: "Puerta y portón" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/11-puertas-portones-talavera-reina_custom2.jpg", title: "Portón Comercial", alt: "Puerta y portón" }
    ]
  },
  "puertas-portales-comunidad": {
    title: "Puertas de Portales para Comunidades en Talavera de la Reina",
    slug: "puertas-portales-comunidad",
    description: "Puertas de entrada de portales para comunidades fabricadas a medida en hierro y aluminio soldado en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvís, Sevilleja y Cervera.",
    content: `En Cerrajería Arriero fabricamos puertas de portales para comunidades en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvís, Sevilleja y Cervera. Nuestras puertas de portal son la solución perfecta para accesos comunitarios seguros y funcionales.

Disponemos de sistemas de automatización, control de acceso y diseños que se adaptan a cualquier edificio.

## Ventajas de las puertas de portales para comunidades

Nuestras puertas ofrecen múltiples beneficios:

- Control de acceso seguro.
- Sistemas de automatización silenciosos.
- Diseños elegantes y profesionales.
- Acabados de calidad garantizada.
- Compatible con sistemas de intercomunicación.

## Instalación de puertas de portal

Realizamos la instalación completa de puertas de portal en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvis, Sevilleja y Cervera.

## Presupuesto para puertas de portal

Contacta con nosotros para solicitar presupuesto sin compromiso para tus puertas de portal.`,
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-puertas-portales-comunidad-portada-talavera-reina_288394a5.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-portales-comunidad-talavera-reina_d6a65192.jpg", title: "Puerta de Portal para Comunidad", alt: "Puerta de portal" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-puertas-portales-comunidad-talavera-reina_638c7e21.jpg", title: "Puerta de Portal Profesional", alt: "Puerta de portal" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-puertas-portales-comunidad-talavera-reina_9911ae0e.jpg", title: "Puerta de Portal Automatizada", alt: "Puerta de portal" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-puertas-portales-comunidad-talavera-reina_d8537e4e.jpg", title: "Puerta de Portal Segura", alt: "Puerta de portal" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-puertas-portales-comunidad-talavera-reina_9ebfc742.jpg", title: "Puerta de Portal Moderna", alt: "Puerta de portal" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/6-puertas-portales-comunidad-talavera-reina_75a7b68f.jpg", title: "Puerta de Portal Personalizada", alt: "Puerta de portal" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/7-puertas-portales-comunidad-talavera-reina_2706a3ba.jpg", title: "Puerta de Portal de Seguridad", alt: "Puerta de portal" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/8-puertas-portales-comunidad-talavera-reina_custom.jpg", title: "Puerta de Portal a Medida", alt: "Puerta de portal" }
    ]
  },
  "cerramientos-industriales": {
    title: "Cerramientos Industriales de Hierro y Cristal para Separadores de Espacio en Talavera de la Reina",
    slug: "cerramientos-industriales",
    description: "Cerramientos industriales de hierro y cristal para separadores de espacio fabricados a medida en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvís, Sevilleja y Cervera.",
    content: `En Cerrajería Arriero fabricamos cerramientos industriales de hierro y cristal para separadores de espacio en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvís, Sevilleja y Cervera. Nuestros cerramientos combinan funcionalidad, estética y resistencia.

Disponemos de sistemas modulares que se adaptan a cualquier espacio industrial o comercial.

## Ventajas de los cerramientos industriales

Nuestros cerramientos ofrecen múltiples beneficios:

- Separación de espacios eficiente.
- Diseño industrial y profesional.
- Cristal de seguridad resistente.
- Acabados de calidad garantizada.
- Fácil instalación y mantenimiento.

## Instalación de cerramientos industriales

Realizamos la instalación completa de cerramientos industriales en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvis, Sevilleja y Cervera.

## Presupuesto para cerramientos industriales

Contacta con nosotros para solicitar presupuesto sin compromiso para tus cerramientos industriales.`,
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-cerramientos-industriales-portada-talavera-reina_85f0b015.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-cerramientos-industriales-talavera-reina_88f22ab4.jpg", title: "Cerramiento Industrial de Hierro y Cristal", alt: "Cerramiento industrial" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-cerramientos-industriales-talavera-reina_ce8c5378.jpg", title: "Cerramiento Industrial Profesional", alt: "Cerramiento industrial" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-cerramientos-industriales-talavera-reina_332f16f3.jpg", title: "Cerramiento Industrial Modular", alt: "Cerramiento industrial" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-cerramientos-industriales-talavera-reina_2c2e1db4.jpg", title: "Cerramiento Industrial de Seguridad", alt: "Cerramiento industrial" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-cerramientos-industriales-talavera-reina_7d6c0550.jpg", title: "Cerramiento Industrial Personalizado", alt: "Cerramiento industrial" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/6-cerramientos-industriales-talavera-reina_custom.jpg", title: "Cerramiento Industrial Moderno", alt: "Cerramiento industrial" }
    ]
  },
  "pergolas-cubiertas": {
    title: "Pérgolas y Cubiertas con Panel Sándwich en Talavera de la Reina",
    slug: "pergolas-cubiertas",
    description: "Pérgolas y cubiertas con panel sándwich fabricadas a medida en hierro y aluminio soldado en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvís, Sevilleja y Cervera.",
    content: `En Cerrajería Arriero fabricamos pérgolas y cubiertas con panel sándwich en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvís, Sevilleja y Cervera. Nuestras pérgolas combinan protección, estética y durabilidad.

Disponemos de diferentes diseños que se adaptan a cualquier espacio exterior.

## Ventajas de las pérgolas y cubiertas

Nuestras pérgolas ofrecen múltiples beneficios:

- Protección contra la intemperie.
- Aislamiento térmico con panel sándwich.
- Diseños personalizados y elegantes.
- Acabados profesionales de calidad.
- Resistencia y durabilidad garantizada.

## Instalación de pérgolas y cubiertas

Realizamos la instalación completa de pérgolas y cubiertas en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvis, Sevilleja y Cervera.

## Presupuesto para pérgolas y cubiertas

Contacta con nosotros para solicitar presupuesto sin compromiso para tus pérgolas y cubiertas.`,
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-pergolas-cubiertas-portada-talavera-reina_a52611d7.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-pergolas-cubiertas-talavera-reina_f1289c17.jpg", title: "Pérgola y Cubierta de Hierro", alt: "Pérgola y cubierta" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-pergolas-cubiertas-talavera-reina_d938639f.jpg", title: "Pérgola Profesional", alt: "Pérgola y cubierta" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-pergolas-cubiertas-talavera-reina_3caad37b.jpg", title: "Pérgola Personalizada", alt: "Pérgola y cubierta" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-pergolas-cubiertas-talavera-reina_f981d2f2.jpg", title: "Cubierta de Panel Sándwich", alt: "Pérgola y cubierta" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-pergolas-cubiertas-talavera-reina_44b0479c.jpg", title: "Pérgola Moderna", alt: "Pérgola y cubierta" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/6-pergolas-cubiertas-talavera-reina_custom.jpg", title: "Pérgola Resistente", alt: "Pérgola y cubierta" }
    ]
  },
  "cancelas-hierro": {
    title: "Cancelas de Hierro a Medida en Talavera de la Reina",
    slug: "cancelas-hierro",
    description: "Cancelas de hierro personalizadas en hierro macizo y aluminio soldado en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvís, Sevilleja y Cervera.",
    content: `En Cerrajería Arriero fabricamos cancelas de hierro personalizadas en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvís, Sevilleja y Cervera. Nuestras cancelas combinan seguridad, elegancia y funcionalidad.

Disponemos de diferentes estilos y acabados que se adaptan a cualquier entrada o propiedad.

## Ventajas de las cancelas de hierro

Nuestras cancelas ofrecen múltiples beneficios:

- Seguridad y protección de la propiedad.
- Diseños personalizados y elegantes.
- Acabados profesionales de calidad.
- Resistencia a la corrosión.
- Compatible con automatización.

## Instalación de cancelas de hierro

Realizamos la instalación completa de cancelas de hierro en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvis, Sevilleja y Cervera.

## Presupuesto para cancelas de hierro

Contacta con nosotros para solicitar presupuesto sin compromiso para tus cancelas de hierro.`,
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-cancelas-hierro-portada-talavera-reina_4fa20efc.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-cancelas-hierro-talavera-reina_cf803d83.jpg", title: "Cancela de Hierro en Talavera", alt: "Cancela de hierro" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/10-cancelas-hierro-talavera-reina_dbbcd681.jpg", title: "Cancela Profesional", alt: "Cancela de hierro" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/11-cancelas-hierro-talavera-reina_c8c73b43.jpg", title: "Cancela Personalizada", alt: "Cancela de hierro" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/12-cancelas-hierro-talavera-reina_185ae418.jpg", title: "Cancela de Seguridad", alt: "Cancela de hierro" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/13-cancelas-hierro-talavera-reina_666875ef.jpg", title: "Cancela Moderna", alt: "Cancela de hierro" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/14-cancelas-hierro-talavera-reina_custom1.jpg", title: "Cancela Resistente", alt: "Cancela de hierro" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/15-cancelas-hierro-talavera-reina_custom2.jpg", title: "Cancela a Medida", alt: "Cancela de hierro" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-cancelas-hierro-talavera-reina_custom3.jpg", title: "Cancela Elegante", alt: "Cancela de hierro" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-cancelas-hierro-talavera-reina_custom4.jpg", title: "Cancela de Entrada", alt: "Cancela de hierro" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-cancelas-hierro-talavera-reina_custom5.jpg", title: "Cancela Comercial", alt: "Cancela de hierro" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-cancelas-hierro-talavera-reina_custom6.jpg", title: "Cancela Residencial", alt: "Cancela de hierro" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/6-cancelas-hierro-talavera-reina_custom7.jpg", title: "Cancela Automatizada", alt: "Cancela de hierro" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/7-cancelas-hierro-talavera-reina_custom8.jpg", title: "Cancela de Seguridad Alta", alt: "Cancela de hierro" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/8-cancelas-hierro-talavera-reina_custom9.jpg", title: "Cancela Personalizada Premium", alt: "Cancela de hierro" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/9-cancelas-hierro-talavera-reina_custom10.jpg", title: "Cancela Exclusiva", alt: "Cancela de hierro" }
    ]
  },
  "barandillas-escaleras": {
    title: "Barandillas, Balcones y Escaleras de Hierro a Medida en Talavera de la Reina",
    slug: "barandillas-escaleras",
    description: "Barandillas, balcones y escaleras de hierro fabricadas a medida en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvís, Sevilleja y Cervera.",
    content: `En Cerrajería Arriero fabricamos barandillas, balcones y escaleras de hierro a medida en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvís, Sevilleja y Cervera. Nuestras barandillas combinan seguridad, elegancia y funcionalidad.

Disponemos de diferentes estilos y acabados que se adaptan a cualquier arquitectura.

## Ventajas de las barandillas y escaleras de hierro

Nuestras barandillas ofrecen múltiples beneficios:

- Seguridad y protección garantizada.
- Diseños personalizados y elegantes.
- Acabados profesionales de calidad.
- Resistencia y durabilidad garantizada.
- Fácil mantenimiento.

## Instalación de barandillas y escaleras

Realizamos la instalación completa de barandillas y escaleras en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvis, Sevilleja y Cervera.

## Presupuesto para barandillas y escaleras

Contacta con nosotros para solicitar presupuesto sin compromiso para tus barandillas y escaleras.`,
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-barandillas-escaleras-portada-talavera-reina_81014639.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-barandillas-escaleras-talavera-reina_2d814f1c.jpg", title: "Barandilla de Hierro en Talavera", alt: "Barandilla de hierro" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/10-barandillas-escaleras-talavera-reina_aff2eb14.jpg", title: "Barandilla Profesional", alt: "Barandilla de hierro" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/11-barandillas-escaleras-talavera-reina_b56927c8.jpg", title: "Barandilla Personalizada", alt: "Barandilla de hierro" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/12-barandillas-escaleras-talavera-reina_5dfea99b.jpg", title: "Escalera de Hierro", alt: "Barandilla de hierro" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/13-barandillas-escaleras-talavera-reina_fb9d3a3c.jpg", title: "Barandilla de Seguridad", alt: "Barandilla de hierro" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-barandillas-escaleras-talavera-reina_custom1.jpg", title: "Barandilla Moderna", alt: "Barandilla de hierro" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-barandillas-escaleras-talavera-reina_custom2.jpg", title: "Barandilla Resistente", alt: "Barandilla de hierro" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-barandillas-escaleras-talavera-reina_custom3.jpg", title: "Barandilla a Medida", alt: "Barandilla de hierro" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-barandillas-escaleras-talavera-reina_custom4.jpg", title: "Barandilla Elegante", alt: "Barandilla de hierro" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/6-barandillas-escaleras-talavera-reina_custom5.jpg", title: "Escalera Profesional", alt: "Barandilla de hierro" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/7-barandillas-escaleras-talavera-reina_custom6.jpg", title: "Escalera Personalizada", alt: "Barandilla de hierro" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/8-barandillas-escaleras-talavera-reina_custom7.jpg", title: "Escalera de Seguridad", alt: "Barandilla de hierro" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/9-barandillas-escaleras-talavera-reina_custom8.jpg", title: "Balcón de Hierro", alt: "Barandilla de hierro" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/14-barandillas-escaleras-talavera-reina_custom9.jpg", title: "Balcón Elegante", alt: "Barandilla de hierro" }
    ]
  }
};

export function ServiceDetail() {
  const [route, params] = useRoute('/servicios/:slug');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  if (!route) return null;
  
  const service = servicesData[params?.slug];
  if (!service) return <div className="text-center py-20">Servicio no encontrado</div>;
  
  const images = service.galleryImages;
  const currentImage = images[currentImageIndex];
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Portada */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={service.coverImage}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-end">
          <div className="p-8 text-white max-w-4xl">
            <h1 className="text-4xl font-bold mb-2">{service.title}</h1>
            <p className="text-lg">{service.description}</p>
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Galería */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Galería de Fotos</h2>
          <div className="space-y-6">
            {/* Imagen principal */}
            <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
              <img
                src={currentImage.url}
                alt={currentImage.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                  onClick={prevImage}
                  className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
                {currentImageIndex + 1} / {images.length}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {images.map((img: any, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`flex-shrink-0 w-20 h-20 rounded overflow-hidden border-2 transition ${
                    idx === currentImageIndex ? 'border-primary' : 'border-muted'
                  }`}
                >
                  <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Descripción */}
        <div className="prose prose-sm max-w-none mb-12">
          <Streamdown>{service.content}</Streamdown>
        </div>

        {/* Botones de contacto */}
        <div className="flex gap-4 mb-12">
          <a href="tel:925701792" className="flex-1">
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
              <Phone className="w-4 h-4 mr-2" />
              Llamar: 925 70 17 92
            </Button>
          </a>
          <a href="https://wa.me/34661622160" target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp: 661 62 21 60
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
