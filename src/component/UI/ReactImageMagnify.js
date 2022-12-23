import ReactImageMagnify from "react-image-magnify";

const ReactMagnify = (props) => {
  return (
    <div >
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: props.alt,
            isFluidWidth: true,
            src: props.src,
          },
          largeImage: {
            src: props.src,
            width: 1200,
            height: 1800,
          },
        }}
      />
    </div>
  );
};


export default ReactMagnify;