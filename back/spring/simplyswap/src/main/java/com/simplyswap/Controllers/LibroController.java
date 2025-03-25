package com.simplyswap.Controllers;

import com.simplyswap.Models.Libro;
import com.simplyswap.Models.mensajeRespuesta;
import com.simplyswap.Repository.LibroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/libro")
public class LibroController {

    @Autowired
    private LibroRepository libroRepository;

    @GetMapping
    public List<Libro> obtenerLibros(
            @RequestParam(defaultValue = "0") int pagina,
            @RequestParam(defaultValue = "10") int tamaño) {

        Pageable pageable = PageRequest.of(pagina, tamaño);
        Page<Libro> paginaLibros = libroRepository.findAll(pageable);
        return paginaLibros.getContent();
    }

    @GetMapping("/{id}")
    public Libro obtenerLibroPorId(@PathVariable Long id) {
        return libroRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Libro no encontrado con ID: " + id));
    }

    @PostMapping
    public mensajeRespuesta crearLibro(@RequestBody Libro libro) {
        try {
            Libro nuevoLibro = libroRepository.save(libro);
            return new mensajeRespuesta("Libro creado con éxito.", true);
        } catch (Exception e) {
            return new mensajeRespuesta("Error al crear el libro.", false);
        }
    }

    @PutMapping("/{id}")
    public mensajeRespuesta actualizarLibro(@PathVariable Long id, @RequestBody Libro libroActualizado) {
        Libro libro = libroRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Libro no encontrado con ID: " + id));

        libro.setNombre(libroActualizado.getNombre());
        libro.setPrecio(libroActualizado.getPrecio());
        libro.setDescripcion(libroActualizado.getDescripcion());
        libro.setFechaPublicacion(libroActualizado.getFechaPublicacion());
        libro.setEntregaDisponible(libroActualizado.isEntregaDisponible());
        libro.setImagenes(libroActualizado.getImagenes());

        libroRepository.save(libro);
        return new mensajeRespuesta("Libro actualizado con éxito.", true);
    }

    @DeleteMapping("/{id}")
    public mensajeRespuesta eliminarLibro(@PathVariable Long id) {
        if (libroRepository.existsById(id)) {
            libroRepository.deleteById(id);
            return new mensajeRespuesta("Libro eliminado correctamente.", true);
        } else {
            return new mensajeRespuesta("Error al eliminar el libro.", false);
        }
    }
}
