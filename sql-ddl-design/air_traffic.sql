-- from the terminal run:
-- psql < air_traffic.sql

-- DROP DATABASE IF EXISTS air_traffic;

-- CREATE DATABASE air_traffic;

-- \c air_traffic

-- CREATE TABLE tickets
-- (
--   id SERIAL PRIMARY KEY,
--   first_name TEXT NOT NULL,
--   last_name TEXT NOT NULL,
--   seat TEXT NOT NULL,
--   departure TIMESTAMP NOT NULL,
--   arrival TIMESTAMP NOT NULL,
--   airline TEXT NOT NULL,
--   from_city TEXT NOT NULL,
--   from_country TEXT NOT NULL,
--   to_city TEXT NOT NULL,
--   to_country TEXT NOT NULL
-- );

-- INSERT INTO tickets
--   (first_name, last_name, seat, departure, arrival, airline, from_city, from_country, to_city, to_country)
-- VALUES
--   ('Jennifer', 'Finch', '33B', '2018-04-08 09:00:00', '2018-04-08 12:00:00', 'United', 'Washington DC', 'United States', 'Seattle', 'United States'),
--   ('Thadeus', 'Gathercoal', '8A', '2018-12-19 12:45:00', '2018-12-19 16:15:00', 'British Airways', 'Tokyo', 'Japan', 'London', 'United Kingdom'),
--   ('Sonja', 'Pauley', '12F', '2018-01-02 07:00:00', '2018-01-02 08:03:00', 'Delta', 'Los Angeles', 'United States', 'Las Vegas', 'United States'),
--   ('Jennifer', 'Finch', '20A', '2018-04-15 16:50:00', '2018-04-15 21:00:00', 'Delta', 'Seattle', 'United States', 'Mexico City', 'Mexico'),
--   ('Waneta', 'Skeleton', '23D', '2018-08-01 18:30:00', '2018-08-01 21:50:00', 'TUI Fly Belgium', 'Paris', 'France', 'Casablanca', 'Morocco'),
--   ('Thadeus', 'Gathercoal', '18C', '2018-10-31 01:15:00', '2018-10-31 12:55:00', 'Air China', 'Dubai', 'UAE', 'Beijing', 'China'),
--   ('Berkie', 'Wycliff', '9E', '2019-02-06 06:00:00', '2019-02-06 07:47:00', 'United', 'New York', 'United States', 'Charlotte', 'United States'),
--   ('Alvin', 'Leathes', '1A', '2018-12-22 14:42:00', '2018-12-22 15:56:00', 'American Airlines', 'Cedar Rapids', 'United States', 'Chicago', 'United States'),
--   ('Berkie', 'Wycliff', '32B', '2019-02-06 16:28:00', '2019-02-06 19:18:00', 'American Airlines', 'Charlotte', 'United States', 'New Orleans', 'United States'),
--   ('Cory', 'Squibbes', '10D', '2019-01-20 19:30:00', '2019-01-20 22:45:00', 'Avianca Brasil', 'Sao Paolo', 'Brazil', 'Santiago', 'Chile');



DROP DATABASE IF EXISTS air_traffic;

CREATE DATABASE air_traffic;

\c air_traffic

CREATE TABLE passenger_id
(
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
);

INSERT INTO passenger_id
  (first_name, last_name)
VALUES
  ('Jennifer', 'Finch'),
  ('Thadeus', 'Gathercoal'),
  ('Sonja', 'Pauley'),
  ('Jennifer', 'Finch'),
  ('Waneta', 'Skeleton'),
  ('Thadeus', 'Gathercoal'),
  ('Berkie', 'Wycliff'),
  ('Alvin', 'Leathes'),
  ('Berkie', 'Wycliff'),
  ('Cory', 'Squibbes');

CREATE TABLE airline_id
(
  id SERIAL PRIMARY KEY,
  airline TEXT NOT NULL
);

INSERT INTO airline_id
  (airline)
VALUES
  ('United'),
  ('British Airways'),
  ('Delta'),
  ('TUI Fly Belgium'),
  ('Air China'),
  ('American Airlines'),
  ('Avianca Brasil');

CREATE TABLE source_city
(
  id SERIAL PRIMARY KEY,
  city TEXT NOT NULL
);

INSERT INTO source_city
  (city)
VALUES
  ('Washington DC'),
  ('Tokyo'),
  ('Los Angeles'),
  ('Seattle'),
  ('Paris'),
  ('Dubai'),
  ('New York'),
  ('Cedar Rapids'),
  ('Charlotte'),
  ('Sao Paolo');

  CREATE TABLE source_country
(
  id SERIAL PRIMARY KEY,
  country TEXT NOT NULL
);

INSERT INTO source_country
  (country)
VALUES
  ('United States'),
  ('Japan'),
  ('France'),
  ('UAE'),
  ('Brazil');

CREATE TABLE destination_city
(
  id SERIAL PRIMARY KEY,
  city TEXT NOT NULL
);

INSERT INTO destination_city
  (city)
VALUES
  ('Seattle'),
  ('London'),
  ('Las Vegas'),
  ('Mexico City'),
  ('Casablanca'),
  ('Beijing'),
  ('Charlotte'),
  ('Chicago'),
  ('New Orleans'),
  ('Santiago');

CREATE TABLE destination_country
(
  id SERIAL PRIMARY KEY,
  country TEXT NOT NULL
);

INSERT INTO destination_country
  (country)
VALUES
  ('United States'),
  ('United Kingdom'),
  ('Mexico'),
  ('Morocco'),
  ('China'),
  ('Chile');

CREATE TABLE tickets
(
  id SERIAL PRIMARY KEY,
  passenger_id INTEGER NOT NULL,
  seat TEXT NOT NULL,
  departure TIMESTAMP NOT NULL,
  arrival TIMESTAMP NOT NULL,
  airline_id INTEGER NOT NULL,
  source TEXT NOT NULL,
  destination TEXT NOT NULL
);


INSERT INTO tickets
  (passenger_id, seat, departure, arrival, airline_id, source_city, source_country, destination_city, destination_country)
VALUES
  ('1', '33B', '2018-04-08 09:00:00', '2018-04-08 12:00:00', '1', '1', '1', '1', '1'),
  ('2', '8A', '2018-12-19 12:45:00', '2018-12-19 16:15:00', '2', '2', '2', '2', '2'),
  ('3', '12F', '2018-01-02 07:00:00', '2018-01-02 08:03:00', '3', '3', '1', '3', '1'),
  ('4', '20A', '2018-04-15 16:50:00', '2018-04-15 21:00:00', '3', '4', '1', '4', '3'),
  ('5', '23D', '2018-08-01 18:30:00', '2018-08-01 21:50:00', '4', '5', '3', '5', '4'),
  ('6', '18C', '2018-10-31 01:15:00', '2018-10-31 12:55:00', '5', '6', '4', '6', '5'),
  ('7', '9E', '2019-02-06 06:00:00', '2019-02-06 07:47:00', '1', '7', '1', '7', '1'),
  ('8', '1A', '2018-12-22 14:42:00', '2018-12-22 15:56:00', '6', '8', '1', '8', '1'),
  ('9', '32B', '2019-02-06 16:28:00', '2019-02-06 19:18:00', '6', '9', '1', '9', '1'),
  ('10', '10D', '2019-01-20 19:30:00', '2019-01-20 22:45:00', '7', '10', '5', '10', '6');