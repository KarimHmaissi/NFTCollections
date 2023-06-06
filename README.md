## Notes

### Exercise 1 

`/collections/collectionId page`

- The solution **will not work** out the box due to CORS. Due to a missing `Access-Control-Allow-Origin` header on the endpoints response the browser CORS policy will prevent the API requests. I got around this locally by turning off CORS in the browser
- For state management I used [React Query](https://tanstack.com/query/latest/docs/react/overview). In order to prevent unnecessary rerenders and optimize performance I take advantage of [Structural sharing ](https://tkdodo.eu/blog/react-query-render-optimizations#structural-sharing) and react query selectors to target specific parts of the data in components 
- For architecture I built a separate services layer with MSW mocks and custom query hooks with React Query
- For styling I used css modules and [Material UI](https://mui.com/)


### Exercise 1 

`/collection page`

- The second solution is built on a `/collection` page with a hardcoded collection object
- On mobile the content drops underneath the image