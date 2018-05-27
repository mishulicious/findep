const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MetaSchema = new Schema({
    name: String,
    image: String,
    date: String,
    initialQuantity: Number,
    category: String,
    quantity: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

module.exports = mongoose.model("Meta", MetaSchema);