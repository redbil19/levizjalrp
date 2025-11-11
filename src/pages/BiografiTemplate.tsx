import Navigation from "@/components/Navigation";

interface BiografiTemplateProps {
  name: string;
  title?: string;
  content: string;
  image: string; // image path imported from assets
}

const BiografiTemplate = ({ name, title, content, image }: BiografiTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-primary-foreground text-center">
            {name}
          </h1>
          {title && (
            <p className="text-xl text-primary-foreground/90 text-center mt-4">
              {title}
            </p>
          )}
        </div>
      </section>

      {/* Biography Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Profile Section */}
            <div className="bg-card rounded-lg p-8 shadow-lg border border-border mb-12">
              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-3xl font-bold text-foreground">{name}</h2>
                {title && <p className="text-lg text-muted-foreground mt-2">{title}</p>}
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed whitespace-pre-line">
                  {content}
                </p>
              </div>
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

export default BiografiTemplate;