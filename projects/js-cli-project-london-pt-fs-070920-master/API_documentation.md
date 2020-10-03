# API Documentation

This API is using a json file to store the data locally. It's based on the 4 CRUD actions: Create, Read, Update, Destroy.

All four API functions take a `key` as the first parameter.

## Create

```javascript
create(key, data);
```

Use the create function to add _new_ data to your database.

### Parameters

`key`

A string which represents the resource being created.

`data`

An object which represents one of the resources being created.

### Return value

The `data` object with an auto-incremented ID.

### Example

```javascript
create("books", { title: "The Da Vinci Code" });
```

## Read

```javascript
read(key[, id]);
```

Use the read function to access data in your database.

### Parameters

`key`

A string which represents the resource being created.

`id - optional`

An optional ID. If no ID is supplied, the entire array of objects is returned. If an ID is supplied, only the object with that ID is returned.

### Return value

The array of data at that resource _or_ the single object with the supplied ID.

### Examples

```javascript
read("books");
```

```javascript
read("books", 2);
```

## Update

```javascript
create(key, data);
```

Use the update function to update existing data in your database.

### Parameters

`key`

A string which represents the resource being created.

`data`

An object which represents the resource being updated.

### Return value

The updated `data` object.

### Example

```javascript
const book = read("books", 1);
book.title = "Harry Potter";
update("books", book);
```

## Destroy

```javascript
destroy(key, id);
```

Use the destroy function to delete some data in your database.

### Parameters

`key`

A string which represents the resource being created.

`id`

An ID of an object in the database.

### Return value

The new array without the object with the supplied ID.

### Example

```javascript
destroy("books", 1);
```
