package com.simplyswap.Models;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Inmueble {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(length = 100)
    private String descripcionShort;
    private String descripcion;
    private String direccion;
    private String ciudad;
    private String pais;

    @ElementCollection
    @CollectionTable(name = "inmueble_imagenes", joinColumns = @JoinColumn(name = "inmueble_id"))
    @Column(name = "imagen_url")
    private List<String> imagenes;
    public Inmueble(){

    }
    public Inmueble(Long id, String descripcionShort, String descripcion, String direccion, String ciudad, String pais) {
        this.id = id;
        this.descripcionShort = descripcionShort;
        this.descripcion = descripcion;
        this.direccion = direccion;
        this.ciudad = ciudad;
        this.pais = pais;
    }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescripcionShort() {
        return descripcionShort;
    }

    public void setDescripcionShort(String descripcionShort) {
        this.descripcionShort = descripcionShort;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
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
}
