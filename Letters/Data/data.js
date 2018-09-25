const schema = {
  userid: String,
  data:{
    name: String,
    height: Number,
    profession: String,
    id: Number
  },
};

const data = [
  {
    userid: "user1",
    data:{
      name:"Tim",
      height:178,
      profession:"teacher",
      id:1
    }
    },
  {
    userid: "user2",
    data: {
      name: "suresh",
      height: 160,
      profession: "librarian",
      id: 2
    }
  },
  {
    userid:"user3",
    data:{
      name: "ramesh",
      height: 180,
      profession : "clerk",
      id: 3
    }
  }];

module.exports = {schema:schema,data:data};
