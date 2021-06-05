DROP TABLE IF EXISTS people;
DROP TABLE IF EXISTS locations;
DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS location_contact;
DROP TABLE IF EXISTS car_contact;
DROP TABLE IF EXISTS car;
DROP TABLE IF EXISTS drivers;

CREATE TABLE people (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(20) NOT NULL,
  last_name VARCHAR(20) NOT NULL,
  email VARCHAR(80) NOT NULL,
  department VARCHAR(80) NOT NULL
);

CREATE TABLE locations (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50)
);

CREATE TABLE location_contact (
  id SERIAL PRIMARY KEY NOT NULL,
  people_id INT NOT NULL,
  location_id INT NOT NULL,
  time_entry TIMESTAMP,
  time_exit date
);

CREATE TABLE car_contact (
  id SERIAL PRIMARY KEY NOT NULL,
  people_id INT NOT NULL,
  car_id INT NOT NULL,
  time_entry TIMESTAMP,
  time_exit date
);

CREATE TABLE drivers (
  id SERIAL PRIMARY KEY NOT NULL,
  person_id INT NOT NULL
);

CREATE TABLE car (
  id SERIAL PRIMARY KEY NOT NULL, 
  people_id INT NOT NULL,
  driver_id INT NOT NULL
);

CREATE TABLE departments (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(30) NOT NULL
);