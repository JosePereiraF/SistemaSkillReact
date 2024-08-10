import { createContext, useState } from "react";

export const SistemaContext = createContext({});
const valorIncial =false;
function SistemaProvider({children}){
    const [nivelSkill,setNivelSkill]= useState("");
    const [usuario,setUsuario]=useState({});
    const[skillsUsuario,setSkillUsuario]= useState([]);
    const [skillsAdicionar,setSkillsAdicionar]=useState([]);
    const [autenticated,setAutenticated]=useState(false);
    const [ativarMensagem,setAtivarMensagem]=useState(valorIncial);
    const [mensagem,setMensagem]=useState("");
    return(
        <SistemaContext.Provider value={{mensagem,setMensagem,ativarMensagem,setAtivarMensagem,autenticated,setAutenticated,skillsAdicionar,setSkillsAdicionar,nivelSkill,setNivelSkill,usuario,setUsuario,skillsUsuario,setSkillUsuario}}>
            {children}
        </SistemaContext.Provider>
    )
}
export default SistemaProvider;