class Products {
    constructor(
        id, 
        categoryId, 
        title, 
        vendor, 
        vendorPermitNumber, 
        image, 
        price, 
        dateTime, 
        active, 
        description) {
            this.id = id;
            this.categoryId = categoryId;
            this.title = title;
            this.vendor = vendor;
            this.vendorPermitNumber = vendorPermitNumber;
            this.image = image;
            this.price = price;
            this.dateTime = dateTime;
            this.active = active;
            this.description = description;
    }
}

export default Products;