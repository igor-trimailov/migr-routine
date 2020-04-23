The goal of this project was to create a custom exercise application for my significant other.

At the moment the exercise list is read from a data.json file in format:

{
  "routines": [
    {
      "id": 1,
      "name": {
        "en_GB": "Routine",
      },
      "description": {
        "en_GB": "Routine description",
      },
      "exercises": [
        {
          "id": 1,
          "name": {
            "en_GB": "Wrist Extension (Right)",
          },
          "image": "wrist_extension.png",
          "image_alt": "Wrist Extension",
          "sound": "wrist_extension.mp3",
          "duration": 30,
          "order": 1
        },
      ],
    },
  ],
},

You can add as manu routines and exercises as you like. In future iterations this information will be fetched from an API
