package com.simplyswap.Models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import java.util.Date;

@Entity
@Table(name = "transacciones")
public class Transaccion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nombre;

    @Column(nullable = false)
    private String categoria;

    @Column(nullable = false)
    private Long producto_id;

    @Column(nullable = false)
    private String estado;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "comprador_id", nullable = false)
    @NotNull(message = "El comprador es obligatorio")
    private Usuario comprador;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "fecha_transaccion", nullable = false, updatable = false)
    private Date fechaTransaccion;

    @Column(name = "precio_pagado", nullable = false)
    @Positive(message = "El precio debe ser mayor a 0")
    @NotNull(message = "El precio pagado es obligatorio")
    private Double precioPagado;

    public Transaccion() {
        this.fechaTransaccion = new Date();
    }

    public Transaccion(Usuario comprador, String estado, Double precioPagado, String nombre, String categoria, Long producto_id) {
        this.comprador = comprador;
        this.precioPagado = precioPagado;
        this.estado = estado;
        this.nombre = nombre;
        this.producto_id = producto_id;
        this.categoria = categoria;
        this.fechaTransaccion = new Date();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Usuario getComprador() {
        return comprador;
    }

    public void setComprador(Usuario comprador) {
        this.comprador = comprador;
    }

    public Date getFechaTransaccion() {
        return fechaTransaccion;
    }

    public Double getPrecioPagado() {
        return precioPagado;
    }

    public void setPrecioPagado(Double precioPagado) {
        this.precioPagado = precioPagado;
    }

    @PrePersist
    protected void prePersist() {
        if (this.fechaTransaccion == null) {
            this.fechaTransaccion = new Date();
        }
    }

    public static TransaccionBuilder builder() {
        return new TransaccionBuilder();
    }

    public static class TransaccionBuilder {
        private Usuario comprador;
        private Double precioPagado;
        private String categoria;
        private String nombre;
        private Long producto_id;
        private String estado;

        public TransaccionBuilder comprador(Usuario comprador) {
            this.comprador = comprador;
            return this;
        }
        public TransaccionBuilder categoria(String categoria) {
            this.categoria = categoria;
            return this;
        }
        public TransaccionBuilder nombre(String nombre) {
            this.nombre = nombre;
            return this;
        }
        public TransaccionBuilder estado(String estado) {
            this.estado = estado;
            return this;
        }
        public TransaccionBuilder producto_id(Long producto_id) {
            this.producto_id = producto_id;
            return this;
        }

        public TransaccionBuilder precioPagado(Double precioPagado) {
            this.precioPagado = precioPagado;
            return this;
        }

        public Transaccion build() {
            return new Transaccion(comprador, estado, precioPagado, nombre, categoria, producto_id);
        }
    }
}