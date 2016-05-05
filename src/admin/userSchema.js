/**
 * 
 * Created by GGGin on 2016/5/5.
 */

var mongoose = require('mongoose');

var BuyInfo = new mongoose.Schema({
    buyTime: {type: Number, default:Date.now},
    buyDays: {type:Number,required:true},
    buyMoney: {type:Number,required:true},
    buyMoneyType: {type:String, default:'RMB'},
    buyWay: {type:String, default:"weixin"}
});

var UserSchema = new mongoose.Schema(
    {
        name: {type:String,unique:true},
        password: {type:String,require:true},
        salt: {type:String,required:true},
        mobile: {type:String},
        registerTime: {type: Number, default: Date.now},
        email: {type:String,unique:true,required:true},
        buyList: [BuyInfo],
        role:{type:String,default:'user'},
        extras:{type:String,default:'{}'}
    }
);

module.exports = {
    UserSchema : UserSchema
};
