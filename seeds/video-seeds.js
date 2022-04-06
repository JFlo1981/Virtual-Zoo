const sequelize = require("../config/connection");
const { Video, Category } = require("../models");

// MEDIA DATA GOES HERE
const mediadata = [
  {
    description: "Kitten Rescue Cat Cam",
    path: "https://www.youtube.com/embed/pvEuYcM0j6M",
    thumbnail: "../images/hq720.jpg",
    category_id: 1,
  },
  {
    description: "LIVE! Tiny dramatic newborn rescue kittens!",
    path: "https://www.youtube.com/embed/QOwC0CbtJSs",
    thumbnail: "../images/hq720-1.jpg",
    category_id: 1,
  },
  {
    description: "LIVE 6 Newborn KittenCam 24/7 powered by PAWsitive",
    path: "https://www.youtube.com/embed/xovlH-HGyn0",
    thumbnail: "../images/hq720-2.jpg",
    category_id: 1,
  },
  {
    description: "Kitten Cam",
    path: "https://www.youtube.com/embed/1eRbENqwHEY",
    thumbnail: "../images/hqdefault.jpg",
    category_id: 1,
  },
  {
    description: "Rescue kitties River and Mr. Otterton need a home!",
    path: "https://www.youtube.com/embed/MsVohwdHrDA",
    thumbnail: "../images/hqdefault_live.jpg",
    category_id: 1,
  },
  {
    description: "LIVE STREAM - Kittens",
    path: "https://www.youtube.com/embed/vXSuof3x_3Q",
    thumbnail: "../images/hqdefault-1.jpg",
    category_id: 1,
  },
  {
    description: "Bobcat Rehab Intensive Care - Big Cat Rescue",
    path: "https://www.youtube.com/embed/6VRB2YZdes4",
    thumbnail: "../images/hqdefault-2.jpg",
    category_id: 1,
  },
  {
    description: "Tiger Lake - Big Cat Rescue",
    path: "https://www.youtube.com/embed/NVCi9yYwRCY",
    thumbnail: "../images/hq720-3.jpg",
    category_id: 1,
  },
  {
    description: "CARE Tiger Cub Cam",
    path: "https://www.youtube.com/embed/_Ghn-1KSlZE",
    thumbnail: "../images/hqdefault-3.jpg",
    category_id: 1,
  },
  {
    description: "Puppy Playroom at Warrior Canine Connection",
    path: "https://www.youtube.com/embed/XLwYWCzlfIw",
    thumbnail: "../images/hqdefault-4.jpg",
    category_id: 2,
  },
  {
    description: "LIVE STREAM Puppy Cam! Labrador puppies at play!",
    path: "https://www.youtube.com/embed/Fqhc2tjL1n8",
    thumbnail: "../images/hqdefault-5.jpg",
    category_id: 2,
  },
  {
    description: "Full House Puppy Cam at Warrior Canine Connection",
    path: "https://www.youtube.com/embed/_nGmnWSzEvM",
    thumbnail: "../images/hq720-4.jpg",
    category_id: 2,
  },
  {
    description: "International Wolf Center North Camera",
    path: "https://www.youtube.com/embed/SQfE_-sSdc4",
    thumbnail: "../images/hq720-5.jpg",
    category_id: 2,
  },
  {
    description: "Best Of Wolf Cam | Playing, Fighting & Howling",
    path: "https://www.youtube.com/embed/4aqwKf6OteY",
    thumbnail: "../images/hq720-6.jpg",
    category_id: 2,
  },
  {
    description: "Great Danes - Service Dog Project",
    path: "https://www.youtube.com/embed/o7C4_TpcNuA",
    thumbnail: "../images/hq720-7.jpg",
    category_id: 2,
  },
  {
    description: "LIVE STREAM Puppy Cam! ",
    path: "https://www.youtube.com/embed/Fqhc2tjL1n8",
    thumbnail: "../images/hqdefault-6.jpg",
    category_id: 2,
  },
  {
    description: "Nursery at Warrior Canine Connection",
    path: "https://www.youtube.com/embed/G0IBqtO1K28",
    thumbnail: "../images/hq720-8.jpg",
    category_id: 2,
  },
  {
    description: "ECAD Whelping",
    path: "https://www.youtube.com/embed/8tjNccpGCTk",
    thumbnail: "../images/hq720-9.jpg",
    category_id: 2,
  },
  {
    description: "Puppy Whelping Room at Warrior Canine Connection",
    path: "https://www.youtube.com/embed/HMafZTC8WZ0",
    thumbnail: "../images/hq720-10.jpg",
    category_id: 2,
  },
  {
    description: "Live Jelly Cam - Monterey Bay Aquarium",
    path: "https://www.youtube.com/embed/fb8dk9w3fnQ",
    thumbnail: "../images/hq720-11.jpg",
    category_id: 3,
  },
  {
    description: "LIVE CORAL REEF AQUARIUM",
    path: "https://www.youtube.com/embed/2ltUlpdAw-I",
    thumbnail: "../images/hq720-12.jpg",
    category_id: 3,
  },
  {
    description: "Live Shark Cam - Monterey Bay Aquarium",
    path: "https://www.youtube.com/embed/K279u4daI-k",
    thumbnail: "../images/hq720-13.jpg",
    category_id: 3,
  },
  {
    description: "KC Zoo Penguin Cam 4K",
    path: "https://www.youtube.com/embed/JJqXeRFsLjE",
    thumbnail: "../images/hq720-14.jpg",
    category_id: 3,
  },
  {
    description: "Tropical Reef Camera",
    path: "https://www.youtube.com/embed/F109TZt3nRc",
    thumbnail: "../images/hq720-15.jpg",
    category_id: 3,
  },
  {
    description: "Relaxing HD REAL Aquarium - Georgia Aquarium",
    path: "https://www.youtube.com/embed/zJ7hUvU-d2Q",
    thumbnail: "../images/hq720-16.jpg",
    category_id: 3,
  },
  {
    description: "Live Moon Jelly Cam - Monterey Bay Aquarium",
    path: "https://www.youtube.com/embed/eecw2ImHWlM",
    thumbnail: "../images/hq720-17.jpg",
    category_id: 3,
  },
  {
    description: "Blue Cavern",
    path: "https://www.youtube.com/embed/ogMTmdbYaPs",
    thumbnail: "../images/hq720-18.jpg",
    category_id: 3,
  },
  {
    description: "Monterey Bay Aquarium Sea Otter Cam",
    path: "https://www.youtube.com/embed/seIooitd85w",
    thumbnail: "../images/hq720-19.jpg",
    category_id: 3,
  },
  {
    description: "Vancouver Jellyfish Aquarium in 4K",
    path: "https://www.youtube.com/embed/b3B1Jh9Xrow",
    thumbnail: "../images/hq720-20.jpg",
    category_id: 3,
  },
  {
    description: "Great Danes Indoor Puppy Room",
    path: "https://www.youtube.com/embed/SxhvPOvWz9w",
    thumbnail: "../images/hq720-39.jpg",
    category_id: 4,
  },
  {
    description: "Africam Tembe Elephant Park",
    path: "https://www.youtube.com/embed/48MFrf5ADp8",
    thumbnail: "../images/hq720-37.jpg",
    category_id: 4,
  },
  {
    description: "LIVE Bunny Cam! Baby Bunnies Playing",
    path: "https://www.youtube.com/embed/f_b_MtB2tws",
    thumbnail: "../images/hq720-36.jpg",
    category_id: 4,
  },
  {
    description: "West End Bald Eagle Cam",
    path: "https://www.youtube.com/embed/RmmAzrAkKqI",
    thumbnail: "../images/hq720-35.jpg",
    category_id: 4,
  },
  {
    description: "Lion Cubs Play With Spy Cam",
    path: "https://www.youtube.com/embed/8sqQqnEryvA",
    thumbnail: "../images/hq720-34.jpg",
    category_id: 4,
  },
  {
    description: "Sloth TV",
    path: "https://www.youtube.com/embed/kQseWZfEuak",
    thumbnail: "../images/hq720-33.jpg",
    category_id: 4,
  },
  {
    description: "Panda 24/7 HD Live At Chengdu Panda Base",
    path: "https://www.youtube.com/embed/ogpqmb1j5Jw",
    thumbnail: "../images/hq720-31.jpg",
    category_id: 4,
  },
  {
    description: "Amur Tiger Cub Make First Public Appearance",
    path: "https://www.youtube.com/embed/P2bAa-qdDHI",
    thumbnail: "../images/hq720-29.jpg",
    category_id: 4,
  },
  {
    description: "CARE Tiger Cub Cam ",
    path: "https://www.youtube.com/embed/_Ghn-1KSlZE",
    thumbnail: "../images/hqdefault-11.jpg",
    category_id: 4,
  },
  {
    description: "Kitten Cabana - Big Cat Rescue",
    path: "https://www.youtube.com/embed/8chd0qHhMWQ",
    thumbnail: "../images/hq720-28.jpg",
    category_id: 4,
  },
  {
    description: "Kitten Rescue - Baby Kittens Cam ",
    path: "https://www.youtube.com/embed/M5huFQWHyVI",
    thumbnail: "../images/hqdefault-10.jpg",
    category_id: 4,
  },
  {
    description: "Tiny dramatic newborn rescue kittens",
    path: "https://www.youtube.com/embed/QOwC0CbtJSs",
    thumbnail: "../images/hq720-27.jpg",
    category_id: 4,
  },
  {
    description: "Kitten Rescue Cat Cam",
    path: "https://www.youtube.com/embed/9Iup70E0Ig0",
    thumbnail: "../images/hq720-26.jpg",
    category_id: 4,
  },
  {
    description: "GRACE Gorilla Livestream",
    path: "https://www.youtube.com/embed/672cUSe69J0",
    thumbnail: "../images/hqdefault-9.jpg",
    category_id: 4,
  },
  {
    description: "Big Bear Bald Eagle Live Nest Cam",
    path: "https://www.youtube.com/embed/B4-L2nfGcuE",
    thumbnail: "../images/hq720-25.jpg",
    category_id: 4,
  },
  {
    description: "Cute Baby Chicks Chirping",
    path: "https://www.youtube.com/embed/_K96qC0TzyE",
    thumbnail: "../images/hq720-24.jpg",
    category_id: 4,
  },
  {
    description: "ECAD Whelping",
    path: "https://www.youtube.com/embed/8tjNccpGCTk",
    thumbnail: "../images/hq720-23.jpg",
    category_id: 4,
  },
  {
    description: "Nursery at Warrior Canine Connection",
    path: "https://www.youtube.com/embed/G0IBqtO1K28",
    thumbnail: "../images/hq720-22.jpg",
    category_id: 4,
  },
  {
    description: "LIVE STREAM Puppy Cam",
    path: "https://www.youtube.com/embed/Fqhc2tjL1n8",
    thumbnail: "../images/hqdefault-7.jpg",
    category_id: 4,
  },
  {
    description: "Bulldog Puppy Watch - Day 69",
    path: "https://www.youtube.com/embed/sNvgGp_6_CU",
    thumbnail: "../images/hq720-21.jpg",
    category_id: 4,
  },
  {
    description: "Kentucky Equine Adoption Center",
    path: "https://www.youtube.com/embed/AohUh4Wx2ps",
    thumbnail: "../images/hq720-40.jpg",
    category_id: 5,
  },
  {
    description: "Hoback River @ Spotted Horse Ranch ",
    path: "https://www.youtube.com/embed/PHUxUxqwsNU",
    thumbnail: "../images/hq720-44.jpg",
    category_id: 5,
  },
  {
    description: "Mini Horse Live Cam",
    path: "https://www.youtube.com/embed/4Nid2Ud4Uj4",
    thumbnail: "../images/hq720-43.jpg",
    category_id: 5,
  },
  {
    description: "Donkey Hill - Service Dog Project ",
    path: "https://www.youtube.com/embed/FUkxWre2yRU",
    thumbnail: "../images/hq720-45.jpg",
    category_id: 5,
  },
  {
    description: "Zebra LIVE | Animal Adventure Park Zebra Cam",
    path: "https://www.youtube.com/embed/gd7ik7yNppQ",
    thumbnail: "../images/hq720-46.jpg",
    category_id: 5,
  },
  {
    description: "Zebra Cam",
    path: "https://www.youtube.com/embed/C0wKbSPi_6Y",
    thumbnail: "../images/hq720-47.jpg",
    category_id: 5,
  },
  {
    description: "Sheep Barn Cam at Farm Sanctuary",
    path: "https://www.youtube.com/embed/tPdKmQyh6W8",
    thumbnail: "../images/hq720-48.jpg",
    category_id: 5,
  },
  {
    description: "LIVE Baby Goats Playing OUTSIDE",
    path: "https://www.youtube.com/embed/ffx95_CvhGs",
    thumbnail: "../images/hq720-49.jpg",
    category_id: 5,
  },
  {
    description: "Baby Goat Cam Live",
    path: "https://www.youtube.com/embed/MLjUKQeNAvw",
    thumbnail: "../images/hq720-50.jpg",
    category_id: 5,
  },
  {
    description: "Johari & Oliver Giraffe Cam",
    path: "https://www.youtube.com/embed/xYPUtLAlzH8",
    thumbnail: "../images/hq720-51.jpg",
    category_id: 5,
  },
  {
    description: "Live Cam Giraffe Birth at The Greenville Zoo",
    path: "https://www.youtube.com/embed/OAhMrAfBwH8",
    thumbnail: "../images/hq720-52.jpg",
    category_id: 5,
  },
  {
    description: "NEFL Cam 1 - Live Bald Eagle Cam",
    path: "https://www.youtube.com/embed/SrKkGqkQG6M",
    thumbnail: "../images/hq720-53.jpg",
    category_id: 6,
  },
  {
    description: "West End Bald Eagle Cam",
    path: "https://www.youtube.com/embed/RmmAzrAkKqI",
    thumbnail: "../images/hq720-54.jpg",
    category_id: 6,
  },
  {
    description: "Decorah Eagles - North Nest ",
    path: "https://www.youtube.com/embed/eTAsANPVqB8",
    thumbnail: "../images/hq720-55.jpg",
    category_id: 6,
  },
  {
    description: "LIVE [4K] Backyard Bird Feeder Camera",
    path: "https://www.youtube.com/embed/MtGUTs_HgcE",
    thumbnail: "../images/hq720-56.jpg",
    category_id: 6,
  },
  {
    description: "LIVE Great Horned Owls Nesting Near Savannah, GA",
    path: "https://www.youtube.com/embed/7NFSAV15gpc",
    thumbnail: "../images/hq720-57.jpg",
    category_id: 6,
  },
  {
    description: "Barred Owls LIVE",
    path: "https://www.youtube.com/embed/nE-qjSdc5NY",
    thumbnail: "../images/hq720-58.jpg",
    category_id: 6,
  },
  {
    description: "Live Hummingbird Feeder Cam",
    path: "https://www.youtube.com/embed/pXe8MpU7uzk",
    thumbnail: "../images/hq720-59.jpg",
    category_id: 6,
  },
  {
    description: "LIVE Bird Feeder Cam (4K) Gettysburg PA",
    path: "https://www.youtube.com/embed/2uabwdYMzVk",
    thumbnail: "../images/hq720-60.jpg",
    category_id: 6,
  },
  {
    description:
      "LIVE HD - Hornbill, Wood hoopoes, Coucal, Loeries, Bushbaby, Genet, Fruit Bat and more",
    path: "https://www.youtube.com/embed/ODmAV8oHFhg",
    thumbnail: "../images/hqdefault-12.jpg",
    category_id: 6,
  },
  {
    description: "Turkey Barn at Farm Sanctuary ",
    path: "https://www.youtube.com/embed/MFy7_uP45S4",
    thumbnail: "../images/hq720-61.jpg",
    category_id: 6,
  },
  {
    description: "Ely Cathedral Peregrine Falcon webcam now live!",
    path: "https://www.youtube.com/embed/Ahj65jNL5ac",
    thumbnail: "../images/hq720-62.jpg",
    category_id: 6,
  },
  {
    description: "Hellgate Ospreys Nest Cam",
    path: "https://www.youtube.com/embed/mUxCXCs_mR8",
    thumbnail: "../images/hq720-63.jpg",
    category_id: 6,
  },
  {
    description: "Naked Mole Rat Live Stream at Liberty Science Center",
    path: "https://www.youtube.com/embed/9H8wbDbijRw",
    thumbnail: "../images/hq720-64.jpg",
    category_id: 7,
  },
  {
    description: "Shark Lagoon Cam",
    path: "https://www.youtube.com/embed/LvfaMv9nbJc",
    thumbnail: "../images/hqdefault-13.jpg",
    category_id: 7,
  },
  {
    description: "Live Shark Cam - Monterey Bay Aquarium",
    path: "https://www.youtube.com/embed/K279u4daI-k",
    thumbnail: "../images/hq720-65.jpg",
    category_id: 7,
  },
  {
    description: "SNAKES! at the San Diego Zoo",
    path: "https://www.youtube.com/embed/PD7tfcyn7DY",
    thumbnail: "../images/hq720-66.jpg",
    category_id: 7,
  },
  {
    description: "Lyle the Nile Crocodile LIVE",
    path: "https://www.youtube.com/embed/gb99Y3cjw1c",
    thumbnail: "../images/hq720-67.jpg",
    category_id: 7,
  },
  {
    description: "Snake Live Cam",
    path: "https://www.youtube.com/embed/cIuKRPvO7Y0",
    thumbnail: "../images/hqdefault-14.jpg",
    category_id: 7,
  },
  {
    description: "SNAKES! at the San Diego Zoo",
    path: "https://www.youtube.com/embed/PD7tfcyn7DY",
    thumbnail: "../images/hq720-68.jpg",
    category_id: 7,
  },
  {
    description: "Spider Web Live Cam",
    path: "https://www.youtube.com/embed/x-ncA6q_Cbw",
    thumbnail: "../images/hq720-69.jpg",
    category_id: 7,
  },
  {
    description: "Blue Cavern",
    path: "https://www.youtube.com/embed/ogMTmdbYaPs",
    thumbnail: "../images/hq720-70.jpg",
    category_id: 7,
  },
];

const seedVideos = () => Video.bulkCreate(mediadata, { individualHooks: true });

module.exports = seedVideos;
