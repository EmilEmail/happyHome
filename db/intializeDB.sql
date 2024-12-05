CREATE TABLE food_categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    label TEXT NOT NULL,
    icon TEXT NOT NULL
);

CREATE TABLE food_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    amount INTEGER,
    expired TEXT NOT NULL,
    category TEXT NOT NULL
);

INSERT INTO food_categories (name, label, icon)
VALUES ("veganFood", "Vegankött", "/svg/veganfood.svg");


INSERT INTO food_items (name, amount, expired, category )
VALUES ("milk", 6, "2025-07-11", "veganFood");

SELECT * FROM food_categories;
SELECT * FROM food_items;




