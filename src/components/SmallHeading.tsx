const SmallHeading = (props: { text: string }) => {
    return (
        <div className="text-lightgreen text-xl underline">
            {props.text}
        </div>
    );
};

export default SmallHeading
