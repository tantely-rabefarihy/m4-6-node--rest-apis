# Cafe API Architecture Doc

## Details

There's a corner cafe that wants your help to propel itself into the digital age... The owner, Greg, has read extensively and is anxious to get started, but lacks the technical chops to get his digital transformation off the ground. He _knows_ that big data is the way to go. He is planning on tracking _everything_ in his cafe.

He needs a RESTful API to serve all of the data that he'll have and gather more! And he's asked a couple of future developers to architect this API for him. He wants to track _everything_ from the stock, the customers, the seating in the cafe.

Provide him with a series of REST endpoints that meet all, or most of the RESTful principles that you've just heard about! Your feedback will dictate how the database will eventually be built... no pressure.

Write out each endpoint, its method, and brief description of what it should do.

| endpoint | method | Description            |
| -------- | ------ | ---------------------- |
| `/test`  | `GET`  | It is a test endpoint. |

_This activity is more about the discussion in how to best organize data endpoints. There will not be any coding._

## Your Answer

endpoint : `/orders`
method : `POST`
Description : send to the server each customer's order.

---

endpoint : `/orders`
method : `GET`
Description : display the lists of all orders.

---

endpoint : `/orders/orderID`
method : `PUT`
Description : close a table when customers paid their bills.

---

endpoint : `/orders/orderID`
method : `PATCH`
Description : update an order at a table.

---

endpoint : `/stocks/product`
method : `PATCH`
Description : update the level of stock for a specific product.

---

endpoint : `/stocks`
method : `POST`
Description : add a new item to the inventory.

---

endpoint : `/stocks/product`
method : `PUT`
Description : remove an item from the inventory.

---

endpoint : `/seats`
method : `PATCH`
Description : update the seating configuration depending on number of customers.

---

endpoint : `/seats/id`
method : `DELETE`
Description : remove a seat configuration.

---
