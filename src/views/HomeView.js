import {Link} from "react-router-dom";
import {collection, getDocs} from "firebase/firestore";
import {useState, useEffect} from "react";
import Layout from "../components/Layout";
import db from "../lib/db";

const HomeView = () => {
    // 只要state被改變，畫面就會被重新渲染
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        // 此流程會在畫面渲染後被執行
        // 相當於conpontWillMount
        fetchProductList();
    }, []);
    // 陣列內的資料若有被更新才有side effect


    const fetchProductList = async () => {
        console.log("=======準備去後端撈取資料=======");
        const productDocList = await getDocs(collection(db, "productList"));
        const newProductList = [];
        productDocList.forEach(doc => {
            const product = doc.data();
            product.id = doc.id;
            newProductList.push(product);
        });
        console.log(newProductList);
        setProductList(newProductList);
        console.log("=======撈取資料完畢=======");
    };


    const productListElement = productList.map(product => {
        return (
            <div className="col-md-4" key={product.id}>
                <div className="card">
                    <div className="card-body">
                        <h5>{product.name}</h5>
                        <p>$ {product.price}</p>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <Layout title="Product List">
            <h1>Home View</h1>
            <Link to="/about" className="btn btn-primary">Go About page</Link>
            <div className="container">
                <div className="row">
                    {productListElement}
                </div>
            </div>
        </Layout>
    )
}

export default HomeView;