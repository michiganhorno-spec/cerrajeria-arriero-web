import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { X, CheckCircle } from "lucide-react";
import { trpc } from "@/lib/trpc";

interface ContactFormProps {
  onClose: () => void;
}

export default function ContactForm({ onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      servicio: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nombre || !formData.email || !formData.telefono || !formData.servicio) {
      alert("Por favor completa todos los campos obligatorios");
      return;
    }

    setIsLoading(true);
    
    try {
      // Prepare email content
      const emailContent = `Nombre: ${formData.nombre}\nEmail: ${formData.email}\nTeléfono: ${formData.telefono}\nServicio: ${formData.servicio}\nMensaje: ${formData.mensaje}`;
      
      // Send notification to owner in platform
      const notifyMutation = trpc.system.notifyOwner.useMutation();
      await notifyMutation.mutateAsync({
        title: `Nueva solicitud de presupuesto de ${formData.nombre}`,
        content: emailContent,
      });

      // Redirect to WhatsApp with pre-filled message
      const whatsappMessage = `Hola, me interesa solicitar presupuesto para: ${formData.servicio}. Nombre: ${formData.nombre}. Teléfono: ${formData.telefono}. Email: ${formData.email}. Detalles: ${formData.mensaje}`;
      const whatsappUrl = `https://wa.me/34661622160?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 3000);
    } catch (error) {
      console.error("Error al enviar formulario:", error);
      alert("Error al enviar el formulario. Por favor intenta de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="bg-background border-green-600/30 p-8 text-center">
          <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">
            ¡Presupuesto Solicitado!
          </h3>
          <p className="text-gray-400 mb-4">
            Nos pondremos en contacto contigo pronto para confirmar los detalles de tu solicitud.
          </p>
          <p className="text-orange-400 font-semibold">
            Gracias por confiar en Cerrajería L. Arriero
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="bg-secondary border-orange-600/30 p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <h3 className="text-2xl font-bold text-white mb-6">
          Solicitar Presupuesto
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nombre */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Nombre Completo *
            </label>
            <Input
              id="nombre"
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Tu nombre"
              className="bg-background border-gray-700 text-white placeholder-gray-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email *
            </label>
            <Input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              className="bg-background border-gray-700 text-white placeholder-gray-500"
              required
            />
          </div>

          {/* Teléfono */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Teléfono *
            </label>
            <Input
              id="telefono"
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="925 70 17 92"
              className="bg-background border-gray-700 text-white placeholder-gray-500"
              required
            />
          </div>

          {/* Servicio */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Servicio Solicitado *
            </label>
            <Select value={formData.servicio} onValueChange={handleServiceChange}>
              <SelectTrigger className="bg-background border-gray-700 text-white">
                <SelectValue placeholder="Selecciona un servicio" />
              </SelectTrigger>
              <SelectContent className="bg-background border-gray-700">
                <SelectItem value="carpinteria">Carpintería Metálica y Cerrajería</SelectItem>
                <SelectItem value="puertas-automaticas">Puertas Automáticas</SelectItem>
                <SelectItem value="cerramientos">Cerramientos y Vallas</SelectItem>
                <SelectItem value="rejas">Rejas y Cancelas</SelectItem>
                <SelectItem value="puertas-seccionales">Puertas Seccionales</SelectItem>
                <SelectItem value="panel-sandwich">Panel Sándwich</SelectItem>
                <SelectItem value="otro">Otro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Mensaje */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Mensaje
            </label>
            <Textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Cuéntanos más detalles sobre tu proyecto..."
              className="bg-background border-gray-700 text-white placeholder-gray-500 min-h-32"
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <Button
              type="submit"
              disabled={isLoading}
              className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3"
            >
              {isLoading ? "Enviando..." : "Enviar Presupuesto"}
            </Button>
            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-900"
            >
              Cancelar
            </Button>
          </div>

          <p className="text-xs text-gray-500 text-center">
            * Campos obligatorios. Nos pondremos en contacto contigo pronto.
          </p>
        </form>
      </Card>
    </div>
  );
}
