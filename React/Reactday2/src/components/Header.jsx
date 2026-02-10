
function Header() {
  return (
    <header style={styles.header} className="header">
      {/* Logo Left */}
      <div style={styles.logo}>Aakash</div>

      {/* Navbar Right */}
      <nav style={{ marginRight: "50px" }}>
        <ul style={styles.navList}>
          <li className="nav-item">Home</li>
          <li className="nav-item">Project</li>
          <li className="nav-item">About Me</li>
          <li className="nav-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 20px",
  backgroundColor: "#222",
  color: "white",
},

  logo: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  navList: {
    display: "flex",
    listStyle: "none",
    gap: "20px",
    fontSize: "18px",
    cursor: "pointer",
  },
};

export default Header;
