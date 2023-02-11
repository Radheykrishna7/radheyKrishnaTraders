const WhatsAppButton = () => {
  const handleClick = () => {
    window.open(`https://wa.me/7011735870`, "_blank");
  };

  return (
    <button
      style={{
        backgroundColor: "#25D366",
        color: "white",
        padding: "10px 20px",
        borderRadius: "10px",
        cursor: "pointer",
        transition: "background-color 0.2s ease-in-out",
      }}
      onClick={handleClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#1DAE46";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#25D366";
      }}
    >
      WhatsApp Me
    </button>
  );
};

export default WhatsAppButton;
