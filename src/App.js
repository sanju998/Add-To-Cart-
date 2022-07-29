import "./App.css";
import CardComponet from "./components/CardComponet";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import IceCream from "./assets/images/IceCream.svg";
import IceCream2 from "./assets/images/IceCream2.svg";
import IceCreamCone from "./assets/images/IceCreamCone.svg";
import Chart from "./components/Chart";

const CardData = [
  {
    id: 1,
    img: ` ${IceCream} `,
    title: "Ice Cream",
    currency: "$",
    price: "100",
    texts: "Easy to enjoy, easy to prepare. Healthy as could be.",
  },
  {
    id: 2,
    img: ` ${IceCream2} `,
    title: "Ice Cream 2",
    currency: "$",
    price: "100",
    texts: "Easy to enjoy, easy to prepare. Healthy as could be.",
  },
  {
    id: 3,
    img: ` ${IceCreamCone} `,
    title: "Ice Cream Cone",
    currency: "$",
    price: "100",
    texts: "Easy to enjoy, easy to prepare. Healthy as could be.",
  },
];

function App() {
  return (
    <>
      <div className="main-div">
        <Header />
        <Container className="py-5">
          <Row className="justify-content-between">
            <Col xs={12} xl={8} className="order-2 order-xl-1">
              <Row>
                {CardData.map((data) => {
                  return (
                    <Col xs={12} lg={6} xl={4} className="mt-4 mt-xl-0">
                      <CardComponet
                        img={data.img}
                        title={data.title}
                        texts={data.texts}
                        currency={data.currency}
                        price={data.price}
                      />
                    </Col>
                  );
                })}
              </Row>
            </Col>
            <Col xs={12} xl={3} className="order-1">
              <Chart />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
