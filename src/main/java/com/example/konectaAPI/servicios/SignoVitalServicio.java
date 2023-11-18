package com.example.konectaAPI.servicios;

import com.example.konectaAPI.entidades.Afiliado;
import com.example.konectaAPI.entidades.Examen;
import com.example.konectaAPI.entidades.SignoVital;
import com.example.konectaAPI.repositorios.ExamenRepositorio;
import com.example.konectaAPI.repositorios.SignoVitalRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SignoVitalServicio {
    @Autowired
    SignoVitalRepositorio signoVitalRepositorio;

    public SignoVital registrarSignoVital(SignoVital signoVital) throws Exception{
        try{

            return this.signoVitalRepositorio.save(signoVital);

        }catch(Exception error){
            throw new Exception("error");
        }
    }
    public SignoVital consultarsignoVital(Integer idSignoVital)throws Exception {
        try {
            Optional<SignoVital> signoVitalBuscado = this.signoVitalRepositorio.findById(idSignoVital);
            if (signoVitalBuscado.isPresent()) {//lo encontre en la BD
                return signoVitalBuscado.get();

            } else {//no lo encontre
                throw new Exception("signo no encontrado");
            }

        } catch (Exception error) {
            throw new Exception("error en la consulta del signo");
        }
    }
}
