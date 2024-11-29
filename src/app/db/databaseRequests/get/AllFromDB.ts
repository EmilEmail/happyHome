import Database from 'better-sqlite3';
const db = new Database('../../database.db');
db.pragma('journal_mode = WAL');

export const getAllFromDB = async (
  tableName: string
): Promise<any[]> => {
  try {
    const sql = `
              SELECT * FROM ${tableName}
          `;

    const response = await db.prepare(sql).all();
    return response;
  } catch (error) {
    console.log(error);
    return [];
  }
};
