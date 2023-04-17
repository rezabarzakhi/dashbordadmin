let xAxisData = [
  {
    name: "Jan",
    sale: 112_000,
  },
  {
    name: "Feb",
    sale: 152_000,
  },
  {
    name: "Mar",
    sale: 212_000,
  },
  {
    name: "Apr",
    sale: 182_000,
  },
  {
    name: "May",
    sale: 210_000,
  },
  {
    name: "Jun",
    sale: 162_000,
  },
  {
    name: "July",
    sale: 242_000,
  },
  {
    name: "Aug",
    sale: 152_000,
  },
  {
    name: "Sep",
    sale: 132_000,
  },
  {
    name: "Oct",
    sale: 185_000,
  },
  {
    name: "Nov",
    sale: 190_000,
  },
  {
    name: "Dec",
    sale: 230_000,
  },
];

const newMembers = [
  { id: 1, username: "reza barzakhi", title: "Web DEV", img: "./images/adminpic.jpg" },
  { id: 2, username: "ali borji", title: "Teacher", img: "./images/adminpic.jpg" },
  { id: 3, username: "maryam sp", title: "designer", img: "./images/adminpic.jpg" },
  { id: 4, username: "yoones sp", title: "softwer ", img: "./images/adminpic.jpg" },
];

const transActions = [
  { id: 1, customer: "Reza Barzakhi", date: "12 Jun 2023", status: "Declined", img: "./images/adminpic.jpg" , amount : "$223.5" },
  { id: 2, customer: "maryam Sp", date: "1 Feb 2023", status: "Approved", img: "./images/adminpic.jpg"  , amount : "$123.5"},
  { id: 3, customer: "yoones Sp", date: "1 Sep 2023", status: "Declined", img: "./images/adminpic.jpg"  , amount : "$256.5"},
  { id: 4, customer: "Ali Borji", date: "22 May 2023", status: "Pending", img: "./images/adminpic.jpg"  , amount : "$122.99"},
];

const userRows = [
  {
    id :1 ,
    username : "Reza Barzakhi",
    avatar : "./images/adminpic.jpg" , 
    status : "active",
    transaction : "245.55",
    email : "exampel@gmail.com"
  },
  {
    id :2 ,
    username : "Mary sp",
    avatar : "./images/adminpic.jpg" , 
    status : "non-active",
    transaction : "125.5",
    email : "exampel@gmail.com"
  },
  {
    id :3 ,
    username : "Yoones Sp",
    avatar : "./images/adminpic.jpg" , 
    status : "active",
    transaction : "89.0",
    email : "exampel@gmail.com"
  },
  {
    id :4 ,
    username : "Ali Borji",
    avatar : "./images/adminpic.jpg" , 
    status : "active",
    transaction : "358.5",
    email : "exampel@gmail.com"
  },
  {
    id :5 ,
    username : "ahmad bar",
    avatar : "./images/adminpic.jpg" , 
    status : "active",
    transaction : "558.5",
    email : "exampel@gmail.com"
  },
]

const products =[
  {
    id : 1,
    title : "Asus",
    avatar : "images/asus.jpeg",
    price : 980
  },
  {
    id : 2,
    title : "Hp",
    avatar : "images/hp.jpg",
    price : 750
  },
  {
    id : 3,
    title : "Acer",
    avatar : "images/acer.jpg",
    price : 800
  },
  {
    id : 4,
    title : "Dell",
    avatar : "images/dell.jpg",
    price : 1199
  },
]

const productData = [
  {
    name : "Jan",
    sale : 4000,
  },
  {
    name : "Feb",
    sale : 2000,
  },
  {
    name : "Mar",
    sale : 5000,
  },
]

export { xAxisData, newMembers, transActions, userRows, products, productData };
