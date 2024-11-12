import { contextBridge } from "electron";
import Veiculo from "./enty/veiculo";
import { ipcRenderer } from "electron/renderer";
import usuario from "./enty/usuario";

contextBridge.exposeInMainWorld('bancoAPI', {
    createVeiculo: async (veiculo: Veiculo) => await ipcRenderer.invoke('create', veiculo),
    findAll: async () => await ipcRenderer.invoke('findAll'),
    findbyid: async (id: string) => await ipcRenderer.invoke('findbyid', id),
    deletarVeiculo: async (id: String) => await ipcRenderer.invoke('deletarVeiculo', id),
    irpagdetalhes: (id: String) => ipcRenderer.send("changescreen"),
    irpaghome: () => ipcRenderer.send("change-screen-home"),
    // createusuario: async (usuario) => await ipcRenderer.invoke('createusuario', usuario),
    // findbyEmail: async (email:)
})

