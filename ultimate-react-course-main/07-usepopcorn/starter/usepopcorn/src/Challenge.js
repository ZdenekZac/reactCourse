
import { useState } from "react";

export default function App() {
  return (
    <div>
      <TextExpander
        expandButtonText="Show More"
        collapseButtonText="hide text"
        buttonColor="blue"
        className="box"
      >
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={5}
        expandButtonText="show text"
        collapseButtonText="collapse text"
        buttonColor="#ff6622"
        className="box"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander
        expanded={true}
        className="box"
        expandButtonText="show text"
        collapseButtonText="show less"
        buttonColor="blue"
      >
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  children,
  collapsedNumWords = 10,
  expandButtonText,
  collapseButtonText,
  buttonColor,
  expanded,
  className,
}) {
  const [isExp, setIsExp] = useState(expanded);
  const btnStyle = {
    border: "none",
    backgroundColor: "none",
    color: `${buttonColor}`,
    cursor: "pointer",
    marginLeft: "5px",
  };
  const displayText = isExp
    ? children
    : children.split(" ", collapsedNumWords).join(" ");

  return (
    <div className={className}>
      <span>{displayText}</span>
      <button style={btnStyle} onClick={() => setIsExp((isExp) => !isExp)}>
        {isExp ? `...${collapseButtonText}` : `...${expandButtonText}`}
      </button>
    </div>
  );
}
