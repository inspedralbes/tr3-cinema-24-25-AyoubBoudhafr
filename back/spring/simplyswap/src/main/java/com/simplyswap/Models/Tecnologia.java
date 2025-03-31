package com.simplyswap.Models;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;

import java.util.Date;
import java.util.List;

@Entity
public class Tecnologia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String nombre;
    @Column(nullable = false)
    @Min(value = 0)
    private double precio;
    private int categoria;
    private String descripcion;
    @Column(nullable = false)
    private boolean envioDisponible;
    @ManyToOne
    @JoinColumn(name = "usuario_id", nullable = false)
    private Usuario usuario;
    @ElementCollection
    @CollectionTable(name = "producto_imagenes", joinColumns = @JoinColumn(name = "producto_id"))
    @Column(name = "imagen_url")
    private List<String> imagenes;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false, updatable = false)
    private Date fechaPublicacion;
    public Tecnologia() {

    }

    public Tecnologia(String nombre,Date fechaPublicacion,Usuario usuario, double precio, int categoria, String descripcion, List<String> imagenes, boolean envioDisponible) {
        this.nombre = nombre;
        this.precio = precio;
        this.fechaPublicacion = fechaPublicacion;
        this.usuario = usuario;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.imagenes = imagenes;
        this.envioDisponible = envioDisponible;
    }

    public Date getFechaPublicacion() {
        return fechaPublicacion;
    }

    public void setFechaPublicacion(Date fechaPublicacion) {
        this.fechaPublicacion = fechaPublicacion;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
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

    public double getPrecio() {
        return this.precio;
    }
    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public int getCategoria() {
        return this.categoria;
    }
    public void setCategoria(int categoria) {
        this.categoria = categoria;
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

    public List<String> getImagenes() {
        return this.imagenes;
    }
    public void setImagenes(List<String> imagenes) {
        this.imagenes = imagenes;
    }
}
