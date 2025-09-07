import React from 'react'

const FilterSection = () => {
    return (
        <div>
            <aside className="w-full border rounded-lg p-4 bg-white shadow-sm">
                {/* Star rating */}
                <div className="mb-6">
                    <h3 className="font-semibold mb-2">Star rating</h3>
                    <div className="flex flex-col gap-2 text-sm">
                        {[ 5, 4, 3, 2, 1 ].map((star) => (
                            <label key={star} className="flex items-center gap-2">
                                <input type="checkbox" className="accent-blue-600" />
                                {star} stars
                            </label>
                        ))}
                    </div>
                </div>

                {/* Review score */}
                <div>
                    <h3 className="font-semibold mb-2">Review score</h3>
                    <div className="flex flex-col gap-2 text-sm">
                        {[
                            "Exceptional 9+",
                            "Very good 8+",
                            "Good 7+",
                            "Pleasant 6+",
                        ].map((score, i) => (
                            <label key={i} className="flex items-center gap-2">
                                <input type="checkbox" className="accent-blue-600" />
                                {score}
                            </label>
                        ))}
                    </div>
                </div>
            </aside>

        </div>
    )
}

export default FilterSection
