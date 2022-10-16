// mongodb   mongoose
// const mongodb = require("mongodb")
// const MongoClient = mongodb.MongoClient
// const abc = require("mongodb").MongoClient // {MongoClient, ObjectId, ......}
const { MongoClient, ObjectId} = require('mongodb')
const dbURL = "mongodb://127.0.0.1:27017"  // localhost:27017
const dbName = "s7G23"

const data =  [
    {
    id: 1,
    todo: "Do something nice for someone I care about",
    completed: true,
    userId: 26
    },
    {
    id: 2,
    todo: "Memorize the fifty states and their capitals",
    completed: false,
    userId: 48
    },
    {
    id: 3,
    todo: "Watch a classic movie",
    completed: false,
    userId: 4
    },
    {
    id: 4,
    todo: "Contribute code or a monetary donation to an open-source software project",
    completed: false,
    userId: 48
    },
    {
    id: 5,
    todo: "Solve a Rubik's cube",
    completed: false,
    userId: 31
    },
    {
    id: 6,
    todo: "Bake pastries for me and neighbor",
    completed: false,
    userId: 39
    },
    {
    id: 7,
    todo: "Go see a Broadway production",
    completed: false,
    userId: 32
    },
    {
    id: 8,
    todo: "Write a thank you letter to an influential person in my life",
    completed: true,
    userId: 13
    },
    {
    id: 9,
    todo: "Invite some friends over for a game night",
    completed: false,
    userId: 47
    },
    {
    id: 10,
    todo: "Have a football scrimmage with some friends",
    completed: false,
    userId: 19
    },
    {
    id: 11,
    todo: "Text a friend I haven't talked to in a long time",
    completed: false,
    userId: 39
    },
    {
    id: 12,
    todo: "Organize pantry",
    completed: true,
    userId: 39
    },
    {
    id: 13,
    todo: "Buy a new house decoration",
    completed: false,
    userId: 16
    },
    {
    id: 14,
    todo: "Plan a vacation I've always wanted to take",
    completed: false,
    userId: 28
    },
    {
    id: 15,
    todo: "Clean out car",
    completed: false,
    userId: 33
    },
    {
    id: 16,
    todo: "Draw and color a Mandala",
    completed: true,
    userId: 24
    },
    {
    id: 17,
    todo: "Create a cookbook with favorite recipes",
    completed: false,
    userId: 1
    },
    {
    id: 18,
    todo: "Bake a pie with some friends",
    completed: false,
    userId: 1
    },
    {
    id: 19,
    todo: "Create a compost pile",
    completed: true,
    userId: 5
    },
    {
    id: 20,
    todo: "Take a hike at a local park",
    completed: true,
    userId: 43
    },
    {
    id: 21,
    todo: "Take a class at local community center that interests you",
    completed: false,
    userId: 22
    },
    {
    id: 22,
    todo: "Research a topic interested in",
    completed: false,
    userId: 4
    },
    {
    id: 23,
    todo: "Plan a trip to another country",
    completed: true,
    userId: 37
    },
    {
    id: 24,
    todo: "Improve touch typing",
    completed: false,
    userId: 45
    },
    {
    id: 25,
    todo: "Learn Express.js",
    completed: false,
    userId: 49
    },
    {
    id: 26,
    todo: "Learn calligraphy",
    completed: false,
    userId: 50
    },
    {
    id: 27,
    todo: "Have a photo session with some friends",
    completed: false,
    userId: 14
    },
    {
    id: 28,
    todo: "Go to the gym",
    completed: false,
    userId: 15
    },
    {
    id: 29,
    todo: "Make own LEGO creation",
    completed: false,
    userId: 30
    },
    {
    id: 30,
    todo: "Take cat on a walk",
    completed: false,
    userId: 15
    }
    ]
MongoClient.connect(dbURL, (error, client)=>{
    if(error) return console.log(error.message)
    const db = client.db(dbName)
    
    //insert single data
    // db.collection("users")
    // .insertOne({name:"marwa"})
    // .then(res=>{
    //     console.log(res)
    //     client.close()
    // })
    // .catch(e=> console.log(e.message))
    
    //insert many
    // db.collection("todo")
    // .insertMany(data)
    // .then(res=>{
    //     console.log(res)
    //     client.close()
    // })
    // .catch(e=>console.log(e.message))

    //get All
    // db.collection("todo")
    // .find({completed:true, userId:43})
    // .toArray((e, res)=>{
    //     if(e) return console.log(e)
    //     console.log(res)
    //     client.close()
    // })

    //get single
    db.collection("todo")
    .findOne({_id:new ObjectId("63455e50c0107f2e35b82e3d")})
    .then(res=>{
        console.log(res)
        client.close()
    })
})
