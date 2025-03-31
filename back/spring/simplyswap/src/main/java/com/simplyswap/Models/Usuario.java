package com.simplyswap.Models;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "usuarios")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String nombre;

    @Column(nullable = false, unique = true, length = 100)
    @Email(message = "El email debe ser válido")
    @NotBlank(message = "El email es obligatorio")
    private String email;

    @Column(nullable = false)
    private String password;

    private String telefono;
    private String ciudad;
    private String pais;
    private String fotoPerfil;

    public Usuario() {
    }

    public Usuario(String nombre, String email, String password, String telefono,
                   String ciudad, String pais, String fotoPerfil) {
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.telefono = telefono;
        this.ciudad = ciudad;
        this.pais = pais;
        this.fotoPerfil = fotoPerfil;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }

    public String getFotoPerfil() {
        return fotoPerfil;
    }

    public void setFotoPerfil(String fotoPerfil) {
        this.fotoPerfil = fotoPerfil;
    }

    public static class Builder {
        private String nombre;
        private String email;
        private String password;
        private String telefono;
        private String ciudad;
        private String pais;
        private String fotoPerfil;

        public Builder setNombre(String nombre) {
            this.nombre = nombre;
            return this;
        }
        public Builder setEmail(String email) {
            this.email = email;
            return this;
        }
        public Builder setPassword(String password) {
            this.password = password;
            return this;
        }
        public Builder setTelefono(String telefono) {
            this.telefono = telefono;
            return this;
        }
        public Builder setCiudad(String ciudad) {
            this.ciudad = ciudad;
            return this;
        }
        public Builder setPais(String pais) {
            this.pais = pais;
            return this;
        }
        public Builder setFotoPerfil(String fotoPerfil) {
            this.fotoPerfil = fotoPerfil;
            return this;
        }

        public Usuario build() {
            return new Usuario(
                    this.nombre,
                    this.email,
                    this.password,
                    this.telefono,
                    this.ciudad,
                    this.pais,
                    this.fotoPerfil
            );
        }
    }
}