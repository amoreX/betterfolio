export default function ImageSection() {
    return (
        <div className="bg-[#1e1e1e] rounded-xl flex items-center justify-center overflow-hidden">
            <img
                src="/your-image.jpg"
                alt="DJ Portrait"
                className="w-full h-full object-cover rounded-xl"
            />
        </div>
    );
}
