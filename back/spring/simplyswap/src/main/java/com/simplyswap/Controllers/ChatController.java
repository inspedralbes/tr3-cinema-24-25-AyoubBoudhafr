package com.simplyswap.Controllers;

import com.simplyswap.DTO.ChatRequest;
import com.simplyswap.Models.Chat;
import com.simplyswap.Models.Usuario;
import com.simplyswap.Repository.ChatRepository;
import com.simplyswap.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/chats")
public class ChatController {

    @Autowired
    private ChatRepository chatRepository;

    @Autowired
    private UserRepository usuarioRepository;

    @PostMapping("/create")
    public ResponseEntity<Chat> createOrGetChat(@RequestBody ChatRequest chatRequest) {
        Optional<Chat> chatOpt = chatRepository.findChatByParticipants(
                chatRequest.getCompradorId(), chatRequest.getVendedorId()
        );
        if(chatOpt.isPresent()){
            return ResponseEntity.ok(chatOpt.get());
        } else {
            Usuario comprador = usuarioRepository.findById(chatRequest.getCompradorId())
                    .orElseThrow(() -> new RuntimeException("Comprador no encontrado"));
            Usuario vendedor = usuarioRepository.findById(chatRequest.getVendedorId())
                    .orElseThrow(() -> new RuntimeException("Vendedor no encontrado"));
            Chat newChat = new Chat(comprador, vendedor);
            Chat savedChat = chatRepository.save(newChat);
            return ResponseEntity.ok(savedChat);
        }
    }
}
