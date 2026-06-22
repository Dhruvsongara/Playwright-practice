// import { test, expect } from '@playwright/test';
// import { executeQuery } from '../utils/dbHelper';

// test('Verify user exists in DB', async () => {

//   const users: any = await executeQuery(
//     'SELECT * FROM users WHERE email=?',
//     ['test@test.com']
//   );

//   expect(users.length).toBeGreaterThan(0);
// });

// import { test } from '@playwright/test';
// import { executeQuery } from '../utils/dbHelper';

// test('DB Connection Test', async () => {
//   const result = await executeQuery('SELECT 1 as test');
//   console.log(result);
// });

// import { test } from '@playwright/test';
// import { executeQuery } from '../utils/dbHelper';

// test('Read Users Table', async () => {
//   const users = await executeQuery('SELECT * FROM users');
//   console.log(users);
// });