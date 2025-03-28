INSERT INTO usuarios (nombre, email, password, telefono, ciudad, pais, foto_perfil)
    VALUES 
    ('Juan Pérez', 'juan@gmail.com', '$2a$10$3sFvB/9yzzsrBs.4ZDYm4erNtDVNXDaAMCKC9BHuP47/XnT7HzbiO', '123456789', 'Madrid', 'España', '/assets/juan.webp'),
    ('Ayoub Boudhafri', 'admin@gmail.com', '$2a$10$3sFvB/9yzzsrBs.4ZDYm4erNtDVNXDaAMCKC9BHuP47/XnT7HzbiO', '987654321', 'Barcelona', 'España', '/assets/maria.webp');

    INSERT INTO inmueble (descripcion_short, descripcion, direccion, ciudad, pais, precio, fecha_publicacion, usuario_id)
    VALUES 
    ('Ático moderno', 'Ático con terraza privada y vistas panorámicas', 'Calle Luna 10', 'Valencia', 'España', 450000, NOW(), 2),
    ('Chalet exclusivo', 'Chalet con jardín, piscina y área de barbacoa', 'Camino Verde 75', 'Sevilla', 'España', 700000, NOW(), 3),
    ('Estudio céntrico', 'Estudio moderno cerca de zonas comerciales', 'Plaza Mayor 22', 'Granada', 'España', 120000, NOW(), 4),
    ('Casa rural', 'Casa de campo con terreno y huerta', 'Camino Rural s/n', 'Toledo', 'España', 180000, NOW(), 5),
    ('Loft minimalista', 'Loft de diseño en el centro urbano', 'Calle Sol 18', 'Zaragoza', 'España', 320000, NOW(), 6),
    ('Dúplex elegante', 'Dúplex con terraza y excelente iluminación', 'Avenida Marítima 101', 'Málaga', 'España', 500000, NOW(), 7),
    ('Apartamento familiar', 'Apartamento amplio ideal para familias', 'Calle Otoño 3', 'Bilbao', 'España', 350000, NOW(), 8),
    ('Villa de lujo', 'Villa exclusiva en zona residencial', 'Urbanización La Palma 8', 'Santander', 'España', 950000, NOW(), 9),
    ('Piso reformado', 'Piso completamente renovado con acabados modernos', 'Calle Flores 14', 'Cádiz', 'España', 290000, NOW(), 10),
    ('Bungalow acogedor', 'Bungalow con terraza y vistas al jardín', 'Calle Jardines 2', 'Alicante', 'España', 220000, NOW(), 11);

