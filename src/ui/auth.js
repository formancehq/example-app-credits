function getUserId() {
  if (!localStorage["userId"]) {
    localStorage["userId"] = Math.random().toString().slice(2, 10);
  }

  return localStorage["userId"];
}

export {
  getUserId,
}