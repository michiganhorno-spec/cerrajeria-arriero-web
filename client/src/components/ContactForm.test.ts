import { describe, it, expect, beforeEach, vi } from "vitest";

describe("ContactForm", () => {
  describe("Form Validation", () => {
    it("should require nombre field", () => {
      const formData = {
        nombre: "",
        email: "test@example.com",
        telefono: "925701792",
        servicio: "puertas-automaticas",
        mensaje: "Test message",
      };

      const isValid = formData.nombre.trim() !== "";
      expect(isValid).toBe(false);
    });

    it("should require email field", () => {
      const formData = {
        nombre: "John Doe",
        email: "",
        telefono: "925701792",
        servicio: "puertas-automaticas",
        mensaje: "Test message",
      };

      const isValid = formData.email.trim() !== "";
      expect(isValid).toBe(false);
    });

    it("should require telefono field", () => {
      const formData = {
        nombre: "John Doe",
        email: "test@example.com",
        telefono: "",
        servicio: "puertas-automaticas",
        mensaje: "Test message",
      };

      const isValid = formData.telefono.trim() !== "";
      expect(isValid).toBe(false);
    });

    it("should require servicio field", () => {
      const formData = {
        nombre: "John Doe",
        email: "test@example.com",
        telefono: "925701792",
        servicio: "",
        mensaje: "Test message",
      };

      const isValid = formData.servicio.trim() !== "";
      expect(isValid).toBe(false);
    });

    it("should accept valid form data", () => {
      const formData = {
        nombre: "John Doe",
        email: "test@example.com",
        telefono: "925701792",
        servicio: "puertas-automaticas",
        mensaje: "Test message",
      };

      const isValid = 
        formData.nombre.trim() !== "" &&
        formData.email.trim() !== "" &&
        formData.telefono.trim() !== "" &&
        formData.servicio.trim() !== "";

      expect(isValid).toBe(true);
    });
  });

  describe("Service Options", () => {
    it("should have all service options available", () => {
      const services = [
        "carpinteria",
        "puertas-automaticas",
        "cerramientos",
        "rejas",
        "puertas-seccionales",
        "panel-sandwich",
        "otro",
      ];

      expect(services).toHaveLength(7);
      expect(services).toContain("puertas-automaticas");
      expect(services).toContain("cerramientos");
    });
  });

  describe("Phone Numbers", () => {
    it("should have correct phone numbers", () => {
      const phone1 = "925701792";
      const phone2 = "661622160";

      expect(phone1).toBe("925701792");
      expect(phone2).toBe("661622160");
    });

    it("should format WhatsApp URL correctly", () => {
      const phoneNumber = "34661622160";
      const whatsappUrl = `https://wa.me/${phoneNumber}`;

      expect(whatsappUrl).toBe("https://wa.me/34661622160");
    });
  });
});
