package com.simplyswap.Controllers;

import com.simplyswap.Models.Inmueble;
import com.simplyswap.Models.Tecnologia;
import com.simplyswap.Models.mensajeRespuesta;
import com.simplyswap.Repository.InmuebleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/inmuebles")
public class InmuebleController {

    @Autowired
    private InmuebleRepository inmuebleRepository;

    @GetMapping
    public List<Inmueble> obtenerTodosProductos(){
        return inmuebleRepository.findAll();
    }
    @GetMapping("/{id}")
    public Inmueble obtenerInmueble(@PathVariable Long id){
        return inmuebleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Inmueble no encontrado con ID: " + id));
    }
    @PostMapping
    public mensajeRespuesta crearOfertaInmueble(@RequestBody Inmueble producto){
        try{
            Inmueble nuevoProducto = inmuebleRepository.save(producto);
            return new mensajeRespuesta("Inmueble creado con éxito.", true);
        }catch(Exception e){
            return new mensajeRespuesta("Error al crear el producto.", false);
        }
    }
    @PutMapping("/{id}")
    public mensajeRespuesta actualizarInmueble(@PathVariable Long id, @RequestBody Inmueble inmuebleActualizado) {
        Inmueble inmuebleExistente = inmuebleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Inmueble no encontrado con ID: " + id));

        inmuebleExistente.setDescripcionShort(inmuebleActualizado.getDescripcionShort());
        inmuebleExistente.setDescripcion(inmuebleActualizado.getDescripcion());
        inmuebleExistente.setDireccion(inmuebleActualizado.getDireccion());
        inmuebleExistente.setCiudad(inmuebleActualizado.getCiudad());
        inmuebleExistente.setPais(inmuebleActualizado.getPais());
        inmuebleExistente.setImagenes(inmuebleActualizado.getImagenes());
        inmuebleExistente.setPrecio(inmuebleActualizado.getPrecio());
        
        inmuebleRepository.save(inmuebleExistente);
        return new mensajeRespuesta("Inmueble actualizado con éxito.", true);
    }


    @DeleteMapping
    public mensajeRespuesta borrarInmueble (@PathVariable Long id){
        try{
            inmuebleRepository.deleteById(id);
            return new mensajeRespuesta("Inmueble borrado con exito", true);
        }catch (Exception e){
            return new mensajeRespuesta("Error al borrar el Inmueble", false);
        }
    }
}
