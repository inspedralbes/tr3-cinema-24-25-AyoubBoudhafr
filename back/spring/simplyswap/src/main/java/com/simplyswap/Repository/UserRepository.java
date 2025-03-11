package com.simplyswap.Repository;

import com.simplyswap.Models.Tecnologia;
import com.simplyswap.Models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Usuario, Long> {
    Usuario findByEmail(String email);
}
