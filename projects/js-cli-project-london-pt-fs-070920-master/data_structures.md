# Possible data structure for suggested topics

Reddit

```json
{
  "posts": [
    {
      "id": 1,
      "title": "Check out this CLI!",
      "content": "https://github.com/",
      "upvotes": 245,
      "downvotes": 18,
      "comments": ["Looks cool", "Have an upvote"]
    }
  ]
}
```

Movie listings

```json
{
  "movies": [
    {
      "id": 1,
      "title": "Jurassic Park",
      "ageRating": "12",
      "duration": 120,
      "times": ["12:00", "14:20", "16:40", "19:00", "21:20"],
      "seating": {
        "rows": 16,
        "seats": 25
      },
      "ticketsSold": [
        {
          "time": "14:20",
          "seat": "B20"
        },
        {
          "time": "14:20",
          "seat": "B21"
        }
      ]
    }
  ]
}
```

Recipe organiser

```json
{
  "recpies": [
    {
      "id": 1,
      "name": "Margherita Pizza",
      "tags": ["Italian", "Vegetarian", "Bread"],
      "ingredients": [
        "500g flour",
        "325g lukewarm water",
        "5g yeast",
        "10g salt",
        "400g skinned, crushed San Marzano tomatoes",
        "250g drained, fresh mozzarella",
        "Olive oil"
      ],
      "method": [
        "Mix the flour, water, yeast and salt to form a dough",
        "Knead the dough for 5 minutes, then set aside for at least an hour",
        "Heat your oven to the highest setting",
        "Split the dough into 6 portions, roll into neat balls and leave to rest for 15 minutes",
        "Spread a ball of dough onto a floured countertop, top with 2 large tablespoons of tomatoes, some mozzarella and a drizzle of olive oil",
        "Bake the pizza in the oven for 5-10 minutes, depending on your oven"
      ]
    }
  ]
}
```
