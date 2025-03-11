package com.simplyswap.Controllers;

import com.simplyswap.Models.Motor;
import com.simplyswap.Models.mensajeRespuesta;
import com.simplyswap.Repository.MotorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/motor")
public class MotorController {

    @Autowired
    private MotorRepository motorRepository;

    @GetMapping
    public List<Motor> obtenerMotores() {
        return motorRepository.findAll();
    }

    @GetMapping("/{id}")
    public Motor obtenerMotorPorId(@PathVariable Long id) {
        return motorRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Motor no encontrado con ID: " + id));
    }

    @PostMapping
    public mensajeRespuesta crearMotor(@RequestBody Motor motor) {
        try {
            Motor nuevoMotor = motorRepository.save(motor);
            return new mensajeRespuesta("Motor creado con éxito.", true);
        } catch (Exception e) {
            return new mensajeRespuesta("Error al crear el motor.", false);
        }
    }

    @PutMapping("/{id}")
    public mensajeRespuesta actualizarMotor(@PathVariable Long id, @RequestBody Motor motorActualizado) {
        Motor motor = motorRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Motor no encontrado con ID: " + id));

        motor.setMarca(motorActualizado.getMarca());
        motor.setModelo(motorActualizado.getModelo());
        motor.setPrecio(motorActualizado.getPrecio());
        motor.setKilometraje(motorActualizado.getKilometraje());
        motor.setDescripcion(motorActualizado.getDescripcion());
        motor.setEnvioDisponible(motorActualizado.isEnvioDisponible());
        motor.setImagenes(motorActualizado.getImagenes());

        motorRepository.save(motor);
        return new mensajeRespuesta("Motor actualizado con éxito.", true);
    }

    @DeleteMapping("/{id}")
    public mensajeRespuesta eliminarMotor(@PathVariable Long id) {
        if (motorRepository.existsById(id)) {
            motorRepository.deleteById(id);
            return new mensajeRespuesta("Motor eliminado correctamente.", true);
        } else {
            return new mensajeRespuesta("Error al eliminar el motor.", false);
        }
    }
}
