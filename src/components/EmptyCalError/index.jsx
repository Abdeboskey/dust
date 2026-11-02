import HomeCopy from "../Copy/Home";

const EmptyCalError = () => {
    return (
        <div className="text-center">
            <p className="text-2xl md:text-5xl m-8">Please check back soon for upcoming meetups!</p>
            <p>Meanwhile...</p>
            <HomeCopy />
        </div>
    );
}

export default EmptyCalError;
