const jwt = require("jsonwebtoken");
const zod = require("zod");

const jwtPassword = "secret";

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password) {
  const usernameCheck = emailSchema.safeParse(username);
  const passwordCheck = passwordSchema.safeParse(password);

  if (!usernameCheck || !passwordCheck) {
    return null;
  }

  const signature = jwt.sign(
    {
      username,
    },
    jwtPassword
  );

  return signature;
}

function verifyJwt(token) {
  try {
    jwt.verify(token, jwtPassword);
    return true;
  } catch (e) {
    return false;
  }
}
function decodeJwt(token) {
  const decoded = jwt.decode(token);
  return decoded ? true : false;
}
