package com.simplyswap.Controllers;

import com.simplyswap.DTO.ChatMessageDTO;
import com.simplyswap.Models.Chat;
import com.simplyswap.Models.ChatMessage;
import com.simplyswap.Repository.ChatMessageRepository;
import com.simplyswap.Repository.ChatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import java.time.LocalDateTime;

@Controller
public class ChatWebSocketController {

    @Autowired
    private ChatRepository chatRepository;

    @Autowired
    private ChatMessageRepository chatMessageRepository;

    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    @MessageMapping("/chat.sendMessage")
    public void sendMessage(ChatMessageDTO messageDTO) throws Exception {
        Chat chat = chatRepository.findById(messageDTO.getChatId())
                .orElseThrow(() -> new Exception("Chat no encontrado"));

        ChatMessage message = new ChatMessage();
        message.setSender(messageDTO.getSender());
        message.setContent(messageDTO.getContent());
        message.setSentAt(LocalDateTime.now());
        message.setChat(chat);

        ChatMessage savedMessage = chatMessageRepository.save(message);

        messagingTemplate.convertAndSend("/topic/chat/" + messageDTO.getChatId(),
                new ChatMessageDTO(
                        savedMessage.getSender(),
                        savedMessage.getContent(),
                        savedMessage.getChat().getId(),
                        savedMessage.getSentAt()
                )
        );
    }
}
