import Navigation from "@/components/Navigation";

const Programi = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-primary-foreground text-center">
            Programi
          </h1>
        </div>
      </section>

      {/* Program Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            
            {/* Quotes */}
            <div className="space-y-6 border-l-4 border-primary pl-6">
              <blockquote className="text-lg italic text-foreground">
                "Ne duam të bëjmë një komb shqiptar dhe për këtë punë kemi nevojë për bashkimin e të gjitha pakicave të Shqipërisë me shumicën shqiptare". – <span className="font-bold">Faik Konica</span>
              </blockquote>
              <blockquote className="text-lg italic text-foreground">
                "Midis revolucionit dhe institucionit qëndron politika". – <span className="font-bold">Ukshin Hoti</span>
              </blockquote>
              <blockquote className="text-lg italic text-foreground">
                "Secili prej nesh dëshiron të quhet patriot, sikurse dëshiron që të thirret mendjehollë, trim, bujar, i drejtë, e të tjera. Patriotët janë shkallë-shkallë, dikush i flaktë, dikush i nxehtë, dikush i ngrohtë e dikush i vakët, por ata fatkeqë që s'kanë fare erë patriotizmi, janë fare të ftohtë si akulli" – <span className="font-bold">Ibrahim Dalliu</span>
              </blockquote>
            </div>

            {/* Introduction */}
            <div className="bg-card rounded-lg p-8 shadow-lg">
              <p className="text-foreground leading-relaxed mb-4">
                Ky Program mbështetet në vlerat dhe parimet themelore njerëzore e kombëtare bazuar në idetë dhe qëllimet e LSHP për Shqipëri të lirë dhe të pavarur në kufijtë e saj etnikë. Ky Program i aprovuar nga Dr. sc. Ardian Muhaj, Avokat mr. sc. Bledar Uku, At. Nikoll Marku, Daim Hiseni, Prof. ass. dr. Muhamed Jusufi, Prof. Asoc. dr. Pëllumb Vorpsi dhe Prof. Asoc. dr. Safet Krasniqi, është platforma në të cilën mbështetet veprimtaria e Lëvizjes LRP.
              </p>
            </div>

            {/* Preambula */}
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Preambula</h2>
              <div className="bg-card rounded-lg p-8 shadow-lg space-y-4">
                <p className="text-foreground leading-relaxed">
                  Lëvizja LRP është lëvizje politike e njerëzve të vullnetit të mirë, të bindur se idealet e Lidhjes Shqiptare të Prizrenit janë ideale që jetojnë. Lëvizja LRP është pjesë e vlerave njerëzore, qytetare e kombëtare të popullit shqiptar, e mbështetur në besimin, dashurinë dhe respektin për Zotin, familjen, shtetin shqiptar, lirinë e individit, lirinë e shprehjes, mendimin kritik dhe iniciativën qytetare.
                </p>
                <p className="text-foreground leading-relaxed">
                  Lëvizja LRP mbron vlerat njerëzore dhe kombëtare duke besuar fuqishëm se unifikimi dhe faktorizimi i popullit shqiptar është shprehje e fuqizimit për unitet dhe bashkim në një shtet të përbashkët.
                </p>
                <p className="text-foreground leading-relaxed">
                  Lëvizja LRP angazhohet për fuqizimin e shtetit të së drejtës, të barabartë për të gjithë qytetarët e saj dhe përfaqësimin qytetar përmes deklarimit të lirë të qytetarëve përmes referendumit.
                </p>
                <p className="text-foreground leading-relaxed">
                  Lëvizja LRP angazhohet për zgjedhje të lira politike përmes votës së lirë si mjet për udhëheqjen e institucioneve shtetërore.
                </p>
                <p className="text-foreground leading-relaxed">
                  Anëtar i Lëvizjes LRP mund të bëhet secili qytetar nga e tërë hapësira shqiptare e më gjerë i cili ka synim dhe ideal forcimin dhe bashkimin e kombit shqiptar dhe që ka arritur moshën madhore.
                </p>
              </div>
            </div>

            {/* Deklarata Programore */}
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Deklarata Programore</h2>
              <div className="bg-card rounded-lg p-8 shadow-lg space-y-4">
                <p className="text-foreground leading-relaxed">
                  Lëvizja LRP është organizatë politike që bazohet mbi vullnetin e lirë të qytetarit shqiptarë, jo vetëm rreth kauzës së ribashkimit qytetar, politik dhe territorial të kombit shqiptar, por e bazuar në vlerat sublime të qëndresës historike shekullore për mbrojtjen, ruajtjen dhe çlirimin e tokave shqiptare nga pushtuesit e huaj.
                </p>
                <p className="text-foreground leading-relaxed">
                  Lëvizja LRP njeh dhe respekton vlerat historike, njerëzore dhe politike të bazuara në luftërat çlirimtare.
                </p>
                <p className="text-foreground leading-relaxed">
                  Lëvizja LRP respekton, mbron dhe kultivon vlerat e luftës së UÇK-së.
                </p>
                <p className="text-foreground leading-relaxed">
                  Lëvizja LRP Republikën e Kosovës e konsideron vlerë të rëndësishme historike, politike, shtetërore dhe kombëtare.
                </p>
                <p className="text-foreground leading-relaxed">
                  Lëvizja LRP angazhohet fuqishëm për subjektivitet politik dhe juridik të Kosovës me qëllim të qenurit palë e barabartë në shprehjen e vullnetit të lirë të saj përmes ligjit për referendum.
                </p>
                <p className="text-foreground leading-relaxed">
                  Lëvizja LRP angazhohet për subjektivitet politik dhe juridik të shqiptarëve në Maqedoni të Veriut, duke u angazhuar për forcimin e pozicionit politik të shqiptarëve.
                </p>
                <p className="text-foreground leading-relaxed">
                  Lëvizja LRP elementin shtetformues të shqiptarëve e sheh përmes riorganizimit territorial të Maqedonisë së Veriut në përputhje me rrethanat që janë në marrëdhëniet ndërkombëtare.
                </p>
                <p className="text-foreground leading-relaxed">
                  Lëvizja LRP angazhohet për përmirësimin e pozitës së shqiptarëve në Sanxhak, në Kosovën Lindore (Preshevë, Medvegjë dhe Bujanoc) si fazë deri në ribashkimin e saj me Kosovën.
                </p>
                <p className="text-foreground leading-relaxed">
                  Lëvizja LRP angazhohet për fuqizimin dhe forcimin e rolit të Shqipërisë në marrëdhëniet rajonale dhe ndërkombëtare deri në zgjidhjen përfundimtare të çështjes së Çamërisë.
                </p>
                <p className="text-foreground leading-relaxed">
                  Lëvizja LRP do t'i përdorë të gjitha mjetet e lejueshme sipas Kartës së OKB-së dhe dokumenteve të tjera juridike ndërkombëtare për të drejtën e popujve për vetëvendosje deri në realizimin e plotë të qëllimeve të LSHP.
                </p>
                <p className="text-foreground leading-relaxed">
                  Lëvizja LRP duke qenë lëvizje politike, zgjedhjet dhe zgjidhjet politike i sheh si mundësi për arritjen e qëllimeve politike. Në Kosovë, aprovimi i Ligjit për referendumin dhe Ligjit për Lustracionin janë objektivat fillestare dhe bazike në nisjen e zbatimit praktik e programor.
                </p>
              </div>
            </div>

            {/* Parimet e përgjithshme */}
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Parimet e përgjithshme</h2>
              <div className="bg-card rounded-lg p-8 shadow-lg space-y-4">
                <p className="text-foreground leading-relaxed">
                  Lëvizja LRP në spektrin politik është lëvizje politike e bazuar mbi parimin e të drejtës për vetëvendosje të popujve, e hapur për bashkëpunim me secilin individ, lëvizje, parti politike, shoqata politike, jo politike dhe organizata të tjera rajonale dhe ndërkombëtare të cilat përkrahin dhe ndihmojnë lëvizjen dhe mbështesin programin e saj. Në këtë aspekt, Lëvizja LRP është e hapur për aleanca me të gjitha partitë, lëvizjet dhe shoqëritë civile, partitë politike vendore që synojnë bashkimin e shqiptarëve.
                </p>
                <p className="text-foreground leading-relaxed">
                  Lëvizja LRP në kuadër të integrimeve ndërpartiake rajonale, kontinentale dhe globale synon të bashkëpunojë me lëvizje ose parti mbi bazën e partneritetit dhe interesave reciproke duke ruajtur specifikat e hapësirave demokratike ku ata veprojnë.
                </p>
                <p className="text-foreground leading-relaxed">
                  Lëvizja LRP angazhohet për një etikë civile të kulturuar duke respektuar dinjitetin dhe personalitetin e kundërshtarit dhe të drejtën e mendimit ndryshe.
                </p>
                <p className="text-foreground leading-relaxed">
                  Lëvizja LRP angazhohet për kultivimin e frymës konservatore të çështjes kombëtare në jetën politike dhe do të luftojë mendësitë dhe praktikat moniste si dhe kultin e individit.
                </p>
                <p className="text-foreground leading-relaxed">
                  Lëvizja LRP angazhohet për frymën e tolerancës dhe bashkëjetesës fetare brenda kombit shqiptar dhe grupeve etnike.
                </p>
                <p className="text-foreground leading-relaxed">
                  Lëvizja LRP angazhohet për mbrojtjen e të drejtave dhe lirive të grupeve etnike me mundësi të barabarta për të gjithë sipas standardeve dhe konventave ndërkombëtare.
                </p>
                <p className="text-foreground leading-relaxed">
                  Lëvizja LRP angazhohet për shtet ligjor ku të gjithë qytetarët do të jenë të barabartë para ligjit pa dallim kombi, race, gjinie ose përkatësie fetare.
                </p>
                <p className="text-foreground leading-relaxed">
                  Lëvizja LRP angazhohet për një shoqëri civile të hapur.
                </p>
                <p className="text-foreground leading-relaxed">
                  Lëvizja LRP angazhohet që integrimi i shqiptarëve në Bashkësinë Evropiane të realizohet duke ruajtur identitetin e vet kulturor, kombëtar dhe fetar.
                </p>
                <p className="text-foreground leading-relaxed">
                  Në kuadër të demokracisë së brendshme, Lëvizja LRP do të kultivojë lirinë e të shprehurit, konkurrencës, transparencën, tolerancën dhe diversitetin e pikëpamjeve.
                </p>
                <p className="text-foreground leading-relaxed">
                  Lëvizja LRP paraqitjet në skenë të secilës lëvizje të armatosur për zgjidhjen e çështjes shqiptare gjatë shekullit të kaluar i sheh dhe i vlerëson si përpjekje më të mëdha pas Lidhjes Shqiptare të Prizrenit. Tendencat për minimalizimin e këtyre lëvizjeve i vlerëson si antikombëtare.
                </p>
                <p className="text-foreground leading-relaxed">
                  Lëvizja LRP do të mbajë qëndrim dashamirës duke intensifikuar bashkëpunimin dhe frymën e mirëkuptimit, besimit dhe interesave reciproke në të mirën e paqes dhe stabilitetit në rajon.
                </p>
                <p className="text-foreground leading-relaxed">
                  Në kushtet e administrimit civil dhe prezencës së NATO-s në Shqipëri dhe Kosovë, Lëvizja LRP do të ndjekë një politikë pragmatiste dhe ekuilibruese.
                </p>
                <p className="text-foreground leading-relaxed">
                  Lëvizja LRP angazhohet për shumëllojshmërinë e pronës: private, shtetërore. Prona duhet të jetë e garantuar dhe e mbrojtur me ligj. Këmbimi, ndërrimi, shpronësimi dhe kompensimi i pronave duhet të bëhet konform ligjeve të ekonomisë së tregut.
                </p>
                <p className="text-foreground leading-relaxed">
                  Lëvizja LRP do të angazhohet për ekonomi të lirë të tregut duke pasur parasysh mbrojtjen e prodhimit vendor.
                </p>
              </div>
            </div>

            {/* Historia */}
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Historia</h2>
              <div className="bg-card rounded-lg p-8 shadow-lg">
                <p className="text-foreground leading-relaxed mb-4">
                  Me anë të këtij programi synojmë të bashkojmë mendjet dhe njerëzit më profesionist që ka kombi ynë, për të shkruar dhe rishkruar historinë tonë. Për të nxjerrë në pah ato vlera frymëzuese që i bënin rilindasit tanë të krenoheshin me këtë atdhe. Duam të nxjerrim në pah thesaret e historisë sonë. Për të ardhur tek vargu i pashuar i Pashko Vasës: "Ti ke pas kenë një zonjë e randë… Burrat e dheut të thirrshin nanë.."!
                </p>
                <p className="text-foreground leading-relaxed">
                  Është koha të zbulojmë vlerat e atyre burrave dhe mendojmë se ka ardhur koha që historianët tanë ta pastrojnë historinë tonë nga mashtrimet dhe manipulimet shekullore. Duke filluar me Lidhjen e Prizrenit dhe duke u futur thellë në shekujt e kaluar të historisë sonë të lavdishme. Të vërtetohet shkencërisht çdo periudhë kohore e historisë sonë.
                </p>
              </div>
            </div>

            {/* Familja */}
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Familja</h2>
              <div className="bg-card rounded-lg p-8 shadow-lg">
                <p className="text-foreground leading-relaxed mb-4">
                  Lëvizja LRP familjen e sheh si njësi themelore të shoqërisë. Familja më e vogël përbëhet nga dy persona të gjinive të ndryshme. Si të tillë, ajo e konsideron të shenjtë.
                </p>
                <p className="text-foreground leading-relaxed">
                  Lëvizja LRP nxit respektin dhe nderimin për prindërit dhe nuk e njeh martesën mes të njëjtës gjini. Sipas nenit 16 (3) të Deklaratës së Përgjithshme mbi të Drejtat e Njeriut; "Familja është njësia bazë grupore e shoqërisë dhe i jepet mbrojtje nga shoqëria dhe shteti".
                </p>
              </div>
            </div>

            {/* Politika */}
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Politika</h2>
              <div className="bg-card rounded-lg p-8 shadow-lg space-y-4">
                <p className="text-foreground leading-relaxed">
                  Analiza politike e Lëvizjes synon bashkimin e kombit shqiptar dhe thellohet në disa aspekte kyçe që nxjerrin në pah rëndësinë e saj në peizazhin bashkëkohor gjeopolitik:
                </p>
                
                <div className="space-y-3">
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-2">3.1. Stabiliteti rajonal</h3>
                    <p className="text-foreground leading-relaxed">
                      Rajoni i Ballkanit ka një histori tensionesh dhe konfliktesh etnike. Një komb i bashkuar shqiptar mund të kontribuojë ndjeshëm në stabilitetin rajonal duke nxitur bashkëpunimin, dialogun dhe bashkëjetesën paqësore ndërmjet komuniteteve të ndryshme.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-primary mb-2">3.2. Ndikimi Diplomatik</h3>
                    <p className="text-foreground leading-relaxed">
                      Një komb i bashkuar shqiptar do të kishte një prani dhe zë më të fortë diplomatik në forumet ndërkombëtare, duke e lejuar atë të mbrojë në mënyrë më efektive interesat, të drejtat dhe aspiratat e tij në skenën globale.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-primary mb-2">3.3. Integrimi në BE</h3>
                    <p className="text-foreground leading-relaxed">
                      Shumë shqiptarë aspirojnë integrimin në Bashkimin Evropian (BE). Një komb i bashkuar shqiptar me politika dhe koordinim të rrjedhshëm mund të rrisë perspektivat e tij për anëtarësim në BE duke demonstruar pjekuri politike, stabilitet dhe përkushtim ndaj vlerave demokratike.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-primary mb-2">3.4. Të drejtat etnike</h3>
                    <p className="text-foreground leading-relaxed">
                      Shqiptarët që banojnë në vende të ndryshme shpesh përballen me sfida që lidhen me të drejtat e pakicave, ruajtjen kulturore dhe përfaqësimin politik. Lëvizja mbron promovimin e këtyre të drejtave, duke nxitur përfshirjen dhe barazinë.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-primary mb-2">3.5. Bashkëpunimi Ekonomik</h3>
                    <p className="text-foreground leading-relaxed">
                      Unifikimi lehtëson bashkëpunimin ekonomik dhe integrimin midis rajoneve me shumicë shqiptare, duke çuar në rritjen e tregtisë, investimeve dhe mundësive zhvillimore nga të cilat përfiton i gjithë kombi.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-primary mb-2">3.6. Siguria dhe Mbrojtja</h3>
                    <p className="text-foreground leading-relaxed">
                      Një komb i bashkuar shqiptar mundet të koordinojë politikat e sigurisë dhe mbrojtjes në mënyrë më efektive, duke rritur bashkëpunimin rajonal të sigurisë dhe duke kontribuar në ruajtjen paqës, sigurisë dhe stabilitetit në rajon.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-primary mb-2">3.7. Kundërveprimi ndaj ekstremizmit</h3>
                    <p className="text-foreground leading-relaxed">
                      Fragmentimi dhe margjinalizimi mund të krijojnë terren pjellor për ideologjitë ekstremiste. Një komb i bashkuar shqiptar, i bazuar në parimet demokratike dhe gjithëpërfshirjen, mundet t'i kundërvihet prirjeve të tilla dhe të nxisë kohezionin social.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-primary mb-2">3.8. Diplomacia kulturore</h3>
                    <p className="text-foreground leading-relaxed">
                      Kultura, gjuha dhe trashëgimia shqiptare janë pasuri të vlefshme për diplomacinë kulturore. Lëvizja nxit vlerësimin e këtyre vlerave për të shtuar dhe promovuar mirëkuptimin e ndërsjellë dhe për të ndërtuar ura me kombet dhe komunitetet e tjera.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-primary mb-2">3.9. Sfidat ndërkombëtare</h3>
                    <p className="text-foreground leading-relaxed">
                      Çështje të tilla si krimi i organizuar, trafikimi i qenieve njerëzore dhe degradimi i mjedisit kërkojnë bashkëpunim ndërkombëtar. Një komb i bashkuar shqiptar ka potencialin për të kontribuar në zgjidhjen e këtyre sfidave.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Arsimi */}
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Arsimi</h2>
              <div className="bg-card rounded-lg p-8 shadow-lg">
                <p className="text-foreground leading-relaxed">
                  Synojmë që ta unifikojmë arsimin mbarëshqiptar në Gadishulin Ilirik, si dhe qendrat e tjera në diasporë. Qëllimi është të edukojmë brezat shqiptarë me dashurinë për Atdheun aq sa të mendojnë dhe kuptojnë se për Atdheun ia vlen të sakrifikohet. Duam që të formohen breza të shëndetshëm, të edukuar, me vlera të familjes, shoqërisë së kulturuar dhe njohës të vlerave me identitet kombëtar. Investime strategjike duke filluar nga arsimi parafillor e deri tek ai i lartë dhe pasuniversitar. Bashkimi i programeve dhe buxhetit të përbashkët do të ishte baza më e mirë për arsimimin e gjeneratave në frymë të shtetndërtimit.
                </p>
              </div>
            </div>

            {/* Liria e shprehjes */}
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Liria e shprehjes</h2>
              <div className="bg-card rounded-lg p-8 shadow-lg space-y-4">
                <p className="text-foreground leading-relaxed">
                  Liria e shprehjes është themeli i lirisë, parim i cili mbështetet në lirinë e individit dhe grupeve shoqërore për të shprehur lirshëm mendimet dhe idetë e tyre. Liria e shprehjes është e drejtë të cilën Lëvizja LRP e konsideron thelbësore dhe e cila mbrohet me akte normative të shtetit.
                </p>
                <p className="text-foreground leading-relaxed">
                  Lëvizja LRP njeh dhe mbron Lirinë e shprehjes, të bazuar në ligjin ndërkombëtar për të drejtat dhe liritë e njeriut të përcaktuara në:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="text-foreground">• Konventën Ndërkombëtare për të Drejtat Civile dhe Politike</li>
                  <li className="text-foreground">• Konventën Evropiane për të Drejtat e Njeriut</li>
                  <li className="text-foreground">• Konventën Amerikane për të Drejtat e Njeriut</li>
                  <li className="text-foreground">• Kartën Afrikane për të Drejtat e Njeriut dhe të Popujve</li>
                  <li className="text-foreground">• Kartën e Medines</li>
                </ul>
              </div>
            </div>

            {/* Liria e besimit */}
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Liria e besimit</h2>
              <div className="bg-card rounded-lg p-8 shadow-lg space-y-4">
                <p className="text-foreground leading-relaxed">
                  Çdokush ka të drejtën e lirisë së mendimit, të ndërgjegjes dhe të fesë. Liria e shfaqjes së fesë ose besimeve të dikujt nuk mund t'i nënshtrohet kufizimeve të tjera përveç atyre të parashikuara nga ligji dhe që përbëjnë masa të nevojshme në një shoqëri demokratike në interes të sigurisë publike, për mbrojtjen e rendit publik, të shëndetit ose të moralit, ose për mbrojtjen e të drejtave dhe të lirive të të tjerëve.
                </p>
                <p className="text-foreground leading-relaxed">
                  Lëvizja LRP beson se atdhedashuria dhe besimi në Zotin janë të pandara. Beson në lirinë e besimit për secilin individ dhe se kushdo është i lirë të adhurojë Zotin sipas mënyrës së tij, pa ia imponuar atë askujt, në shoqërinë ku jetojmë.
                </p>
                <p className="text-foreground leading-relaxed">
                  Lëvizja LRP njeh vetëm dy fe zyrtare: Islamin dhe Krishterimin. Sektet e dala nga këto dy fe do të drejtohen brenda korrnizave të këtyre dy feve.
                </p>
              </div>
            </div>

            {/* Drejtësia */}
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Drejtësia</h2>
              <div className="bg-card rounded-lg p-8 shadow-lg space-y-4">
                <p className="text-foreground leading-relaxed">
                  Lëvizja LRP bazohet tek drejtësia, të drejtat themelore dhe politikat e nënshtetësisë të cilat mbështeten tek parimet e vendosura nga OKB-ja, si demokracia, liria, toleranca dhe sundimi i ligjit, duke u mbështetur në traktatet, kartat, deklaratat dhe GJEDJ.
                </p>
                <p className="text-foreground leading-relaxed">
                  Lëvizja LRP angazhohet për shtetësi dhe integrim kombëtar si procese pararendëse drejt BE-së.
                </p>
                <p className="text-foreground leading-relaxed">
                  Ashtu siç u krijua në vitin 1993 zyrtarisht shtetësia e BE-së, Lëvizja angazhohet fuqishëm për krijimin e SHTETËSISË SHQIPTARE.
                </p>
                <p className="text-foreground leading-relaxed font-bold text-primary">
                  SHTETËSIA SHQIPTARE: përfshin të drejtën për të jetuar, për të udhëtuar, për të studiuar, për të punuar, për të dalë në pension, për të blerë, për t'u martuar, për të pasur kujdes shëndetësor dhe pjesëmarrjen pa formalizma në jetën demokratike dhe institucionale në tërë hapësirën tonë.
                </p>
                <p className="text-foreground leading-relaxed">
                  Ashtu sikurse është Karta e të Drejtave Themelore e BE-së e cila është bërë ligjërisht detyruese për BE-në, Lëvijza LRP angazhohet për hartimin e legjislacionit të përbashkët për rregullimin e kontesteve familjare, trashëgimore, penale e detyrimore dhe parimin e pagesës së barabartë për punë të barabartë ose për punë me vlerë të barabartë ndërmjet shqiptarëve, kudo që ata janë subjekte të procedurave.
                </p>
                <p className="text-foreground leading-relaxed">
                  Lëvizja LRP angazhohet për Ligj për Referendumin në Kosovë, Ligjin për Lustracionin, luftimin e korrupsionit dhe Ligjin për prejardhjen e pasurisë të funksionarëve politikë dhe administrativë.
                </p>
                <p className="text-foreground leading-relaxed">
                  Lëvizja angazhohet për hetimin, gjykimin dhe dënimin e kryerësve të veprave penale. Në raste të tilla, formimi i gjykatave të posaçme është mundësia për luftimin e korrupsionit.
                </p>
              </div>
            </div>

            {/* Përfundimi */}
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Përfundimi</h2>
              <div className="bg-card rounded-lg p-8 shadow-lg space-y-4">
                <p className="text-foreground leading-relaxed">
                  Bota e sotme po kalon periudha të rëndësishme në rrjedhën globale. Marrëdhëniet ndërkombëtare po bëhen gjithnjë e më komplekse ku për pasojë janë vënë në udhëkryq raportet ndërnjerëzore, ndërshtetërore dhe ndërkombëtare, ku shqiptarët sigurisht janë pjesë e këtyre marrëdhënieve. Pushtetet politike në hapësirën shqiptare, veprimin dhe veprimtarinë e tyre e kanë përqendruar më shumë në interesa personale të përfitimeve materiale dhe promovimeve të tyre personale me qëllim arritjen e lidershipit të tyre mbi bazën e fitoreve të dyshimta politike deri tek keqpërdorimi i votave. Andaj, në këtë kohë kur vlerat janë pushtuar nga antivlerat, mungesa e vizioneve dhe programeve afatgjata kombëtare dhe mungesa e ideve konkrete, Lëvizja LRP konsideron se:
                </p>
                <p className="text-foreground leading-relaxed">
                  Shqipëria duhet të shtojë interesimin politik, ekonomik, arsimor, kulturor etj., ndaj shqiptarëve jashtë kufijve aktualë të saj.
                </p>
                <p className="text-foreground leading-relaxed">
                  Kosova, në rrafshin diplomatik, të shtojë përkrahjen e shteteve me qëllim të faktorizimit të saj, duke qenë pararojë dhe avangardë e shqiptarëve në Maqedoninë e Veriut, në Sanxhak dhe në Kosovën Lindore përmes kontakteve me subjektet politike shqiptare dhe mbështetja e tyre në të gjitha format dhe metodat e lejueshme me qëllim të subjektivizimit të tyre në federata, konfederata si procese deri në deklarimin e lirë të vullnetit të tyre.
                </p>
                <p className="text-foreground leading-relaxed font-semibold">
                  Lëvijza LRP dhe tërë anëtarësia e saj beson se programi ofron zgjidhje afatgjata dhe të përhershme të çështjes shqiptare, duke vepruar në përputhje me të drejtën ndërkombëtare, realitetet e krijuara në marrëdhëniet ndërkombëtare në Ballkan, Evropë dhe në Botë. Shpresojmë sepse besojmë në programin e Lëvizjes Lidhja e Re e Prizrenit, i cili sublimon përpjekjen, sakrificat dhe sinqeritetin e popullit shqiptar.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
       <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2025 "Lidhja e Re e Prizrenit"</p>
          <p className="text-sm text-muted-foreground">
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

export default Programi;
