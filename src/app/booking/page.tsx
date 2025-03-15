import DateReserve from "@/components/DateReserve";

export default function Reservations () {
    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-medium">Venue Booking</div>

            <div className="w-fix space-y-2">
                <DateReserve/>
            </div>

            <button name="Book Venue" className="Block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white showdow-sm">
                Book Venue
            </button>
        </main>
    );
}