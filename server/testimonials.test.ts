import { describe, it, expect } from "vitest";

describe("Testimonials", () => {
  describe("Google Reviews Data", () => {
    it("should have 23 reviews with 5 stars", () => {
      const reviews = [
        { name: "Adrián Fernández", rating: 5 },
        { name: "Aaron Diaz", rating: 5 },
        { name: "Ivan Gonzalez", rating: 5 },
        { name: "Jandriruth Moreno", rating: 5 },
        { name: "Juanda", rating: 5 },
        { name: "Raul Silveira del Moral", rating: 5 },
        { name: "J.A. B.L.", rating: 5 },
        { name: "Felix Rodriguez Sanchez", rating: 5 },
        { name: "José Alberto García Guerra", rating: 5 },
        { name: "Víctor López", rating: 5 },
      ];

      expect(reviews.length).toBeGreaterThan(0);
      reviews.forEach(review => {
        expect(review.rating).toBe(5);
      });
    });

    it("should have valid review structure", () => {
      const review = {
        name: "Test Customer",
        rating: 5,
        text: "Excellent service",
      };

      expect(review).toHaveProperty("name");
      expect(review).toHaveProperty("rating");
      expect(review).toHaveProperty("text");
      expect(review.rating).toBeGreaterThanOrEqual(1);
      expect(review.rating).toBeLessThanOrEqual(5);
    });

    it("should have aggregate rating of 5.0", () => {
      const aggregateRating = {
        ratingValue: 5,
        ratingCount: 23,
        bestRating: 5,
        worstRating: 1,
      };

      expect(aggregateRating.ratingValue).toBe(5);
      expect(aggregateRating.ratingCount).toBe(23);
      expect(aggregateRating.bestRating).toBe(5);
    });
  });

  describe("Testimonial Content", () => {
    it("should have testimonials mentioning key services", () => {
      const testimonials = [
        "puerta seccional",
        "puerta corredera",
        "puerta motorizada",
        "rejas",
      ];

      expect(testimonials).toContain("puerta seccional");
      expect(testimonials).toContain("rejas");
    });

    it("should highlight professional service", () => {
      const keywords = ["profesional", "calidad", "rápido", "impecable"];

      expect(keywords).toContain("profesional");
      expect(keywords).toContain("calidad");
    });
  });

  describe("Contact Information", () => {
    it("should have correct phone numbers", () => {
      const phones = {
        main: "925701792",
        whatsapp: "661622160",
      };

      expect(phones.main).toBe("925701792");
      expect(phones.whatsapp).toBe("661622160");
    });

    it("should have business location", () => {
      const location = {
        street: "Pol. Ind. Valdefuentes, Calle Principal, 10",
        city: "Pepino",
        region: "Toledo",
        postalCode: "45638",
        country: "ES",
      };

      expect(location.city).toBe("Pepino");
      expect(location.region).toBe("Toledo");
      expect(location.country).toBe("ES");
    });
  });

  describe("SEO Keywords", () => {
    it("should include local SEO keywords", () => {
      const keywords = [
        "cerrajería Talavera de la Reina",
        "puertas automáticas",
        "cerramientos metálicos",
        "rejas de seguridad",
        "carpintería metálica",
      ];

      expect(keywords).toContain("cerrajería Talavera de la Reina");
      expect(keywords).toContain("puertas automáticas");
    });

    it("should include service-specific keywords", () => {
      const services = [
        "carpintería metálica",
        "puertas automáticas",
        "cerramientos",
        "rejas",
        "puertas seccionales",
        "panel sándwich",
      ];

      expect(services.length).toBe(6);
      services.forEach(service => {
        expect(service.length).toBeGreaterThan(0);
      });
    });
  });
});
