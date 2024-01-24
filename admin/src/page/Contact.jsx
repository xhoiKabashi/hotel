import { useState } from "react";

const HeaderImageSwitch = () => {
  const [alignment, setAlignment] = useState("left"); // 'left' or 'right'

  const handleSwitchChange = () => {
    setAlignment((prevAlignment) =>
      prevAlignment === "left" ? "right" : "left"
    );
  };

  return (
    <div>
      <label>
        Align Header:
        <input
          type="checkbox"
          checked={alignment === "right"}
          onChange={handleSwitchChange}
        />
      </label>

      {/* Example usage of the selected alignment */}
      <div
        style={{
          display: "flex",
          flexDirection: alignment === "left" ? "row" : "row-reverse",
        }}
      >
        <div style={{ flex: 1 }}>
          {/* Your header component here */}
          <h1>Your Header</h1>
        </div>
        <div style={{ flex: 1 }}>
          {/* Your image component here */}
          <img src="your-image-url" alt="Your Image" />
        </div>
      </div>
    </div>
  );
};

export default HeaderImageSwitch;
