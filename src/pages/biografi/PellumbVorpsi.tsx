import BiografiTemplate from "../BiografiTemplate";
import pellumbImg from "@/assets/biografi3.jpg";

const PellumbVorpsi = () => {
  return (
    <BiografiTemplate
      name="Pëllumb Vorpsi"
      title="Kompozitor dhe Profesor"
      content={`Profesor i Kompozicionit dhe Kontrapunktit në Universitetin e Arteve, nga viti 2006 e në vijim.
Autor i një sërë veprash muzikore simfonike, orkestrale, vokale, pianistike, instrumentale, si dhe përpunimesh të ndryshme muzikore.
Diplomohet si Kompozitor në klasën e prof. Tonin Harapit, në vitin 1981.
Mësues i Harmonisë dhe Folklorit Muzikor pranë Liceut Artistik “Jordan Misja” (1981–2006).
Pedagog i jashtëm i Kontrapunktit në Universitetin e Arteve (atëherë Instituti i Lartë i Arteve), 1981–1989.
Titulli akademik “Profesor i Asociuar” i jepet nga Universiteti i Arteve në vitin 2013.
Themelues i Fondacionit Kulturor “IDEA” (2010) dhe Orkestrës Rinore Shqiptare (ORSH) në vitin 2011.
Veprat e tij muzikore janë interpretuar nga orkestra të njohura brenda dhe jashtë vendit.`}
      image={pellumbImg}
    />
  );
};

export default PellumbVorpsi;