INSERT INTO inmueble_imagenes (inmueble_id, imagen_url)
    VALUES 
    (1, '/assets/aticoModerno1.webp'),
    (1, '/assets/aticoModerno2.webp'),
    (1, '/assets/aticoModerno3.webp'),
    (2, '/assets/chaletExclusivo1.webp'),
    (2, '/assets/chaletExclusivo2.webp'),
    (2, '/assets/chaletExclusivo3.webp'),
    (2, '/assets/chaletExclusivo4.webp'),
    (3, '/assets/estudioCentrico1.webp'),
    (3, '/assets/estudioCentrico2.webp'),
    (3, '/assets/estudioCentrico3.webp'),
    (4, '/assets/casaRural1.webp'),
    (4, '/assets/casaRural2.webp'),
    (4, '/assets/casaRural3.webp'),
    (4, '/assets/casaRural4.webp'),
    (5, '/assets/loftMinimalista1.webp'),
    (5, '/assets/loftMinimalista2.webp'),
    (5, '/assets/loftMinimalista3.webp'),
    (6, '/assets/duplexElegante1.webp'),
    (6, '/assets/duplexElegante2.webp'),
    (6, '/assets/duplexElegante3.webp'),
    (7, '/assets/apartamentoFamiliar1.webp'),
    (7, '/assets/apartamentoFamiliar2.webp'),
    (7, '/assets/apartamentoFamiliar3.webp'),
    (8, '/assets/villaDeLujo1.webp'),
    (8, '/assets/villaDeLujo2.webp'),
    (8, '/assets/villaDeLujo3.webp'),
    (8, '/assets/villaDeLujo4.webp'),
    (9, '/assets/pisoReformado1.webp'),
    (9, '/assets/pisoReformado2.webp'),
    (9, '/assets/pisoReformado3.webp'),
    (10, '/assets/bungalowAcogedor1.webp'),
    (10, '/assets/bungalowAcogedor2.webp'),
    (10, '/assets/bungalowAcogedor3.webp'),
    (10, '/assets/bungalowAcogedor4.webp'),
    (10, '/assets/bungalowAcogedor5.webp');


    INSERT INTO libro (precio, nombre, autor, descripcion, fecha_publicacion, entrega_disponible,fecha_publicacion_producto,usuario_id)
    VALUES 
    (15.99, 'El principito', 'Juan Lopez', 'Libro clásico de Antoine de Saint-Exupéry', '1943-04-06', TRUE,NOW(),1),
    (25.50, '1984', 'Jose Fernandez', 'Novela distópica de George Orwell', '1949-06-08', FALSE,NOW(),1);

    INSERT INTO libro_imagenes (libro_id, imagen_url)
    VALUES 
    (1, '/assets/principito.webp'),
    (1, '/assets/principito2.webp'),
    (2, '/assets/1984.webp'),
    (2, '/assets/1984_2.webp');

    INSERT INTO motor (marca, modelo, precio, kilometraje, descripcion, fecha_publicacion,usuario_id)
    VALUES 
    ('Toyota', 'Corolla', 12000, 50000, 'Toyota Corolla en excelente estado', NOW(),1),
    ('Honda', 'Civic', 15000, 30000, 'Honda Civic 2020, poco uso', NOW(),1);

    INSERT INTO motor_imagenes (motor_id, imagen_url)
    VALUES 
    (1, '/assets/toyota_corolla.webp'),
    (1, '/assets/toyota_corolla2.webp'),
    (1, '/assets/toyota_corolla3.webp'),
    (1, '/assets/toyota_corolla4.webp'),
    (1, '/assets/toyota_corolla5.webp'),
    (1, '/assets/toyota_corolla6.webp'),
    (2, '/assets/honda_civic.webp'),
    (2, '/assets/honda_civic2.webp'),
    (2, '/assets/honda_civic3.webp'),
    (2, '/assets/honda_civic4.webp'),
    (2, '/assets/honda_civic5.webp'),
    (2, '/assets/honda_civic6.webp'),
    (2, '/assets/honda_civic7.webp'),
    (2, '/assets/honda_civic8.webp');


    INSERT INTO tecnologia (id, nombre, precio, categoria, descripcion, envio_disponible, usuario_id, fecha_publicacion)
    VALUES 
    (1, 'iPhone 13', 799, 1, 'iPhone 13 en excelente estado', TRUE,1,NOW()),
    (2, 'Samsung Galaxy S21', 699, 1, 'Samsung Galaxy S21 con caja y accesorios', FALSE,1,NOW()),
    (3, 'MacBook Pro 16', 2000, 1, 'MacBook Pro con chip M1 Pro', TRUE,1,NOW()),
    (4, 'iPad Air 4', 599, 1, 'iPad Air 4ta generación con chip A14 Bionic', TRUE,1,NOW()),
    (5, 'Google Pixel 6', 599, 1, 'Google Pixel 6 con cámara de 50MP', FALSE,1,NOW()),
    (6, 'Sony PlayStation 5', 499, 1, 'PlayStation 5 con soporte para 4K y ray tracing', TRUE,1,NOW()),
    (7, 'Xbox Series X', 499, 1, 'Xbox Series X con SSD ultrarrápido', TRUE,1,NOW()),
    (8, 'Dell XPS 13', 1299, 1, 'Ultrabook Dell XPS 13 con pantalla táctil', TRUE,1,NOW()),
    (9, 'Apple Watch Series 7', 399, 1, 'Apple Watch con pantalla Retina Always-On', FALSE,1,NOW()),
    (10, 'AirPods Pro', 249, 1, 'Auriculares inalámbricos con cancelación de ruido', TRUE,1,NOW());

    INSERT INTO producto_imagenes (producto_id, imagen_url)
    VALUES 
    (1, '/assets/iphone13_1.webp'),
    (1, '/assets/iphone13_2.webp'),
    (1, '/assets/iphone13_3.webp'),
    (1, '/assets/iphone13_4.webp'),
    (1, '/assets/iphone13_5.webp'),
    (1, '/assets/iphone13_6.webp'),
    (2, '/assets/samsung_s21_1.webp'),
    (2, '/assets/samsung_s21_2.webp'),
    (2, '/assets/samsung_s21_3.webp'),
    (2, '/assets/samsung_s21_4.webp'),
    (3, '/assets/macbookpro_1.webp'),
    (3, '/assets/macbookpro_2.webp'),
    (4, '/assets/ipad4_1.webp'),
    (4, '/assets/ipad4_2.webp'),
    (4, '/assets/ipad4_3.webp'),
    (4, '/assets/ipad4_4.webp'),
    (4, '/assets/ipad4_5.webp'),
    (4, '/assets/ipad4_6.webp'),
    (4, '/assets/ipad4_7.webp'),
    (4, '/assets/ipad4_8.webp'),
    (4, '/assets/ipad4_9.webp'),
    (5, '/assets/googlepixel6.webp'),
    (5, '/assets/googlepixel6_2.webp'),
    (5, '/assets/googlepixel6_3.webp'),
    (5, '/assets/googlepixel6.webp'),
    (6, '/assets/ps5_1.webp'),
    (6, '/assets/ps5_2.webp'),
    (6, '/assets/ps5_3.webp'),
    (7, '/assets/xboxseriesx.webp'),
    (7, '/assets/xboxseriesx_2.webp'),
    (7, '/assets/xboxseriesx_3.webp'),
    (8, '/assets/dellxps13.webp'),
    (8, '/assets/dellxps13_2.webp'),
    (8, '/assets/dellxps13_3.webp'),
    (8, '/assets/dellxps13_4.webp'),
    (9, '/assets/applewatch7.webp'),
    (9, '/assets/applewatch7_2.webp'),
    (9, '/assets/applewatch7_3.webp'),
    (9, '/assets/applewatch7_4.webp'),
    (10, '/assets/airpodspro.webp'),
    (10, '/assets/airpodspro_2.webp'),
    (10, '/assets/airpodspro_3.webp')