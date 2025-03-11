package com.simplyswap.Controllers;

import com.simplyswap.Models.Usuario;
import com.simplyswap.Models.mensajeRespuesta;
import com.simplyswap.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/usuario")
public class UsuarioController {

    @Autowired
    private UserRepository usuarioRepository;

    @GetMapping
    public List<Usuario> obtenerUsuarios() {
        return usuarioRepository.findAll();
    }

    @GetMapping("/{id}")
    public Usuario obtenerUsuarioPorId(@PathVariable Long id) {
        return usuarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado con ID: " + id));
    }

    @PostMapping
    public mensajeRespuesta crearUsuario(@RequestBody Usuario usuario) {
        try {
            usuarioRepository.save(usuario);
            return new mensajeRespuesta("Usuario creado con éxito.", true);
        } catch (Exception e) {
            return new mensajeRespuesta("Error al crear el usuario.", false);
        }
    }

    @PutMapping("/{id}")
    public mensajeRespuesta actualizarUsuario(@PathVariable Long id, @RequestBody Usuario usuarioActualizado) {
        Usuario usuarioExistente = usuarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado con ID: " + id));

        usuarioExistente.setNombre(usuarioActualizado.getNombre());
        usuarioExistente.setEmail(usuarioActualizado.getEmail());
        usuarioExistente.setPassword(usuarioActualizado.getPassword());
        usuarioExistente.setTelefono(usuarioActualizado.getTelefono());
        usuarioExistente.setCiudad(usuarioActualizado.getCiudad());
        usuarioExistente.setPais(usuarioActualizado.getPais());
        usuarioExistente.setFotoPerfil(usuarioActualizado.getFotoPerfil());

        usuarioRepository.save(usuarioExistente);
        return new mensajeRespuesta("Usuario actualizado con éxito.", true);
    }

    @DeleteMapping("/{id}")
    public mensajeRespuesta eliminarUsuario(@PathVariable Long id) {
        if (usuarioRepository.existsById(id)) {
            usuarioRepository.deleteById(id);
            return new mensajeRespuesta("Usuario eliminado correctamente.", true);
        } else {
            return new mensajeRespuesta("Error al eliminar el usuario.", false);
        }
    }

    @PostMapping("/register")
    public mensajeRespuesta register(@RequestBody Usuario usuario) {
        if (usuarioRepository.findByEmail(usuario.getEmail()) != null) {
            return new mensajeRespuesta("El email ya está en uso.", false);
        }
        usuarioRepository.save(usuario);
        return new mensajeRespuesta("Usuario registrado con éxito.", true);
    }

    @PostMapping("/login")
    public mensajeRespuesta login(@RequestBody Usuario usuario) {
        Usuario user = usuarioRepository.findByEmail(usuario.getEmail());
        if (user == null) {
            return new mensajeRespuesta("Usuario no encontrado.", false);
        }
        if (!user.getPassword().equals(usuario.getPassword())) {
            return new mensajeRespuesta("Contraseña incorrecta.", false);
        }
        return new mensajeRespuesta("Inicio de sesión exitoso.", true);
    }
}
