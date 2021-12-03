import { useState } from "react";

const HideText = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Скрыть текст</button>
      {visible && (
        <div>
          <p> Text какой-то</p>
        </div>
      )}
    </div>
  );
};

export default HideText;
