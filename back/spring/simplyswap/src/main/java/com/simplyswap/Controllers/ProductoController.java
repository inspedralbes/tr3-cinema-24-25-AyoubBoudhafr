package com.simplyswap.Controllers;

import com.simplyswap.Models.Producto;
import com.simplyswap.repositories.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductoController {

    @Autowired
    private ProductoRepository productoRepository;

    @GetMapping("/productos")
    public List<Producto> obtenerProductos() {
        return productoRepository.findAll();
    }
}
