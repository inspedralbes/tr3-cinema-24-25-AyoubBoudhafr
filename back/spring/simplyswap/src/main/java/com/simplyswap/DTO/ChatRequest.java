package com.simplyswap.DTO;

public class ChatRequest {
    private Long compradorId;
    private Long vendedorId;

    public ChatRequest() {}

    public ChatRequest(Long compradorId, Long vendedorId) {
        this.compradorId = compradorId;
        this.vendedorId = vendedorId;
    }

    public Long getCompradorId() {
        return compradorId;
    }

    public void setCompradorId(Long compradorId) {
        this.compradorId = compradorId;
    }

    public Long getVendedorId() {
        return vendedorId;
    }

    public void setVendedorId(Long vendedorId) {
        this.vendedorId = vendedorId;
    }
}
