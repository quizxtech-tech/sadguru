import { ProductDT } from "@/types/product.d-t";
import Image from "next/image";
import Link from "next/link";

// Reusable Product Card Component
const SingleProductCard = ({ product }: { product: ProductDT }) => {
    return (
        <>
            <div className="tp-product-item mb-30">
                <div className="tp-product-item-thumb">
                    <Link href="#" onClick={(e) => e.preventDefault()}>
                        <Image style={{ width: "100%", height: "320px", objectFit: "contain", backgroundColor: "#fff", padding: "20px" }} src={product.image} alt={product.alt} className="w-100" />
                    </Link>
                </div>
                <div className="tp-product-item-content d-flex justify-content-between align-content-center">
                    <h4 className="tp-product-item-title" style={{ width: "100%" }}>
                        <Link className="tp-line-black" href="#" onClick={(e) => e.preventDefault()}>
                            {product.title}
                        </Link>
                    </h4>
                </div>
            </div>
        </>

    );
};

export default SingleProductCard;