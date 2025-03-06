package com.simplyswap.Models;

import jakarta.persistence.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.Date;
import java.util.List;

@Entity
public class Libro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 100)
    private double precio;

    @Column(length = 100)
    private String nombre;

    @ElementCollection
    @CollectionTable(name = "libro_imagenes", joinColumns = @JoinColumn(name = "libro_id"))
    @Column(name = "imagen_url")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private List<String> imagenes;

    private String descripcion;

    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaPublicacion;
    private boolean entregaDisponible;
    public Libro(){

    }
    public Libro(Long id, double precio, String nombre, String descripcion, Date fechaPublicacion, boolean entregaDisponible) {
        this.id = id;
        this.precio = precio;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fechaPublicacion = fechaPublicacion;
        this.entregaDisponible = entregaDisponible;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public String getNombre() {
        return nombre;
    }
    public List<String> getImagenes() {
        return imagenes;
    }

    public void setImagenes(List<String> imagenes) {
        this.imagenes = imagenes;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Date getFechaPublicacion() {
        return fechaPublicacion;
    }

    public void setFechaPublicacion(Date fechaPublicacion) {
        this.fechaPublicacion = fechaPublicacion;
    }

    public boolean isEntregaDisponible() {
        return entregaDisponible;
    }

    public void setEntregaDisponible(boolean entregaDisponible) {
        this.entregaDisponible = entregaDisponible;
    }
}
