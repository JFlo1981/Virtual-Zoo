const sequelize = require("../config/connection");
const { Video, Category } = require("../models");

// MEDIA DATA GOES HERE
const mediadata = [
  {
    description: "Kitten Rescue Cat Cam",
    path: "https://youtu.be/pvEuYcM0j6M",
    thumbnail: "public/images/hq720.jpg",
    category_id: 1,
  },

  {
    description: "LIVE! Tiny dramatic newborn rescue kittens!",
    path: "https://youtu.be/QOwC0CbtJSs",
    thumbnail: "/public/images/hq720-4.jpg/hq720-1.jpg",
    category_id: 1,
  },

  {
    description: "LIVE 6 Newborn KittenCam 24/7 powered by PAWsitive",
    path: "https://youtu.be/xovlH-HGyn0",
    thumbnail: "public/images/hq720-2.jpg",
    category_id: 1,
  },

  {
    description: "Kitten Cam",
    path: "https://youtu.be/1eRbENqwHEY",
    thumbnail: "public/images/hqdefault.jpg",
    category_id: 1,
  },

  {
    description: "Rescue kitties River and Mr. Otterton need a home!",
    path: "https://youtu.be/MsVohwdHrDA",
    thumbnail: "public/images/hqdefault_live.jpg",
    category_id: 1,
  },

  {
    description: "LIVE STREAM - Kittens",
    path: "https://youtu.be/vXSuof3x_3Q",
    thumbnail: "public/images/hqdefault-1.jpg",
    category_id: 1,
  },

  {
    description: "Bobcat Rehab Intensive Care - Big Cat Rescue",
    path: "https://youtu.be/6VRB2YZdes4",
    thumbnail: "public/images/hqdefault-2.jpg",
    category_id: 1,
  },

  {
    description: "Tiger Lake - Big Cat Rescue",
    path: "https://youtu.be/NVCi9yYwRCY",
    thumbnail: "public/images/hq720-3.jpg",
    category_id: 1,
  },

  {
    description: "CARE Tiger Cub Cam",
    path: "https://youtu.be/_Ghn-1KSlZE",
    thumbnail: "public/images/hqdefault-3.jpg",
    category_id: 1,
  },

  {
    description: "Puppy Playroom at Warrior Canine Connection",
    path: "https://youtu.be/XLwYWCzlfIw",
    thumbnail: "public/images/hqdefault-4.jpg",
    category_id: 2,
  },

  {
    description: "LIVE STREAM Puppy Cam! Labrador puppies at play!",
    path: "https://youtu.be/Fqhc2tjL1n8",
    thumbnail: "public/images/hqdefault-5.jpg",
    category_id: 2,
  },

  {
    description: "Full House Puppy Cam at Warrior Canine Connection",
    path: "https://youtu.be/_nGmnWSzEvM",
    thumbnail: "public/images/hq720-4.jpg",
    category_id: 2,
  },

  {
    description: "International Wolf Center North Camera",
    path: "https://youtu.be/SQfE_-sSdc4",
    thumbnail: "public/images/hq720-5.jpg",
    category_id: 2,
  },

  {
    description: "Best Of Wolf Cam | Playing, Fighting & Howling",
    path: "https://youtu.be/4aqwKf6OteY",
    thumbnail: "public/images/hq720-6.jpg",
    category_id: 2,
  },

  {
    description: "Great Danes - Service Dog Project",
    path: "https://youtu.be/o7C4_TpcNuA",
    thumbnail: "public/images/hq720-7.jpg",
    category_id: 2,
  },

  {
    description: "LIVE STREAM Puppy Cam! ",
    path: "https://youtu.be/Fqhc2tjL1n8",
    thumbnail: "public/images/hqdefault-6.jpg",
    category_id: 2,
  },

  {
    description: "Nursery at Warrior Canine Connection",
    path: "https://youtu.be/G0IBqtO1K28",
    thumbnail: "public/images/hq720-8.jpg",
    category_id: 2,
  },

  {
    description: "ECAD Whelping",
    path: "https://youtu.be/8tjNccpGCTk",
    thumbnail: "public/images/hq720-9.jpg",
    category_id: 2,
  },

  {
    description: "Puppy Whelping Room at Warrior Canine Connection",
    path: "https://youtu.be/HMafZTC8WZ0",
    thumbnail: "public/images/hq720-10.jpg",
    category_id: 2,
  },
];

const seedVideos = () => Video.bulkCreate(mediadata, { individualHooks: true });

module.exports = seedVideos;
