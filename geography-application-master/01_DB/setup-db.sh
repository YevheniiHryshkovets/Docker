#!/usr/bin/env bash

mongosh mongodb://127.0.0.1:27017/$MONGO_INITDB_DATABASE <<EOF
db.questions.insertMany([{
    "question": "Which planet having all the circumstances for the existence of life?",
    "answers": ["Earth", "Moon", "Sun", "Jupiter"],
    "answer": 0,
    "weight": 1
}, {
    "question": "The age of earth?",
    "answers": ["About 4600 million years.", "About 5600 million years.", "About 80000 million years.", "About 46000 million years."],
    "answer": 0,
    "weight": 1
}, {
    "question": "The man who first assessed the mass of the earth?",
    "answers": ["Dr. Nevil Maskelyne", "Albert Einstein", "Andrei Sakharov", "Sigmund Freud"],
    "answer": 0,
    "weight": 1
}, {
    "question": "Which are the four layers in the outer surface of the earth?",
    "answers": ["Lithosphere, Hydrosphere, Atmosphere, Biosphere.", "Lithosphere, Atmosphere, Biosphere, Hydrosphere.", "Biosphere, Hydrosphere, Lithosphere, Atmosphere", "Biosphere, Atmosphere, Hydrosphere, Lithosphere"],
    "answer": 0,
    "weight": 1
}, {
    "question": "The permeable rock layer which retains water?",
    "answers": ["Aquifer", "Aquifilter", "Aquiphobia", "liquids filter layer"],
    "answer": 0,
    "weight": 1
}, {
    "question": "Which ocean surrounds the North Pole?",
    "answers": ["Arctic Ocean", "Pacific", "Atlantic Ocean", "Southern Ocean"],
    "answer": 0,
    "weight": 1
}, {
    "question": "The average thickness of earth",
    "answers": ["30-35 km", "40-52 km", "20-35 km", "60-65 km"],
    "answer": 0,
    "weight": 1
}, {
    "question": "In which country does edelweiss not grow natively",
    "answers": ["Swaziland", "Ukraine", "Ireland", "Scotland"],
    "answer": 0,
    "weight": 1
}, {
    "question": "What country calls itself Nippon",
    "answers": ["Japan", "England", "Russian", "USA"],
    "answer": 0,
    "weight": 1
}, {
    "question": "What country was known as Rhodesia",
    "answers": ["Zimbabwe", "Kenya", "USA", "South Africa"],
    "answer": 0,
    "weight": 1
}, {
    "question": "Which two countries are joined by the Bridge of No Return",
    "answers": ["North Korea and South Korea", "China and Jappan", "USA and USSR", "Ukraine and Russia"],
    "answer": 0,
    "weight": 1
}, {
    "question": "In what country might you find the Great Fence",
    "answers": ["Australia", "China", "Great Britain", "Iran"],
    "answer": 0,
    "weight": 1
}, {
    "question": "Where was the greatest difference between annual high and low temperatures recorded",
    "answers": ["Russia", "USA", "China", "New Zealand"],
    "answer": 0,
    "weight": 1
}, {
    "question": "Where, as of 2009, did the world’s heaviest annual rainfall on record fall",
    "answers": ["India", "Germany", "Franch", "Kenya"],
    "answer": 0,
    "weight": 1
}, {
    "question": "In which country were bananas first grown",
    "answers": ["India", "China", "Brazil", "Chile"],
    "answer": 0,
    "weight": 1
}]);
db.getCollectionNames();
EOF

