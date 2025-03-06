package com.simplyswap.Controllers;

import com.simplyswap.Models.Tecnologia;
import com.simplyswap.Repository.TecnologiaRepository;
import com.simplyswap.Models.mensajeRespuesta;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@RestController
@RequestMapping("/tecnologia")
public class TecnologiaController {

    @Autowired
    private TecnologiaRepository tecnologiaRepository;

    @GetMapping
    public List<Tecnologia> obtenerProductos() {
        return tecnologiaRepository.findAll();
    }
    @GetMapping("/{id}")
    public Tecnologia obtenerProductoPorId(@PathVariable Long id) {
        return tecnologiaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Producto no encontrado con ID: " + id));
    }
    @PostMapping
    public mensajeRespuesta crearProducto(@RequestBody Tecnologia producto){
        try {
            Tecnologia nuevoProducto = tecnologiaRepository.save(producto);
            return new mensajeRespuesta("Producto creado con éxito.", true, nuevoProducto);
        } catch (Exception e) {
            return new mensajeRespuesta("Error al crear el producto.", false, null);
        }
    }
    public mensajeRespuesta eliminarProducto(@PathVariable Long id) {
        if (tecnologiaRepository.existsById(id)) {
            tecnologiaRepository.deleteById(id);
            return new mensajeRespuesta("Producto eliminado correctamente", true, null);
        } else {
            return new mensajeRespuesta("Error al eliminar el producto.", false, null);
        }
    }
}
