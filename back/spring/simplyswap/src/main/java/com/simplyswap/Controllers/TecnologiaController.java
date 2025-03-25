package com.simplyswap.Controllers;

import com.simplyswap.Models.Tecnologia;
import com.simplyswap.Repository.TecnologiaRepository;
import com.simplyswap.Models.mensajeRespuesta;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/tecnologia")
public class TecnologiaController {

    @Autowired
    private TecnologiaRepository tecnologiaRepository;

    @GetMapping
    public List<Tecnologia> obtenerProductos(
            @RequestParam(defaultValue = "0") int pagina,
            @RequestParam(defaultValue = "5") int tamaño) {

        Pageable pageable = PageRequest.of(pagina, tamaño);
        Page<Tecnologia> paginaProductos = tecnologiaRepository.findAll(pageable);
    
        return paginaProductos.getContent();
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
            return new mensajeRespuesta("Producto creado con éxito.", true);
        } catch (Exception e) {
            return new mensajeRespuesta("Error al crear el producto.", false);
        }
    }
    @PutMapping("/{id}")
    public mensajeRespuesta actualizarProducto(@PathVariable Long id, @RequestBody Tecnologia productoActualizado){
        Tecnologia producto = tecnologiaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Producto no encontrado con ID: " + id));

        producto.setNombre(productoActualizado.getNombre());
        producto.setPrecio(productoActualizado.getPrecio());
        producto.setCategoria(productoActualizado.getCategoria());
        producto.setDescripcion(productoActualizado.getDescripcion());
        producto.setEnvioDisponible(productoActualizado.isEnvioDisponible());
        producto.setImagenes(productoActualizado.getImagenes());

        tecnologiaRepository.save(producto);

        return new mensajeRespuesta("Producto actualizado con éxito.", true);
    }
    @DeleteMapping
    public mensajeRespuesta eliminarProducto(@PathVariable Long id) {
        if (tecnologiaRepository.existsById(id)) {
            tecnologiaRepository.deleteById(id);
            return new mensajeRespuesta("Producto eliminado correctamente", true);
        } else {
            return new mensajeRespuesta("Error al eliminar el producto.", false);
        }
    }
}
