CREATE TABLE people (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(20) NOT NULL,
  last_name VARCHAR(20) NOT NULL,
  email VARCHAR(80) NOT NULL
);

CREATE TABLE locations (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50)
);

CREATE TABLE contact (
  id SERIAL PRIMARY KEY NOT NULL,
  people_id INT NOT NULL, 
  time_entry TIMESTAMP,
  time_exit date
);