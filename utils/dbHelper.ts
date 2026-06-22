import { db } from '../config/db';

export async function executeQuery(query: string, params: any[] = []) {
  const [rows] = await db.execute(query, params);
  return rows;
}