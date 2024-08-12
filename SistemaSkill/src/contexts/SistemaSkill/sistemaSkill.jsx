import { createContext, useState } from "react";

export const SistemaContext = createContext({});

function SistemaProvider({children}){
    const [nivelSkill,setNivelSkill]= useState("");
    const [usuario,setUsuario]=useState(()=>{
        const usuarioLogado = localStorage.getItem('usuario');
        return usuarioLogado ? JSON.parse(usuarioLogado) : {};
    });
    const[skillsUsuario,setSkillUsuario]= useState([]);
    const [skillsAdicionar,setSkillsAdicionar]=useState([]);
    const [autenticated,setAutenticated]=useState(()=>{
        const autenticado = localStorage.getItem('autenticado');
        return autenticado ? JSON.parse(autenticado) : false;
    });

    //,ativarMensagem,setAtivarMensagem,setMensagem
    return(
        <SistemaContext.Provider value={{autenticated,setAutenticated,skillsAdicionar,setSkillsAdicionar,nivelSkill,setNivelSkill,usuario,setUsuario,skillsUsuario,setSkillUsuario}}>
            {children}
        </SistemaContext.Provider>
    )
}
export default SistemaProvider;