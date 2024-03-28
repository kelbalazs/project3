CREATE TABLE apartments (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    -- Other columns for apartment details
);

CREATE TABLE deliveries (
    id INT PRIMARY KEY AUTO_INCREMENT,
    apartment_id INT,
    courier VARCHAR(50),
    adresse_name VARCHAR(50),
    description VARCHAR(50),
    delivery_date DATE,
    delivery_time TIME,
    status BOOLEAN,
    FOREIGN KEY (apartment_id) REFERENCES apartments(id)
);

INSERT INTO apartments (id, name)
VALUES
    (1, 'Apartment 1'),
    (2, 'Apartment 2'),
    (3, 'Apartment 3'),
    (4, 'Apartment 4'),
    (5, 'Apartment 5'),
    (6, 'Apartment 6'),
    (7, 'Apartment 7'),
    (8, 'Apartment 8'),
    (9, 'Apartment 9'),
    (10, 'Apartment 10'),
    (11, 'Apartment 11'),
    (12, 'Apartment 12'),
    (13, 'Apartment 13'),
    (14, 'Apartment 14'),
    (15, 'Apartment 15'),
    (16, 'Apartment 16'),
    (17, 'Apartment 17'),
    (18, 'Apartment 18'),
    (19, 'Apartment 19'),
    (20, 'Penthouse 1'),
    (21, 'Penthouse 2'),
    (22, 'Penthouse 3');
