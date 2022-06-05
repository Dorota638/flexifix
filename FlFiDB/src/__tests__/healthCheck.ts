import { gql } from 'apollo-server-express';

it('Runs a health check of schema', async () => {
  let result = await server2.executeOperation({
    query: gql`
      query {
        test(bool: false)
      }
    `,
  });
  expect(result).toBeTruthy();
  expect(result).toHaveProperty('data');
  // expect(result.errors).toBeFalsy();
  // expect(result.data?.test).toEqual(false);

  result = await server2.executeOperation({
    query: gql`
      query {
        test(bool: invalidArgument)
      }
    `,
  });
  expect(result).toBeTruthy();
  expect(result).toHaveProperty('data');
  expect(result.errors).toBeTruthy();
  // expect(result.data?.test).toEqual(false);
});

// it("validate user input", async ()=>{
//   const result = await server2.executeOperation({
//     query: gql`
//     mutation {

//     }
//   `,
//   })
// })
