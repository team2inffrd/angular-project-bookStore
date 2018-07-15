const express = require('express');
const router = express.Router();
const Product = require('../models/product')
const mongoose = require('mongoose') 

// add data to database
console.log("in hqs js")
router.post('/', (req, res, next) => {
    console.log("qqqq");
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        userName: req.body.userName,
        password: req.body.password
    });
    product.save().then(result => {
        res.status(201).json({
        message: "handling post methods",
        product: product,
        result: "updated record in db "+result
    });
    }).catch(err => {
        console.log("error in updating the record in db: "+err)
        res.status(500).json({
            message: "handling post methods",
            err: err,
            result: "error in updating the record in db: "+err
        });
    });
});


router.get('/:userName', (req, res, next) => {
    const userName = req.params.userName;
    Product.find({ 'userName': userName})
    .select('_id userName password')
    .exec()
    .then(doc =>{
        console.log("doc is "+doc)
        if(doc) {
            res.status(200).json({
                message: "handling get method",
                record: doc,
                result: "Received record from db "+doc,
            });
        } else {
            res.status(404).json({
                message: "handling get method",
                record: doc,
                result: "No valid record found"
            }); 
        }
    }).catch(err => {
        res.status(500).json({
            message: "handling get method",
            err: err,
            result: "Failed to Receive record from db "+err
        });
    });
});

// router.get('/', (req, res, next) => {
//     const regNo = req.params.regNo;
//     Product.find()
//     .select('_id userName password')
//     .exec()
//     .then(docs =>{
//         if(docs) {
//             res.status(200).json({
//                 records: docs.map( doc => {
//                     return {
//                         _id:doc._id,
//                         uName:doc.regNo,
//                         pass:doc.password,
//                         meta: {
//                             methodType: 'Get',
//                             url: 'http://localhost:3000/hqs/' + doc.uName,
//                             dbType: 'Mongo cloud'
//                         }
//                     }
//                 }
//                 ),
//                 result: "Received record from db",
//                 noOfRecords: docs.length,
//             });
//         } else {
//             res.status(404).json({
//                 methodType: 'Get',
//                 record: docs,
//                 result: "No valid record found"
//             }); 
//         }
//     }).catch(err => {
//         res.status(500).json({
//             methodType: 'Get',
//             err: err,
//             result: "Failed to Receive record from db "+err
//         });
//     });
// });

// router.delete('/:regNo', (req, res, next) => {
//     const regNo = req.params.regNo;
//     Product.findOneAndRemove({ 'regNo': regNo})
//     .exec()
//     .then(result => {
//         res.status(200).json({
//             message: "handling delete method",
//             result:result
//         });
//     })
//     .catch(err => {
//         res.status(500).json({
//             message: "handling delete method",
//             result : "Failed to delete record "+err
//         })
//     })
// });
// router.patch('/:regNo', (req, res, next) => {
//     const regNo = req.params.regNo;
//     const updateOps = {};
//     for(const ops of req.body) {
//         updateOps[ops.name] = ops.value
//     }
//     Product.findOneAndUpdate({regNo: regNo},{$set: updateOps})
//     .exec()
//     .then(result => {
//         res.status(200).json({
//             message: "handling patch method",
//             result:"Record got updated"+result
//         });
//     })
//     .catch(err => {
//         res.status(500).json({
//             message: "handling patch method",
//             result : "Failed to update the record "+err
//         })
//     })
// });
module.exports = router;