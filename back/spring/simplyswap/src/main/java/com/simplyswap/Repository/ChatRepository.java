package com.simplyswap.Repository;

import com.simplyswap.Models.Chat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface ChatRepository extends JpaRepository<Chat, Long> {

    @Query("SELECT c FROM Chat c WHERE (c.usuario1.id = :userId1 AND c.usuario2.id = :userId2) OR (c.usuario1.id = :userId2 AND c.usuario2.id = :userId1)")
    Optional<Chat> findChatByParticipants(@Param("userId1") Long userId1, @Param("userId2") Long userId2);
}
