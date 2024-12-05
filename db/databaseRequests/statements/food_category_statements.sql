CREATE TABLE food_category (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    icon INTEGER NOT NULL,
    background INTEGER NOT NULL
)

INSERT INTO food_category (name, category, icon, background)
VALUES ("Drinks", "Fridge", 4, 1)

SELECT * from food_category

DROP TABLE food_category