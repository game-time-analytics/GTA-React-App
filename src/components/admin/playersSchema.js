{
  "title": "players",
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "position": {
      "type": "string",
      "enum": [
        "P",
        "C",
        "1B",
        "2B",
        "3B",
        "SS",
        "LF",
        "RF",
        "CF"
      ]
    },
    "throws": {
      "type": "string",
      "enum": [
        "R",
        "L"
      ]
    },
    "bats": {
      "type": "string",
      "enum": [
        "R",
        "L"
      ]
    },
    "team": {
      "type": "string"
    },
    "_id": {
      "type": "string",
      "pattern": "^[0-9a-fA-F]{24}$"
    },
    "__v": {
      "type": "number"
    }
  },
  "required": [
    "name",
    "position",
    "throws",
    "bats",
    "team"
  ]
}