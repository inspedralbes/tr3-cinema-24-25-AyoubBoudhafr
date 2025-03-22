package com.simplyswap.Controllers;

import com.simplyswap.Models.Transaccion;
import com.simplyswap.Models.Usuario;
import com.simplyswap.Repository.TransaccionRepository;
import com.simplyswap.Repository.UserRepository;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/transacciones")
public class TransaccionController {

    private final TransaccionRepository transaccionRepository;
    private final UserRepository usuarioRepository;

    public TransaccionController(TransaccionRepository transaccionRepository,
                                 UserRepository usuarioRepository) {
        this.transaccionRepository = transaccionRepository;
        this.usuarioRepository = usuarioRepository;
    }

    @PostMapping
    public ResponseEntity<?> crearTransaccion(@RequestBody TransaccionRequest request) {
        try {
            Usuario comprador = usuarioRepository.findById(request.compradorId())
                    .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

            Transaccion transaccion = Transaccion.builder()
                    .comprador(comprador)
                    .nombre(request.nombre())
                    .categoria(request.categoria())
                    .producto_id(request.producto_id())
                    .estado(request.estado())
                    .precioPagado(request.precioPagado())
                    .build();

            Transaccion nuevaTransaccion = transaccionRepository.save(transaccion);
            return new ResponseEntity<>(nuevaTransaccion, HttpStatus.CREATED);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> obtenerTransaccion(@PathVariable Long id) {
        Optional<Transaccion> transaccion = transaccionRepository.findById(id);
        return transaccion.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/usuario/{usuarioId}")
    public ResponseEntity<List<Transaccion>> obtenerTransaccionesPorUsuario(@PathVariable Long usuarioId) {
        List<Transaccion> transacciones = transaccionRepository.findByCompradorId(usuarioId);
        return ResponseEntity.ok(transacciones);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarTransaccion(@PathVariable Long id) {
        if (transaccionRepository.existsById(id)) {
            transaccionRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    public record TransaccionRequest(
            @NotNull(message = "El ID del comprador es obligatorio")
            Long compradorId,

            @NotNull(message = "El precio es obligatorio")
            @Positive(message = "El precio debe ser mayor a 0")
            Double precioPagado,

            @NotNull(message = "El nombre es obligatorio")
            String nombre,

            @NotNull(message = "La categoría es obligatoria")
            String categoria,

            @NotNull(message = "El producto_id es obligatorio")
            Long producto_id,

            @NotNull(message = "El estado es obligatorio")
            String estado
    ) {}
}
