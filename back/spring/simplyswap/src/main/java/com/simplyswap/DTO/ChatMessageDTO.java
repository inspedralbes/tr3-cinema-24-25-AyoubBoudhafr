package com.simplyswap.DTO;

import java.time.LocalDateTime;

public class ChatMessageDTO {
    private Long chatId; // nuevo campo para identificar el chat
    private Long compradorId;
    private Long vendedorId;
    private String sender;
    private String content;
    private LocalDateTime sentAt;

    public ChatMessageDTO() {}

    public ChatMessageDTO(String sender, String content, Long chatId, LocalDateTime sentAt) {
        this.sender = sender;
        this.content = content;
        this.chatId = chatId;
        this.sentAt = sentAt;
    }

    public ChatMessageDTO(String sender, String content, Long compradorId, Long vendedorId, LocalDateTime sentAt) {
        this.sender = sender;
        this.content = content;
        this.compradorId = compradorId;
        this.vendedorId = vendedorId;
        this.sentAt = sentAt;
    }

    public Long getChatId() {
        return chatId;
    }

    public void setChatId(Long chatId) {
        this.chatId = chatId;
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

    public String getSender() {
        return sender;
    }
    public void setSender(String sender) {
        this.sender = sender;
    }
    public String getContent() {
        return content;
    }
    public void setContent(String content) {
        this.content = content;
    }
    public LocalDateTime getSentAt() {
        return sentAt;
    }
    public void setSentAt(LocalDateTime sentAt) {
        this.sentAt = sentAt;
    }
}
