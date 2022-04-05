const sequelize = require("../config/connection");
const { Video, Category } = require("../models");

// MEDIA DATA GOES HERE
const mediadata = [
  {
    description: "Kitten Rescue Cat Cam",
    path: "https://youtube.com/embed/pvEuYcM0j6M",
    thumbnail: "../images/hq720.jpg",
    category_id: 1,
  },

  {
    description: "LIVE! Tiny dramatic newborn rescue kittens!",
    path: "https://youtube.com/embed/QOwC0CbtJSs",
    thumbnail: "../images/hq720-4.jpg/hq720-1.jpg",
    category_id: 1,
  },

  {
    description: "LIVE 6 Newborn KittenCam 24/7 powered by PAWsitive",
    path: "https://youtube.com/embed/xovlH-HGyn0",
    thumbnail: "../images/hq720-2.jpg",
    category_id: 1,
  },

  {
    description: "Kitten Cam",
    path: "https://youtube.com/embed/1eRbENqwHEY",
    thumbnail: "../images/hqdefault.jpg",
    category_id: 1,
  },

  {
    description: "Rescue kitties River and Mr. Otterton need a home!",
    path: "https://youtube.com/embed/MsVohwdHrDA",
    thumbnail: "../images/hqdefault_live.jpg",
    category_id: 1,
  },

  {
    description: "LIVE STREAM - Kittens",
    path: "https://youtube.com/embed/vXSuof3x_3Q",
    thumbnail: "../images/hqdefault-1.jpg",
    category_id: 1,
  },

  {
    description: "Bobcat Rehab Intensive Care - Big Cat Rescue",
    path: "https://youtube.com/embed/6VRB2YZdes4",
    thumbnail: "../images/hqdefault-2.jpg",
    category_id: 1,
  },

  {
    description: "Tiger Lake - Big Cat Rescue",
    path: "https://youtube.com/embed/NVCi9yYwRCY",
    thumbnail: "../images/hq720-3.jpg",
    category_id: 1,
  },

  {
    description: "CARE Tiger Cub Cam",
    path: "https://youtube.com/embed/_Ghn-1KSlZE",
    thumbnail: "../images/hqdefault-3.jpg",
    category_id: 1,
  },

  {
    description: "Puppy Playroom at Warrior Canine Connection",
    path: "https://youtube.com/embed/XLwYWCzlfIw",
    thumbnail: "../images/hqdefault-4.jpg",
    category_id: 2,
  },

  {
    description: "LIVE STREAM Puppy Cam! Labrador puppies at play!",
    path: "https://youtube.com/embed/Fqhc2tjL1n8",
    thumbnail: "../images/hqdefault-5.jpg",
    category_id: 2,
  },

  {
    description: "Full House Puppy Cam at Warrior Canine Connection",
    path: "https://youtube.com/embed/_nGmnWSzEvM",
    thumbnail: "../images/hq720-4.jpg",
    category_id: 2,
  },

  {
    description: "International Wolf Center North Camera",
    path: "https://youtube.com/embed/SQfE_-sSdc4",
    thumbnail: "../images/hq720-5.jpg",
    category_id: 2,
  },

  {
    description: "Best Of Wolf Cam | Playing, Fighting & Howling",
    path: "https://youtube.com/embed/4aqwKf6OteY",
    thumbnail: "../images/hq720-6.jpg",
    category_id: 2,
  },

  {
    description: "Great Danes - Service Dog Project",
    path: "https://youtube.com/embed/o7C4_TpcNuA",
    thumbnail: "../images/hq720-7.jpg",
    category_id: 2,
  },

  {
    description: "LIVE STREAM Puppy Cam! ",
    path: "https://youtube.com/embed/Fqhc2tjL1n8",
    thumbnail: "../images/hqdefault-6.jpg",
    category_id: 2,
  },

  {
    description: "Nursery at Warrior Canine Connection",
    path: "https://youtube.com/embed/G0IBqtO1K28",
    thumbnail: "../images/hq720-8.jpg",
    category_id: 2,
  },

  {
    description: "ECAD Whelping",
    path: "https://youtube.com/embed/8tjNccpGCTk",
    thumbnail: "../images/hq720-9.jpg",
    category_id: 2,
  },

  {
    description: "Puppy Whelping Room at Warrior Canine Connection",
    path: "https://youtube.com/embed/HMafZTC8WZ0",
    thumbnail: "../images/hq720-10.jpg",
    category_id: 2,
  },
];

const seedVideos = () => Video.bulkCreate(mediadata, { individualHooks: true });

module.exports = seedVideos;
