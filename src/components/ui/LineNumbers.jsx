
export default function LineNumbers({ count = 40 }) {
    const lines = Array.from({ length: count }, (_, i) => i + 1);

    return (
        <div className="text-right w-12 text-gray-500  pr-4 pt-6 select-none bg-[#252526] border-r border-[#3c3c3c]">
            {lines.map((number) => (
                <div key={number}>{number}</div>
            ))}
        </div>
    );
}
