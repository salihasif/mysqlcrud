const express = require('express');
const route = express.Router()
const db = require('./connection');
//get all items
route.get("/books",(req,res)=>{
    let q = "SELECT * FROM books"
    db.query(q,(err, data)=>{
        if(err) return res.send(err)
        return res.send(data)
    })
})
//get by id
route.get('/books/:id',(req,res)=>{
    let q = "SELECT * FROM books WHERE id=" + req.params.id;
    db.query(q,(err, data)=>{
        if(err) return res.send(err)
        return res.send(data)
    })
})
//add to database
 route.post('/books',(req,res)=>{
    
    const q = "INSERT INTO books VALUES (?)";
    const info = [req.body.id, req.body.title, req.body.description, req.body.cover,];
    db.query(q,[info],(err, data)=>{
        if(err) return res.send(err)
        return res.send("data entered successfully")
    })
})

//update by id
route.put('/books/:id',(req, res) => {
    let q = "UPDATE books SET title='"+req.body.title+"', description='"+req.body.description+"', cover='"+req.body.cover+"' WHERE id="+req.params.id
    
    db.query(q,(err, data)=>{
        if(err) return res.send(err)
        return res.send("data updated successfully")
    });
  });

//delete by id  
route.delete('/books/:id',(req, res) => {
    let q= "DELETE FROM books WHERE id="+req.params.id+"";
      
    db.query(q,(err, data)=>{
        if(err) return res.send(err)
        return res.send(data)
    });
  });

  //export route
module.exports = route
      