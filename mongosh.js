/*Insertar al menos 15 publicaciones nuevas con almenos 2 comentarios por publicación:
Title
Body
Username
Comments
Username
Body*/

db.posts.insertMany([
  {
    title: "Title 1",
    body: "Text1",
    username: "User1",
    comments: [
      { body: "Comment1", username: "Daniel" },
      { body: "Comment2", username: "Daniel" },
    ],
  },
  {
    title: "Title 2",
    body: "Text2",
    username: "User2",
    comments: [
      { body: "Comment1", username: "Daniel" },
      { body: "Comment2", username: "Daniel" },
    ],
  },
  {
    title: "Title 3",
    body: "Text3",
    username: "User3",
    comments: [
      { body: "Comment1", username: "Daniel" },
      { body: "Comment2", username: "Daniel" },
    ],
  },
  {
    title: "Title 4",
    body: "Text4",
    username: "User4",
    comments: [
      { body: "Comment1", username: "Daniel" },
      { body: "Comment2", username: "Daniel" },
    ],
  },
  {
    title: "Title 5",
    body: "Text5",
    username: "User5",
    comments: [
      { body: "Comment1", username: "Daniel" },
      { body: "Comment2", username: "Daniel" },
    ],
  },
  {
    title: "Title 6",
    body: "Text6",
    username: "User6",
    comments: [
      { body: "Comment1", username: "Daniel" },
      { body: "Comment2", username: "Daniel" },
    ],
  },
  {
    title: "Title 7",
    body: "Text7",
    username: "User7",
    comments: [
      { body: "Comment1", username: "Daniel" },
      { body: "Comment2", username: "Daniel" },
    ],
  },
  {
    title: "Title 8",
    body: "Text8",
    username: "User8",
    comments: [
      { body: "Comment1", username: "Daniel" },
      { body: "Comment2", username: "Daniel" },
    ],
  },
  {
    title: "Title 9",
    body: "Text9",
    username: "User9",
    comments: [
      { body: "Comment1", username: "Daniel" },
      { body: "Comment2", username: "Daniel" },
    ],
  },
  {
    title: "Title 10",
    body: "Text10",
    username: "User10",
    comments: [
      { body: "Comment1", username: "Daniel" },
      { body: "Comment2", username: "Daniel" },
    ],
  },
  {
    title: "Title 11",
    body: "Text11",
    username: "User11",
    comments: [
      { body: "Comment1", username: "Daniel" },
      { body: "Comment2", username: "Daniel" },
    ],
  },
  {
    title: "Title 12",
    body: "Text2",
    username: "User12",
    comments: [
      { body: "Comment1", username: "Daniel" },
      { body: "Comment2", username: "Daniel" },
    ],
  },
  {
    title: "Title 13",
    body: "Text13",
    username: "User13",
    comments: [
      { body: "Comment1", username: "Daniel" },
      { body: "Comment2", username: "Daniel" },
    ],
  },
  {
    title: "Title 14",
    body: "Text14",
    username: "User14",
    comments: [
      { body: "Comment1", username: "Daniel" },
      { body: "Comment2", username: "Daniel" },
    ],
  },
  {
    title: "Title 15",
    body: "Text15",
    username: "User15",
    comments: [
      { body: "Comment1", username: "Daniel" },
      { body: "Comment2", username: "Daniel" },
    ],
  },
]);

/*Insertar al menos 10 nuevos usuarios:
Username
Email
Age*/

db.users.insertMany([
  { userName: "Daniel", Email: "user@gmail.com", Age: 10 },
  { userName: "sofia", Email: "user1@gmail.com", Age: 21 },
  { userName: "miguel", Email: "user2@gmail.com", Age: 22 },
  { userName: "alex", Email: "user3@gmail.com", Age: 13 },
  { userName: "Fede", Email: "user4@gmail.com", Age: 15 },
  { userName: "German", Email: "user5@gmail.com", Age: 40 },
  { userName: "Daniela", Email: "user6@gmail.com", Age: 20 },
  { userName: "Sebas", Email: "user7@gmail.com", Age: 30},
  { userName: "Felipe", Email: "user8@gmail.com", Age: 50 },
  { userName: "Xuebo", Email: "user9@gmail.com", Age: 30 },
]);

//1.2.2 ACTUALIZAR DATOS

/*Actualizar publicaciones:
Actualiza todos los campos de una publicación*/
db.posts.updateOne(
  { title: "Title 1" },
  {
    $set: {
      body: "text1Actualizado",
      username: "user1Actualizado",
    },
  }
);

//Cambiar el body de una publicación.
db.posts.updateOne(
  { title: "Title 1" },
  {
    $set: {
      body: "bodyActualizado",
    },
  }
);

/*Actualizar comentarios:

Actualiza el comentario de una publicación.*/
db.posts.updateOne(
  { title: "Title 2" },
  {
    $set: {
      comments: [{ body: "comment1Updated" }],
    },
  }
);

/*Actualizar usuarios:
Actualiza todos los campos de un usuario*/
db.users.updateOne(
  { userName: "Daniel" },
  {
    $set: {
      Email: "updated@gmail.com",
      Age: "updated10",
    },
  }
);

//Cambiar el email de dos usuarios es decir hacer la query dos veces.
db.users.updateOne(
  { userName: "Daniel" },
  {
    $set: {
      Email: "DanielUpdatedAgain@gmail.com",
    },
  }
);

db.users.updateOne(
  { userName: "sofia" },
  {
    $set: {
      Email: "sofiaUpdatedAgain@gmail.com",
    },
  }
);

//Aumenta en 5 años la edad de un usuario
db.users.updateOne({userName:"Daniel"},
  {
    $inc: {
      Age: 5
    }
  }
)

//1.2.3 OBTENER DATOS

//Seleccionar todas las publicaciones
db.posts.find()

//Selecciona las publicaciones que coincidan con el username indicado
db.posts.find({ username: 'User10' })

//Seleccione todos los usuarios con una edad mayor a 20
db.users.find({Age:{$gt:20}})

//Seleccione todos los usuarios con una edad inferior a 23
db.users.find({Age:{$lt:20}})

//Seleccione todos los usuarios que tengan una edad entre 25 y 30 años
db.users.find({ $and:[

    {Age:{ $gt:10 }},{Age:{  $lt:35 }}
    
    ]})


//Muestra los usuarios de edad menor a mayor y viceversa
//# asc
db.users.find().sort({ Age: 1 })

//# desc
db.users.find().sort({ price: -1 })


//Seleccione el número total de usuarios
db.users.find().count()


//Seleccione todas las publicaciones de la siguiente manera: Título de la publicación: "título de las publicaciones"
db.posts.find().forEach((doc)=> {

    print("Title name: " + doc.title)
    
    })
//Selecciona solo 2 usuarios

db.users.find().limit(2)

//Busca por title 2 publicaciones

db.posts.find({ $or:[

    {title :"Title 12"},{title :"Title 13"}
    
    ]})

//1.2.4 BORRAR DATOS

//Elimina a todos los usuarios con una edad mayor a 30

db.users.deleteMany({Age:{$gt:30}})
