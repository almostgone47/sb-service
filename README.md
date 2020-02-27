# Project Name

> 2illow

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

### CRUD

Create: creates a new listing
URL: /listing
Method: POST
Example: app.post('/listings')
Req Body/Params: req.body = {
  listing = {
    "neighborhood_id" bigint NOT NULL,
    "price" money NOT NULL,
    "sqft" int NOT NULL,
    "bed_number" int NOT NULL,
    "bath_number" int NOT NULL,
    "listing_address" TEXT NOT NULL,
    "images" TEXT,
  }
}
Returns: none/status code

Read: retrieves 8 listings
URL: /listing
Mehtod: GET
Example: app.get('/listings') Gets 8 listings by neighborhood id.
Req Body/Params: none
Returns: res.body{
  [
   {listing Object}, 
   {listing Object},
   {listing Object},
   {listing Object}, 
   {listing Object},
   {listing Object},
   {listing Object},
   {listing Object}
  ]
}

Update: updates individual listing using listing id
URL: /listing/:id
Method: UPDATE
Example: app.patch('/listings/:id')
Req Body/Params: req.body = {
  listing = {
    "neighborhood_id" bigint NOT NULL,
    "price" money NOT NULL,
    "sqft" int NOT NULL,
    "bed_number" int NOT NULL,
    "bath_number" int NOT NULL,
    "listing_address" TEXT NOT NULL,
    "images" TEXT,
  }
}
params.id
Returns: none/status code

Destroy: deletes listing from db
URL: /listing/:id
Method: DELETE
Example: app.delete('/listings/:id')
Req Body/Params: params.id
Returns: none/status code

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

### 