package com.example.konectaAPI.servicios;

import com.example.konectaAPI.entidades.Afiliado;
import com.example.konectaAPI.repositorios.AfiliadoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AfiliadoServicio {
    @Autowired
    AfiliadoRepositorio afiliadoRepositorio;
    //registrar afiliado
    public Afiliado registrarAfiliado(Afiliado afiliado) throws Exception{
        try{

           return this.afiliadoRepositorio.save(afiliado);

        }catch(Exception error){
            throw new Exception("error ");
        }
    }
    //consultar afiliado
    public Afiliado consultarAfiliado(Integer idAfiliado)throws Exception {
        try {
            Optional<Afiliado>afiliadoBuscado=this.afiliadoRepositorio.findById(idAfiliado);
            if (afiliadoBuscado.isPresent()){//lo encontre en la BD
                return afiliadoBuscado.get();

            }else {//no lo encontre
                throw new Exception("afiliado no encontrado");
            }

        }catch (Exception error){
            throw new Exception("error en la consulta del afiliado");
        }
    }
    //consultar afiliado

    //modificar datos afiliados

    //borrar afiliado

}
