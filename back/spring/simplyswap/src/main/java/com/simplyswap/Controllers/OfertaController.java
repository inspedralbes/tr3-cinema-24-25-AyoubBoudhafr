package com.simplyswap.Controllers;

import com.simplyswap.Models.Oferta;
import com.simplyswap.Models.mensajeRespuesta;
import com.simplyswap.Repository.OfertaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/oferta")
public class OfertaController {

    @Autowired
    private OfertaRepository ofertaRepository;

    @GetMapping
    public List<Oferta> obtenerOfertas() {
        return ofertaRepository.findAll();
    }

    @GetMapping("/{id}")
    public Oferta obtenerOfertaPorId(@PathVariable Long id) {
        return ofertaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Oferta no encontrada con ID: " + id));
    }

    @PostMapping
    public mensajeRespuesta crearOferta(@RequestBody Oferta oferta) {
        try {
            Oferta nuevaOferta = ofertaRepository.save(oferta);
            return new mensajeRespuesta("Oferta creada con éxito.", true);
        } catch (Exception e) {
            return new mensajeRespuesta("Error al crear la oferta.", false);
        }
    }

    @PutMapping("/{id}")
    public mensajeRespuesta actualizarOferta(@PathVariable Long id, @RequestBody Oferta ofertaActualizada) {
        Oferta oferta = ofertaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Oferta no encontrada con ID: " + id));

        oferta.setDescripcion(ofertaActualizada.getDescripcion());
        oferta.setPrecio(ofertaActualizada.getPrecio());
        oferta.setUsuario(ofertaActualizada.getUsuario());

        ofertaRepository.save(oferta);
        return new mensajeRespuesta("Oferta actualizada con éxito.", true);
    }

    @DeleteMapping("/{id}")
    public mensajeRespuesta eliminarOferta(@PathVariable Long id) {
        if (ofertaRepository.existsById(id)) {
            ofertaRepository.deleteById(id);
            return new mensajeRespuesta("Oferta eliminada correctamente.", true);
        } else {
            return new mensajeRespuesta("Error al eliminar la oferta.", false);
        }
    }
}
