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
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-barandillas-escaleras-portada-talavera-reina_aa3f6fb1.jpg", title: "Barandilla de Hierro en Talavera de la Reina", alt: "Barandilla de Hierro en Talavera de la Reina" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-barandillas-escaleras-talavera-reina_885ed908.jpg", title: "Barandilla Personalizada en Pepino", alt: "Barandilla Personalizada en Pepino" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/10-barandillas-escaleras-talavera-reina_a836dbb6.jpg", title: "Barandilla de Escalera en Cebolla", alt: "Barandilla de Escalera en Cebolla" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/11-barandillas-escaleras-talavera-reina_ae839902.jpg", title: "Barandilla Moderna en Mejorada", alt: "Barandilla Moderna en Mejorada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/12-barandillas-escaleras-talavera-reina_e154c974.jpg", title: "Barandilla Segura en Talavera la Nueva", alt: "Barandilla Segura en Talavera la Nueva" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/13-barandillas-escaleras-talavera-reina_97e76eed.jpg", title: "Barandilla Resistente en Belvís", alt: "Barandilla Resistente en Belvís" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-barandillas-escaleras-portada-talavera-reina_aa3f6fb1.jpg", title: "Foto 7", alt: "Foto 7" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-barandillas-escaleras-talavera-reina_885ed908.jpg", title: "Foto 8", alt: "Foto 8" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/10-barandillas-escaleras-talavera-reina_a836dbb6.jpg", title: "Foto 9", alt: "Foto 9" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/11-barandillas-escaleras-talavera-reina_ae839902.jpg", title: "Foto 10", alt: "Foto 10" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/12-barandillas-escaleras-talavera-reina_e154c974.jpg", title: "Foto 11", alt: "Foto 11" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/13-barandillas-escaleras-talavera-reina_97e76eed.jpg", title: "Foto 12", alt: "Foto 12" },
    ]
  },
  "cancelas-hierro": {
    title: "Cancelas de Hierro a Medida en Talavera de la Reina",
    slug: "cancelas-hierro",
    description: "Cancelas de hierro personalizadas...",
    content: `En Cerrajería Arriero fabricamos cancelas de hierro...`,
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-cancelas-hierro-portada-talavera-reina_7f2d18fb.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-cancelas-hierro-portada-talavera-reina_7f2d18fb.jpg", title: "Cancela de Hierro en Talavera de la Reina", alt: "Cancela de Hierro en Talavera de la Reina" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-cancelas-hierro-talavera-reina_ffa20ab1.jpg", title: "Cancela de Hierro Personalizada en Pepino", alt: "Cancela de Hierro Personalizada en Pepino" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/10-cancelas-hierro-talavera-reina_9444c379.jpg", title: "Cancela de Hierro Soldada en Cebolla", alt: "Cancela de Hierro Soldada en Cebolla" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/11-cancelas-hierro-talavera-reina_2025e0bb.jpg", title: "Cancela de Hierro Moderna en Mejorada", alt: "Cancela de Hierro Moderna en Mejorada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/12-cancelas-hierro-talavera-reina_a9d81734.jpg", title: "Cancela de Hierro Segura en Talavera la Nueva", alt: "Cancela de Hierro Segura en Talavera la Nueva" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/13-cancelas-hierro-talavera-reina_83602d2e.jpg", title: "Cancela de Hierro Resistente en Belvís", alt: "Cancela de Hierro Resistente en Belvís" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-cancelas-hierro-portada-talavera-reina_7f2d18fb.jpg", title: "Foto 7", alt: "Foto 7" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-cancelas-hierro-talavera-reina_ffa20ab1.jpg", title: "Foto 8", alt: "Foto 8" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/10-cancelas-hierro-talavera-reina_9444c379.jpg", title: "Foto 9", alt: "Foto 9" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/11-cancelas-hierro-talavera-reina_2025e0bb.jpg", title: "Foto 10", alt: "Foto 10" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/12-cancelas-hierro-talavera-reina_a9d81734.jpg", title: "Foto 11", alt: "Foto 11" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/13-cancelas-hierro-talavera-reina_83602d2e.jpg", title: "Foto 12", alt: "Foto 12" },
    ]
  },
  "cerramientos-industriales": {
    title: "Cerramientos Industriales de Hierro y Cristal para Separadores de Espacio en Talavera de la Reina",
    slug: "cerramientos-industriales",
    description: "Cerramientos industriales de hierro y cristal...",
    content: `En Cerrajería Arriero fabricamos cerramientos industriales...`,
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-cerramientos-industriales-hierro-cristal-portada-talavera-reina_697eeaf8.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-cerramientos-industriales-hierro-cristal-portada-talavera-reina_697eeaf8.jpg", title: "Cerramiento Industrial de Hierro y Cristal en Talavera de la Reina", alt: "Cerramiento Industrial de Hierro y Cristal en Talavera de la Reina" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-cerramientos-industriales-portada-talavera-reina_918beff0.jpg", title: "Cerramiento Industrial Personalizado en Pepino", alt: "Cerramiento Industrial Personalizado en Pepino" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-cerramientos-industriales-hierro-cristal-talavera-reina_5be0caac.jpg", title: "Cerramiento Industrial de Hierro en Cebolla", alt: "Cerramiento Industrial de Hierro en Cebolla" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-cerramientos-industriales-talavera-reina_5cc66874.jpg", title: "Cerramiento Industrial Soldado en Mejorada", alt: "Cerramiento Industrial Soldado en Mejorada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-cerramientos-industriales-hierro-cristal-talavera-reina_ec6ad984.jpg", title: "Cerramiento Industrial Moderno en Talavera la Nueva", alt: "Cerramiento Industrial Moderno en Talavera la Nueva" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-cerramientos-industriales-talavera-reina_548a018b.jpg", title: "Cerramiento Industrial Seguro en Belvís", alt: "Cerramiento Industrial Seguro en Belvís" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-cerramientos-industriales-hierro-cristal-talavera-reina_9d39f7c2.jpg", title: "Cerramiento Industrial Resistente en Sevilleja", alt: "Cerramiento Industrial Resistente en Sevilleja" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-cerramientos-industriales-talavera-reina_57e7c4da.jpg", title: "Cerramiento Industrial Profesional en Cervera", alt: "Cerramiento Industrial Profesional en Cervera" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-cerramientos-industriales-hierro-cristal-talavera-reina_a61da9cb.jpg", title: "Cerramiento Industrial Transparente", alt: "Cerramiento Industrial Transparente" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-cerramientos-industriales-talavera-reina_77981aa9.jpg", title: "Cerramiento Industrial Separador de Espacio", alt: "Cerramiento Industrial Separador de Espacio" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-cerramientos-industriales-hierro-cristal-talavera-reina_0286f297.jpg", title: "Cerramiento Industrial Oficinas", alt: "Cerramiento Industrial Oficinas" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-cerramientos-industriales-talavera-reina_aaa72cfd.jpg", title: "Cerramiento Industrial Almacén", alt: "Cerramiento Industrial Almacén" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-cerramientos-industriales-hierro-cristal-portada-talavera-reina_697eeaf8.jpg", title: "Foto 13", alt: "Foto 13" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-cerramientos-industriales-portada-talavera-reina_918beff0.jpg", title: "Foto 14", alt: "Foto 14" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-cerramientos-industriales-hierro-cristal-talavera-reina_5be0caac.jpg", title: "Foto 15", alt: "Foto 15" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-cerramientos-industriales-talavera-reina_5cc66874.jpg", title: "Foto 16", alt: "Foto 16" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-cerramientos-industriales-hierro-cristal-talavera-reina_ec6ad984.jpg", title: "Foto 17", alt: "Foto 17" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-cerramientos-industriales-talavera-reina_548a018b.jpg", title: "Foto 18", alt: "Foto 18" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-cerramientos-industriales-hierro-cristal-talavera-reina_9d39f7c2.jpg", title: "Foto 19", alt: "Foto 19" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-cerramientos-industriales-talavera-reina_57e7c4da.jpg", title: "Foto 20", alt: "Foto 20" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-cerramientos-industriales-hierro-cristal-talavera-reina_a61da9cb.jpg", title: "Foto 21", alt: "Foto 21" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-cerramientos-industriales-talavera-reina_77981aa9.jpg", title: "Foto 22", alt: "Foto 22" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-cerramientos-industriales-hierro-cristal-talavera-reina_0286f297.jpg", title: "Foto 23", alt: "Foto 23" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-cerramientos-industriales-talavera-reina_aaa72cfd.jpg", title: "Foto 24", alt: "Foto 24" },
    ]
  },
  "pergolas-cubiertas": {
    title: "Pérgolas y Cubiertas con Panel Sándwich en Talavera de la Reina",
    slug: "pergolas-cubiertas",
    description: "Pérgolas y cubiertas con panel sándwich...",
    content: `En Cerrajería Arriero fabricamos pérgolas y cubiertas...`,
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-pergolas-cubiertas-portada-talavera-reina_34475c23.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-pergolas-cubiertas-portada-talavera-reina_34475c23.jpg", title: "Pérgola y Cubierta con Panel Sándwich en Talavera de la Reina", alt: "Pérgola y Cubierta con Panel Sándwich en Talavera de la Reina" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-pergolas-cubiertas-talavera-reina_6281c341.jpg", title: "Pérgola y Cubierta Personalizada en Pepino", alt: "Pérgola y Cubierta Personalizada en Pepino" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-pergolas-cubiertas-talavera-reina_6b6ba40c.jpg", title: "Pérgola y Cubierta de Hierro en Cebolla", alt: "Pérgola y Cubierta de Hierro en Cebolla" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-pergolas-cubiertas-talavera-reina_da225418.jpg", title: "Pérgola y Cubierta Soldada en Mejorada", alt: "Pérgola y Cubierta Soldada en Mejorada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-pergolas-cubiertas-talavera-reina_882cb9bc.jpg", title: "Pérgola y Cubierta Moderna en Talavera la Nueva", alt: "Pérgola y Cubierta Moderna en Talavera la Nueva" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-pergolas-cubiertas-talavera-reina_478a0635.jpg", title: "Pérgola y Cubierta Resistente en Belvís", alt: "Pérgola y Cubierta Resistente en Belvís" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-pergolas-cubiertas-portada-talavera-reina_34475c23.jpg", title: "Foto 7", alt: "Foto 7" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-pergolas-cubiertas-talavera-reina_6281c341.jpg", title: "Foto 8", alt: "Foto 8" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-pergolas-cubiertas-talavera-reina_6b6ba40c.jpg", title: "Foto 9", alt: "Foto 9" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-pergolas-cubiertas-talavera-reina_da225418.jpg", title: "Foto 10", alt: "Foto 10" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-pergolas-cubiertas-talavera-reina_882cb9bc.jpg", title: "Foto 11", alt: "Foto 11" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-pergolas-cubiertas-talavera-reina_478a0635.jpg", title: "Foto 12", alt: "Foto 12" },
    ]
  },
  "puertas-correderas-automaticas": {
    title: "Puertas Correderas Automáticas de Hierro y Aluminio en Talavera de la Reina",
    slug: "puertas-correderas-automaticas",
    description: "Puertas correderas automáticas fabricadas a medida en hierro y aluminio soldado en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvís, Sevilleja y Cervera.",
    content: `En Cerrajería Arriero fabricamos e instalamos puertas correderas automáticas de hierro y aluminio en Talavera de la Reina y sus alrededores...`,
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-puertas-correderas-automaticas-portada-talavera-reina_8a149f9a.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-puertas-correderas-automaticas-portada-talavera-reina_8a149f9a.jpg", title: "Puerta Corredera Automática Gris en Talavera de la Reina", alt: "Puerta Corredera Automática Gris en Talavera de la Reina" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-correderas-automaticas-talavera-reina_ff72cd31.jpg", title: "Puerta Corredera Automática Instalada en Pepino", alt: "Puerta Corredera Automática Instalada en Pepino" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/10-puertas-correderas-automaticas-talavera-reina_eaf3866d.jpg", title: "Puerta Corredera Automática de Aluminio en Cebolla", alt: "Puerta Corredera Automática de Aluminio en Cebolla" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/11-puertas-correderas-automaticas-talavera-reina_5e4a7404.jpg", title: "Puerta Corredera Automática Fabricada en Mejorada", alt: "Puerta Corredera Automática Fabricada en Mejorada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/12-puertas-correderas-automaticas-talavera-reina_5ad3b4f9.jpg", title: "Puerta Corredera Automática Personalizada en Talavera la Nueva", alt: "Puerta Corredera Automática Personalizada en Talavera la Nueva" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-puertas-correderas-automaticas-talavera-reina_79cac746.jpg", title: "Puerta Corredera Automática de Hierro en Belvís", alt: "Puerta Corredera Automática de Hierro en Belvís" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-puertas-correderas-automaticas-talavera-reina_e3e851bd.jpg", title: "Puerta Corredera Automática Soldada en Sevilleja", alt: "Puerta Corredera Automática Soldada en Sevilleja" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-puertas-correderas-automaticas-talavera-reina_07e8bcf1.jpg", title: "Puerta Corredera Automática Instalada en Cervera", alt: "Puerta Corredera Automática Instalada en Cervera" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-puertas-correderas-automaticas-talavera-reina_e1a7aea8.jpg", title: "Puerta Corredera Automática con Control Remoto", alt: "Puerta Corredera Automática con Control Remoto" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/6-puertas-correderas-automaticas-talavera-reina_53abbf01.jpg", title: "Puerta Corredera Automática de Seguridad", alt: "Puerta Corredera Automática de Seguridad" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/7-puertas-correderas-automaticas-talavera-reina_8f89a29e.jpg", title: "Puerta Corredera Automática Resistente", alt: "Puerta Corredera Automática Resistente" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/8-puertas-correderas-automaticas-talavera-reina_cd41c7fb.jpg", title: "Puerta Corredera Automática Moderna", alt: "Puerta Corredera Automática Moderna" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/9-puertas-correderas-automaticas-talavera-reina_f196b658.jpg", title: "Puerta Corredera Automática Profesional", alt: "Puerta Corredera Automática Profesional" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-puertas-correderas-automaticas-portada-talavera-reina_8a149f9a.jpg", title: "Foto 14", alt: "Foto 14" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-correderas-automaticas-talavera-reina_ff72cd31.jpg", title: "Foto 15", alt: "Foto 15" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/10-puertas-correderas-automaticas-talavera-reina_eaf3866d.jpg", title: "Foto 16", alt: "Foto 16" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/11-puertas-correderas-automaticas-talavera-reina_5e4a7404.jpg", title: "Foto 17", alt: "Foto 17" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/12-puertas-correderas-automaticas-talavera-reina_5ad3b4f9.jpg", title: "Foto 18", alt: "Foto 18" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-puertas-correderas-automaticas-talavera-reina_79cac746.jpg", title: "Foto 19", alt: "Foto 19" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-puertas-correderas-automaticas-talavera-reina_e3e851bd.jpg", title: "Foto 20", alt: "Foto 20" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-puertas-correderas-automaticas-talavera-reina_07e8bcf1.jpg", title: "Foto 21", alt: "Foto 21" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-puertas-correderas-automaticas-talavera-reina_e1a7aea8.jpg", title: "Foto 22", alt: "Foto 22" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/6-puertas-correderas-automaticas-talavera-reina_53abbf01.jpg", title: "Foto 23", alt: "Foto 23" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/7-puertas-correderas-automaticas-talavera-reina_8f89a29e.jpg", title: "Foto 24", alt: "Foto 24" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/8-puertas-correderas-automaticas-talavera-reina_cd41c7fb.jpg", title: "Foto 25", alt: "Foto 25" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/9-puertas-correderas-automaticas-talavera-reina_f196b658.jpg", title: "Foto 26", alt: "Foto 26" },
    ]
  },
  "puertas-entrada-vivienda": {
    title: "Puertas de Entrada a Vivienda de Hierro y Aluminio en Talavera de la Reina",
    slug: "puertas-entrada-vivienda",
    description: "Puertas de entrada a vivienda fabricadas a medida...",
    content: `En Cerrajería Arriero fabricamos e instalamos puertas de entrada...`,
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-entrada-vivienda-talavera-reina_54c5e3b6.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-entrada-vivienda-talavera-reina_54c5e3b6.jpg", title: "Puerta de Entrada a Vivienda de Hierro en Talavera de la Reina", alt: "Puerta de Entrada a Vivienda de Hierro en Talavera de la Reina" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-puertas-entrada-vivienda-talavera-reina_65d89197.jpg", title: "Puerta de Entrada a Vivienda Personalizada en Pepino", alt: "Puerta de Entrada a Vivienda Personalizada en Pepino" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-puertas-entrada-vivienda-talavera-reina_a5a7d62a.jpg", title: "Puerta de Entrada a Vivienda de Aluminio en Cebolla", alt: "Puerta de Entrada a Vivienda de Aluminio en Cebolla" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-puertas-entrada-vivienda-talavera-reina_4c71e9c4.jpg", title: "Puerta de Entrada a Vivienda Soldada en Mejorada", alt: "Puerta de Entrada a Vivienda Soldada en Mejorada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-puertas-entrada-vivienda-talavera-reina_dfe5a3aa.jpg", title: "Puerta de Entrada a Vivienda Moderna en Talavera la Nueva", alt: "Puerta de Entrada a Vivienda Moderna en Talavera la Nueva" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/6-puertas-entrada-vivienda-talavera-reina_cc633c9e.jpg", title: "Puerta de Entrada a Vivienda Segura en Belvís", alt: "Puerta de Entrada a Vivienda Segura en Belvís" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/7-puertas-entrada-vivienda-talavera-reina_d2fdbac6.jpg", title: "Puerta de Entrada a Vivienda Resistente en Sevilleja", alt: "Puerta de Entrada a Vivienda Resistente en Sevilleja" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/8-puertas-entrada-vivienda-talavera-reina_54685405.jpg", title: "Puerta de Entrada a Vivienda Profesional en Cervera", alt: "Puerta de Entrada a Vivienda Profesional en Cervera" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/9-puertas-entrada-vivienda-talavera-reina_ca78c44f.jpg", title: "Puerta de Entrada a Vivienda Elegante", alt: "Puerta de Entrada a Vivienda Elegante" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-entrada-vivienda-talavera-reina_54c5e3b6.jpg", title: "Foto 10", alt: "Foto 10" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-puertas-entrada-vivienda-talavera-reina_65d89197.jpg", title: "Foto 11", alt: "Foto 11" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-puertas-entrada-vivienda-talavera-reina_a5a7d62a.jpg", title: "Foto 12", alt: "Foto 12" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-puertas-entrada-vivienda-talavera-reina_4c71e9c4.jpg", title: "Foto 13", alt: "Foto 13" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-puertas-entrada-vivienda-talavera-reina_dfe5a3aa.jpg", title: "Foto 14", alt: "Foto 14" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/6-puertas-entrada-vivienda-talavera-reina_cc633c9e.jpg", title: "Foto 15", alt: "Foto 15" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/7-puertas-entrada-vivienda-talavera-reina_d2fdbac6.jpg", title: "Foto 16", alt: "Foto 16" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/8-puertas-entrada-vivienda-talavera-reina_54685405.jpg", title: "Foto 17", alt: "Foto 17" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/9-puertas-entrada-vivienda-talavera-reina_ca78c44f.jpg", title: "Foto 18", alt: "Foto 18" },
    ]
  },
  "puertas-portales-comunidad": {
    title: "Puertas de Portales para Comunidades en Talavera de la Reina",
    slug: "puertas-portales-comunidad",
    description: "Puertas de entrada de portales para comunidades...",
    content: `En Cerrajería Arriero fabricamos puertas de portales...`,
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-puertas-portales-comunidad-portada-talavera-reina_a2f51a00.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-puertas-portales-comunidad-portada-talavera-reina_a2f51a00.jpg", title: "Puerta de Portal para Comunidad en Talavera de la Reina", alt: "Puerta de Portal para Comunidad en Talavera de la Reina" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-portales-comunidad-talavera-reina_f5468fc5.jpg", title: "Puerta de Portal Personalizada en Pepino", alt: "Puerta de Portal Personalizada en Pepino" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-puertas-portales-comunidad-talavera-reina_6f05696c.jpg", title: "Puerta de Portal de Hierro en Cebolla", alt: "Puerta de Portal de Hierro en Cebolla" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-puertas-portales-comunidad-talavera-reina_54768d72.jpg", title: "Puerta de Portal Soldada en Mejorada", alt: "Puerta de Portal Soldada en Mejorada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-puertas-portales-comunidad-talavera-reina_58eb5f5f.jpg", title: "Puerta de Portal Moderna en Talavera la Nueva", alt: "Puerta de Portal Moderna en Talavera la Nueva" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-puertas-portales-comunidad-talavera-reina_0f480749.jpg", title: "Puerta de Portal Segura en Belvís", alt: "Puerta de Portal Segura en Belvís" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/6-puertas-portales-comunidad-talavera-reina_34606d9f.jpg", title: "Puerta de Portal Resistente en Sevilleja", alt: "Puerta de Portal Resistente en Sevilleja" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/7-puertas-portales-comunidad-talavera-reina_816703b7.jpg", title: "Puerta de Portal Profesional en Cervera", alt: "Puerta de Portal Profesional en Cervera" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-puertas-portales-comunidad-portada-talavera-reina_a2f51a00.jpg", title: "Foto 9", alt: "Foto 9" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-portales-comunidad-talavera-reina_f5468fc5.jpg", title: "Foto 10", alt: "Foto 10" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-puertas-portales-comunidad-talavera-reina_6f05696c.jpg", title: "Foto 11", alt: "Foto 11" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-puertas-portales-comunidad-talavera-reina_54768d72.jpg", title: "Foto 12", alt: "Foto 12" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-puertas-portales-comunidad-talavera-reina_58eb5f5f.jpg", title: "Foto 13", alt: "Foto 13" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-puertas-portales-comunidad-talavera-reina_0f480749.jpg", title: "Foto 14", alt: "Foto 14" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/6-puertas-portales-comunidad-talavera-reina_34606d9f.jpg", title: "Foto 15", alt: "Foto 15" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/7-puertas-portales-comunidad-talavera-reina_816703b7.jpg", title: "Foto 16", alt: "Foto 16" },
    ]
  },
  "puertas-portones": {
    title: "Puertas y Portones de Hierro a Medida en Talavera de la Reina",
    slug: "puertas-portones",
    description: "Puertas y portones personalizados en hierro macizo...",
    content: `En Cerrajería Arriero fabricamos puertas y portones personalizados...`,
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-puertas-portones-portada-talavera-reina_774fc2b0.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-puertas-portones-portada-talavera-reina_774fc2b0.jpg", title: "Puerta y Portón de Hierro en Talavera de la Reina", alt: "Puerta y Portón de Hierro en Talavera de la Reina" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-portones-talavera-reina_d94252c5.jpg", title: "Puerta y Portón Personalizado en Pepino", alt: "Puerta y Portón Personalizado en Pepino" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-puertas-portones-talavera-reina_1721a501.jpg", title: "Puerta y Portón de Aluminio en Cebolla", alt: "Puerta y Portón de Aluminio en Cebolla" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-puertas-portones-talavera-reina_f5ec60b0.jpg", title: "Puerta y Portón Soldado en Mejorada", alt: "Puerta y Portón Soldado en Mejorada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-puertas-portones-talavera-reina_79bc3cf9.jpg", title: "Puerta y Portón Moderno en Talavera la Nueva", alt: "Puerta y Portón Moderno en Talavera la Nueva" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-puertas-portones-talavera-reina_faa541f8.jpg", title: "Puerta y Portón Seguro en Belvís", alt: "Puerta y Portón Seguro en Belvís" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/6-puertas-portones-talavera-reina_72fa0ad5.jpg", title: "Puerta y Portón Resistente en Sevilleja", alt: "Puerta y Portón Resistente en Sevilleja" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/7-puertas-portones-talavera-reina_41fb1f7d.jpg", title: "Puerta y Portón Profesional en Cervera", alt: "Puerta y Portón Profesional en Cervera" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/8-puertas-portones-talavera-reina_567d037c.jpg", title: "Puerta y Portón Grande", alt: "Puerta y Portón Grande" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/9-puertas-portones-talavera-reina_3488079a.jpg", title: "Puerta y Portón Doble", alt: "Puerta y Portón Doble" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-puertas-portones-portada-talavera-reina_774fc2b0.jpg", title: "Foto 11", alt: "Foto 11" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-portones-talavera-reina_d94252c5.jpg", title: "Foto 12", alt: "Foto 12" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-puertas-portones-talavera-reina_1721a501.jpg", title: "Foto 13", alt: "Foto 13" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-puertas-portones-talavera-reina_f5ec60b0.jpg", title: "Foto 14", alt: "Foto 14" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-puertas-portones-talavera-reina_79bc3cf9.jpg", title: "Foto 15", alt: "Foto 15" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-puertas-portones-talavera-reina_faa541f8.jpg", title: "Foto 16", alt: "Foto 16" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/6-puertas-portones-talavera-reina_72fa0ad5.jpg", title: "Foto 17", alt: "Foto 17" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/7-puertas-portones-talavera-reina_41fb1f7d.jpg", title: "Foto 18", alt: "Foto 18" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/8-puertas-portones-talavera-reina_567d037c.jpg", title: "Foto 19", alt: "Foto 19" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/9-puertas-portones-talavera-reina_3488079a.jpg", title: "Foto 20", alt: "Foto 20" },
    ]
  },
  "rejas-seguridad": {
    title: "Rejas de Seguridad de Hierro a Medida en Talavera de la Reina",
    slug: "rejas-seguridad",
    description: "Rejas de seguridad personalizadas en hierro macizo y aluminio soldado...",
    content: `En Cerrajería Arriero fabricamos rejas de seguridad personalizadas...`,
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-rejas-seguridad-talavera-reina_3154a525.jpg",
    galleryImages: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-rejas-seguridad-talavera-reina_3154a525.jpg", title: "Reja de Seguridad Negra en Talavera de la Reina", alt: "Reja de Seguridad Negra en Talavera de la Reina" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-rejas-seguridad-talavera-reina_fc7d1a07.jpg", title: "Reja de Seguridad Personalizada en Pepino", alt: "Reja de Seguridad Personalizada en Pepino" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-rejas-seguridad-talavera-reina_745225b4.jpg", title: "Reja de Seguridad de Hierro en Cebolla", alt: "Reja de Seguridad de Hierro en Cebolla" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-rejas-seguridad-talavera-reina_458b9233.jpg", title: "Reja de Seguridad Resistente en Mejorada", alt: "Reja de Seguridad Resistente en Mejorada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-rejas-seguridad-talavera-reina_3154a525.jpg", title: "Foto 5", alt: "Foto 5" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-rejas-seguridad-talavera-reina_fc7d1a07.jpg", title: "Foto 6", alt: "Foto 6" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-rejas-seguridad-talavera-reina_745225b4.jpg", title: "Foto 7", alt: "Foto 7" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-rejas-seguridad-talavera-reina_458b9233.jpg", title: "Foto 8", alt: "Foto 8" },
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
              <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm max-w-xs">
                {currentImage.title}
              </div>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2">
              {images.map((img: any, idx: number) => (
                <button key={idx} onClick={() => setCurrentImageIndex(idx)} className={`flex-shrink-0 w-20 h-20 rounded overflow-hidden border-2 transition ${idx === currentImageIndex ? 'border-primary' : 'border-muted'}`} title={img.title}>
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
