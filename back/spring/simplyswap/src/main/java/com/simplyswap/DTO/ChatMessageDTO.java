package com.simplyswap.DTO;

import java.time.LocalDateTime;

public class ChatMessageDTO {
    private Long chatId;
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

    public Long getChatId() { return chatId; }
    public void setChatId(Long chatId) { this.chatId = chatId; }
    public String getSender() { return sender; }
    public void setSender(String sender) { this.sender = sender; }
    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }
    public LocalDateTime getSentAt() { return sentAt; }
    public void setSentAt(LocalDateTime sentAt) { this.sentAt = sentAt; }
}