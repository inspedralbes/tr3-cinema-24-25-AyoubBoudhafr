package com.simplyswap.Models;

public class LoginResponse {

    private boolean success;
    private String message;
    private String token;
    private Usuario user;
    public LoginResponse() {}

    public LoginResponse(boolean success, String message, String token, Usuario user) {
        this.success = success;
        this.user = user;
        this.message = message;
        this.token = token;
    }

    public Usuario getUser() {
        return user;
    }

    public void setUser(Usuario user) {
        this.user = user;
    }

    public boolean isSuccess() {
        return success;
    }
    public void setSuccess(boolean success) {
        this.success = success;
    }
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }
    public String getToken() {
        return token;
    }
    public void setToken(String token) {
        this.token = token;
    }
}
