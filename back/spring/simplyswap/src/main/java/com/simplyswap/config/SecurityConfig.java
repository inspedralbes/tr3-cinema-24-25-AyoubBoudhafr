package com.simplyswap.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/**").permitAll() // Permite todas las rutas sin autenticación
                )
                .formLogin(login -> login.disable()) // Desactiva el formulario de login
                .httpBasic(basic -> basic.disable()); // Desactiva la autenticación básica

        return http.build();
    }
}
