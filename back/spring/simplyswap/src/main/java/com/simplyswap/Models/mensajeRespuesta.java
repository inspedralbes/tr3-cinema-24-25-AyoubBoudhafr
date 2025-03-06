package com.simplyswap.Models;

public class mensajeRespuesta {
    private String mensaje;
    private boolean exito;
    private Tecnologia producto;

    public mensajeRespuesta(String mensaje, boolean exito, Tecnologia producto) {
        this.mensaje = mensaje;
        this.exito = exito;
        this.producto = producto;
    }

    public String getMensaje() {
        return mensaje;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }

    public boolean isExito() {
        return exito;
    }

    public void setExito(boolean exito) {
        this.exito = exito;
    }

    public Tecnologia getProducto() {
        return producto;
    }

    public void setProducto(Tecnologia producto) {
        this.producto = producto;
    }
}
