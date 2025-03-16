# Forms

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

## Data.json

```json
[
  {
    "componentType": "form",
    "name": "Application Form",
    "cssClasses": [],
    "cssStyles": {},
    "buttons": [
      {
        "name": "Confirm",
        "type": "confirm",
        "dbAction": "Could be a url to send the form to backend",
        "cssClasses": [],
        "cssStyles": {}
      }
    ],
    "rows": [
      {
        "label": "Full Name",
        "required": true,
        "cssClasses": [],
        "cssStyles": {},
        "children": [
          {
            "componentType": "input",
            "type": "text",
            "typeOfControl": "asControl",
            "modelName": "fullName",
            "placeholder": "Full Name",
            "cssClasses": [],
            "cssStyles": {},
            "errors": [
              {
                "type": "required",
                "text": "The full name field is required"
              },
              {
                "type": "maxlength",
                "validatorValue": 50,
                "text": "The full name should be less than 50 characters"
              }
            ]
          }
        ]
      },
      {
        "label": "Age",
        "required": true,
        "cssClasses": [],
        "cssStyles": {},
        "children": [
          {
            "componentType": "input",
            "type": "number",
            "typeOfControl": "asControl",
            "modelName": "age",
            "placeholder": "Age",
            "cssClasses": [],
            "cssStyles": {
              "width": "70px"
            },
            "errors": [
              {
                "type": "required",
                "text": "The age field is required"
              }
            ]
          }
        ]
      },
      {
        "label": "Marital Status",
        "required": true,
        "cssClasses": [],
        "cssStyles": {},
        "children": [
          {
            "componentType": "select",
            "modelName": "maritalStatus",
            "placeholder": "Marital Status",
            "defaultOption": {},
            "options": [
              {
                "name": "Single",
                "value": "single"
              },
              {
                "name": "Married",
                "value": "married"
              },
              {
                "name": "Divorced",
                "value": "divorced"
              },
              {
                "name": "Widowed",
                "value": "widowed"
              },
              {
                "name": "Separated",
                "value": "separated"
              }
            ],
            "cssClasses": [],
            "cssStyles": {},
            "errors": [
              {
                "type": "required",
                "text": "The marital status field is required"
              }
            ]
          }
        ]
      },
      {
        "label": "Higher education",
        "subtext": "Educational institutions where you studied",
        "cssClasses": ["custom-form-array-container"],
        "cssStyles": {},
        "children": [
          {
            "componentType": "input",
            "type": "text",
            "typeOfControl": "asArray",
            "modelName": "higherEducation",
            "placeholder": "Higher education",
            "buttons": [
              {
                "name": "Add",
                "type": "add",
                "cssClasses": [],
                "cssStyles": {}
              },
              {
                "name": "Remove",
                "type": "remove",
                "cssClasses": [],
                "cssStyles": {}
              }
            ],
            "cssClasses": [],
            "cssStyles": {
              "width": "250px"
            }
          }
        ]
      },
      {
        "label": "Place of birth",
        "cssClasses": [],
        "cssStyles": {},
        "children": [
          {
            "componentType": "select",
            "modelName": "placeOfBirth",
            "placeholder": "Place of birth",
            "defaultOption": {},
            "options": [
              {
                "name": "Russia",
                "value": "ru"
              },
              {
                "name": "Belarus",
                "value": "by"
              },
              {
                "name": "Poland",
                "value": "pl"
              }
            ],
            "cssClasses": [],
            "cssStyles": {}
          }
        ]
      },
      {
        "label": "Skills",
        "subtext": "Mark your skills",
        "cssClasses": ["custom-checkbox-container"],
        "cssStyles": {},
        "children": [
          {
            "componentType": "checkbox",
            "modelName": "сommunication",
            "placeholder": "Communication",
            "cssClasses": [],
            "cssStyles": {}
          },
          {
            "componentType": "checkbox",
            "modelName": "foreignLanguage",
            "placeholder": "Foreign language knowledge",
            "cssClasses": [],
            "cssStyles": {}
          },
          {
            "componentType": "checkbox",
            "modelName": "cooking",
            "placeholder": "Cooking",
            "cssClasses": [],
            "cssStyles": {}
          },
          {
            "componentType": "checkbox",
            "modelName": "obstacleRunning",
            "placeholder": "Obstacle running",
            "cssClasses": [],
            "cssStyles": {}
          },
          {
            "componentType": "checkbox",
            "modelName": "speedReading",
            "placeholder": "Speed reading",
            "cssClasses": [],
            "cssStyles": {}
          },
          {
            "componentType": "checkbox",
            "modelName": "boxing",
            "placeholder": "Boxing",
            "cssClasses": [],
            "cssStyles": {}
          },
          {
            "componentType": "checkbox",
            "modelName": "singing",
            "placeholder": "Singing",
            "cssClasses": [],
            "cssStyles": {}
          },
          {
            "componentType": "checkbox",
            "modelName": "programming",
            "placeholder": "Programming",
            "cssClasses": [],
            "cssStyles": {}
          },
          {
            "componentType": "checkbox",
            "modelName": "driving",
            "placeholder": "Driving",
            "cssClasses": [],
            "cssStyles": {}
          },
          {
            "componentType": "checkbox",
            "action": "all",
            "value": false,
            "placeholder": "Select All",
            "cssClasses": [],
            "cssStyles": {
              "font-weight": "700"
            }
          }
        ]
      }
    ]
  }
]
```
