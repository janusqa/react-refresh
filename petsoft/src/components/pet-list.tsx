import Image from 'next/image';

export default function PetList({ pets }) {
    return (
        <ul className="bg-white border-b border-black/8">
            {pets.map((pet) => (
                <li key={pet.id}>
                    <button className="flex flex-row items-center h-17.5 w-full px-5 text-base gap-3 hover:bg-[#EFF1F1] focus:bg-[#EFF1F1] transition">
                        <Image
                            src={pet.imageUrl}
                            alt="Pet image"
                            width={45}
                            height={45}
                            className="rounded-full object-cover w-11.25 h-11.25"
                        />
                        <p className="font-semibold">{pet.name}</p>
                    </button>
                </li>
            ))}
        </ul>
    );
}
