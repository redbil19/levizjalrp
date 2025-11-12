import Navigation from "@/components/Navigation";
import { Phone, Mail, MapPin } from "lucide-react";
import buildingImg from "@/assets/building.jpeg";
import historical1Img from "@/assets/historical-1.jpeg";
import flagBuildingImg from "@/assets/flag-building.jpeg";
import prizrenBridge from "@/assets/prizren-bridge.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${prizrenBridge})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
              Lëvizja "Lidhja e Re e Prizrenit"
            </h1>
          </div>
        </div>
      </section>

      {/* Frymëzimi Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Frymëzimi</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Frymëzimi nga rilindasit tanë, vuajtja nga robërimi shekullor, dashuria ndaj atdheut, dëshira për të shijuar lirinë dhe për ta parë të bashkuar trungun shqiptar, na detyron të veprojmë rreth një iniciative që kërkon një organizim gjithëpërfshirës. 
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Tranzicioni na gjeti të ndarë dhe sistemi demokratik është hapja e dyerve drejt bashkimit të vlerave kapitale dhe intelektuale, të integrimit brenda shoqërisë dhe në familjen e madhe euro-atlantike. 
              </p>
              <p className="text-foreground leading-relaxed">
                Në bazë të së drejtës sublime, në frymën e shprehjes së vullnetit të lirë dhe betimit: <strong>PËR ZOT E ATDHE</strong>, vetë koha dhe gjendja e sotme e kërkojnë organizimin e Lëvizjes Lidhja e Re e Prizrenit.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img src={historical1Img} alt="Frymëzimi" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Organizimi Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-2xl">
              <img src={buildingImg} alt="Organizimi" className="w-full h-auto" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-foreground mb-6">Organizimi</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Organizimi i një subjekti të tillë brenda shoqërisë shqiptare motivon dhe kultivon nevojën e krijimit të një bërthame të shëndoshë atdhetare, e bazuar në frymën e Lidhjes Shqiptare të Prizrenit, duke miratuar Platformën Kombëtare, që do të jetë qendra koordinative për të vënë në shërbim tërë potencialin intelektual, ekonomik, kulturor dhe diplomatik të kombit mbarë.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Duke përdorur të gjitha energjitë krijuese, njohëse, filozofike e politike, për të mbrojtur në radhë të parë të vërtetën dhe natyrshëm:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Parimet demokratike të shkruara në kartën e OKB-së;</li>
                <li>Parimin e vetëvendosjes së kombeve;</li>
                <li>Parimin historik, gjeografik dhe etnik për rastin e përcaktimit të padrejtë të tokave, pronave, kufijve, pasurive natyrore dhe të trashëgimisë kulturore dhe shpirtërore të shqiptarëve në Ballkan.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Identiteti Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">Identiteti Ynë</h2>
            <p className="text-foreground leading-relaxed text-lg">
              Jemi dhe mbetemi ne, ata që me një forcë të jashtëzakonshme qëndrese, ende flasim të njëjtën gjuhë të të parëve tanë më të hershëm, ende ruajmë të pandryshueshëm karakterin e hekurt dhe fisnik të parardhësve tanë ilirë. Populli shqiptar është pikërisht ai popull, i lindur prej vetë rrënjëve të vjetra, autokton i pakundërshtueshëm në tokat e veta.
            </p>
          </div>
        </div>
      </section>

      {/* Vazhdimi i rrugës Section */}
      <section className="py-16 bg-gradient-to-br from-albanian-black to-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Vazhdimi i rrugës</h2>
              <p className="text-white/90 leading-relaxed mb-4">
                Sot, pas Kuvendit të Skënderbeut, Lidhjes së Abdyl Frashërit, Pavarësisë së Ismail Qemalit, Ushtrisë Çlirimtare të Kosovës dhe komandantit Adem Jashari, kemi nevojë për organizimin e lëvizjes patriotike, për mobilizimin e intelektualëve patriotë e atdhetarë, për vazhdimin e rrugës së nisur për ribashkim, rikthimin e sistemit të vlerave dhe sundimin e ligjit dhe të demokracisë së mirëfilltë.
              </p>
              <p className="text-white/90 leading-relaxed mb-4">
                Është e qartë që edhe pas 100 vjetëve na mungojnë mekanizmat e duhur për të gjetur dhe shmangur burimin e krizës, për të vënë në funksion të gjitha kapacitetet e forcave progresive që kemi brenda shoqërisë sonë dhe për të vënë në letër e në zemër strategjinë e veprimit të mëtejshëm drejt aspiratave tona kombëtare.
              </p>
              <p className="text-white/90 leading-relaxed">
                Një organizim i tillë është obligim i çdo shqiptari, si vazhdimësi e veprimtarisë atdhetare të rilindasve tanë dhe arsyetim i gjakut të derdhur të dëshmorëve të rënë.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img src={flagBuildingImg} alt="Vazhdimi i rrugës" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Koha e bashkimit Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Koha e bashkimit</h2>
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                Politika shqiptare nuk është në frymën dhe linjën e rilindasve. Po ndodhin ndryshime të mëdha dhe tepër të hidhura. Populli shqiptar po goditet nga të gjitha anët. Politika degraduese dhe e korruptuar, dita ditës po e zhvesh pamjen identitare të shqiptarit.
              </p>
              <p>
                Fëmijët e ish-pushtetarëve të regjimit komunist janë bashkuar nën ombrellën e narkomafias ndërkombëtare, duke u ndihmuar edhe nga disa organizata fetare, për të shkatërruar edhe ato pak toka të mbetura shqiptare.
              </p>
              <p>
                Shtresa e intelektualëve dhe patriotëve shqiptarë nuk ka pasur hapësirën për të vepruar dhe për të ngritur institucione të shëndosha. Fryma e re e lëvizjes atdhetare dhe e intelektualëve patriotë ka vendosur të ngjallë frymën e rilindasve shqiptarë, drejt triumfit mbi mbetjet e vasalëve të pansllavizmit dhe njëmendësisë diktatoriale pro-ruse.
              </p>
              <p>
                E gjithë kjo bëhet duke i ftuar të gjithë ata shqiptarë që janë pa njolla e hipoteka, t’i bashkëngjiten këtij planprogrami panshqiptar. T’i rrekemi punës dhe të përballemi me sfidat që na presin në të ardhmen.
              </p>
              <p className="font-semibold text-primary">
                Është koha e bashkimit dhe ngritjes së institucioneve të përbashkëta. Ngritja e vetëdijes kombëtare dhe funksionimi i ndërgjegjes njerëzore do të jenë gurthemeli mbi të cilin do të bazohet programi i Lëvizjes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Na vizitoni</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground text-primary rounded-full mb-4">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">Adresa</h3>
                <p>Rr. Ali Hadri, Hyrja: A2, Nr.30</p>
                <p>Prizren, Kosovë 20000</p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground text-primary rounded-full mb-4">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">Telefoni</h3>
                <a href="tel:+38344637111" className="hover:underline">
                  +383 44 637 111
                </a>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground text-primary rounded-full mb-4">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <a href="mailto:levizjalrp@gmail.com" className="hover:underline">
                  levizjalrp@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2025 Lëvizja "Lidhja e Re e Prizrenit"</p>
          <p className="text-sm opacity-90">
            Powered by{" "}
            <a
              href="https://albscaling.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary"
            >
              Albscaling
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;