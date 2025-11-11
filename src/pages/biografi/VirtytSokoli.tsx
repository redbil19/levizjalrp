import BiografiTemplate from "../BiografiTemplate";
import virtytImg from "@/assets/biografi4.jpg";

const VirtytSokoli = () => {
  return (
    <BiografiTemplate
      name="Virtyt Lutfi Sokoli"
      title="Avokat dhe Aktivist"
      content={`Virtyt Lutfi Sokoli ka lindur më 24 janar 1970 në Shkodër, në një familje me traditë të spikatur arsimtare, qytetare dhe atdhetare.
Arsimin fillor e kreu në shkollën “Ismail Qemali” dhe të mesëm në shkollën profesionale “Arben Broci”.
Studimet e larta i përfundoi në Fakultetin e Drejtësisë, Universiteti i Shkodrës “Luigj Gurakuqi”, duke u diplomuar në vitin 1996.
Ka punuar dhe angazhuar në projekte sociale dhe juridike në Shqipëri dhe jashtë vendit, duke kontribuar në zhvillimin e komunitetit dhe çështje patriotike.`}
      image={virtytImg}
    />
  );
};

export default VirtytSokoli;