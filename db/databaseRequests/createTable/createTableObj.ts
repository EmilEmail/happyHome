import { validateTableInsert } from '../post/utils/validateTableInsert';
import Database from 'better-sqlite3';

const db = new Database('../../database.db');
db.pragma('journal_mode = WAL');

export interface ItemProperties {
  property: string;
  value: string | number;
}

export const createTableObj = async (
  tableName: string,
  itemProperties: ItemProperties[]
) => {
  const sql = `
        INSERT INTO ${tableName} (${itemProperties.map(
    (property) => property.property
  )})
        VALUES
        (${itemProperties.map(() => '?')});
    `;

  const isValid = await validateTableInsert(
    tableName,
    itemProperties
  );
  if (!isValid) {
  }
  const tablePropertiesInsert = itemProperties.map(
    (property) => property.value
  );

  db.prepare(sql).run(...tablePropertiesInsert);
};
