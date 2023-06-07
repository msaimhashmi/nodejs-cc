----------- MongoDB & Mongoose -------------

SQL vs NoSQL
- SQL has tables, columns, and rows.
- NoSQL has collections and documents.

Collection is a bit like tables in SQL.
Document is like a record in SQL.

Mongoose
- mongoose is an ODM (Object document mapping) library.
- mongoose wraps the MongoDB API and provides a much easier way to connect to and communicate with the database.
- connect and communicate with the database by allowing us to create simple data models which have database query methods to create, read, update, and delete database documents

Schema & Models
- First, we create a db structure by using schema. Schema defines the structure of a type of data/document and its properties & property types.
- Next, we create a model based on that particular schema. Models allow us to communicate with the database collections.