export default function Maps() {
    return (
        <section className="flex flex-col px-6 py-[3rem] xl:mx-auto xl:w-full xl:max-w-screen-xl xl:p-0 xl:py-[3rem]">
            <div className="flex flex-col space-y-3">
                <div className="h-[600px] w-full rounded-xl bg-neutral-100">
                    <div className="flex h-full w-full items-center justify-center">
                        <p>google maps</p>
                    </div>
                </div>

                <div className="flex items-center space-x-3">
                    <div className="rounded-md bg-neutral-100 px-3 py-3">
                        <p className="font-semibold">Office</p>
                    </div>
                    <div className="rounded-md bg-neutral-100 px-3 py-3">
                        <p className="font-semibold">Workshop</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
