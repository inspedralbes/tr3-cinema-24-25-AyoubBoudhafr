package com.simplyswap.Models;

import jakarta.persistence.*;

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
    private String email;

    @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL)
    private List<Oferta> ofertas;

    public void setPais(String pais) {
        this.pais = pais;
    }

    @Column(nullable = false)
    private String password;

    private String telefono;
    private String ciudad;
    private String pais;
    private String fotoPerfil;

    public Usuario() {
    }

    public Usuario(String nombre, String email, String password, String telefono, String ubicacion, String fotoPerfil, String pais) {
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.telefono = telefono;
        this.ciudad = ubicacion;
        this.fotoPerfil = fotoPerfil;
        this.pais = pais;
    }
    public String getPais(){
        return pais;
    }
    public void setPais(){
        this.pais = pais;
    }
    public Long getId() {
        return this.id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return this.nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getEmail() {
        return this.email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return this.password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public String getTelefono() {
        return this.telefono;
    }
    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getCiudad() {
        return this.ciudad;
    }
    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public String getFotoPerfil() {
        return this.fotoPerfil;
    }
    public void setFotoPerfil(String fotoPerfil) {
        this.fotoPerfil = fotoPerfil;
    }
}
