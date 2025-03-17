package com.simplyswap.Util;

import com.simplyswap.Models.Usuario;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import java.security.Key;
import java.util.Date;

public class TokenUtil {

    private static final Key SECRET_KEY = Keys.hmacShaKeyFor("mi-clave-secreta-super-segura-1234567890$$$".getBytes());
    private static final long EXPIRATION_TIME = 86400000;

    public static String generateToken(Usuario usuario) {
        return Jwts.builder()
                .setSubject(usuario.getEmail())
                .claim("nombre", usuario.getNombre())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SECRET_KEY)
                .compact();
    }
}