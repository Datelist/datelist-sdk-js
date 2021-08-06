# datelist-sdk-js

SDK for developing using https://datelist.io API in JS

For more information about our API, please read https://apidoc.datelist.io 

## Usage 

```js
// Get a client instance using your API Key 
var Datelist = require("./index");
let client = Datelist.client("WGQqyEjfXLtK74K5YuxrHn7v");

// You can now use the client to retrieve or edit data from Datelist
let calendars = await client.list_calendars(); 
let products = await client.list_products({ calendar_id: 441, name: "Table" }); 
let slots = 
await client.list_booked_slots({
  email: "test@test.com",
  calendar_id: 441,
  from: "2021-08-04T04:51:59.945Z",
  to: "2021-08-30T04:51:59.945Z",
})
; 

console.log(calendars); 
console.log(products); 
console.log(slots); 

console.log(await client.update_booked_slot(slots[0].id, {email: 'test2@test.com'})); 
console.log(await client.update_booked_slot(slots[0].id, {email: 'test@test.com'})); 
```