import { useState } from "react";
import "./chall.css";

export default function Challenge() {
  return (
    <div>
      <TextExpander
        bgColor="green"
        buttonColor="green"
        expanded={false}
        collapsedNumWords={4}
        collapseButtonText="show less"
        expandButtonText="show more">
        Space travel is the ultimate adventure! Imagine soaring past the stars and exploring new worlds. It's the stuff
        of dreams and science fiction, but believe it or not, space travel is a real thing. Humans and robots are
        constantly venturing out into the cosmos to uncover its secrets and push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        bgColor="orange"
        collapsedNumWords={2}
        expandButtonText="Show text"
        collapseButtonText="collapse text"
        buttonColor="#ff6622"
        expanded={false}>
        Space travel requires some seriously amazing technology and collaboration between countries, private companies,
        and international space organizations. And while it's not always easy (or cheap), the results are out of this
        world. Think about the first time humans stepped foot on the moon or when rovers were sent to roam around on
        Mars.
      </TextExpander>

      <TextExpander
        exp={true}
        className="box"
        bgColor="lightblue"
        buttonColor="blue"
        collapseButtonText="collapse text"
        expandButtonText="show text"
        collapsedNumWords={4}>
        Space missions have given us incredible insights into our universe and have inspired future generations to keep
        reaching for the stars. Space travel is a pretty cool thing to think about. Who knows what we'll discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  children,
  collapsedNumWords,
  bgColor,
  expanded,
  expandButtonText,
  collapseButtonText,
  buttonColor,
}) {
  const [exp, setExp] = useState(false);
  const textExpStyles = {
    backgroundColor: `${bgColor}`,
  };
  return (
    <>
      <p style={textExpStyles}>{exp ? children : children.split(" ", collapsedNumWords).join(" ")}</p>
      <Button
        expandButtonText={expandButtonText}
        collapseButtonText={collapseButtonText}
        buttonColor={buttonColor}
        onExpanded={() => setExp(!exp)}>
        ...{exp ? collapseButtonText : expandButtonText}
      </Button>
    </>
  );
}

function Button({ buttonColor, children, onExpanded }) {
  const styles = {
    color: `${buttonColor}`,
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
  };
  return (
    <button style={styles} onClick={onExpanded}>
      {children}
    </button>
  );
}
