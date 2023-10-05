# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

Type your initials here to confirm you read the instructions:tc

1. Why would super be used in a Ruby class?

Your answer: In a Ruby class, a super would be used to inhert a instance variable from a parent class/superclass. For example, if you had a class called FavoriteThings and initialized the instance variables of color and food, then decided to create a subclass named Jenn, you could then call on super to extract the values of color and food from the superclass method.


Researched answer: A super is called on when a subclass needs the instance variables from the main class to do a specific method on that wouldn't necessarily be used for the entire class. A super is a inheritence method in Ruby classes, it is used to call on the parent class method from the child class, in other words, it pulls the superclass instance variables from the subclass, in order to retrieve the information already used but in a different way.

2. What is a relational database? Are there other kinds of databases?

Your answer: There are different kinds of databases, although I am not exactly sure what they are called. What I do know is that a relational databases creates tables with columns and rows to organize data. Columns hold the datatypes and rows hold the data entries. For example, a column could be name(string) and a row would hold the 'Jenn' or whatever the name was inside of the row.


Researched answer: A relational database stores and gives access to data thats related to one another. It is a straightforward and easy to read way to display data, thats why its set up as a table with rows and columns. There are many other types of databases, some examples are: non-relational, object-oriented, cloud, Network, etc.


3. What are primary keys? Why purpose does a primary key serve?

Your answer: Primary keys are the unique identifier that the ruby code automatically places for each row of a relational database. The primary key is used to call on data and easier access to the table.


Researched answer: Primary keys are the unique identifier used to identify each row of a table when using Ruby on Rails. The purpose of this ID is to avoid human error, thats why it is automatically and internally generated in Rails and does not need an Active Record created for it. In order to delete, update, restore, and/or add data to a table, the primary key must be present.


4. What are the five HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: The HTTP verbs are: post, puts, gets, patch, delete. The verbs go into CRUD action by post -> create, gets-> read, puts and patch -> update, and delete-> delete.


Researched answer: The HTTP verbs are in correspondence to CRUD actions. These actions being create, read, update, and delete. The HTTP verbs being post, get, put, patch, and delete. Post belongs to create, get belongs to read, put and patch (either can be used) belong to update, and delete belongs to delete.


5. STRETCH: What is a JOIN table in SQL?

Your answer: A JOIN table in SQL is a table that has been combined with another table using association.


Researched answer: A JOIN table in SQL is a table that has multiple connections to different tables. It connects multiple database tables into one connected table by using quieries.


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Model validations: Takes your model and uses it to predict outputs based on your training model data and evaluates its results.


2. Params: is a special hash that allows you to extract values using symobols or strings as the keys.


3. API: stands for Application Programming Interface and is usually how two or more people communicate through responses and requests.



