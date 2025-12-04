import SQLite from "react-native-sqlite-storage";

SQLite.enablePromise(true);

export const connectDB = async () => {
  return SQLite.openDatabase({ name: "meals", location: "default" });
};

export const createMealsTable = async (db) => {
  try {
    console.log("Membuat table...");
    const query = `CREATE TABLE IF NOT EXISTS favmeals (
      id INTEGER,
      meal TEXT NOT NULL,
      category TEXT,
      area TEXT,
      instructions TEXT NOT NULL,
      thumbnail TEXT NOT NULL,
      ingredients TEXT NOT NULL
      )`;

    await db.executeSql(query);
    console.log("Table berhasil dibuat.");
  } catch (err) {
    throw new Error("Terjadi kesalahan saat membuat table: ", err);
  }
};

export const insertFavMeal = async (db, meal) => {
  try {
    console.log("Menambahkan data...");

    const instructions = meal.instructions.join(".");
    const ingredients = JSON.stringify(meal.ingredients);
    const readyMeal = {
      ...meal,
      ["instructions"]: instructions,
      ["ingredients"]: ingredients,
    };
    const query = `INSERT INTO favmeals (id, meal, category, area, instructions, thumbnail, ingredients) VALUES (?, ?, ?, ?, ?, ?, ?)`;

    await db.executeSql(query, Object.values(readyMeal));
    console.log("Data baru berhasil ditambahkan.");
  } catch (err) {
    throw new Error("Gagal menambahkan data: ", err);
  }
};

export const selectFavMeal = async (db) => {
  try {
    console.log("Mengambil data....");
    const meals = [];
    const query = "SELECT * FROM favmeals";
    const results = await db.executeSql(query);

    const rows = results[0].rows;
    for (let idx = 0; idx < rows.length; idx++) {
      meals.push(rows.item(idx));
    }
    console.log("Data berhasil diambil");

    return meals;
  } catch (err) {
    throw new Error("Gagal mengambil data: ", err);
  }
};

export const isMealFavorite = async (db, id) => {
  try {
    console.log("Mencari data dengan id = ", id);
    const query = "SELECT * FROM favmeals WHERE id = ?";
    const result = await db.executeSql(query, [id]);

    const row = result[0].rows;

    if (row.length === 0) {
      console.log(`Data dengan id = ${id} tidak ditemukan.`);
      return false;
    } else {
      console.log(`Data dengan id = ${id} ditemukan.`);
      return true;
    }
  } catch (error) {
    throw new Error(`Gagal menemukan data dengan id = ${id}: ${err}`);
  }
};

export const deleteFavMeal = async (db, id) => {
  try {
    console.log("Menghapus data dengan id = ", id);

    const query = "DELETE FROM favmeals WHERE id = ?";
    await db.executeSql(query, [id]);

    console.log(`Data dengan id = ${id} berhasil dihapus`);
  } catch (err) {
    throw new Error(`Gagal menghapus data dengan id = ${id}: ${err}`);
  }
};
