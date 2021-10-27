const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('joi');
const { string } = require('joi');

const placeSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    lat:{
        type:Number,
        required: true
    },
    lng:{
        type:Number,
        required: true
    },
    basicInfo: {
        type:String,
        required: true
    },
    user:{
        type: Schema.Types.ObjectId,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    location: {
        type: {
          type: String, 
          enum: ['Point'],
          required: true
        },
        coordinates: {
          type: [Number],
          index: '2dsphere'
        }
    }
})

const validateSpace = (placeData) => {

    const schema = Joi.object({
        name: Joi.string().required(),
        category: Joi.string().required(),
        lat: Joi.number().required(),
        lng: Joi.number().required(),
        basicInfo: Joi.string().required(),
        location: Joi.object().required()
    })
    return schema.validate(placeData)
}

const Place = mongoose.model("place", placeSchema)

module.exports = {Place, validateSpace}