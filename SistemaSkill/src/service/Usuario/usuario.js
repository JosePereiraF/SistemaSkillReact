import { Api } from "../api/Api";



export const LoginUsuario = async(loginDTO)=>{
    const url = "/auth/login";
    return Api.post(url,loginDTO);
}
export const CadastroUsuario = async(UsuarioDTO)=>{
    const url = "/usuario/teste"
    return Api.post(url,UsuarioDTO);
}
export const ListarSkillUsuario = async(id)=>{
    const token = await JSON.parse(localStorage.getItem("token"));
    const url = `/usuarioSkill/${id}`;
    return Api.get(url,{headers:{
        Authorization: `Bearer ${token}`
    }})
}
export const DeletarSkillUsuario = async (excluirDTO)=>{
    const token = await JSON.parse(localStorage.getItem("token"));
    const url = `/usuarioSkill/deletar`;
    console.log(token);
    
    return Api.put(url,excluirDTO,{
        headers:{
            Authorization: `Bearer ${token}`
            }
    });
}
export const AtualizarSkill = async(atualizarSkill)=>{
    const token = await JSON.parse(localStorage.getItem("token"));
    const url = `/usuarioSkill`;
    return Api.put(url,atualizarSkill,{
        headers:{
            Authorization: `Bearer ${token}`
            }
    });
}
export const ListarSkills = async()=>{
    const token = await JSON.parse(localStorage.getItem("token"));
    const url = `/skill`;
    return Api.get(url,{
        headers:{
            Authorization: `Bearer ${token}`
            }
            });
}
export const AdicionarUsuarioSkill =async(UsuarioSkillDTO)=>{
    const token = await JSON.parse(localStorage.getItem("token"));
    const url = `/usuarioSkill`;
    return Api.post(url,UsuarioSkillDTO,{
        headers:{
            Authorization: `Bearer ${token}`
            }
            });
}
export const FotoSkill = async(id)=>{
    const token = await JSON.parse(localStorage.getItem("token"));
    const url = `/skill/foto/${id}`;
    return Api.get(url,{
        headers:{
            Authorization: `Bearer ${token}`
            }
            });      
}
export const BuscarFotoSkill = async(id)=>{
    const token = await JSON.parse(localStorage.getItem("token"));
    const url = `/skill/foto/${id}`;
    return Api.get(url,{headers:{
        Authorization: `Bearer ${token}`
    }})
}