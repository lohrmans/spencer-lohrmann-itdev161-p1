import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
	contact: {
		type: String,
		required: true
	},
	message: {
		type: String,
		required: true,
		unique: true
	}
});

const Message = mongoose.model('message', UserSchema);

export default Message;