import Navigation from "@/components/Navigation";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Kontakti = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mesazhi u dërgua me sukses!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-primary-foreground text-center">
            Kontaktoni Me Ne
          </h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Na Vizitoni</h2>
                <p className="text-muted-foreground mb-8">
                  Jemi këtu për t'ju dëgjuar dhe për të bashkëpunuar. Mos hezitoni të na kontaktoni për çdo pyetje apo sugjerim.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-card p-6 rounded-lg border border-border">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">Adresa</h3>
                    <p className="text-foreground">Rr. Ali Hadri, Hyrja: A2, Nr.30</p>
                    <p className="text-foreground">Prizren, Kosovë 20000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-card p-6 rounded-lg border border-border">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">Telefoni</h3>
                    <a href="tel:+38344637111" className="text-primary hover:underline text-lg">
                      +383 44 637 111
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-card p-6 rounded-lg border border-border">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">Email</h3>
                    <a href="mailto:levizjalrp@gmail.com" className="text-primary hover:underline text-lg">
                      levizjalrp@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 rounded-lg border border-border shadow-lg">
              <h2 className="text-3xl font-bold text-foreground mb-6">Dërgoni Mesazh</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Emri dhe Mbiemri
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Emri juaj"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="emaili@juaj.com"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefoni (opsional)
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+383 XX XXX XXX"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mesazhi
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Shkruani mesazhin tuaj këtu..."
                    required
                    rows={5}
                    className="w-full"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  Dërgo Mesazhin
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Lokacioni Ynë</h2>
            <div className="rounded-lg overflow-hidden shadow-lg border border-border h-96 bg-card flex items-center justify-center">
              <p className="text-muted-foreground">Harta do të shtohet së shpejti</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2025 Lëvizja "Lidhja e Re e Prizrenit"</p>
          <p className="text-sm text-muted-foreground">PËR ZOT E ATDHE</p>
        </div>
      </footer>
    </div>
  );
};

export default Kontakti;
