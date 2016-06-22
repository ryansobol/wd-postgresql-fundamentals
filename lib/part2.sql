/* Exercise selectAllRestaurants
Select all columns of all restaurants.
*/

SELECT * FROM restaurants;

/* Exercise selectAllRestaurantNames
Select the names of all the restaurants.
*/

SELECT name FROM restaurants;

/* Exercise selectAllCustomerNames
Select the names of all the restaurants.
*/

SELECT name FROM customers;

/* Exercise selectCustomerById
Select all columns of a single customer with an id of 1.
*/

SELECT * FROM customers WHERE id = 1;

/* Exercise selectLocationById
Select all columns of a single location with an id of 3.
*/

SELECT * FROM locations WHERE id = 3;

/* Exercise selectCountOfAllLocationsByCity
Select the count of all the locations by city.
*/

SELECT COUNT(city) FROM locations;

/* Exercise selectDistinctCountOfAllLocationsByCity
Select the count of all the locations by city.
*/

SELECT COUNT(DISTINCT city) FROM locations;

/* Exercise selectCheapestDish
Select all columns the cheapest dish
*/

SELECT * FROM dishes WHERE cost IN (SELECT MIN(cost) FROM dishes);

/* Exercise updateCustomerName
Update the 'Little baby Tomkins' customer's name to 'Big Tom Tomkins'
*/

UPDATE customers SET name = 'Big Tom Tomkins' WHERE name = 'Little baby Tomkins';

/* Exercise updateLocationById
Update the id = 3 location's street to '555 No Way' and city to 'Olympia'
*/

UPDATE locations SET street = '555 No Way', city = 'Olympia' WHERE id = 3;
