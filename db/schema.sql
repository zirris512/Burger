DROP TABLE burgers;
CREATE TABLE burgers (
    id SERIAL PRIMARY KEY,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN NOT NULL
);