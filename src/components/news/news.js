import axios from "../axios/axios";

export const newsCategroy = {
  technology: "technology",
  business: "business",
  sport: "sport",
  entertainment: "entertainment",
  general: "general",
  health: "health",
  science: "science",
};

const pageMaxSize = 10;

async function hi() {
  try {
    const { data } = await axios.get("/?category=technoloty");
    console.log(data);
  } catch (e) {
    console.log(e, "hi error");
  }
}

hi();
