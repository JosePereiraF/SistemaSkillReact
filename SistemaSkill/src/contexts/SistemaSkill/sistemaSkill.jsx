import { createContext, useState } from "react";

export const SistemaContext = createContext({});

function SistemaProvider({children}){
    const [nivelSkill,setNivelSkill]= useState("");
    const [usuario,setUsuario]=useState({});
    const[skillsUsuario,setSkillUsuario]= useState([]);
    const [skillsAdicionar,setSkillsAdicionar]=useState([])
    return(
        <SistemaContext.Provider value={{skillsAdicionar,setSkillsAdicionar,nivelSkill,setNivelSkill,usuario,setUsuario,skillsUsuario,setSkillUsuario}}>
            {children}
        </SistemaContext.Provider>
    )
}
export default SistemaProvider;