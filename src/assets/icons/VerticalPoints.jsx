const VeritalPoints = ({ ...props }) => {
    return (
        <svg
            {...props}
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g>
                <path
                    d="M16,10c1.7,0,3-1.3,3-3s-1.3-3-3-3s-3,1.3-3,3S14.3,10,16,10z"
                    fill="currentColor"
                />
                <path
                    d="M16,13c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S17.7,13,16,13z"
                    fill="currentColor"
                />
                <path
                    d="M16,22c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S17.7,22,16,22z"
                    fill="currentColor"
                />
            </g>
        </svg>

    );
};

export default VeritalPoints;