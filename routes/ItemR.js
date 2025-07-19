// routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const MenuItem = require('../models/Item');

// POST - Add new menu item
router.post('/', async (req, res) => {
  try {
    const newItem = new MenuItem(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET - All menu items
router.get('/', async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET - Menu items by category type
router.get('/:type', async (req, res) => {
  const type = req.params.type;
  try {
    const items = await MenuItem.find({ category: type });
    if (items.length === 0) {
      return res.status(404).json({ message: `No items found for type: ${type}` });
    }
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id',async(req,res)=>{
  try{
       const itemId = req.params.id;
       const updatedData = req.body;

       const response = await MenuItem.findByIdAndUpdate(itemId,updatedData,{
        new: true,
        runValidators : true,
       })

       if(!response){
        res.status(404).json({error : 'item not found'})
       }

       console.log('data updated')
       res.status(200).json(response)
  }
  catch(err){
     res.status(500).json({ error: error.message });
  }
})
router.delete('/:id', async (req,res)=>{
 try{
       const itemId = req.params.id;
       

       const response = await MenuItem.findByIdAndDelete(itemId)

       if(!response){
        res.status(404).json({error : 'item not found'})
       }

       console.log('data deleted')
       res.status(200).json({message:'deleted successfully'})
  }
  catch(err){
     res.status(500).json({ error: error.message });
  }
})


module.exports = router;
