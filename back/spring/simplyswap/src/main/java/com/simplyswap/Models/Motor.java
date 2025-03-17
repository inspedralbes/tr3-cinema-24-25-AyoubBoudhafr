package com.simplyswap.Models;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;

import java.util.Date;
import java.util.List;

@Entity
public class Motor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String marca;
    private String modelo;
    @Column(nullable = false)
    @Min(value = 0)
    private double precio;
    @Column(nullable = false)
    private int kilometraje;
    private String descripcion;
    @Column(nullable = false)
    private boolean envioDisponible;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false, updatable = false)
    private Date fechaPublicacion;

    @ElementCollection
    @CollectionTable(name = "motor_imagenes", joinColumns = @JoinColumn(name = "motor_id"))
    @Column(name = "imagen_url")
    private List<String> imagenes;

    public Motor() {
        this.fechaPublicacion = new Date();
    }

    public Motor(String marca, String modelo, double precio, int kilometraje, String descripcion, boolean envioDisponible, List<String> imagenes) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.kilometraje = kilometraje;
        this.descripcion = descripcion;
        this.envioDisponible = envioDisponible;
        this.imagenes = imagenes;
        this.fechaPublicacion = new Date();
    }

    public Long getId() {
        return this.id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getMarca() {
        return this.marca;
    }
    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getModelo() {
        return this.modelo;
    }
    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public double getPrecio() {
        return this.precio;
    }
    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public int getKilometraje() {
        return this.kilometraje;
    }
    public void setKilometraje(int kilometraje) {
        this.kilometraje = kilometraje;
    }

    public String getDescripcion() {
        return this.descripcion;
    }
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public boolean isEnvioDisponible() {
        return this.envioDisponible;
    }
    public void setEnvioDisponible(boolean envioDisponible) {
        this.envioDisponible = envioDisponible;
    }

    public Date getFechaPublicacion() {
        return this.fechaPublicacion;
    }
    public void setFechaPublicacion(Date fechaPublicacion) {
        this.fechaPublicacion = fechaPublicacion;
    }

    public List<String> getImagenes() {
        return this.imagenes;
    }
    public void setImagenes(List<String> imagenes) {
        this.imagenes = imagenes;
    }
}
