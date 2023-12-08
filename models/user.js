import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  email: {
    type: string,
    unique: [true, 'email already exist'],
    unique: [true, 'email is required'],
  },
  userName: {
    type: string,
    required: [true, 'Username is required!'],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      'Username invalid, it should contain 8-20 alphanumeric letters and be unique!',
    ],
  },
  image: {
    type: string,
  }
});

const user = models.user || model("user", userSchema);
export default user;
