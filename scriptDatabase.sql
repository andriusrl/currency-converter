USE sagan_andrius_db;

CREATE TABLE Transactions (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_user VARCHAR(255) NOT NULL,
    origin VARCHAR(255) NOT NULL,
    destiny VARCHAR(255) NOT NULL,
    tax FLOAT NOT NULL
);

ALTER TABLE Transactions ADD date DATE NOT NULL;

ALTER TABLE Transactions CHANGE date date DATETIME NOT NULL;

ALTER TABLE Transactions ADD value DOUBLE NOT NULL;
