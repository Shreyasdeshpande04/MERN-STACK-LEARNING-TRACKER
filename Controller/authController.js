export const getLogin = (req, res) => {
  res.render("login", { loggedIn: req.session.loggedIn, error: null });
};

export const postLogin = (req, res) => {
  const { username, password } = req.body;
  if (username === "anc" && password === "123") {
    req.session.loggedIn = true;
    res.redirect("/homepage");
  } else {
    res.render("login", { error: "Invalid credentials", loggedIn: false });
  }
};

export const logoutUser = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.send("Logout Error");
    }
    res.redirect("/login");
  });
};
