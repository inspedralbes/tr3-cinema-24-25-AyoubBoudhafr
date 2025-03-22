package com.simplyswap.Repository;

import com.simplyswap.Models.Transaccion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TransaccionRepository extends JpaRepository<Transaccion, Long> {
    List<Transaccion> findByCompradorId(Long compradorId);
}