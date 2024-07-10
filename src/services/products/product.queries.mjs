export const listProductsQuery = () => {
    return [
        { $lookup: { from: "categories", localField: "Category", foreignField: "_id", as: "_category" } },
        { $lookup: { from: "brand", localField: "Brand", foreignField: "_id", as: "_brand" } }
    ]
}

export const listProductByCategoryQuery = (category) => [
    { $match: { _id: ObjectId(category) } },
    {
        $lookup: { from: "products", localField: "_id", foreignField: "Category", as: "_products" }
    },
    {
        $lookup: { from: "brands", localField: "_id", foreignField: "Brand", as: "_brands" }
    },
    {
        $project: {
            "_id": 0,
            "Category": 1,
            "_products.Name": 1,
            "_products.Price": 1,
            "_products.Quantity": 1,
            "_products.Description": 1,
            "_products.Discount": 1,
            "_products.Reviews": 1,
            "_brands.Name": 1
        }
    }
]