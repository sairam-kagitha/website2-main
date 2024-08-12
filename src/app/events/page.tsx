import GradualSpacing from "@/components/magicui/gradual-spacing";

const Events = () => {
    return (
        <div className="py-28">
            <GradualSpacing
                className="font-display text-center text-4xl font-bold tracking-[-0.1em]  text-black dark:text-white md:text-7xl md:leading-[5rem]"
                text="Events"
            />

            <section>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
                            <h2 className="text-2xl font-bold text-black dark:text-white">
                                Event 1
                            </h2>
                            <p className="mt-4 text-gray-600 dark:text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
                                purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit
                                dui. Nullam vel erat et nunc viverra pellentesque. Cras sit amet
                                nunc non felis convallis suscipit.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
                            <h2 className="text-2xl font-bold text-black dark:text-white">
                                Event 2
                            </h2>
                            <p className="mt-4 text-gray-600 dark:text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
                                purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit
                                dui. Nullam vel erat et nunc viverra pellentesque. Cras sit amet
                                nunc non felis convallis suscipit.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
                            <h2 className="text-2xl font-bold text-black dark:text-white">
                                Event 3
                            </h2>
                            <p className="mt-4 text-gray-600 dark:text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
                                purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit
                                dui. Nullam vel erat et nunc viverra pellentesque. Cras sit amet
                                nunc non felis convallis suscipit.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Events;
