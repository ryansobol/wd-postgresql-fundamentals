--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.3
-- Dumped by pg_dump version 9.5.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: customers; Type: TABLE; Schema: public; Owner: lionel
--

CREATE TABLE customers (
    id integer NOT NULL,
    name character varying(255),
    email character varying(255),
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE customers OWNER TO lionel;

--
-- Name: customers_id_seq; Type: SEQUENCE; Schema: public; Owner: lionel
--

CREATE SEQUENCE customers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE customers_id_seq OWNER TO lionel;

--
-- Name: customers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: lionel
--

ALTER SEQUENCE customers_id_seq OWNED BY customers.id;


--
-- Name: dishes; Type: TABLE; Schema: public; Owner: lionel
--

CREATE TABLE dishes (
    id integer NOT NULL,
    restaurant_id integer,
    name character varying(255),
    description text,
    cost numeric(8,2),
    vegetarian_at timestamp with time zone,
    gluten_free_at timestamp with time zone,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE dishes OWNER TO lionel;

--
-- Name: dishes_id_seq; Type: SEQUENCE; Schema: public; Owner: lionel
--

CREATE SEQUENCE dishes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE dishes_id_seq OWNER TO lionel;

--
-- Name: dishes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: lionel
--

ALTER SEQUENCE dishes_id_seq OWNED BY dishes.id;


--
-- Name: knex_migrations; Type: TABLE; Schema: public; Owner: lionel
--

CREATE TABLE knex_migrations (
    id integer NOT NULL,
    name character varying(255),
    batch integer,
    migration_time timestamp with time zone
);


ALTER TABLE knex_migrations OWNER TO lionel;

--
-- Name: knex_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: lionel
--

CREATE SEQUENCE knex_migrations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE knex_migrations_id_seq OWNER TO lionel;

--
-- Name: knex_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: lionel
--

ALTER SEQUENCE knex_migrations_id_seq OWNED BY knex_migrations.id;


--
-- Name: knex_migrations_lock; Type: TABLE; Schema: public; Owner: lionel
--

CREATE TABLE knex_migrations_lock (
    is_locked integer
);


ALTER TABLE knex_migrations_lock OWNER TO lionel;

--
-- Name: locations; Type: TABLE; Schema: public; Owner: lionel
--

CREATE TABLE locations (
    id integer NOT NULL,
    restaurant_id integer,
    street character varying(255),
    city character varying(255),
    state character varying(255),
    zipcode character varying(255),
    phone character varying(255),
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE locations OWNER TO lionel;

--
-- Name: locations_id_seq; Type: SEQUENCE; Schema: public; Owner: lionel
--

CREATE SEQUENCE locations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE locations_id_seq OWNER TO lionel;

--
-- Name: locations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: lionel
--

ALTER SEQUENCE locations_id_seq OWNED BY locations.id;


--
-- Name: reservations; Type: TABLE; Schema: public; Owner: lionel
--

CREATE TABLE reservations (
    id integer NOT NULL,
    customer_id integer,
    restaurant_id integer,
    wants_vegetarian boolean,
    wants_gluten_free boolean,
    confirmed_at timestamp with time zone,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE reservations OWNER TO lionel;

--
-- Name: reservations_id_seq; Type: SEQUENCE; Schema: public; Owner: lionel
--

CREATE SEQUENCE reservations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE reservations_id_seq OWNER TO lionel;

--
-- Name: reservations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: lionel
--

ALTER SEQUENCE reservations_id_seq OWNED BY reservations.id;


--
-- Name: restaurants; Type: TABLE; Schema: public; Owner: lionel
--

CREATE TABLE restaurants (
    id integer NOT NULL,
    name character varying(255),
    kind character varying(255),
    bio text,
    dollars text,
    opened_at timestamp with time zone,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    CONSTRAINT restaurants_dollars_check CHECK ((dollars = ANY (ARRAY['1'::text, '2'::text, '3'::text, '4'::text, '5'::text])))
);


ALTER TABLE restaurants OWNER TO lionel;

--
-- Name: restaurants_id_seq; Type: SEQUENCE; Schema: public; Owner: lionel
--

CREATE SEQUENCE restaurants_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE restaurants_id_seq OWNER TO lionel;

--
-- Name: restaurants_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: lionel
--

ALTER SEQUENCE restaurants_id_seq OWNED BY restaurants.id;


--
-- Name: reviews; Type: TABLE; Schema: public; Owner: lionel
--

CREATE TABLE reviews (
    id integer NOT NULL,
    customer_id integer,
    restaurant_id integer,
    rating text,
    comment text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    CONSTRAINT reviews_rating_check CHECK ((rating = ANY (ARRAY['1'::text, '2'::text, '3'::text, '4'::text, '5'::text])))
);


ALTER TABLE reviews OWNER TO lionel;

--
-- Name: reviews_id_seq; Type: SEQUENCE; Schema: public; Owner: lionel
--

CREATE SEQUENCE reviews_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE reviews_id_seq OWNER TO lionel;

--
-- Name: reviews_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: lionel
--

ALTER SEQUENCE reviews_id_seq OWNED BY reviews.id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: lionel
--

ALTER TABLE ONLY customers ALTER COLUMN id SET DEFAULT nextval('customers_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: lionel
--

ALTER TABLE ONLY dishes ALTER COLUMN id SET DEFAULT nextval('dishes_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: lionel
--

ALTER TABLE ONLY knex_migrations ALTER COLUMN id SET DEFAULT nextval('knex_migrations_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: lionel
--

ALTER TABLE ONLY locations ALTER COLUMN id SET DEFAULT nextval('locations_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: lionel
--

ALTER TABLE ONLY reservations ALTER COLUMN id SET DEFAULT nextval('reservations_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: lionel
--

ALTER TABLE ONLY restaurants ALTER COLUMN id SET DEFAULT nextval('restaurants_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: lionel
--

ALTER TABLE ONLY reviews ALTER COLUMN id SET DEFAULT nextval('reviews_id_seq'::regclass);


--
-- Data for Name: customers; Type: TABLE DATA; Schema: public; Owner: lionel
--

COPY customers (id, name, email, created_at, updated_at) FROM stdin;
5	Sue "McGonnigal" Samwortherton	theCharmer@hotmail.com	2016-06-09 16:27:14.345-07	2016-06-09 16:27:14.345-07
1	Johnny Walker	drinks@home.com	2016-06-09 16:27:14.345-07	2016-06-09 16:27:14.345-07
2	Percy DoLittle	getterdone@gmail.com	2016-06-09 16:27:14.345-07	2016-06-09 16:27:14.345-07
3	Rainbow Huff'n'Puff	after1234@aol.com	2016-06-09 16:27:14.345-07	2016-06-09 16:27:14.345-07
4	Prince	@	2016-06-09 16:27:14.345-07	2016-06-09 16:27:14.345-07
6	Little baby Tomkins	whaaaaa@ups.com	2016-06-09 16:27:14.345-07	2016-06-09 16:27:14.345-07
\.


--
-- Name: customers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: lionel
--

SELECT pg_catalog.setval('customers_id_seq', 1, false);


--
-- Data for Name: dishes; Type: TABLE DATA; Schema: public; Owner: lionel
--

COPY dishes (id, restaurant_id, name, description, cost, vegetarian_at, gluten_free_at, created_at, updated_at) FROM stdin;
1	1	the killer chili dawg	The ULTIMATE test.	7.65	\N	\N	2016-06-09 16:27:14.407-07	2016-06-09 16:27:14.407-07
2	1	Melinda's salad blend	This salad is good for the non-carne among you.	8.43	1977-04-01 00:00:00-08	1977-04-01 00:00:00-08	2016-06-09 16:27:14.407-07	2016-06-09 16:27:14.407-07
\.


--
-- Name: dishes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: lionel
--

SELECT pg_catalog.setval('dishes_id_seq', 1, false);


--
-- Data for Name: knex_migrations; Type: TABLE DATA; Schema: public; Owner: lionel
--

COPY knex_migrations (id, name, batch, migration_time) FROM stdin;
31	20160609143601_restaurants.js	1	2016-06-09 16:27:08.471-07
32	20160609144542_customers.js	1	2016-06-09 16:27:08.482-07
33	20160609144719_locations.js	1	2016-06-09 16:27:08.499-07
34	20160609145450_dishes.js	1	2016-06-09 16:27:08.512-07
35	20160609145933_reservations.js	1	2016-06-09 16:27:08.533-07
36	20160609150132_reviews.js	1	2016-06-09 16:27:08.556-07
\.


--
-- Name: knex_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: lionel
--

SELECT pg_catalog.setval('knex_migrations_id_seq', 36, true);


--
-- Data for Name: knex_migrations_lock; Type: TABLE DATA; Schema: public; Owner: lionel
--

COPY knex_migrations_lock (is_locked) FROM stdin;
0
\.


--
-- Data for Name: locations; Type: TABLE DATA; Schema: public; Owner: lionel
--

COPY locations (id, restaurant_id, street, city, state, zipcode, phone, created_at, updated_at) FROM stdin;
1	1	123 Somewhere Street	Seattle	WA	98109	206-555-1234	2016-06-09 16:27:14.417-07	2016-06-09 16:27:14.417-07
2	1	456 Central Avenue	Tacoma	WA	98401	206-555-5678	2016-06-09 16:27:14.417-07	2016-06-09 16:27:14.417-07
3	2	1289 Dublin Way	Olympia	WA	98501	206-555-8329	2016-06-09 16:27:14.417-07	2016-06-09 16:27:14.417-07
4	3	1111 Taco Street	Seattle	WA	98107	206-555-0990	2016-06-09 16:27:14.417-07	2016-06-09 16:27:14.417-07
\.


--
-- Name: locations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: lionel
--

SELECT pg_catalog.setval('locations_id_seq', 1, false);


--
-- Data for Name: reservations; Type: TABLE DATA; Schema: public; Owner: lionel
--

COPY reservations (id, customer_id, restaurant_id, wants_vegetarian, wants_gluten_free, confirmed_at, created_at, updated_at) FROM stdin;
1	1	1	f	t	2016-06-09 16:27:14.428-07	2016-06-09 16:27:14.428-07	2016-06-09 16:27:14.428-07
\.


--
-- Name: reservations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: lionel
--

SELECT pg_catalog.setval('reservations_id_seq', 1, false);


--
-- Data for Name: restaurants; Type: TABLE DATA; Schema: public; Owner: lionel
--

COPY restaurants (id, name, kind, bio, dollars, opened_at, created_at, updated_at) FROM stdin;
1	Hal's Hot Dawg Stand	American	Hal's is the place for all your burgers and dawg needs. We have shakes galore!	1	1977-04-01 00:00:00-08	2016-06-09 16:27:14.4-07	2016-06-09 16:27:14.4-07
2	McDouglas's Irish Fusion Cafe	Irish/Thai	You can't believe what this amazing Thai Irish pub fusion creates. Trust us, you'll love it.	2	2015-12-31 00:00:00-08	2016-06-09 16:27:14.4-07	2016-06-09 16:27:14.4-07
3	Joe's Burritos	Mexican	Not the best burrito in town, if you want better, try Jose's.	1	1997-08-22 00:00:00-07	2016-06-09 16:27:14.4-07	2016-06-09 16:27:14.4-07
\.


--
-- Name: restaurants_id_seq; Type: SEQUENCE SET; Schema: public; Owner: lionel
--

SELECT pg_catalog.setval('restaurants_id_seq', 1, false);


--
-- Data for Name: reviews; Type: TABLE DATA; Schema: public; Owner: lionel
--

COPY reviews (id, customer_id, restaurant_id, rating, comment, created_at, updated_at) FROM stdin;
\.


--
-- Name: reviews_id_seq; Type: SEQUENCE SET; Schema: public; Owner: lionel
--

SELECT pg_catalog.setval('reviews_id_seq', 1, false);


--
-- Name: customers_pkey; Type: CONSTRAINT; Schema: public; Owner: lionel
--

ALTER TABLE ONLY customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (id);


--
-- Name: dishes_pkey; Type: CONSTRAINT; Schema: public; Owner: lionel
--

ALTER TABLE ONLY dishes
    ADD CONSTRAINT dishes_pkey PRIMARY KEY (id);


--
-- Name: knex_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: lionel
--

ALTER TABLE ONLY knex_migrations
    ADD CONSTRAINT knex_migrations_pkey PRIMARY KEY (id);


--
-- Name: locations_pkey; Type: CONSTRAINT; Schema: public; Owner: lionel
--

ALTER TABLE ONLY locations
    ADD CONSTRAINT locations_pkey PRIMARY KEY (id);


--
-- Name: reservations_pkey; Type: CONSTRAINT; Schema: public; Owner: lionel
--

ALTER TABLE ONLY reservations
    ADD CONSTRAINT reservations_pkey PRIMARY KEY (id);


--
-- Name: restaurants_pkey; Type: CONSTRAINT; Schema: public; Owner: lionel
--

ALTER TABLE ONLY restaurants
    ADD CONSTRAINT restaurants_pkey PRIMARY KEY (id);


--
-- Name: reviews_pkey; Type: CONSTRAINT; Schema: public; Owner: lionel
--

ALTER TABLE ONLY reviews
    ADD CONSTRAINT reviews_pkey PRIMARY KEY (id);


--
-- Name: dishes_restaurant_id_index; Type: INDEX; Schema: public; Owner: lionel
--

CREATE INDEX dishes_restaurant_id_index ON dishes USING btree (restaurant_id);


--
-- Name: locations_restaurant_id_index; Type: INDEX; Schema: public; Owner: lionel
--

CREATE INDEX locations_restaurant_id_index ON locations USING btree (restaurant_id);


--
-- Name: reservations_customer_id_index; Type: INDEX; Schema: public; Owner: lionel
--

CREATE INDEX reservations_customer_id_index ON reservations USING btree (customer_id);


--
-- Name: reservations_restaurant_id_index; Type: INDEX; Schema: public; Owner: lionel
--

CREATE INDEX reservations_restaurant_id_index ON reservations USING btree (restaurant_id);


--
-- Name: reviews_customer_id_index; Type: INDEX; Schema: public; Owner: lionel
--

CREATE INDEX reviews_customer_id_index ON reviews USING btree (customer_id);


--
-- Name: reviews_restaurant_id_index; Type: INDEX; Schema: public; Owner: lionel
--

CREATE INDEX reviews_restaurant_id_index ON reviews USING btree (restaurant_id);


--
-- Name: dishes_restaurant_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: lionel
--

ALTER TABLE ONLY dishes
    ADD CONSTRAINT dishes_restaurant_id_foreign FOREIGN KEY (restaurant_id) REFERENCES restaurants(id);


--
-- Name: locations_restaurant_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: lionel
--

ALTER TABLE ONLY locations
    ADD CONSTRAINT locations_restaurant_id_foreign FOREIGN KEY (restaurant_id) REFERENCES restaurants(id);


--
-- Name: reservations_customer_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: lionel
--

ALTER TABLE ONLY reservations
    ADD CONSTRAINT reservations_customer_id_foreign FOREIGN KEY (customer_id) REFERENCES customers(id);


--
-- Name: reservations_restaurant_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: lionel
--

ALTER TABLE ONLY reservations
    ADD CONSTRAINT reservations_restaurant_id_foreign FOREIGN KEY (restaurant_id) REFERENCES restaurants(id);


--
-- Name: reviews_customer_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: lionel
--

ALTER TABLE ONLY reviews
    ADD CONSTRAINT reviews_customer_id_foreign FOREIGN KEY (customer_id) REFERENCES customers(id);


--
-- Name: reviews_restaurant_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: lionel
--

ALTER TABLE ONLY reviews
    ADD CONSTRAINT reviews_restaurant_id_foreign FOREIGN KEY (restaurant_id) REFERENCES restaurants(id);


--
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

