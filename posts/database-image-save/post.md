# How to store images on a database

Ususally when you are making the requirement analysis of a project, you usually get to a point where **storing images** related to some _entity/relation_ is important (like a **profile image** for every user, a **signature image** for every contract, and so on).

I think the solution needs first to think about **space vs velocity**.

- Is it _okay_ if the image takes _2 seconds_ to load?
- Do I need _hundreds_ of images in a few milliseconds?

Images are **heavy**, and storing them on a database where space is limited is more than **twice as heavy**. So... How do you **store** them?

If the velocity isn't cirtical _(very, very critical)_ you should store them on the **server** instead, protect them and store on the database **the link** to the image or _name the image as the resource's id_.

```sql
CREATE TABLE user(
  id INT PRIMARY KEY,
  userName VARCHAR(16) UNIQUE NOT NULL,
  displayName VARCHAR(20) NOT NULL,
  profilePicture VARCHAR(250) UNIQUE,
  email VARCHAR(100) UNIQUE NOT NULL
);
```
