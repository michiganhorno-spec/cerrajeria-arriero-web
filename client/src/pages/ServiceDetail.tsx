import { useRoute } from 'wouter';
import { Streamdown } from 'streamdown';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Phone, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const servicesData: Record<string, any> = {
  "barandillas-escaleras": {
    title: "Barandillas, Balcones y Escaleras de Hierro a Medida en Talavera de la Reina",
    slug: "barandillas-escaleras",
    description: "Barandillas, balcones y escaleras de hierro...",
    content: `En Cerrajería Arriero fabricamos barandillas, balcones y escaleras...`,
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-barandillas-escaleras-portada-talavera-reina_aa3f6fb1.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-barandillas-escaleras-portada-talavera-reina_aa3f6fb1.jpg", title: "Foto 1", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-barandillas-escaleras-talavera-reina_885ed908.jpg", title: "Foto 2", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/10-barandillas-escaleras-talavera-reina_a836dbb6.jpg", title: "Foto 3", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/11-barandillas-escaleras-talavera-reina_ae839902.jpg", title: "Foto 4", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/12-barandillas-escaleras-talavera-reina_e154c974.jpg", title: "Foto 5", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/13-barandillas-escaleras-talavera-reina_97e76eed.jpg", title: "Foto 6", alt: "Foto del servicio" },
    ]
  },
  "cancelas-hierro": {
    title: "Cancelas de Hierro a Medida en Talavera de la Reina",
    slug: "cancelas-hierro",
    description: "Cancelas de hierro personalizadas...",
    content: `En Cerrajería Arriero fabricamos cancelas de hierro...`,
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-cancelas-hierro-portada-talavera-reina_7f2d18fb.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-cancelas-hierro-portada-talavera-reina_7f2d18fb.jpg", title: "Foto 1", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-cancelas-hierro-talavera-reina_ffa20ab1.jpg", title: "Foto 2", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/10-cancelas-hierro-talavera-reina_9444c379.jpg", title: "Foto 3", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/11-cancelas-hierro-talavera-reina_2025e0bb.jpg", title: "Foto 4", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/12-cancelas-hierro-talavera-reina_a9d81734.jpg", title: "Foto 5", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/13-cancelas-hierro-talavera-reina_83602d2e.jpg", title: "Foto 6", alt: "Foto del servicio" },
    ]
  },
  "cerramientos-industriales": {
    title: "Cerramientos Industriales de Hierro y Cristal para Separadores de Espacio en Talavera de la Reina",
    slug: "cerramientos-industriales",
    description: "Cerramientos industriales de hierro y cristal...",
    content: `En Cerrajería Arriero fabricamos cerramientos industriales...`,
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-cerramientos-industriales-hierro-cristal-portada-talavera-reina_697eeaf8.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-cerramientos-industriales-hierro-cristal-portada-talavera-reina_697eeaf8.jpg", title: "Foto 1", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-cerramientos-industriales-portada-talavera-reina_918beff0.jpg", title: "Foto 2", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-cerramientos-industriales-hierro-cristal-talavera-reina_5be0caac.jpg", title: "Foto 3", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-cerramientos-industriales-talavera-reina_5cc66874.jpg", title: "Foto 4", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-cerramientos-industriales-hierro-cristal-talavera-reina_ec6ad984.jpg", title: "Foto 5", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-cerramientos-industriales-talavera-reina_548a018b.jpg", title: "Foto 6", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-cerramientos-industriales-hierro-cristal-talavera-reina_9d39f7c2.jpg", title: "Foto 7", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-cerramientos-industriales-talavera-reina_57e7c4da.jpg", title: "Foto 8", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-cerramientos-industriales-hierro-cristal-talavera-reina_a61da9cb.jpg", title: "Foto 9", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-cerramientos-industriales-talavera-reina_77981aa9.jpg", title: "Foto 10", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-cerramientos-industriales-hierro-cristal-talavera-reina_0286f297.jpg", title: "Foto 11", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-cerramientos-industriales-talavera-reina_aaa72cfd.jpg", title: "Foto 12", alt: "Foto del servicio" },
    ]
  },
  "pergolas-cubiertas": {
    title: "Pérgolas y Cubiertas con Panel Sándwich en Talavera de la Reina",
    slug: "pergolas-cubiertas",
    description: "Pérgolas y cubiertas con panel sándwich...",
    content: `En Cerrajería Arriero fabricamos pérgolas y cubiertas...`,
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-pergolas-cubiertas-portada-talavera-reina_34475c23.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-pergolas-cubiertas-portada-talavera-reina_34475c23.jpg", title: "Foto 1", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-pergolas-cubiertas-talavera-reina_6281c341.jpg", title: "Foto 2", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-pergolas-cubiertas-talavera-reina_6b6ba40c.jpg", title: "Foto 3", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-pergolas-cubiertas-talavera-reina_da225418.jpg", title: "Foto 4", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-pergolas-cubiertas-talavera-reina_882cb9bc.jpg", title: "Foto 5", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-pergolas-cubiertas-talavera-reina_478a0635.jpg", title: "Foto 6", alt: "Foto del servicio" },
    ]
  },
  "puertas-correderas-automaticas": {
    title: "Puertas Correderas Automáticas de Hierro y Aluminio en Talavera de la Reina",
    slug: "puertas-correderas-automaticas",
    description: "Puertas correderas automáticas fabricadas a medida en hierro y aluminio soldado en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvís, Sevilleja y Cervera.",
    content: `En Cerrajería Arriero fabricamos e instalamos puertas correderas automáticas en Talavera de la Reina...`,
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-puertas-correderas-automaticas-portada-talavera-reina_8a149f9a.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-puertas-correderas-automaticas-portada-talavera-reina_8a149f9a.jpg", title: "Foto 1", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-correderas-automaticas-talavera-reina_ff72cd31.jpg", title: "Foto 2", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/10-puertas-correderas-automaticas-talavera-reina_eaf3866d.jpg", title: "Foto 3", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/11-puertas-correderas-automaticas-talavera-reina_5e4a7404.jpg", title: "Foto 4", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/12-puertas-correderas-automaticas-talavera-reina_5ad3b4f9.jpg", title: "Foto 5", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-puertas-correderas-automaticas-talavera-reina_79cac746.jpg", title: "Foto 6", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-puertas-correderas-automaticas-talavera-reina_e3e851bd.jpg", title: "Foto 7", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-puertas-correderas-automaticas-talavera-reina_07e8bcf1.jpg", title: "Foto 8", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-puertas-correderas-automaticas-talavera-reina_e1a7aea8.jpg", title: "Foto 9", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/6-puertas-correderas-automaticas-talavera-reina_53abbf01.jpg", title: "Foto 10", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/7-puertas-correderas-automaticas-talavera-reina_8f89a29e.jpg", title: "Foto 11", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/8-puertas-correderas-automaticas-talavera-reina_cd41c7fb.jpg", title: "Foto 12", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/9-puertas-correderas-automaticas-talavera-reina_f196b658.jpg", title: "Foto 13", alt: "Foto del servicio" },
    ]
  },
  "puertas-entrada-vivienda": {
    title: "Puertas de Entrada a Vivienda de Hierro y Aluminio en Talavera de la Reina",
    slug: "puertas-entrada-vivienda",
    description: "Puertas de entrada a vivienda fabricadas a medida...",
    content: `En Cerrajería Arriero fabricamos e instalamos puertas de entrada...`,
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-entrada-vivienda-talavera-reina_54c5e3b6.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-entrada-vivienda-talavera-reina_54c5e3b6.jpg", title: "Foto 1", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-puertas-entrada-vivienda-talavera-reina_65d89197.jpg", title: "Foto 2", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-puertas-entrada-vivienda-talavera-reina_a5a7d62a.jpg", title: "Foto 3", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-puertas-entrada-vivienda-talavera-reina_4c71e9c4.jpg", title: "Foto 4", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-puertas-entrada-vivienda-talavera-reina_dfe5a3aa.jpg", title: "Foto 5", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/6-puertas-entrada-vivienda-talavera-reina_cc633c9e.jpg", title: "Foto 6", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/7-puertas-entrada-vivienda-talavera-reina_d2fdbac6.jpg", title: "Foto 7", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/8-puertas-entrada-vivienda-talavera-reina_54685405.jpg", title: "Foto 8", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/9-puertas-entrada-vivienda-talavera-reina_ca78c44f.jpg", title: "Foto 9", alt: "Foto del servicio" },
    ]
  },
  "puertas-portales-comunidad": {
    title: "Puertas de Portales para Comunidades en Talavera de la Reina",
    slug: "puertas-portales-comunidad",
    description: "Puertas de entrada de portales para comunidades...",
    content: `En Cerrajería Arriero fabricamos puertas de portales...`,
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-puertas-portales-comunidad-portada-talavera-reina_a2f51a00.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-puertas-portales-comunidad-portada-talavera-reina_a2f51a00.jpg", title: "Foto 1", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-portales-comunidad-talavera-reina_f5468fc5.jpg", title: "Foto 2", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-puertas-portales-comunidad-talavera-reina_6f05696c.jpg", title: "Foto 3", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-puertas-portales-comunidad-talavera-reina_54768d72.jpg", title: "Foto 4", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-puertas-portales-comunidad-talavera-reina_58eb5f5f.jpg", title: "Foto 5", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-puertas-portales-comunidad-talavera-reina_0f480749.jpg", title: "Foto 6", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/6-puertas-portales-comunidad-talavera-reina_34606d9f.jpg", title: "Foto 7", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/7-puertas-portales-comunidad-talavera-reina_816703b7.jpg", title: "Foto 8", alt: "Foto del servicio" },
    ]
  },
  "puertas-portones": {
    title: "Puertas y Portones de Hierro a Medida en Talavera de la Reina",
    slug: "puertas-portones",
    description: "Puertas y portones personalizados en hierro macizo...",
    content: `En Cerrajería Arriero fabricamos puertas y portones personalizados...`,
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-puertas-portones-portada-talavera-reina_774fc2b0.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-puertas-portones-portada-talavera-reina_774fc2b0.jpg", title: "Foto 1", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-portones-talavera-reina_d94252c5.jpg", title: "Foto 2", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-puertas-portones-talavera-reina_1721a501.jpg", title: "Foto 3", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-puertas-portones-talavera-reina_f5ec60b0.jpg", title: "Foto 4", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-puertas-portones-talavera-reina_79bc3cf9.jpg", title: "Foto 5", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-puertas-portones-talavera-reina_faa541f8.jpg", title: "Foto 6", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/6-puertas-portones-talavera-reina_72fa0ad5.jpg", title: "Foto 7", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/7-puertas-portones-talavera-reina_41fb1f7d.jpg", title: "Foto 8", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/8-puertas-portones-talavera-reina_567d037c.jpg", title: "Foto 9", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/9-puertas-portones-talavera-reina_3488079a.jpg", title: "Foto 10", alt: "Foto del servicio" },
    ]
  },
  "rejas-seguridad": {
    title: "Rejas de Seguridad de Hierro a Medida en Talavera de la Reina",
    slug: "rejas-seguridad",
    description: "Rejas de seguridad personalizadas en hierro macizo y aluminio soldado...",
    content: `En Cerrajería Arriero fabricamos rejas de seguridad personalizadas...`,
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-rejas-seguridad-talavera-reina_3154a525.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-rejas-seguridad-talavera-reina_3154a525.jpg", title: "Foto 1", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-rejas-seguridad-talavera-reina_fc7d1a07.jpg", title: "Foto 2", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-rejas-seguridad-talavera-reina_745225b4.jpg", title: "Foto 3", alt: "Foto del servicio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-rejas-seguridad-talavera-reina_458b9233.jpg", title: "Foto 4", alt: "Foto del servicio" },
    ]
  },
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
      <div className="relative h-96 overflow-hidden">
        <img src={service.coverImage} alt={service.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-end">
          <div className="p-8 text-white max-w-4xl">
            <h1 className="text-4xl font-bold mb-2">{service.title}</h1>
            <p className="text-lg">{service.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Galería de Fotos</h2>
          <div className="space-y-6">
            <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
              <img src={currentImage.url} alt={currentImage.alt} className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prevImage} className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={nextImage} className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
                {currentImageIndex + 1} / {images.length}
              </div>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2">
              {images.map((img: any, idx: number) => (
                <button key={idx} onClick={() => setCurrentImageIndex(idx)} className={`flex-shrink-0 w-20 h-20 rounded overflow-hidden border-2 transition ${idx === currentImageIndex ? 'border-primary' : 'border-muted'}`}>
                  <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="prose prose-sm max-w-none mb-12">
          <Streamdown>{service.content}</Streamdown>
        </div>

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
