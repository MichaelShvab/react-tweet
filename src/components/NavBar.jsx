export default function NavBar() {
  return (
    <>
      <div className="navBar mb-5 pb-3">
        <div>
          <a href="/" className="navBar ms-3">
            Home
          </a>
        </div>
        <div>
          <a href="/profile" className="navBar ms-4">
            Profile
          </a>
        </div>
        <div>
          <a href="/sign-up" className="navBar ms-4">
            Sign-up
          </a>
        </div>
        <div>
          <a href="/sign-in" className="navBar ms-4">
            Sign-in
          </a>
        </div>
      </div>
    </>
  );
}
