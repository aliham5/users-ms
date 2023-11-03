export default function makeInputObjectFactory({ md5, sanitize }) {
  return Object.freeze({ inputObj })
  let localErrorMsgs = {};
  function inputObj({ params, errorMsgs }){
    const {
      username,
      password,
      email,
      role,
      created = Date.now(),
      modified = Date.now()
    } = params;

    return Object.freeze({
      // username: () => checkUsername({ username, errorMsgs }),
      // password: () => checkPassword({ password, errorMsgs }),
      // email: () => checkEmail({ email, errorMsgs }),
      // role: () => checkRole({ role }),
      // usernameHash: () => hash({ param: username }),
      // emailHash: () => hash({ param: email }),
      // usernamePasswordHash: () => hash({ param: username + password }),
      created: () => created,
      modified: () => modified
    })
  }
}
