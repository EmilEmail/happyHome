import Database from 'better-sqlite3';
const db = new Database('../../database.db');
db.pragma('journal_mode = WAL');

export const countItemsInCategory = async (
  tableName: string,
  category: string
) => {
  try {
    const sql = `
              SELECT * FROM ${tableName}
              WHERE category = ?
          `;

    const response = await db.prepare(sql).all(category);
    if (response) {
      return response.length;
    } else {
      return 0;
    }
  } catch (error) {
    console.log(error);
    return 0;
  }
};
