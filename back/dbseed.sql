INSERT INTO inmueble (descripcion_short, descripcion, direccion, ciudad, pais, precio)
VALUES 
('Hermoso apartamento', 'Apartamento de lujo con vista al mar', 'Av. Principal 123', 'Barcelona', 'España',650000),
('Casa acogedora', 'Casa con amplio jardín y piscina', 'Av. Diagonal 456', 'Madrid', 'España',199000);

INSERT INTO inmueble_imagenes (inmueble_id, imagen_url)
VALUES 
(1, '/assets/hermosoApartamento.webp'),
(1, '/assets/hermosoApartamento2.webp'),
(1, '/assets/hermosoApartamento3.webp'),
(1, '/assets/hermosoApartamento4.webp'),
(1, '/assets/hermosoApartamento5.webp'),
(2, '/assets/casaAcojedora.webp'),
(2, '/assets/casaAcojedora2.webp'),
(2, '/assets/casaAcojedora3.webp'),
(2, '/assets/casaAcojedora4.webp'),
(2, '/assets/casaAcojedora5.webp'),
(2, '/assets/casaAcojedora6.webp');

INSERT INTO libro (precio, nombre, descripcion, fecha_publicacion, entrega_disponible)
VALUES 
(15.99, 'El principito', 'Libro clásico de Antoine de Saint-Exupéry', '1943-04-06', TRUE),
(25.50, '1984', 'Novela distópica de George Orwell', '1949-06-08', FALSE);

INSERT INTO libro_imagenes (libro_id, imagen_url)
VALUES 
(1, '/assets/principito.webp'),
(1, '/assets/principito2.webp'),
(2, '/assets/1984.webp'),
(2, '/assets/1984_2.webp');

INSERT INTO motor (marca, modelo, precio, kilometraje, descripcion, envio_disponible, fecha_publicacion)
VALUES 
('Toyota', 'Corolla', 12000.5, 50000, 'Toyota Corolla en excelente estado', TRUE, NOW()),
('Honda', 'Civic', 15000, 30000, 'Honda Civic 2020, poco uso', FALSE, NOW());

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

INSERT INTO usuarios (nombre, email, password, telefono, ciudad, pais, foto_perfil)
VALUES 
('Juan Pérez', 'juanperez@example.com', 'password123', '123456789', 'Madrid', 'España', '/assets/juan.webp'),
('María García', 'maria@example.com', 'pass456', '987654321', 'Barcelona', 'España', '/assets/maria.webp');


INSERT INTO tecnologia (id, nombre, precio, categoria, descripcion, envio_disponible)
VALUES 
(1, 'iPhone 13', 799, 1, 'iPhone 13 en excelente estado', TRUE),
(2, 'Samsung Galaxy S21', 699, 1, 'Samsung Galaxy S21 con caja y accesorios', FALSE),
(3, 'MacBook Pro 16', 2000, 1, 'MacBook Pro con chip M1 Pro', TRUE),
(4, 'iPad Air 4', 599, 1, 'iPad Air 4ta generación con chip A14 Bionic', TRUE),
(5, 'Google Pixel 6', 599, 1, 'Google Pixel 6 con cámara de 50MP', FALSE),
(6, 'Sony PlayStation 5', 499, 1, 'PlayStation 5 con soporte para 4K y ray tracing', TRUE),
(7, 'Xbox Series X', 499, 1, 'Xbox Series X con SSD ultrarrápido', TRUE),
(8, 'Dell XPS 13', 1299, 1, 'Ultrabook Dell XPS 13 con pantalla táctil', TRUE),
(9, 'Apple Watch Series 7', 399, 1, 'Apple Watch con pantalla Retina Always-On', FALSE),
(10, 'AirPods Pro', 249, 1, 'Auriculares inalámbricos con cancelación de ruido', TRUE);

INSERT INTO producto_imagenes (producto_id, imagen_url)
VALUES 
(1, '/assets/iphone13_1.webp'),
(1, '/assets/iphone13_2.webp'),
(1, '/assets/iphone13_3.webp'),
(2, '/assets/samsung_s21_1.webp'),
(2, '/assets/samsung_s21_2.webp'),
(3, '/assets/macbookpro_1.webp'),
(3, '/assets/macbookpro_2.webp'),
(4, '/assets/ipad4_1.webp'),
(4, '/assets/ipad4_2.webp'),
(5, '/assets/googlepixel6.webp'),
(6, '/assets/ps5_1.webp'),
(6, '/assets/ps5_2.webp'),
(7, '/assets/xboxseriesx.webp'),
(7, '/assets/xboxseriesx_2.webp'),
(8, '/assets/dellxps13.webp'),
(8, '/assets/dellxps13_2.webp'),
(9, '/assets/applewatch7.webp'),
(9, '/assets/applewatch7_2.webp'),
(10, '/assets/airpodspro.webp'),
(10, '/assets/airpodspro_2.webp');
