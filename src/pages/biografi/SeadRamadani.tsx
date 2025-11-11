import BiografiTemplate from "../BiografiTemplate";
import seadImg from "@/assets/biografi2.jpg";

const SeadRamadani = () => {
  return (
    <BiografiTemplate
      name="Sead Ramadani"
      title="Aktivist dhe Humanitar"
      content={`Emri dhe mbiemri: Sead Ramadani
Data e lindjes: 15.01.1966
Vendlindja: Fshati Sllupçan, rrethina e Kumanovës

Arsimi:
Shkollën fillore e kreu në Sllupçan, në shkollën “Jeta e re” (tani: Faik Konica)
Shkollën e mesme e përfundoi në Kumanovë

Puna dhe Angazhimet Profesionale:
I punësuar si profesionist në fabrikë që nga viti 1987
I angazhuar në aktivitete kombëtare dhe fetare që nga viti 1986
Themelues i BRD-së (Bashkimi Rinor Demokratik) në vitin 1990
Themelues dhe aktivist i Lidhjes së Rinisë Islame (1991)
Anëtar i Këshillit për Pajtim në Kumanovë dhe rrethinë (1991)

Kontributi në Çështjet Kombëtare:
Kontribues në përgatitjet e fushatave gjatë viteve 1990 deri në fillimin e konfliktit ndërmjet UÇK-së dhe forcave serbo-sllave
Efektiv i stafit organizativ gjatë konfliktit të vitit 2001
Komandant i mobilizimit në kuadër të komandës së Brigadës 113 “Ismet Jashari – Kumanova”
Shef i Komisionit për rregullimin dhe rivarrimin e varrezave të dëshmorëve
Mbështetës i Ushtrisë Çlirimtare të Kosovës me ndihmë nga miqtë turq
Themelues dhe organizator i Bashkimit Demokratik për Integrim pas luftës

Veprimtaria Shoqërore dhe Humanitare:
Themelues i Shoqatës për Edukim “Vllaznia” në Kumanovë (2001), ku ishte kryetar për dy mandate
Pjesëmarrës dhe organizator në aksione humanitare ndërkombëtare në Somali, Keni, Nigeri, Palestinë (Gazza), Bejrut, Izmir, Elazig, Kahraman Marash, Siri
Aktualisht: Aktivist në disa organizata joqeveritare.`}
      image={seadImg}
    />
  );
};

export default SeadRamadani;